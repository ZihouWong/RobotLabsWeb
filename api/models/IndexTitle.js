/**
 * Created by wongzihou on 5/1/17.
 */
var _ = require('lodash');
var _basicModel = require('./BasicModel');

_.merge(exports, _basicModel);

_.merge(exports, {

	//表头
	globalId: 'IndexTitle',

	attributes: {

		//首页标题名字
		title: {
			type: 'string',
			notNull: true,
			index: true
		},

		//标题链接路径
		path: {
			type: 'string',
			notNull: true,
			index: true
		},

		//0 不显示 1 显示
		showTitle: {
			type: 'integer',
			notNull: true,
			index: true
		}
	}
});