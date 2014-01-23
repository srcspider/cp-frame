/** @jsx React.DOM */
(function () {
	var domMain = document.getElementById('app-main');
	var layout = new app.Layout;

	layout.startLoading();
	React.renderComponent(
		<Plane layout={layout}/>, 
		domMain
	);

	// populate layout
	var notice = new app.Notice('notice1');
	layout.addNotice(notice);
	var tools1 = new app.Toolbox('tools1');
	layout.addToolbox(tools1);
	var tools2 = new app.Toolbox('tools2');
	layout.addToolbox(tools2);
	layout.stopLoading();

}());
