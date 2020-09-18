const accordionItemHeaders = document.querySelectorAll(".accordion-header");

accordionItemHeaders.forEach(function (accordionItemHeader) {
  accordionItemHeader.addEventListener("click", function (event) {
    accordionItemHeader.classList.toggle("active");
  });
});
