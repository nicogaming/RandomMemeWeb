//enumere kontrolleret kaos
var dancing=["images/never_gonna_gif_you_up.gif","images/dancing_boy.gif"]
function easterEgg()
{
    var random = Math.floor((Math.random() * 2) + 0)
    var image = document.createElement("img")
    image.src = dancing[random]
    document.body.appendChild(image)

}