function replaceName(){
    let namauser = prompt("Siapa nama anda?", "");
    document.getElementById("namauser").innerHTML = namauser
}

document.getElementById("Gantinamauser").addEventListener("click", function(){
    replaceName();
})


function validateForm(){
    const name = document.forms["message-form"]["full-name"].value
    const birthDate = document.forms["message-form"]["birth-date"].value
    const gender = document.forms["message-form"]["gender"].value
    const messages = document.forms["message-form"]["messages"].value
    
    if (name == "" || birthDate == "" || gender == "" || messages == ""){
        alert("Tidak boleh ada yang kosong");
        return false
    }

    setSenderUI(name,birthDate,gender,messages);
    return false;
}


function setSenderUI(name,birthDate,gender,messages){
    document.getElementById("sender-full-name").innerHTML = name;
    document.getElementById("sender-birth-date").innerHTML = birthDate;
    document.getElementById("sender-gender").innerHTML = gender;
    document.getElementById("sender-messages").innerHTML = messages;
}


let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}
