var acc = document.getElementsByClassName("tab");
var i;

window.onload = function() {
acc.classList.add("active");
};

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var panel = this.nextElementSibling
        panel.classList.toggle("active");

        if (panel.classList.contains("active")) {
        panel.style.maxHeight = panel.scrollHeight + "px";
        } else {
         panel.style.maxHeight = "0";
        }
    });

    acc[i].classList.add("active");
var panel = acc[i].nextElementSibling;
if (panel) {
panel.classList.add("active");
panel.style.maxHeight = panel.scrollHeight + "px"; // Set initial max height
}
}