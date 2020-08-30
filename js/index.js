let pageWrapper = document.getElementById('page-wrapper');
document.getElementById('logoNav').addEventListener('click',toggleSidebar)

function toggleSidebar() {
    pageWrapper.classList.toggle('open-sidebar');
 
}
