window.addEventListener('DOMContentLoaded', function() {
    console.log("DOM loaded");
    duplicateAndModify("https://www.example.com", "ytyfyfyftyf","fa-solid fa-thumbs-up fa-3x");
    duplicateAndModify("https://www.example.com", "hallo","fa-solid fa-thumbs-up fa-3x");
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
    clonedTile.querySelector('i').class = icon 
    console.log("i veranderd");

    // Append the cloned tile to the container
    document.getElementById('container').appendChild(clonedTile);
}
function remove_the_placeholder() {
    var originalTile = document.getElementById('tile');
    originalTile.remove();
}