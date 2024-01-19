let btnDL = document.getElementById("download");
let links = document.getElementById("links");


btnDL.addEventListener("click", (event) => {

    if (window.getComputedStyle(links).getPropertyValue("display") === "none")
        links.style.display = "flex";
    
});