// maak base
const baseElement = document.createElement("base");
baseElement.id = "baseElement";
baseElement.href = window.location.origin;
document.head.appendChild(baseElement);

// foto's
const images = document.getElementsByTagName("img");
for (let i = 0; i < images.length; i++) {
  images[i].src = window.location.origin + images[i].getAttribute("data-src");
}
