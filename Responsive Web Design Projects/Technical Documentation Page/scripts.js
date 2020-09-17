const accordionItemHeaders = document.querySelectorAll(".accordion-header");

console.log(accordionItemHeaders, "asd");

accordionItemHeaders.forEach(function (accordionItemHeader) {
  accordionItemHeader.addEventListener("click", function (event) {
    console.log(accordionItemHeader);
    accordionItemHeader.classList.toggle("active");
  });
});
