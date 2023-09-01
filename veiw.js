window.addEventListener("resize", setTableWidth);

function setTableWidth() {
    var table = document.getElementById("full-screen-table");
    var screenWidth = window.innerWidth;
    table.style.width = screenWidth + "px";
}

// Set initial table width on page load
setTableWidth();
