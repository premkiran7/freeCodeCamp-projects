// add appropriate regex to identify us mobile numbers
function telephoneCheck(str) {
  let regexp = /^1?[ -]?(\(\d{3}\)|\d{3})[ -]?\d{3}[ -]?\d{4}$/i;
  return regexp.test(str);
}

console.log(telephoneCheck("(555) 555-5555"));
