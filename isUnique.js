/*
/ Implement an algorithm to determine if a string has all unique characters.
/ What if you cannot use additional data structures?
/
/ The solution implemented here runs in O(nlog(n)),
/ and doesn't use additional data structures
*/

function isUnique(str) {
  // String can't contain more chars than exist in set
  if (str.length > 128) {
    return false;
  }

  str = str.toLowerCase();
  strArray = str.split('');
  strArray.sort();

  for (var i = 0; i < strArray.length; i ++) {
    if (strArray[i] === strArray[i + 1]) {
      return false;
    }
  }

  return true;
}
