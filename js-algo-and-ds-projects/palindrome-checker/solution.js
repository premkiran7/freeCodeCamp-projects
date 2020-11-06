function palindrome(str) {
  // remove non-alphanumeric characters, _ and convert to lower case
  let regexp = new RegExp("[\\W_]", "g");
  str = str.replace(regexp, "").toLowerCase();

  // split strings into two parts
  let strLength = str.length;
  console.log(str);
  let firstPart = str.slice(0, strLength / 2);
  let revSecondPart = str
    .slice(strLength % 2 == 0 ? strLength / 2 : strLength / 2 + 1, strLength)
    .split("")
    .reverse()
    .join("");

  // check if first part and reversed second part are same
  if (firstPart === revSecondPart) {
    console.log("Palindrome");
    return true;
  }
  console.log("Not A Palindrome");
  return false;
}

palindrome("0_0 (: /- :) 0-0");
