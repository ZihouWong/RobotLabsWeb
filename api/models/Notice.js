/**
 * Created by wongzihou on 5/1/17.
 */
var _ = require('lodash');
var _basicModel = require('./BasicModel');

_.merge(exports, _basicModel);

_.merge(exports, {

	//表头
	globalId:'Notice',

	attributes: {

		//通知Id
		noticeId: {
			type: 'integer',
			notNull: true,
			index: true
		},

		//日期
		date: {
			type: 'string',
			notNull: true,
			index: true
		},

		//标题(首页)
		title: {
			type: 'string',
			notNull: true,
			index: true
		},

		//通知内容(子页)
		details: {
			type: 'string',
			notNull: true,
			index: true
		}

	}

});