let nextBtn = document.querySelector(".next");
let prevBtn = document.querySelector(".prev");

nextBtn.addEventListener("click", () => {
    let bgItems = document.querySelectorAll(".item");
    document.querySelector('.slide').appendChild(bgItems[0])
})
prevBtn.addEventListener("click", () => {
    let bgItems = document.querySelectorAll(".item");
    document.querySelector('.slide').prepend(bgItems[bgItems.length-1])
    
})