/** @jsx React.DOM */
var Plane = React.createClass({
	render: function () {
		return <div>hello, world</div>;
	},
	componentWillMount: function () {
		this._notices = [];
		this._toolboxes = [];
		var layout = this.props.layout;
		layout.on('new:notice', this.addNotice);
		layout.on('new:toolbox', this.addToolbox);
	},
	addNotice: function (notice) {
		// @todo implement
		return this;
	},
	addToolbox: function (toolbox) {
		// @todo implement
		return this;
	}
});
