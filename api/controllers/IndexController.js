module.exports = {

	//endpoint
	endpoint: function (req, res) {
		var action = req.params[0];
		if (this[action]) return this[action](req, res);
		return res.badRequest('Invalid action name');
	},

	//获取栏目 标题 & 路径 接口
	getIndexTitle: function (req, res) {
		IndexTitle.find().exec(function (err, records) {
			if (err) return res.badRequest(err.message);

			var result = [];
			_.map(records, function (record) {
				result.push({"title": record.title, "path": record.path});
			});
			return res.ok({"result": result});
		});
	},

	//获取机构 概况 & 路径 接口
	getIntroductionNotDetailed: function (req, res) {
		Introduction.find().exec(function (err, records) {
			if (err) return res.badRequest(err.message);

			var result = [];
			_.map(records, function (record) {
				result.push({"notDetailed": record.notDetailed, "path": record.path});
			});
			return res.ok({"result": result});
		});
	},

	//获取通知公告信息 标题 & 日期 & 路径 接口
	getNoticeTitle: function (req, res) {
		Notice.find().exec(function (err, records) {

			if (err) return res.badRequest(err.message);

			var result = [];
			_.map(records, function(record) {
				result.push({"title": record.title, "date": record.date, "details": record.details, "path": record.path});
			});
			return res.ok({"result": result});
		});
	},

	//获取科学研究信息 标题 & 图片Url & 路径 接口
	getExperimentTitle: function (req, res) {
		Experiment.find().exec(function (err, records) {
			if (err) return res.badRequest(err.message);

			var result = [];
			_.map(records, function(record) {
				result.push({"title": record.title, "imgUrl": record.imgUrl, "path": path});
			});
			return res.ok({"result": result});
		});
	}


};