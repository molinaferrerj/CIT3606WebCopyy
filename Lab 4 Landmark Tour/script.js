let myimage = document.getElementById("myimage");
let description = document.getElementById("description");
let myimageMap = document.getElementById("landmark");

CASradio.onclick = function() {
myimage.src = "V1.jpg";
description.innerHTML = "This is the City of Arts and Sciences, a cultural and architectural complex in Valencia, Spain.";
myimageMap.src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d197293.8141270794!2d-0.5263238810221507!3d39.40793427444244!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd604f4cf0efb06f%3A0xb4a351011f7f1d39!2sValencia%2C%20Spain!5e0!3m2!1sen!2sus!4v1759456480662!5m2!1sen!2sus";
}
Ayunradio.onclick = function() {
myimage.src = "V3.jpg";
description.innerHTML = "This is the Ayuntamiento de Valencia, the city hall of Valencia, Spain.";
myimageMap.src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12319.914657619935!2d-0.39550718565805587!3d39.46981070647715!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd6048ad7bf45aab%3A0x2ba4baea5a36e1e2!2sValencia%20City%20Hall!5e0!3m2!1sen!2sus!4v1759456869885!5m2!1sen!2sus"
}
Beachradio.onclick = function() {
myimage.src = "V2.jpg";
description.innerHTML = "This is Malvarrosa Beach, a popular beach in Valencia, Spain.";
myimageMap.src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12318.065066768018!2d-0.33828165169290725!3d39.480255607763695!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd60487a06475893%3A0x143e1fdf2b059794!2sLa%20Malva-rosa%2C%20Poblats%20Mar%C3%ADtims%2C%2046011%20Valencia%2C%20Spain!5e0!3m2!1sen!2sus!4v1759457034816!5m2!1sen!2sus"
}

imgsize.onchange = function() {
    if (this.value == "small") {
        myimage.width = 200;
        myimage.height = 150;
    }
    if (this.value == "medium") {
        myimage.width = 400;
        myimage.height = 300;
    }
    if (this.value == "large") {
        myimage.width = 600;
        myimage.height = 450;
    }
}