function generateur_mdp($liste_element, $nombre_element){
    $mdp_final = "";
    for($i = 0; $i < $nombre_element; $i++){
        $value = Math.random()* $liste_element.length
        $new_elem = $liste_element.charAt($value);
        $mdp_final = $mdp_final + $new_elem;
    }

    return $mdp_final;
}
const form = document.querySelector('form');

form.addEventListener("submit", (event) => {
    // On empêche le comportement par défaut
    event.preventDefault();

    document.getElementById("tableau_mdp").innerHTML = "";

    $nbr_mdp = document.getElementById("nbr_mdp").value;

    $nbr_elem = document.getElementById("nbr_elem").value;

    $liste_elem = "";

    if(document.getElementById("Min").checked){
        $liste_elem += Minuscules;
    }

    if(document.getElementById("Maj").checked){
        $liste_elem += Majuscules;
    }

    if(document.getElementById("Chiffre").checked){
        $liste_elem += Chiffres;
    }

    if(document.getElementById("Characteres_spe").checked){
        $liste_elem += Charactere_speciaux;
    }

    if($liste_elem == ""){
        document.getElementById("erreur").innerHTML = "<p>Il faut au moins un element de coche</p>";
    }
    else{
        document.getElementById("erreur").innerHTML = "";
        document.getElementById("tableau_mdp").innerHTML = "<tr><td>Mdp</td><td>Force du MDP</td></tr>";
        
        for($j = 0; $j < $nbr_mdp; $j++){

            $mdp = generateur_mdp($liste_elem, $nbr_elem)

            var ligne = document.createElement("tr");

            var colonne1 = document.createElement("td");
            var node1 = document.createTextNode($mdp);
            colonne1.appendChild(node1);

            var colonne2 = document.createElement("td");
            var node2 = document.createTextNode(CheckForceMDP($mdp));
            colonne2.appendChild(node2);

            ligne.appendChild(colonne1);
            ligne.appendChild(colonne2);

            var element = document.getElementById("tableau_mdp");
            element.appendChild(ligne);
        }
    }
});