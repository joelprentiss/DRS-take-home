document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function(e){
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: "smooth"
        });
    });
});


function changeCss(){
    const css = document.getElementById('css-file');
    const darkMode = document.getElementById('dark-mode');

    if(darkMode.innerHTML == 'Dark Mode'){
        css.setAttribute('href', 'darkmode.css');
        darkMode.innerHTML = 'Light Mode';
    } else{
        css.setAttribute('href', 'main.css');
        darkMode.innerHTML = 'Dark Mode';
    }
};

document.getElementById('dark-mode').addEventListener('click', changeCss);