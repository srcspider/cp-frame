/** @jsx React.DOM */
app.Layout = app.Instance.extend({

	init: function () {
		this._notices = [];
		this._tools = [];
	},

	addNotice: function (notice) {
		this._notices.push(notice);
	},

	addTool: function (notice) {
		this._tools.push(notice);
	},

//// Loading Handlers //////////////////////////////////////////////////////////

	loadingDefaults: {
		state: 'running',
		progress: 0,
		total: 100,
		type: '%'
	},

	updateLoading: function (status) {
		status = _.extend(this.loadingDefaults, status);
		this.trigger('update:loading', status);
		return this;
	},

});
