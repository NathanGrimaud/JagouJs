"use strict";

const BASEURL = "http://127.0.0.1/JagouJs/";
const DEPENDENCES = [ "js/framework/form.class", "js/framework/ws.class"];
const MODULES = ["lib/hammer", "lib/knockout", "lib/transition"]; // "lib/hammer", "lib/knockout", "lib/transition"
const PROJECT = "web"; // web/cordova/electron

class Framework {

	constructor(log) {
		this.log = log;
		this.logger("**************************** CHARGEMENT FRAMEWORK ****************************  ")
			//load framework dependencies
		this.loadScripts(DEPENDENCES)
			.then(() => {
				this.logger("all scripts are loaded")
			})
	}

	init(entities, behindInstance) {
		var ent = [];

		if (entities != null) {
			entities.map((value, index, array) => {
				ent.push("js/framework/entity/" + value + '.class');
			})
			var loadscri = this.loadScripts(ent);
		}
		else {
			var loadscri = new Promise((resolve, reject) => {
				resolve()
			})
		}

		this.logger("Creating map")

		var modulesPromise = this.loadScripts(MODULES);



		if (PROJECT === "cordova") {
			this.logger("Waiting cordova")
			document.addEventListener("deviceready", onDeviceReady, false);
		}
		else {
			window.onload = onDeviceReady;
		}

		var self = this;

		function onDeviceReady() {
			self.logger("cordova load")
				// Lors de la résolution des promises :
			self.logger("verification de LoadScript")
			Promise.all([loadscri]).then(() => {
				self.logger("LoadScript finish")
				var loadDataPromise = behindInstance.loadData();
				self.logger("chargement LoadData ok")
				Promise.all([loadDataPromise, modulesPromise]).then(() => {
					self.logger("chargement loadViewModel ");
					behindInstance.loadViewModel();
					self.containersScan();
					self.logger("Framework Load ");
					self.logger("**************************** FIN CHARGEMENT FRAMEWORK ****************************");
				});
			});
		}

	}

	loadScripts(scriptArray) {

		return new Promise((resolve, reject) => {

			scriptArray.forEach((value, index, array) => {
				var script = document.createElement("script");
				script.async = false;
				this.logger("chargement du script : " + BASEURL + value + ".js");
				script.src = BASEURL + value + ".js";
				this.scriptLoader(script)
					.then(() => {
						if (index + 1 == scriptArray.length)
							resolve();
					})
			})

		})
	}

	scriptLoader(script) {
		return new Promise((resolve, reject) => {
			script.addEventListener('load', function() {
				resolve(script);
			}, false);

			script.addEventListener('error', function() {
				reject(script);
			}, false);

			document.head.appendChild(script);
		});
	}

	logger(message) {
		if (this.log) {
			console.log("[FRAMEWORK LOGGER] : " + message);
		}
	}

	containersScan() {
		var containers = document.getElementsByTagName("button-container");
		for (var i = 0; i < containers.length; i++) {
			var container = containers[i];
			var elements = container.getElementsByTagName("button");
			if (elements.length >= 1) {
				activateButton(elements[0], container);
				for (var i = 0; i < elements.length; i++) {
					elements[i].addEventListener("click", (e) => activateButton(e.target, container));
				}
			}
		}
	}

}
/*
  TODO :
  ///

    Construction du framework
        -> envoie d'une instance du behind

  ///
*/
