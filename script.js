function handleImageClick(link){
  document.getElementById('product-image').src = link;
}

function cart(){
    alert("Item added to cart successfully!");
    window.location.href = "index.html";
}

function signin(){
  window.location.href = "login.html";
}

function otp(){
  window.location.href = "index.html";
  alert("OTP sent to your registered mobile number!");
}