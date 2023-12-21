const currentPageInput = sessionStorage.getItem('currentPage') || "dashboard";

const linksEl = document.querySelectorAll('[data-page-target]')
const pagesEl = document.querySelectorAll('[data-page]');
const currentPage = document.getElementById('current-page')



linksEl.forEach(link =>{
    link.addEventListener("click", ()=>{
        const page = link.dataset.pageTarget;
        setActiveLinks(page);
    })
})



function setActiveLinks(page) {
    linksEl.forEach(link => {
        link.classList.remove('active'); 
        if (link.dataset.pageTarget === page) {
            link.classList.add('active');
        }
    });

    pagesEl.forEach(pageEl =>{
        pageEl.classList.add("hidden");

        if(pageEl.dataset.page == page){
            pageEl.classList.remove("hidden")
            
        }
    })

    currentPage.innerText = formatter.capitalizeFirstLetter(page);
    sessionStorage.setItem('currentPage', page);
}


setActiveLinks(currentPageInput)


// pageChanger

// formatter 

