//OBSERVER

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            if (entry.target.classList.contains("hidden")) {
                entry.target.classList.add('show');
            } else if (entry.target.classList.contains("hidden1")) {
                entry.target.classList.add('show');
            } else if (entry.target.classList.contains("hidden2")) {
                entry.target.classList.add('show1');
            }
        } else {
            if (entry.target.classList.contains("hidden")) {
                entry.target.classList.remove('show');
            }
        }
    });
});

const hiddenElements = document.querySelectorAll('.hidden, .hidden1, .hidden2');
hiddenElements.forEach((el) => observer.observe(el));

window.scrollBy({ 
    top: 100, // could be negative value
    left: 0, 
    behavior: 'smooth' 
  });

//SMOOTHER SCROLLING
  window.onunload = function(){ window.scrollTo(0,0); }

//ANIMATION

function asideAnim() {

    if(document.querySelector('.aside-container').classList.contains('move-left')){

     document.querySelector('.aside-container').classList.remove('move-left');
     document.querySelector('.logo-container').classList.remove('rotate');
     document.getElementById("button-transform").classList.remove('cross');
     document.getElementById("button-transform").classList.add('aside-button');

    } else {

        document.querySelector('.aside-container').classList.add('move-left');
        document.querySelector('.logo-container').classList.add('rotate');
        document.getElementById("button-transform").classList.add('cross');
        document.getElementById("button-transform").classList.remove('aside-button');
    }




  }

document.getElementsByTagName('head')[0].appendChild(style);
document.select



document.getElementById('white').addEventListener("click", function() {
    updateStyles("white");
  });
  
  document.getElementById('blue').addEventListener("click", function() {
    updateStyles("blue");
  });
  
  document.getElementById('red').addEventListener("click", function() {
    updateStyles("red");
  });

  document.getElementById('black').addEventListener("click", function() {
    updateStyles("black");
  });

  document.getElementById('green').addEventListener("click", function() {
    updateStyles("green");
  });

  function updateStyles(color) {
    var sheet = document.styleSheets[0];

    if (color === "white") {
        console.log("white");
        sheet.insertRule(":root { --main-color: rgba(255, 255, 255, 1); --font-color: rgba(0, 0, 0, 1); --accent-color: rgba(2, 157, 213, 1); --text-shadow: rgba(0, 0, 0, 1); --shadow-color: rgba(0, 0, 0, 1); --aside-gradient-one: rgba(255, 255, 255, 1); --aside-gradient-two: rgba(255, 255, 255, 0.01); --nav-gradient-main: rgba(255, 255, 255, 1); --nav-gradient-two: rgba(255, 255, 255, 0); --item-accent: rgba(255, 255, 255, 1); --contact-colour: rgba(255, 255, 255, 1); --contact-border-colour: rgba(0, 0, 0, 1); --footer-line: rgba(0, 0, 0, 1); }");
    } else if (color === "blue") {
        console.log("blue");
        sheet.insertRule(":root { --main-color: rgba(0, 0, 255, 1); --font-color: rgba(255, 255, 255, 1); --accent-color: rgba(2, 157, 213, 1); --text-shadow: rgba(255, 255, 255, 1); --shadow-color: rgba(0, 0, 255, 1); --aside-gradient-one: rgba(0, 0, 255, 1); --aside-gradient-two: rgba(0, 0, 255, 0.01); --nav-gradient-main: rgba(0, 0, 255, 1); --nav-gradient-two: rgba(0, 0, 255, 0); --item-accent: rgba(0, 0, 255, 1); --contact-colour: rgba(0, 0, 255, 1); --contact-border-colour: rgba(255, 255, 255, 1); --footer-line: rgba(255, 255, 255, 1); }");
} else if (color === "red") {
    console.log("red");
    sheet.insertRule(":root { --main-color: rgba(0, 0, 255, 1); --font-color: rgba(255, 255, 255, 1); --accent-color: rgba(2, 157, 213, 1); --text-shadow: rgba(255, 255, 255, 1); --shadow-color: rgba(0, 0, 255, 1); --aside-gradient-one: rgba(0, 0, 255, 1); --aside-gradient-two: rgba(0, 0, 255, 0.01); --nav-gradient-main: rgba(0, 0, 255, 1); --nav-gradient-two: rgba(0, 0, 255, 0); --item-accent: rgba(0, 0, 255, 1); --contact-colour: rgba(0, 0, 255, 1); --contact-border-colour: rgba(255, 255, 255, 1); --footer-line: rgba(255, 255, 255, 1); }");
} else if (color === "black") {
    console.log("black");
    sheet.insertRule(":root { --main-color: rgba(0, 0, 255, 1); --font-color: rgba(255, 255, 255, 1); --accent-color: rgba(2, 157, 213, 1); --text-shadow: rgba(255, 255, 255, 1); --shadow-color: rgba(0, 0, 255, 1); --aside-gradient-one: rgba(0, 0, 255, 1); --aside-gradient-two: rgba(0, 0, 255, 0.01); --nav-gradient-main: rgba(0, 0, 255, 1); --nav-gradient-two: rgba(0, 0, 255, 0); --item-accent: rgba(0, 0, 255, 1); --contact-colour: rgba(0, 0, 255, 1); --contact-border-colour: rgba(255, 255, 255, 1); --footer-line: rgba(255, 255, 255, 1); }");
}else if (color === "green") {
    console.log("green");
    sheet.insertRule(":root { --main-color: rgba(0, 0, 255, 1); --font-color: rgba(255, 255, 255, 1); --accent-color: rgba(2, 157, 213, 1); --text-shadow: rgba(255, 255, 255, 1); --shadow-color: rgba(0, 0, 255, 1); --aside-gradient-one: rgba(0, 0, 255, 1); --aside-gradient-two: rgba(0, 0, 255, 0.01); --nav-gradient-main: rgba(0, 0, 255, 1); --nav-gradient-two: rgba(0, 0, 255, 0); --item-accent: rgba(0, 0, 255, 1); --contact-colour: rgba(0, 0, 255, 1); --contact-border-colour: rgba(255, 255, 255, 1); --footer-line: rgba(255, 255, 255, 1); }");
}
    return sheet;
}

