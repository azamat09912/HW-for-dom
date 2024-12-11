document.getElementById("green").addEventListener("click", function() {
    document.getElementById("box").style.backgroundColor = "green";
});

document.getElementById("weight").addEventListener("click", function() {
    let box = document.getElementById("box");
    box.style.width = (parseInt(window.getComputedStyle(box).width) + 20) + "px";
});

document.getElementById("height").addEventListener("click", function() {
    let box = document.getElementById("box");
    box.style.height = (parseInt(window.getComputedStyle(box).height) + 20) + "px";
});

document.getElementById("box").addEventListener("mouseenter", function() {
    document.getElementById("box").textContent = "Сіздің мышкаңыз қораптың ішінде!";
});

document.getElementById("box").addEventListener("mouseleave", function() {
    document.getElementById("box").textContent = "Сіздің мышкаңыз қораптан шығып кетті!";
});
