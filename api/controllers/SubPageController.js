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
	getInstitutionInformation: function (req, res) {

		Institution.find().exec(function (err, records) {
			if (err) return res.badRequest(err.message);

			var result = [];
			_.map(records, function (record) {
				result.push({"details": record.details, "mapUrl": record.mapUrl});
			});
			return res.ok({"result": result});
		})
	},


	//获取所有 成员头像链接 & 名字接口 & 学历 & 个人链接 & 简历 & 邮箱地址 接口
	getUserInformation: function (req, res) {

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

	//获取项目研究 图片Url & 项目标题 & 路径 接口
	getExperimentInformation: function (req, res) {
		Experiment.find().exec(function (err, records) {
			if (err) return res.badRequest(err.message);

			var result = [];
			_.map(records, function (record) {
				result.push({"imgUrl": record.imgUrl, "title": record.title, "path": record.path});
			});
			return res.ok({"result": result});
		})
	},

	//获取活动剪影 图片Url & 图片简介 & 日期 接口
	getActivitiesInformaton: function (req, res) {
		Activities.find().exec(function (err, records) {
			if (err) return res.badRequest(err.message);

			var result = [];
			_.map(records, function (record) {
				result.push({"imgUrl": record.imgUrl, "imgProfile": record.imgProfile, "Date": record.date});
			});
			return res.ok({"result": result});
		})
	},

	//注册接口
	register: function (req, res) {
		User.create({
			userId: req.body.userId,
			userName: req.body.userName,
			sex: req.body.sex,
			age: req.body.age,
			email: req.body.email,
			phone: req.body.phone,
			personalUrl: req.body.personalUrl,
			major: req.body.major,
			school: req.body.school,
			bachelor: req.body.bachelor,
			profile: req.body.profile,
			datesOfAttendance: req.body.datesOfAttendance,
			imgUrl: req.body.imgUrl,
			delFlag: req.body.delFlag,
			updateAt: req.body.updateAt,
			createdAt: req.body.createdAt
		}).exec(function (err, myrecord) {
			if (err) return res.badRequest(err.message + "Registration failed.");
			return res.ok("Registration successful.");
		});


	}
};
