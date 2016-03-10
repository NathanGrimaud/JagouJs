/*
    Objet    : ajoutFacture.class.js
    Créateur : Paul
*/

"use strict";

class Facture {
    //déclaration de la classe
    constructor(id, prix, type, date) {
        //obligatoire, prend en parametre
        //tous ceux qui sont dans le l'instanciation ( new machin(x,x,x) )
        this.id = id;
        this.prix = prix;
        this.type = type;
        this.date = date;
        // propriétée de la classe
    }
    static persister(prix, type, date) {
        let db = window.sqlitePlugin.openDatabase({ name: "testeux.db" });
        db.transaction(function (tx) {

            tx.executeSql('INSERT INTO remarques (prix, type, date) VALUES (?,?,?)',
                [prix, type, date],
                function (transaction, resultSet) {

                    console.log("Ajout en BDD correct de " + "type");
                });

        }, errorCB, AjoutTermine);

        console.log("persistation terminé");
    }

    static getBDD() {
        let resultat = [];
        let db = window.sqlitePlugin.openDatabase({ name: "testeux.db" });

        db.transaction(function (tx) {
            tx.executeSql("SELECT * FROM facture LIMIT 3;", [], function (tx, res) {
                console.log("Lecture des objets facture en BDD correct");

                var len = res.rows.length;

                if (len > 0) {

                    for (var i = 0; i < len; i++) {

                        resultat[i] = new Facture(res.rows.item(i).id, res.rows.item(i).prix, res.rows.item(i).type, res.rows.item(i).date);

                    }
                }


            });
        }, errorCB, SelectTermine);
        return resultat;
    }

    errorCB(err) {
        console.log("Error processing SQL: " + err.message);
        console.log("Error processing SQL: " + err.code);
    }
    successCB() {
        console.log("success!");
    }
}