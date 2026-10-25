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
    window.location.href = "./pages/services.html";

}
singleservice.onclick = function(sservice){
    sservice.preventDefault();
    window.location.href = "./pages/SingleService.html";

}