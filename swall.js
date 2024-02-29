  // Copy email address to clipboard
  var email = document.getElementById("email");
  email.addEventListener("mouseover", () => {email.innerHTML = "moore.caleb@gmail.com <span style=\"font-size:24px; line-height: 10px;\">&#x2398;<span>";});
  email.addEventListener("mouseout", () => {email.innerHTML = "moore.caleb@gmail.com";});

  function copyEmail() {
    var copyText = "moore.caleb@gmail.com";
    navigator.clipboard.writeText(copyText);
    // alert("Copied the text: " + copyText);
    swal({
      text: "Copied to clipboard!",
      // text: copyText,
      icon: "success",
    });
  }