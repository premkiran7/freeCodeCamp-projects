const accordionItemHeaders = document.querySelectorAll(".accordion-header");

accordionItemHeaders.forEach(function (accordionItemHeader) {
  accordionItemHeader.addEventListener("click", function (event) {
    console.log(accordionItemHeader);
    accordionItemHeader.classList.toggle("active");
  });
});
