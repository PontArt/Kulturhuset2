let searchinput = document.querySelector('#s')
let scrollToTopBtn = document.querySelector(".scrollToTopBtn")
let rootElement = document.documentElement
const TOGGLE_RATIO = 0.80

function toggle() {
    searchinput.style.display === 'inline' ? searchinput.style.display = 'none' :
        searchinput.style.display = 'inline'
}

function handleScroll() {
    // do something on scroll
    let scrollTotal = rootElement.scrollHeight - rootElement.clientHeight
    if ((rootElement.scrollTop / scrollTotal) > TOGGLE_RATIO) {
        //show button
        scrollToTopBtn.classList.add("showBtn")
    } else {
        //hide button
        scrollToTopBtn.classList.remove("showBtn")
    }
}

function scrollToTop() {
    //scroll to top logic
    rootElement.scrollTo({
        top: 0,
        behavior: "smooth"
    })
}

scrollToTopBtn.addEventListener("click", scrollToTop)
document.addEventListener("scroll", handleScroll)