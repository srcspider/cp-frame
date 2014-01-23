/** @jsx React.DOM */
var Plane = React.createClass({
	render: function () {
		return <div>hello, world</div>;
	},
	componentWillMount: function () {
		this._notices = [];
		this._toolboxes = [];
		var layout = this.props.layout;
		layout.on('new_notice', this.addNotice);
		layout.on('new_toolbox', this.addToolbox);
	},
	addNotice: function (notice) {
		return this;
	},
	addToolbox: function (toolbox) {
		return this;
	}
});
