/*
    Objet    : infoDb
    Créateur : Alexandre 
*/

"use strict"

class infoDb {

    constructor(versiondb, serial, licence, version) {
        this.versiondb = versiondb;
        this.serial = serial;
        this.version = version;
        this.licence = licence;
    }
   
    logger() {
        console.log("versiondb" + this.versiondb);

    }

    static getBDD() {
        return new Promise(function (resolve, reject) {
            var resultat = [];
            var db = window.sqlitePlugin.openDatabase({ name: "testeux.db" });

            db.transaction(function (tx) {
                tx.executeSql("SELECT * FROM nautilus", [], function (tx, res) {
                    var len = res.rows.length;
                    if (len > 0) {
                        for (var i = 0; i < len; i++) {
                            resultat[i] = new infoDb(res.rows.item(i).BDD, res.rows.item(i).Serial, res.rows.item(i).Licence, res.rows.item(i).Version);
                            console.log("en cours ...")
                        }
                    }  
                    resolve(resultat);
                });

            }, errorCB);
        });
    }
}

function errorCB(err) {
    console.log("Error processing SQL: "+ err.message);
    console.log("Error processing SQL: "+ err.code);
}

