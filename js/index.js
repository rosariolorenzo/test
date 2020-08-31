let pageWrapper = document.getElementById('page-wrapper');
document.getElementById('logoNav').addEventListener('click',toggleSidebar)
let body = document.getElementsByTagName('body')[0]

function toggleSidebar() {
    pageWrapper.classList.toggle('open-sidebar');
    body.classList.toggle('hide-overflow')
}
let bodysite = document.getElementById('body-site');
let isSidebarOpen = () => pageWrapper.className.includes('open-sidebar');
bodysite.addEventListener('click', () => {
    if(isSidebarOpen()) {
        toggleSidebar()
    }
})