/** @jsx React.DOM */
app.Tool = app.Instance.extend({

	init: function () {
		var self = this;
	},

	readyPromise: function () {
		return new jQuery.Deffered;
	},

});
