 let navBar = document.querySelector('#header')

document.addEventListener("scroll", ()=> {
    let scrolltop = window.scrollY

    if(scrolltop > 0){
        navBar.classList.add('rolar')
    }else{
        navBar.classList.remove('rolar')
    }

})
