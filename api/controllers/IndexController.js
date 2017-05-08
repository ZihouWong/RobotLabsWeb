module.exports = {

	//endpoint
	endpoint: function (req, res) {
		var action = req.params[0];
		if (this[action]) return this[action](req, res);
		return res.badRequest('Invalid action name');
	},

	//获取栏目 标题 接口
	getIndexTitle: function (req, res) {
		IndexTitle.find().exec(function (err, records) {
			if (err) return res.badRequest(err.message);

			var result = [];
			_.map(records, function (record) {
				result.push(record.title);
			});
			return res.ok({"IndexTitle": result});
		});
	},

	//获取机构概况 简介 接口
	getIntroductionNotDetailed: function (req, res) {
		Introduction.find().exec(function (err, records) {
			if (err) return res.badRequest(err.message);

			var result = [];
			_.map(records, function (record) {
				result.push(record.notDetailed);
			});
			return res.ok({"IndexIntroductionInformation": result});
		});
	},

	//获取通知公告信息 标题 接口
	getNoticeTitle: function (req, res) {
		Notice.find().exec(function (err, records) {

			if (err) return res.badRequest(err.message);

			var result = [];
			_.map(records, function(record) {
				result.push(record.title);
			});
			return res.ok({"NoticeTitle": result});
		});
	},

	//获取通知公告信息 时间 接口
	getNoticeDate: function (req, res) {
		Notice.find().exec(function (err, records) {

			if (err) return res.badRequest(err.message);

			var result = [];
			_.map(records, function(record) {
				result.push(record.date);
			});
			return res.ok({"NoticeDate": result});
		});
	},

	//获取科学研究信息 标题 接口
	getExperimentTitle: function (req, res) {
		Experiment.find().exec(function (err, records) {
			if (err) return res.badRequest(err.message);

			var result = [];
			_.map(records, function(record) {
				result.push(record.title);
			});
			return res.ok({"ExperimentTitle": result});
		});
	},

	//获取科学研究 图片Url 接口
	getImgUrlOfExperiment: function (req, res) {
		Experiment.find().exec(function (err, records) {
			if (err) return res.badRequest(err.message);

			var result = [];
			_.map(records, function (record) {
				result.push(record.imgUrl);
			});
			return res.ok({"ImgUrlOfExperiment": result});
		});
	}


};
	/*getCategory: function(req, res) {
		IndexTitle.

		var index = {
			"path": '/index',
			"name": "首页",
		};

		var intro = {
			"path": '/introduction',
			"name": '机构概况'
		};

		var member = {
			"path": '/member',
			"name": "成员信息"
		};

		var result = [index, intro, member];

		return res.ok({"result": result});

	},


	//修改所有同名字的人的信息接口
	findPersonalInformation: function(req, res) {
		User.find({nickname: 'wongzigii'}).exec(function (err, records) {
			if (err) return res.badRequest(err.message);
			if (records && records.length > 0) {

				var result = [];
				_.map(records, function (record) {
					var res = record.age;
					res += 10;
					result.append(res);
				});

				return res.ok(result);
			}
		});
	},

	addUser: function(req, res) {
		User.create({nickname: 'zihou', age: 12}).exec(function (err, result) {
			if (err) return res.badRequest(err.message);
			if (result) {
				return res.ok(result);
			}
		});
	},

	aaa: function(req, res) {
		var a = req.body.username;
		console.log(a);
		return res.send('Hello World!');
	}





}
	 */
