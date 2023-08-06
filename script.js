const mobileToggle = document.querySelector(".mobile-nav-toggle");
const navBar = document.querySelector("nav ul");

console.log(navBar)

mobileToggle.addEventListener('click', () => {
     const visibility = navBar.getAttribute('data-visible');

     if( visibility === 'false'){
        navBar.setAttribute('data-visible', true);
        mobileToggle.setAttribute('aria-expanded', true);
     }else{
        navBar.setAttribute('data-visible', false);
        mobileToggle.setAttribute('aria-expanded', false);
     }
    
})