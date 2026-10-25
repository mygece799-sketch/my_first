let paragraphs = document.querySelector(".sctn1_cnt");

paragraphs.onclick = function(index){
    index.preventDefault();
        paragraphs.onclick(function(item){
            item.classList.remove("active");
        });
        paragraphs.classList.add("active")

};




// paragraphs.forEach(function(p){
//     p.addEventListener("click", function(){

//         paragraphs.forEach(function(item){
//             item.classList.remove("active");
//         });
//         p

//     });
// });