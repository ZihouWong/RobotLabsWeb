/**
 * Created by wongzihou on 5/1/17.
 */
var _ = require('lodash');
var _basicModel = require('./BasicModel');

_.merge(exports, _basicModel);

_.merge(exports, {
	//表头
	globalId: 'Activities',

	attributes: {

		//图片Id
		imgId: {
			type: 'integer',
			notNull: true,
			index: true
		},

		//标题
		title: {
			type: 'string',
			notNull: true,
			index: true
		},

		//日期
		date: {
			type: 'string',
			notNull: true,
			index: true
		},

		//图片简介
		imgProfile: {
			type: 'string'
		},

		//图片Url
		imgUrl: {
			type: 'string',
			notNull: true,
			index: true
		}

	}
});