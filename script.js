let image = ["image/gall1.jpeg", "image/gall2.jpeg", "image/gall3.jpeg", "image/gall4.jpg", "image/gall5.jpg"]
let index = 0;
function chanImg() {
    index++;
    if (index >= image.length) {
        index = 0;
    }
    document.getElementById("slide").src = image[index];
}
setInterval(chanImg, 5000);



let acc = document.getElementsByClassName("accordion");
let i;
for (let i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
      this.classList.toggle("active");
      var panel = this.nextElementSibling;
      var arrow = this.querySelector(".arrow");
    if (panel.style.display === "block") {
      panel.style.display = "none";
      arrow.innerHTML = "&#10148;";
    } else {
      panel.style.display = "block";
       arrow.innerHTML = "&#x2B9F;";
    }
    })  
}