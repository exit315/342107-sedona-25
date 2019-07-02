var searchCallBtn = document.querySelector(".search-call-button");
var popup = document.querySelector(".modal-search");
var arrivalDate = popup.querySelector("[name=arrival-date]");
var departureDate = popup.querySelector("[name=departure-date]");
var adultsNum = popup.querySelector("[name=adults-number]");
var kidsNum = popup.querySelector("[name=kids-number]");
var visitersNumLess = popup.querySelectorAll(".visiters-number-less");
var visitersNumMore = popup.querySelectorAll(".visiters-number-more");

var isStorageSupport = true;
var storage = "";

try {
    storage = localStorage.getItem("adultsNum");
    } catch (err) {
                isStorageSupport = false;
    }

searchCallBtn.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.toggle("modal-close");
    popup.offsetWidth = popup.offsetWidth;
    popup.classList.remove("modal-error");
});

popup.addEventListener("submit", function (evt) {
    if (!arrivalDate.value || !departureDate.value || !adultsNum.value || !kidsNum.value) {
        evt.preventDefault();
        popup.classList.remove("modal-error");
        popup.offsetWidth = popup.offsetWidth;
        popup.classList.add("modal-error");
    }
});
