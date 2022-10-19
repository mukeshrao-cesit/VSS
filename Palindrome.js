function checkPalindrome(input) {
  var result = "";
  if (typeof input === "string") {
    if (input.trim() != "") {
      for (let i = input.length - 1; i >= 0; i--) {
        result += input.charAt(i);
      }
      return input === result ? "It's an palindrome" : "It's not an palindrome";
    } else {
      return "It's an empty string";
    }
  } else {
    return "Enter the valid data type";
  }
}

console.log(checkPalindrome("malayalam"));
