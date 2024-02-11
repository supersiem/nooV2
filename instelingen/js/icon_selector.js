window.addEventListener('DOMContentLoaded', function() {
    laad_iconen();
    while (true) {
        console.log(selectit_icon)
    
    }
});
var selectit_icon = "fa-hart"
function laad_iconen() {



    const icons = [
        'fa-coffee',
        'fa-heart',
        'fa-star',
        'fa-envelope',
        'fa-search',
        'fa-user',
        'fa-home',
        'fa-cog',
        'fa-check',
        'fa-times',
        'fa-comment',
        'fa-paper-plane',
        'fa-calendar',
        'fa-briefcase',
        'fa-folder',
        'fa-camera',
        'fa-music',
        'fa-gamepad',
        'fa-code',
        'fa-globe',
        'fa-paint-brush',
        'fa-rocket',
        'fa-tree',
        'fa-lightbulb',
        'fa-coins',
        'fa-star',
        'fa-thumbs-up',
        'fa-thumbs-down',
        'fa-hourglass',
        'fa-key',
        'fa-umbrella',
        'fa-sun',
        'fa-moon',
        'fa-plane',
        'fa-bicycle',
        'fa-car',
        'fa-bus',
        'fa-train',
        'fa-ship',
        'fa-anchor',
        'fa-microphone',
        'fa-television',
        'fa-gamepad',
        'fa-lightbulb',
        'fa-magnet',
        'fa-bug',
        'fa-heartbeat',
        'fa-gift',
        'fa-leaf',
        'fa-umbrella-beach',
        'fa-bolt',
        'fa-crown'
    ];

    icons.forEach(icon => {
        var originalTile = document.getElementById('icon-temp');
        var pading = document.getElementById("padding").cloneNode(true);
        var clonedTile = originalTile.cloneNode(true);
        
        // Make adjustments here
        clonedTile.href = "javascript:icon_handelaar('" + icon + "');";
        clonedTile.querySelector('i').className = "fa-2x fa-solid " + icon; // Fixing the class name
    
        // Append the cloned tile to the container
        document.getElementById('container').appendChild(clonedTile);
        document.getElementById('container').appendChild(pading);
        console.log(clonedTile.href);
    });
    
    document.getElementById('icon-temp').parentNode.removeChild(document.getElementById('icon-temp'));
}
function icon_handelaar(icon) {
    selectit_icon = icon
    console.log(icon)
}
