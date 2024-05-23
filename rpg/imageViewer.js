var leftbtn = document.getElementsByClassName("leftbtn")[0]
    var rightbtn = document.getElementsByClassName("rightbtn")[0]
    var counter = 1
    var imgarray = document.getElementsByClassName("gameimg")
    var counterelement = document.getElementsByClassName("imgcounter")[0]
    

    rightbtn.addEventListener("click", nextimg)
    leftbtn.addEventListener("click", previmg)
function nextimg() {
    if (counter < imgarray.length) {
        
        imgarray[counter-1].classList.remove("z")
        counter++
        imgarray[counter-1].classList.add("z")
        counterelement.innerHTML = "Image " + counter + " of " + imgarray.length

    }
    else {
        imgarray[counter-1].classList.remove("z")
        counter = 1
        imgarray[counter-1].classList.add("z")
        counterelement.innerHTML = "Image " + counter + " of " + imgarray.length
    }
    
}
function previmg() {
    if (counter > 1) {
        imgarray[counter-1].classList.remove("z")
        counter--
        imgarray[counter-1].classList.add("z")
        counterelement.innerHTML = "Image " + counter + " of " + imgarray.length
    }
    else {
        imgarray[counter-1].classList.remove("z")
        counter = imgarray.length
        imgarray[counter-1].classList.add("z")
        counterelement.innerHTML = "Image " + counter + " of " + imgarray.length
    }

}
counterelement.innerHTML = "Image " + counter + " of " + imgarray.length