let toggle = document.querySelector("#switch")

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