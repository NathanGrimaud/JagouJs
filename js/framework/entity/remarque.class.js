/*
    Objet    : remarque.class.js
    Créateur : Alexandre
*/
"use strict"

class remarque {

    constructor(id, employeeid, nom, prenom, disponnibilite, telephone, mail, remarques, date) {

        this.id = id;
        this.employeeid = employeeid;
        this.nom = nom;
        this.prenom = prenom;
        this.disponnibilite = disponnibilite;
        this.telephone = telephone;
        this.mail = mail;
        this.remarques = remarques;
        this.date = date;
    }

    afficher() {
        console.log("id" + this.id + " Remarques : " + this.remarques);

    }

    static persister(employeeid, nom, prenom, disponnibilite, telephone, mail, remarques, date) {

        var db = window.sqlitePlugin.openDatabase({ name: "testeux.db" });
        db.transaction(function (tx) {

            tx.executeSql('INSERT INTO remarques (employeeid, nom, prenom, disponnibilite, telephone, mail, remarques, date) VALUES (?,?,?,?,?,?,?,?)',
                [employeeid, nom, prenom, disponnibilite, telephone, mail, remarques, date],
                function (transaction, resultSet) {

                    console.log("Ajout en BDD correct de " + nom);
                });

        });

        console.log("persistation terminé");
    }

    static getBDD() {
        return new Promise(function (resolve, reject) {
            var resultat = [];
            var db = window.sqlitePlugin.openDatabase({ name: "testeux.db" });

            db.transaction(function (tx) {
                tx.executeSql("SELECT * FROM remarques LIMIT 3;", [], function (tx, res) {
                    console.log("Lecture des objets remarque en BDD correct");

                    var len = res.rows.length;

                    if (len > 0) {

                        for (var i = 0; i < len; i++) {

                            resultat[i] = new remarque(res.rows.item(i).id, res.rows.item(i).employeeid, res.rows.item(i).nom, res.rows.item(i).prenom, res.rows.item(i).disponnibilite, res.rows.item(i).telephone, res.rows.item(i).mail, res.rows.item(i).remarques, res.rows.item(i).date);

                        }
                    }

                    resolve(resultat);
                    console.log("after promise");
                });
            });
        });


    }


}
