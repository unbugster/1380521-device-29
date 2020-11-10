var writeUsButton = document.querySelector(".contact-link");
var writeUsPopup = document.querySelector(".modal-write-us");
var mapButton = document.querySelector(".map-link");
var mapPopup = document.querySelector(".modal-map");

var form = writeUsPopup.querySelector("form");
var loginLogin = writeUsPopup.querySelector("[name=name]");
var loginEmail = writeUsPopup.querySelector("[name=email]");

function handlePopupToggle(popup) {
  return function (evt) {
    evt.preventDefault();
    if (popup) {

      popup.classList.add("modal-show")
      var input = popup.querySelector("input");
      if (input) {
        input.focus();
      }

      if (storage) {
        loginLogin.value = storage;
        loginPassword.focus();
      } else {
        loginLogin.focus();
      }

      var closeButton = popup.querySelector(".modal-close");
      if (closeButton) {
        closeButton.addEventListener('click', function () {
          popup.classList.remove("modal-show");
          popup.classList.remove("modal-error");
        })
      }

      window.addEventListener("keydown", function (evt) {
        if (evt.keyCode === 27) {
          if (popup.classList.contains("modal-show")) {
            evt.preventDefault();
            popup.classList.remove("modal-show");
          }
        }
      })
    }
  }
}

if (writeUsButton) {
  writeUsButton.addEventListener('click', handlePopupToggle(writeUsPopup))
}
if (mapButton) {
  mapButton.addEventListener('click', handlePopupToggle(mapPopup))
}


var isStorageSupport = true;
var storage = "";

try {
  storage = localStorage.getItem("login");
} catch (err) {
  isStorageSupport = false;
}


form.addEventListener("submit" , function(evt){
  if (!loginLogin.value || !loginEmail.value) {
    evt.preventDefault();

    writeUsPopup.classList.remove("modal-error");
    writeUsPopup.offsetWidth = writeUsPopup.offsetWidth;
    writeUsPopup.classList.add("modal-error");
  } else {
    if (isStorageSupport) {localStorage.setItem("login", loginLogin.value);
  }
  }
})



