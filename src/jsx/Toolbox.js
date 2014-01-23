/** @jsx React.DOM */
var Toolbox = React.createClass({
	getInitialState: function() {
		return {
			minimized: false,
		};
	},
	render: function () {
		var body = <div>[box]</div>;
		return (
			<div className="box">
				<div className="box-header">
					<div>{this.state.name}</div>
					<div class="box-controls">
						<span onClick={this.toggleMinimize}>
							{ this.state.minimized ? 'maximize' : 'minimize' }
						</span>
					</div>
				</div>
				{ this.state.minimized ? '' : body }
			</div>
		);
	},
	toggleMinimize: function () {
		if (this.state.minimized) {
			this.setState({ minimized: false });
		}
		else { // not minimized
			this.setState({ minimized: true });
		}
	}
});
