window.addEventListener('DOMContentLoaded', function() {
    console.log("DOM loaded");
    duplicateAndModify("https://www.example.com", "ytyfyfyftyf","fa-cloud");
    duplicateAndModify("https://www.example.com", "hallo","fa-thumbs-up");
    remove_the_placeholder();
});

function duplicateAndModify(link, text, icon) {
    console.log(link);

    // Get the original tile
    var originalTile = document.getElementById('tile');

    // Clone the original tile, including its children
    var clonedTile = originalTile.cloneNode(true);

    // Change the URL and text of the cloned tile
    clonedTile.href = link;
    console.log("a veranderd");
    clonedTile.querySelector('p').innerText = text;
    console.log("p veranderd");
    const Ielement = clonedTile.querySelector('i');
    Ielement.classList.remove("fa-thumbs-down");
    Ielement.classList.add(icon);
    console.log("i veranderd");

    // Append the cloned tile to the container
    document.getElementById('container').appendChild(clonedTile);
}
function remove_the_placeholder() {
    var originalTile = document.getElementById('tile');
    originalTile.remove();
}
function new_tile(text,icon,url) {
    //note the icon is using font awsom SIEM edision
    data = JSON.parse(localStorage.getItem("main"))
    data.naam

}
function setup() {
    // set the base json
    if(localStorage.length === 0) {localStorage.setItem("main",'{"gebruiker":{"naam":"NAAM"},"naam":["google"],"link":["https://google.com"],"icon":["fa-thumbs-up"]}' );}}