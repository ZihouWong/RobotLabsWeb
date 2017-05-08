/**
 * Created by wongzihou on 5/8/17.
 */
module.exports = {

	endpoint: function(req, res) {
		var action = req.params[0];
		if (this[action]) return this[action](req, res);
		return res.badRequest('Invalid action name');
	}
};