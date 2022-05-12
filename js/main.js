///////////////////////////////////////////
// Resizing Slider

const inputs = document.querySelectorAll("input");
const div = document.querySelector("li");

function handleInputChange() {
    const units = this.dataset.units || "";

    document.documentElement.style.setProperty(
        `--${this.name}`,
        this.value + units
    );
}

inputs.forEach((input) => input.addEventListener("input", handleInputChange));
var range = $("input#range"),
    value = $(".range-value");
value.html(range.attr("value"));
range.on("input", function() {
    value.html(this.value);
});



var swiper = new Swiper('.blog-slider', {
    spaceBetween: 30,
    effect: 'fade',
    loop: true,
    mousewheel: {
        invert: false,
    },
    // autoHeight: true,
    pagination: {
        el: '.blog-slider__pagination',
        clickable: true,
    }
});

const finputs = Array.from(
    document.querySelectorAll('.file-upload [type="file"]')
);

finputs.forEach((input) => {
    input.addEventListener("change", (e) => {
        const path = e.target.value;
        const filenameField = e.target.parentElement.querySelector("span");
        const filename = path.split(/\/|\\/).pop();
        if (filename) filenameField.innerText = filename;
        else filenameField.innerText = "Filename";
    });
});