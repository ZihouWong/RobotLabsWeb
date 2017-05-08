/**
 * Created by wongzihou on 5/1/17.
 */
module.exports = {

	endpoint: function(req, res) {
		var action = req.params[0];
		if (this[action]) return this[action](req, res);
		return res.badRequest('Invalid action name');
	},


	//获取机构 详细信息 接口
	getIntroductionDetails: function (req, res) {

		Introduction.find().exec(function (err, records) {
			if (err) return res.badRequest(err.message);

			var result = [];
			_.map(records, function (record) {
				result.push(record.details);
			});
			return res.ok({"Details": result});
		})
	},

	//获取机构 地图链接 接口
	getIntroductionMapUrl: function (req, res) {

		Introduction.find().exec(function (err, records) {
			if (err) return res.badRequest(err.message);

			var result = [];
			_.map(records, function (record) {
				result.push(record.mapUrl);
			});
			return res.ok({"MapUrl": records});
		})
	},

	//获取所有成员头像链接接口
	getUserImgUrl: function (req, res) {

		User.find().exec(function (err, records) {
			if (err) return res.badRequest(err.message);

			var result = [];
			_.map(records, function (record) {
				result.push(record.imgUrl);
			});
			return res.ok({"ImgUrl": records});
		})
	},

	//获取 所有成员名字 接口
	getUserName: function (req, res) {

		User.find().exec(function (err, records) {
			if (err) return res.badRequest(err.message);

			var result = [];
			_.map(records, function (record) {
				result.push(record.userName);
			});
			return res.ok({"userName": records});
		})
	},

	//获取 所有成员学位 接口
	getUserBachelor: function (req, res) {

		User.find().exec(function (err, records) {
			if (err) return res.badRequest(err.message);

			var result = [];
			_.map(records, function (record) {
				result.push(record.bachelor);
			});
			return res.ok({"Bachelor": records});
		})
	},

	//获取 所有成员个人链接 接口
	getUserPersonalUrl: function (req, res) {

		User.find().exec(function (err, records) {
			if (err) return res.badRequest(err.message);

			var result = [];
			_.map(records, function (record) {
				result.push(record.personalUrl);
			});
			return res.ok({"PersonalUrl": records});
		})
	},

	//获取 所有成员个人简历 接口
	getUserProfile: function (req, res) {

		User.find().exec(function (err, records) {
			if (err) return res.badRequest(err.message);

			var result = [];
			_.map(records, function (record) {
				result.push(record.profile);
			});
			return res.ok({"PersonalProfile": records});
		})
	},



};









/*
 var result = [];
 //获取机构详细信息
 Introduction.find({attributes: 'Details'}).exec(function (err, records) {

 if (err) return res.badRequest(res.message);

 var index = 0;
 _.map(records, function (record) {
 result[index] = {attributes: record};
 index++;
 });
 return res.ok(result);
 });

 //获取机构地图Url
 Introduction.find({attributes: 'mapUrl'}).exec(function (err, records) {

 if (err) return res.badRequest(res.message);

 records.limit(4);
 var index = 0;
 _.map(records, function (record) {
 result[index] = {attributes: record};
 index++;
 });
 return res.ok(result);
 });

 Introduction.find({attributes: 'Details'}).exec(function (err, records) {

 if (err) return res.badRequest(res.message);

 records.limit(4);
 var index = 0;
 _.map(records, function (record) {
 result[index] = {attributes: record};
 index++;
 });
 return res.ok(result);
 });




getIntroductionDetails: function(req, res) {
	Introduction.find({attributes: 'Details'}).exec(function (err, records) {

		if (err) return res.badRequest(res.message);

		var num = 4;
		records.limit(num);
		var result = [];
		var index = 0;
		_.map(records, function (record) {
			result[index] = {'attributes': record};
			index++;
		});
		return res.ok(result);


	});
},

//
*/



