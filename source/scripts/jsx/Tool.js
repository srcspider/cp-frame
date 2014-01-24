/** @jsx React.DOM */
var Tool = React.createClass({
	getInitialState: function() {
		return {
			minimized: false,
		};
	},
	render: function () {
		var body = <div>[tool]</div>;
		return (
			<div className="tool">
				<div className="tool-header">
					<div>{this.state.name}</div>
					<div class="tool-controls">
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
