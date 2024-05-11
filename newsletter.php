<?php
    if (!isset($_POST['email'])) {
        header('Location: ./index.html');
    }
    // Informations de connexion à la base de données
    $serveur = "localhost"; // Adresse du serveur MySQL
    $utilisateur = "root"; // Nom d'utilisateur MySQL
    $motDePasse = "root"; // Mot de passe MySQL
    $baseDeDonnees = "omnipresens"; // Nom de la base de données MySQL

    try {
        // Connexion à la base de données MySQL via PDO
        $connexion = new PDO("mysql:host=$serveur;dbname=$baseDeDonnees", $utilisateur, $motDePasse);
        
        // Configuration des options PDO
        $connexion->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        
        // Récupération de l'e-mail depuis le formulaire POST
        if(isset($_POST['email'])) {
            $email = $_POST['email'];
            
            // Vérifier si l'e-mail n'existe pas déjà dans la base de données
            $stmt = $connexion->prepare("SELECT COUNT(*) AS count FROM utilisateurs WHERE email = ?");
            $stmt->execute([$email]);
            $row = $stmt->fetch(PDO::FETCH_ASSOC);
            $emailCount = $row['count'];
            
            if($emailCount == 0) {
                // Insertion de l'e-mail dans la base de données
                $stmt = $connexion->prepare("INSERT INTO utilisateurs (email) VALUES (?)");
                $stmt->execute([$email]);
                
                echo "L'e-mail a été inséré avec succès dans la base de données.";
            } else {
                echo "Cet e-mail existe déjà dans la base de données.";
            }
        } else {
            echo "Veuillez fournir une adresse e-mail.";
        }

        header('Location: ./index.html');
    } catch(PDOException $e) {
        // En cas d'erreur lors de la connexion
        echo "Erreur de connexion à la base de données : " . $e->getMessage();
    }
?>