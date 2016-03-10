"use strict";
console.log("----------------------------------------")
class viewModelBase {

    // Chargement des dépendances (form ... )
    constructor(){
    }

    // Chargement des entités
    loadData(){
       return new Promise((resolve) => {           
            resolve();
        });
    }

    // Chargement de knockOut
    loadViewModel(){
    
    }

    // Nothing to do
    applyBinding(){
        ko.applyBindings(this);
    };

    // Chargement de Hammer/jQuery
    loadUi(){

    }

}
