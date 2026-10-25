
let videoBox = document.getElementById("videoBox");
let sctni = document.getElementById("sctn2_i")
videoBox.addEventListener("click", function() {
    
    videoBox.innerHTML = `
        <iframe
            src="https://www.youtube.com/embed/oz7wmF51Gwk?si=Ue4-H8NFNxtlJTRs"
            allow="autoplay; encrypted-media; picture-in-picture"
            allowfullscreen>
        </iframe>
    `;
    sctni.style.display = "none"

});
videoBox.onclick = function(pproject2){
    pproject2.preventDefault();
    sctni.style.display = "none";

}