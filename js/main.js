let toggle = document.querySelector("#switch");

(function () {
    let stats1 = document.querySelectorAll('.up-stat');
    let stats2 = document.querySelectorAll('.down-stat');
    stats1.forEach(element => {
        element.innerText = (Math.random()*10).toFixed(2) + '%';
    });
    stats2.forEach(element => {
        element.innerText = (Math.random()*10).toFixed(2) + '%';
    });
})()

setInterval(()=> {
    let stats1 = document.querySelectorAll('.up-stat');
    let stats2 = document.querySelectorAll('.down-stat');
    stats1.forEach(element => {
        let num = element.innerText;
        let rand = Math.random()/10;
        let sum = parseFloat(num) + rand;
        element.innerText = sum.toFixed(2) + '%';
    })
    stats2.forEach(element => {
        let num = element.innerText;
        let rand = Math.random()/10;
        let sum = parseFloat(num) + rand;
        element.innerText = sum.toFixed(2) + '%';
    })
}, 2000)

// function to set a given theme/color-scheme
function setTheme(themeName) {
    localStorage.setItem('theme', themeName);
    document.querySelector('body').className = themeName;
}
// function to toggle between light and dark theme
function toggleTheme() {
   if (localStorage.getItem('theme') === 'theme-dark'){
       setTheme('theme-light');
   } else {
       setTheme('theme-dark');
   }
}
// Immediately invoked function to set the theme on initial load
(function () {
   if (localStorage.getItem('theme') === 'theme-dark') {
       setTheme('theme-dark');
   } else {
       setTheme('theme-light');
   }
   if (localStorage.getItem('checked')==='true') {
       toggle.checked = true;
   } else {
       toggle.checked = false;
   }

})();

toggle.addEventListener('change', ()=> {
    if (toggle.checked) {
        setTheme('theme-dark');
        localStorage.setItem('checked', true);
    } else {
        setTheme('theme-light');
        localStorage.setItem('checked', false);

    }
});