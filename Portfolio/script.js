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