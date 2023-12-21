const sidebarTogglers = document.querySelectorAll('[data-sidebar-toggle]')

const sidebarEl = document.getElementById('sidebar')
const logoImg = document.getElementById('img-logo')

sidebarTogglers.forEach(toggler => {
    toggler.addEventListener('click', () => {
        const currentCollapseValue = sidebarEl.dataset.sidebarCollapse;
        sidebarEl.dataset.sidebarCollapse = currentCollapseValue === 'true' ? 'false' : 'true';
        toggleImg(currentCollapseValue);


    });
});



function toggleImg (currentCollapseValue){
    if(currentCollapseValue == 'true'){
        logoImg.src = '../assets/images/logo/logo.png';
    }else{
        logoImg.src = '../assets/images/logo/logo-collapsed.png'
    }
}

toggleImg('true')
