// Fonction pour générer et afficher un nombre aléatoire entre 1 et 100
function genererNombre() {
    // Génère un nombre aléatoire entre 1 et 100
    const nombreAleatoire = Math.floor(Math.random() * 200) + 1;
    // Affiche le nombre dans l'élément avec l'ID 'nombre-affiche'
    document.getElementById("nombre-affiche").innerText = "Nombre : " + nombreAleatoire;
}

// Appelle la fonction `genererNombre` toutes les  (100 ms)
setInterval(genererNombre, 500);