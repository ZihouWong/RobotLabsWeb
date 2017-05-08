/**
 * Created by wongzihou on 5/1/17.
 */
var _ = require('lodash');
var _basicModel = require('./BasicModel');

_.merge(exports, _basicModel);

_.merge(exports, {

	//表头
	globalId:'Institution',

	attributes: {

		//机构简介(首页)
		notDetailed: {
			type: 'string',
			notNull: true,
			index: true
		},

		//机构详细介绍(子页)
		details: {
			type: 'string',
			notNull: true,
			index: true
		},

		//机构地址
		institutionLocation: {
			type: 'string',
			notNull: true,
			index: true
		},

		//地图链接
		mapUrl: {
			type: 'string',
			notNull: true,
			index: true
		}
	}

});