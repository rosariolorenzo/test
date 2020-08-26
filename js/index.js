
let pageWrapper = document.getElementById('page-wrapper');
let sideNavOpen = false;
document.getElementById('logoNav').addEventListener('click',toggleSidebar)

function toggleSidebar() {
    pageWrapper.classList.toggle('open-sidebar');
}