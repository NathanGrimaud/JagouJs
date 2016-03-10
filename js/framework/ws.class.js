"use strict"

class WS {
	static Get(url) {
		return new Promise(function(resolve, reject) {
			var xmlHttp = new window.XMLHttpRequest();
			xmlHttp.open("GET", url, true);
			xmlHttp.onreadystatechange = function(aEvt) {
				if (xmlHttp.readyState == 4) {
					if (xmlHttp.status == 200)
						resolve(xmlHttp.responseText);
					else
						reject(xmlHttp.status)
				}
			};
			xmlHttp.send(null);
		});

	}

	static Post(url, contenu) {
		return new Promise(function(resolve, reject) {
			var xmlHttp = new window.XMLHttpRequest();
			xmlHttp.open("POST", url, true);
			xmlHttp.setRequestHeader("Content-type", "application/json");
			xmlHttp.onreadystatechange = function(aEvt) {
				if (xmlHttp.readyState == 4) {
					if (xmlHttp.status == 200)
						resolve(xmlHttp.responseText);
					else
						reject(xmlHttp.status)
				}
			};
			xmlHttp.send(contenu);
		})
	}
}