var writeUsButton = document.querySelector(".contact-link");
var writeUsPopup = document.querySelector(".modal-write-us");
var mapPopup = document.querySelector(".modal-map");
var mapButton = document.querySelector(".map-link");

function handlePopupToggle(popup) {
  return function () {
    if (popup) {
      popup.style.display = "block";
      var input = popup.querySelector("input");
      if (input) {
        input.focus();
      }

      var closeButton = popup.querySelector(".modal-close");
      if (closeButton) {
        closeButton.addEventListener('click', function () {
          popup.style.display = "none";
        })
      }
    }
  }
}

if (writeUsButton) {
  writeUsButton.addEventListener('click', handlePopupToggle(writeUsPopup))
}
if (mapButton) {
  mapButton.addEventListener('click', handlePopupToggle(mapPopup))
}
