/**
 * Created by wongzihou on 5/1/17.
 */
var _ = require('lodash');
var _basicModel = require('./BasicModel');

_.merge(exports, _basicModel);

_.merge(exports, {


	//表头
	globalId: 'Experiment',

	attributes: {

		//研究Id
		experimentId: {
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

		//研究内容
		details: {
			type: 'string',
			notNull: true,
			index: true
		},

		//图片Url:
		imgUrl: {
			type: 'string',
			notNull: true,
			index: true
		}

	}
});