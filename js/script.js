var app = {
	view: {
		body: "#app-body"
	},
	buildView: {
		for (key in this.view) {
			this.view[key] = $(this.view[key]);
		}
	},
	init: function() {
		this.buildView();
		this.view.body.append("<p>Device ready!</p>")
	}
}

document.addEventListener("deviceready", app.init.bind(app), false);