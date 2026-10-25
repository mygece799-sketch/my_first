let services = document.querySelector(".services");
let dropdown = document.querySelector(".dropdown");
let service = document.getElementById("service")
let singleservice = document.getElementById("singleservice")


services.onclick = function(event) {

    event.preventDefault();

    if (dropdown.style.display === "block") {
        dropdown.style.display = "none";
        // window.location.href = "../pages/services.html";

    }else {
        dropdown.style.display = "block";
    }

};
service.onclick = function(service){
    service.preventDefault();
    window.location.href = "../pages/services.html";

}
singleservice.onclick = function(sservice){
    sservice.preventDefault();
    window.location.href = "../pages/SingleService.html";

}









let projectss = document.querySelector(".Project");
let dropdown2 = document.querySelector(".dropdown2");
let OurP = document.getElementById("OurP")
let ProjectD = document.getElementById("ProjectD")


projectss.onclick = function(event2) {

    event2.preventDefault();

    if (dropdown2.style.display === "block") {
        dropdown2.style.display = "none";
        // window.location.href = "../pages/services.html";

    }else {
        dropdown2.style.display = "block";
    }

};
OurP.onclick = function(Projectt){
    Projectt.preventDefault();
    window.location.href = "../pages/OurProjects.html";

}
ProjectD.onclick = function(pproject){
    pproject.preventDefault();
    window.location.href = "../pages/projectDetail.html";

}


let blogss = document.querySelector(".blogss");
let dropdown3 = document.querySelector(".dropdown3");
let blog = document.getElementById("blog")
let blogD = document.getElementById("blogD")


blogss.onclick = function(event3) {

    event3.preventDefault();

    if (dropdown3.style.display === "block") {
        dropdown3.style.display = "none";
        // window.location.href = "../pages/services.html";

    }else {
        dropdown3.style.display = "block";
    }
};
blog.onclick = function(blg){
    blg.preventDefault();
    window.location.href = "../pages/blog.html";

}
blogD.onclick = function(blgd){
    blgd.preventDefault();
    window.location.href = "../pages/blogDet.html";

}
let body = document.querySelector("main");
let icons = document.querySelector(".icon")
let nav = document.querySelector(".action")

icons.onclick = function(navs) {
    navs.preventDefault();
    if (nav.style.display === "flex"){
        nav.style.display = "none";
        body.style.filter = "none";
    }else{
        nav.style.display = "flex";
        body.style.filter = "blur(5px)";
        // nav.style.
    }
}


let currentPage = window.location.pathname.split("/").pop();

document.querySelectorAll(".action li a").forEach(function(link) {
    let href = link.getAttribute("href");

    if (!href || href === "#") return;

    let linkPage = href.split("/").pop();

    if (linkPage === currentPage) {
        link.closest("li").classList.add("burger");
    }
});

// function showContent(id) {
//     const contents = document.querySelectorAll(".footer_c");

//     contents.forEach(function(content) {
//         content.classList.remove("active");
//     });

//     document.getElementById(id).classList.add("active");
// }
