/*
    Objet    : Formulaire
    Créateur : Alexandre
    Pour chopper le formulaire, ne pas mettre l'idForm dans un form, mais dans une div
*/
function getForm(idForm){

    if(idForm!=null){
        var tab = [];

        var monform = {};

        var conteneur = document.getElementById(idForm);

        var select = conteneur.getElementsByTagName("SELECT");
        var inputs = conteneur.getElementsByTagName("INPUT");
        var textarea = conteneur.getElementsByTagName("TEXTAREA");

        for (var inp, i = 0, iMax = inputs.length; i < iMax; ++i) {
                inp = inputs[i];
                monform[inp.id] = inp.value;
            }

        for (var inp, i = 0, iMax = textarea.length; i < iMax; ++i) {
                inp = textarea[i];
                monform[inp.id] = inp.value;
            }

        for (var inp, i = 0, iMax = select.length; i < iMax; ++i) {
                inp = select[i];
                var ind = inp.selectedIndex;
                monform[inp.id] = inp.options[ind].value;
            }

            return monform;
        }
        return this;
}

function videForm(idForm){
  
console.log("Use videForm");

var conteneur = document.getElementById(idForm);

var select = conteneur.getElementsByTagName("SELECT");
var inputs = conteneur.getElementsByTagName("INPUT");
var textarea = conteneur.getElementsByTagName("TEXTAREA");
  
for (var inp, i = 0, iMax = inputs.length; i < iMax; ++i) {
        inp = inputs[i];
        console.log(inp.value);
        inp.value = "";        
    }

for (var inp, i = 0, iMax = textarea.length; i < iMax; ++i) {
        inp = textarea[i];
        inp.value = "";
    }  

for (var inp, i = 0, iMax = select.length; i < iMax; ++i) {
        inp = select[i];
        var ind = inp.selectedIndex;
        inp.options[ind].value = "";
    }        
    

}

console.log("form.class.js");
