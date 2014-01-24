/** @jsx React.DOM */
(function () {

	// Render base structure
	// ---------------------

	var domMain = document.getElementById('app-main');
	var layout = new app.Layout;
	React.renderComponent(
		<Page layout={layout}/>,
		domMain
	);

	// Tool Rendering
	// --------------

	// populate layout
	var notice = new app.Notice('notice1');
	var tools1 = new app.Tool('tools1');
	var tools2 = new app.Tool('tools2');

	layout.addNotice(notice);
	layout.addTool(tools1);
	layout.addTool(tools2);

}());
