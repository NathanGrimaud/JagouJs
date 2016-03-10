"use strict";

class indexViewModel extends viewModelBase {

	constructor() {
		super();
	}

	loadData() {
		return new Promise((resolve) => {
			this._test = "lol"
			resolve();
		});
	}

	loadViewModel() {
		this.test = ko.observable(this._test);
		this.applyBinding();
	}


}
var behind = new indexViewModel();
var framework = new Framework(true);
framework.init(null, behind);
