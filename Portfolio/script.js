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
            if (entry.target.classList.contains("hidden") || entry.target.classList.contains("hidden1") || entry.target.classList.contains("hidden2")) {
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
/*
  var whiteTheme = document.getElementById("white");
  var blueTheme = document.getElementById("blue");
  var redTheme = document.getElementById("red");
  var blackTheme = document.getElementById("black");
  var greenTheme = document.getElementById("green");

  var whiteThemeImages = document.getElementsByClassName("white-theme-img");
  var Header = document.getElementsByClassName("header-container");
  var graffiti = document.getElementById("graffiti");
  
  
  whiteTheme.onclick = function(){
      document.body.classList.remove("blue-theme", "red-theme", "black-theme", "green-theme");
      document.body.classList.toggle("white-theme");
     
      whiteThemeImages.classlist.remove("img-disappear");
      Header.classList.remove("white-header-disappear");
      graffiti.classlist.add("graffiti");
  };
  
  blueTheme.onclick = function(){
      document.body.classList.remove("white-theme", "red-theme", "black-theme", "green-theme");
      document.body.classList.toggle("blue-theme");

      whiteThemeImages.classlist.add("img-disappear");
      Header.classlist.add("white-header-disappear");
      graffiti.classlist.remove("graffiti");

  };
  
  redTheme.onclick = function(){
      document.body.classList.remove("white-theme", "blue-theme", "black-theme", "green-theme");
      document.body.classList.toggle("red-theme");

      whiteThemeImages.add("img-disappear");
      Header.add("white-header-disappear");
  };
  
  blackTheme.onclick = function(){
      document.body.classList.remove("white-theme", "blue-theme", "red-theme", "green-theme");
      document.body.classList.toggle("black-theme");

      whiteThemeImages.add("img-disappear");
      Header.add("white-header-disappear");
  };
  
  greenTheme.onclick = function(){
      document.body.classList.remove("white-theme", "blue-theme", "red-theme", "black-theme");
      document.body.classList.toggle("green-theme");

      whiteThemeImages.add("img-disappear");
      Header.add("white-header-disappear");
  };*/

  var whiteTheme = document.getElementById("white");
var blueTheme = document.getElementById("blue");
var redTheme = document.getElementById("red");
var blackTheme = document.getElementById("black");
var greenTheme = document.getElementById("green");

var whiteThemeImages = document.getElementsByClassName("white-theme-img");
var header = document.getElementsByClassName("header-container");
var graffiti = document.getElementById("graffiti");

whiteTheme.onclick = function(){
    console.log("White theme");
    document.body.classList.remove("blue-theme", "red-theme", "black-theme", "green-theme");
    document.body.classList.toggle("white-theme");

    Array.from(whiteThemeImages).forEach(img => {
        img.classList.remove("img-disappear");
    });

    Array.from(header).forEach(headerElement => {
        headerElement.classList.remove("white-header-disappear");
    });

    graffiti.classList.add("graffiti");
};

blueTheme.onclick = function(){
    console.log("blue theme");

    document.body.classList.remove("white-theme", "red-theme", "black-theme", "green-theme");
    document.body.classList.toggle("blue-theme");

    Array.from(whiteThemeImages).forEach(img => {
        img.classList.add("img-disappear");
    });

    Array.from(header).forEach(headerElement => {
        headerElement.classList.add("white-header-disappear");
    });

    graffiti.classList.remove("graffiti");
};

redTheme.onclick = function(){
    document.body.classList.remove("white-theme", "blue-theme", "black-theme", "green-theme");
    document.body.classList.toggle("red-theme");

    Array.from(whiteThemeImages).forEach(img => {
        img.classList.add("img-disappear");
    });

    Array.from(header).forEach(headerElement => {
        headerElement.classList.add("white-header-disappear");
    });
};

blackTheme.onclick = function(){
    document.body.classList.remove("white-theme", "blue-theme", "red-theme", "green-theme");
    document.body.classList.toggle("black-theme");

    Array.from(whiteThemeImages).forEach(img => {
        img.classList.add("img-disappear");
    });

    /*Array.from(header).forEach(headerElement => {
        headerElement.classList.add("white-header-disappear");
    });*/

    Array.from(header).forEach(headerElement => {
        headerElement.classList.remove("white-header-disappear");
    });

    
    graffiti.classList.add("graffiti");
};

greenTheme.onclick = function(){
    document.body.classList.remove("white-theme", "blue-theme", "red-theme", "black-theme");
    document.body.classList.toggle("green-theme");

    Array.from(whiteThemeImages).forEach(img => {
        img.classList.add("img-disappear");
    });

    Array.from(header).forEach(headerElement => {
        headerElement.classList.add("white-header-disappear");
    });

};