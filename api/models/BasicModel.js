'use strict';

var Promise = require('bluebird');
var ObjectID = require("bson-objectid");
var moment = require('moment');

module.exports = {
	globalId: 'BasicModel',
	autoCreatedAt: true,
	autoUpdatedAt: true,
	scheme: true,
	autoPK: false,
	attributes: {
		id : {
			type: 'string',
			unique: true,
			size: 191,
			notNull: true,
			index:true,
			required: true,
			primaryKey: true,
			defaultsTo: function () {
				return ObjectID();
			}
		},
		delFlag: {type: 'boolean', defaultsTo: false},
		updatedAt: {
			type: 'datetime',
			notNull: true,
			index: true
		},
		createdAt: {
			type: 'datetime',
			notNull: true,
			index: true
		}
	},

	clientDataFormat: function (dataArray) {
		if (!_.isArray(dataArray)) return [];

		var retData = [];
		var self = this;
		_.map(dataArray, function(obj){
			retData.push(self.clientFormatWithObject(obj));
		});
		return retData;
	},

	clientFormatWithObject: function (obj){
		if (!_.isObject(obj)) return {};
		delete obj['id'];
		delete obj['delFlag'];
		delete obj['createdAt'];
		delete obj['updatedAt'];
		return obj;
	},

	commonFindQuery: function (criteria, options, cb) {
		criteria = criteria || {};
		// criteria.delFlag = false;
		var model = this.find();
		var modelCount = this.count();

		model.where(criteria);
		modelCount.where(criteria);


		model.where(criteria);

		if (options && options.limit) {
			model.limit(options.limit);
		}

		if (options && options.skip) {
			model.skip(options.skip);
		}

		if (options && options.sort) {
			model.sort(options.sort);
		}

		if (options && options.populate) {
			if (_.isString(options.populate) || _.isArray(options.populate)) {
				model.populate(options.populate);
			} else if (_.isObject(options.populate)) {
				_.map(Object.keys(options.populate), function (key) {
					sails.log(key);
					sails.log(options.populate[key]);
					model.populate(key, options.populate[key]);
				});

			}
		}

		var now = moment();
		var __count = function (cb) {
			modelCount.exec(function(err,ret){
				sails.log.verbose('# %s commonFindQuery count -> %sms',modelCount._context.adapter.identity,moment().diff(now));
				if (err) return cb(err);
				return cb(null,ret);
			})
		};
		var __data = function (cb) {
			model.exec(function(err,ret){
				sails.log.verbose('# %s commonFindQuery data -> %sms',modelCount._context.adapter.identity,moment().diff(now));
				if (err) return cb(err);
				return cb(null,ret);
			})
		};

		async.parallel([__count, __data], function (err, result) {
			if (err) return cb(err);
			var count = result[0];
			var dataArray = result[1];

			return cb(null, {count: count, dataArray: dataArray});
		});
	},

	commonQuery: function(content,cb){
		var query = content.query;
		var args = content.args;
		var queryAsync = Promise.promisify(this.query);
		queryAsync(query, args).then(function(ret){
			return cb(null,ret);
		},function(err){ return cb(err)})

	},

	updateOrCreate: function (criteria, values, cb) {
		var self = this; // reference for use by callbacks
		// If no values were specified, use criteria
		if (!values) values = criteria.where ? criteria.where : criteria;

		if (_.isEmpty(criteria)) {
			self.create(values, cb);
		} else {
			self.findOne(criteria, function (err, result) {
				if (err) return cb(err, false);

				if (result) {
					// sails.log.debug("[%s] update model",self);
					self.update(criteria, values, cb);
				} else {
					// sails.log.debug("[%s] create new model",self);
					self.create(values, cb);
				}
			});
		}
	},

	findModelIdFromObjectId: function (objectId, cb) {
		var self = this;
		if (!_.isString(objectId)) return cb(null, {});
		this.findOne({objectId: objectId}).exec(function (err, result) {
			if (err) return cb(err, {});
			if (result) {
				return cb(null, result);
			}
			return cb(null, {});
		});
	},

	getFromId: function(objectId,cb){
		if (!objectId) return cb(new Error('invalid objectId'));
		this.findOne(objectId).exec(function(err,obj){
			if (err) return cb(err);
			if (!obj || obj.delFlag) return cb(null,null);

			return cb(null,obj);
		})
	}
};
