/*
    Objet    : remarque.class.js
    Créateur : Alexandre
*/
"use strict"

class fournisseur {
    constructor(id, centrale, nom) {
        this.id = id;
        this.centrale = centrale
        this.nom = nom;
    }

    afficher() {
        console.log("id" + this.id + " Fournisseur : " + this.nom);


    }


    static persister(centrale, nom) {
        return new Promise(function (resolve, reject) {
            var db = window.sqlitePlugin.openDatabase({ name: "testeux.db" });
            db.transaction(function (tx) {

                tx.executeSql('INSERT INTO fournisseur (centrale, nom) VALUES (?,?)',
                    [centrale, nom],
                    function (transaction, resultSet) {
                        resolve()
                    });
            });
        });

    }

    static getBDD() {
        return new Promise(function (resolve, reject) {
            var resultat = [];
            var db = window.sqlitePlugin.openDatabase({ name: "testeux.db" });

            db.transaction(function (tx) {
                tx.executeSql("SELECT * FROM fournisseur", [], function (tx, res) {
                    console.log("Lecture des objets fournisseur en BDD correct");

                    var len = res.rows.length;
                    if (len > 0) {
                        for (var i = 0; i < len; i++) {
                            resultat[i] = new fournisseur(res.rows.item(i).id, res.rows.item(i).centrale, res.rows.item(i).nom);
                        }
                    }
                    resolve(resultat);
                });
            });
        });
    }

}