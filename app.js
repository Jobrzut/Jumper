var postac = document.getElementById("postac")
var przeszkoda = document.getElementById("przeszkoda")
var sekundy = 0;
var licznik = document.getElementById('liczba')
var wynik = document.getElementById('h2suck')

// rozpoczyna gre
function gra(){
    sekundy = 0;
    
    kontener.style.display = "block";
    witaj.style.display = "none";
    suck.style.display = "none";

    setInterval(function dodawanieSekund() {
        sekundy = sekundy + 1;
        licznik.innerText = sekundy;
        console.log(sekundy)
    }, 1000);
}

// dzieki niej skacze
function skok() {
    
    if(postac.classList != "animate") {
        postac.classList.add("animate");
    }

    setTimeout(function(){
        postac.classList.remove("animate");
    },500);

}
// dzieki niej dziala spacja jako skok
document.body.onkeyup = function(e) {
    if (e.key == " " ||
        e.code == "Space" ||      
        e.keyCode == 32      
    ) {
        if(postac.classList != "animate") {
            postac.classList.add("animate");
        }
    
        setTimeout(function(){
            postac.classList.remove("animate");
        },500);
    }
  }
// sprawdza czy umarlem
var sprawdzSmierc = setInterval(function() {
    var gorapostaci = parseInt(window.getComputedStyle(postac).getPropertyValue("top"));
    var lewaprzeszkody = parseInt(window.getComputedStyle(przeszkoda).getPropertyValue("left"));

    if (lewaprzeszkody < 100 && lewaprzeszkody > 0 && gorapostaci >= 350) {
        kontener.style.display = "none";
        suck.style.display = "block";
        wynik.innerText = "Score: " + sekundy;
    }
},10);


