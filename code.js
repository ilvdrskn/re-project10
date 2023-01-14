window.onload = function() {
    var elem = document.getElementById("label");
    elem.onclick = function() {
        document.getElementById("profile").classList.toggle("hide");
        document.getElementById("links").classList.toggle("hide");
        document.getElementById("name").classList.toggle("dark");
    }
}