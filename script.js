var nav = document.getElementById('nav_slider');

var expertise = document.getElementById('expertise');
var tabExpertises = [
    'Google Ads', 
    'Google Shopping',  
    'SEO', 
    'Adobe After Effects', 
    'Adobe Premiere Pro', 
    'Adobe Photoshop', 
    'Wordpress', 
    'Shopify', 
    'Web Design', 
    'Développement Web'
];
var currentIndex = 0;
var currentText = '';
var letterIndex = 0;
var intervalId;

var videos = document.querySelectorAll('.phone_anim');

function playNextVideo(index) {
    videos[index].style.display = 'none';
    var nextIndex = (index + 1) % videos.length;
    videos[nextIndex].style.display = 'block';
    videos[nextIndex].play();
}


function toggleNav() {
    nav.classList.toggle('active');
}


// Fonction pour effacer le texte précédent lettre par lettre
function eraseText() {
    if (expertise.textContent.length > 0) {
        expertise.textContent = expertise.textContent.slice(0, -1);
        setTimeout(eraseText, 50); // Vitesse de suppression (en millisecondes)
    } else {
        updateText(); // Une fois que le texte est effacé, appeler la fonction pour afficher le nouveau texte
    }
}

// Fonction pour mettre à jour le texte lettre par lettre
function updateText() {
    if (letterIndex < tabExpertises[currentIndex].length) {
        currentText += tabExpertises[currentIndex].charAt(letterIndex);
        expertise.textContent = currentText;
        letterIndex++;
        setTimeout(updateText, 100); // Vitesse d'ajout de chaque lettre (en millisecondes)
    } else {
        currentIndex = (currentIndex + 1) % tabExpertises.length;
        currentText = '';
        letterIndex = 0;
        setTimeout(eraseText, 1000); // Durée avant d'effacer le texte précédent et afficher le nouveau texte (en millisecondes)
    }
}




// Démarrer le processus après que la page soit complètement chargée
window.addEventListener('load', function() {
    // document.getElementById('body').style.visibility = 'visible';
    updateText();

    videos[0].addEventListener('ended', function() {
        playNextVideo(0);
    });
    videos[1].addEventListener('ended', function() {
        playNextVideo(1);
    });
    videos[2].addEventListener('ended', function() {
        playNextVideo(2);
    });
    videos[3].addEventListener('ended', function() {
        playNextVideo(3);
    });
    videos[0].play();



    // <!--Start of Tawk.to Script-->
    var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
    (function(){
    var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
    s1.async=true;
    s1.src='https://embed.tawk.to/66325ea31ec1082f04e9e0d8/1hsqc3bqr';
    s1.charset='UTF-8';
    s1.setAttribute('crossorigin','*');
    s0.parentNode.insertBefore(s1,s0);
    })();
    // <!--End of Tawk.to Script-->
});