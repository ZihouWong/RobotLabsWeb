/**
 * Created by wongzihou on 5/1/17.
 */
module.exports = {

	endpoint: function(req, res) {
		var action = req.params[0];
		if (this[action]) return this[action](req, res);
		return res.badRequest('Invalid action name');
	},


	//获取机构 详细信息 & 地图链接 接口
	getIntroductionDetails: function (req, res) {

		Introduction.find().exec(function (err, records) {
			if (err) return res.badRequest(err.message);

			var result = [];
			_.map(records, function (record) {
				result.push({"details": record.details, "mapUrl": record.mapUrl});
			});
			return res.ok({"result": result});
		})
	},


	//获取所有 成员头像链接 & 名字接口 & 个人链接 & 简历 & 邮箱地址
	getUserImgUrl: function (req, res) {

		User.find().exec(function (err, records) {
			if (err) return res.badRequest(err.message);

			var result = [];
			_.map(records, function (record) {
				result.push({"imgUrl": record.imgUrl, "userName": record.userName,
							"bachelor": record.bachelor, "personalUrl": record.personalUrl,
							"profile": record.profile ,"email": record.email
				});
			});
			return res.ok({"result": result});
		})
	},

	//获取项目研究 图片Url & 项目标题 & 路径
	getExperiment: function (req, res) {
		Experiment.find().exec(function (err, records) {
			if (err) return res.badRequest(err.message);

			var result = [];
			_.map(records, function (record) {
				result.push({"imgUrl": record.imgUrl, "title": record.title, "path": record.path});
			});
			return res.ok({"result": result});
		})
	},

	//获取活动剪影 图片Url & 图片简介 & 日期
	getActivities: function (req, res) {
		Activities.find().exec(function (err, records) {
			if (err) return res.badRequest(err.message);

			var result = [];
			_.map(records, function (record) {
				result.push({"imgUrl": record.imgUrl, "imgProfile": record.imgProfile, "Date": record.date});
			});
			return res.ok({"result": result});
		})
	}


};
