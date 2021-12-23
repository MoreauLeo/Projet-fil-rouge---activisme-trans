const btnToggle = document.querySelector ('.btn-toggle') ;

btnToggle.addEventListener ('click', () => {
    const body = document.body;

    if(body.classList.contains('dark')){
        body.classList.add('light')
        body.classList.remove('dark')
        btnToggle.innerHTML = "Thème sombre"


    }else if(body.classList.contains('light')){
        body.classList.remove('light')
        body.classList.add('dark')
        btnToggle.innerHTML = "Thème clair"
    }
} )