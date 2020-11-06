function rot13(str) {
  // convert alphabetic characters to ASCII equivalent
  let decodedStr = "";
  for (let index = 0; index < str.length; index++) {
    if (str[index].match(/[a-z]/i)) {
      let newCode =
        str.charCodeAt(index) - 13 < 65
          ? 91 - (65 - (str.charCodeAt(index) - 13))
          : str.charCodeAt(index) - 13;
      decodedStr += String.fromCharCode(newCode);
    } else {
      decodedStr += str[index];
    }
  }
  return decodedStr;
}

console.log(rot13("SERR PBQR PNZC"));
