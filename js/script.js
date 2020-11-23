// Classes, variables, fonctions

    // Classe destination, destinations et liste destinations

    class destination {
        constructor(pNom,pPrix) {
            this._nom = pNom
            this._prix = pPrix
        }
    }
    var reykjavik = new destination("reykjavik",930)
    var kyoto = new destination("kyoto",300)
    var losangeles = new destination("losangeles",640)
    var madrid = new destination("madrid",520)
    var paris = new destination("paris",510)
    var sidney = new destination("sidney",360)
    var destinations = [reykjavik,kyoto,losangeles,madrid,sidney]

    // Informations formulaire

    let destination_id = new URLSearchParams(window.location.search).get("id")
    let adultes = document.getElementsByName("adultes")
    let enfants = document.getElementsByName("enfants")

    // Fonction prix

    function calculerprix(pP,pA,pE,pN,pC,pD) {
        let PrixTot=(pP*pA+(4/10)*pP*pE)*pN
        if (pC==1) {
            PrixTot+=pN*10
        }
        if (pD==1) {
            PrixTot+=12*(pA + (4/10)*pE)
        }
    }
function charge() {
    document.getElementById("test").innerHTML=destination_id
}