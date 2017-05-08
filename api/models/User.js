var _ = require('lodash');
var _basicModel = require('./BasicModel');

_.merge(exports, _basicModel);

_.merge(exports, {


	//表名
	globalId: 'User',

	attributes: {

		//成员学号／工号
		userId: {
			type: 'integer',
			notNull: true,
			index: true
		},

		//0 不显示 1 显示
		showUserId: {
			type: 'integer',
			notNull: true,
			index: true
		},

		//成员名称
		userName: {
			type: 'string',
			unique: true,
			notNull: true,
			size: 191,
			index: true
		},

		//学位
		bachelor: {
			type: 'string',
			notNull: true,
			index: true
		},

		// 0 女 1 男
		sex: {
			type: 'integer',
			notNull: true,
			index: true
		},

		//简历
		profile: {
			type: 'string',
			notNull: true,
			index: true
		},

		//入学年份
		datesOfAttendance: {
			type: 'integer',
			notNull: true,
			index: true
		},

		//学院专业
		professionalSchool: {
			type: 'string',
			notNull: true,
			index: true
		},

		//个人链接
		personalUrl: {
			type: 'string',
			notNull: true,
			index: true
		},

		//头像图片
		imgUrl: {
			type: 'string',
			notNull: true,
			index: true
		},
		name: {
			type: 'string',
			notNull: true,
			index: true
		},
		sex:{
			type: 'string',
			notNull: true,
			index: true
		},
		age: {
			type: 'string',
			notNull: true,
			index: true
		},
		email: {
			type: 'string',
			notNull: true,
			index: true
		},
		school: {
			type: 'string',
			notNull: true,
			index: true
		},
		major: {
			type: 'string',
			notNull: true,
			index: true
		},
		submit: {
			type: 'string',
			notNull: true,
			index: true
		},
		reset: {
			type: 'string',
			notNull: true,
			index: true
		}
	}
});

