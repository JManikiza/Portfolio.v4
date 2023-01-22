const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            console.log("Intersecting...");
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }
    });
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));

const observer1 = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            console.log("Intersecting2...");
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }
    });
});

const secondHiddenElements = document.querySelectorAll('.hidden1');
secondHiddenElements.forEach((fi) => observer1.observe(fi));

const observer2 = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            console.log("Intersecting...");
            entry.target.classList.add('show1');
        }
    });
});

const thirdHiddenElements = document.querySelectorAll('.hidden2');
thirdHiddenElements.forEach((ed) => observer2.observe(ed));

window.scrollBy({ 
    top: 100, // could be negative value
    left: 0, 
    behavior: 'smooth' 
  });

  window.onunload = function(){ window.scrollTo(0,0); }