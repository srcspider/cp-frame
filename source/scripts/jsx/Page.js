/** @jsx React.DOM */
var Page = React.createClass({
	render: function () {
		return <div>[rendered page]</div>
	},
	componentWillMount: function () {
		this._planes = [];
		var layout = this.props.layout;
		layout.on('new:notice', this.addNotice);
		layout.on('new:toolbox', this.addToolbox);
		layout.on('update:loading', this.updateLoading);
	},
	addNotice: function () {
		// @todo implement
		return this;
	},
	addToolbox: function () {
		// @todo implement
		return this;
	},
	updateLoading: function (status) {
		// @todo implement
		return this;
	}
});
