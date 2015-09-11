
// Write a function that takes as its input a string and returns an array of arrays as shown below sorted in descending order by frequency and then by ascending order by character.

var characterFrequency = function(string) {
  var letter, result = [], frequencies = {}, i;
  // store unique characters and their frequencies
  for (i = 0; i < string.length; i++) {
    letter = string.charAt(i);
    frequencies[letter] = frequencies[letter] || 0;
    frequencies[letter]++;
  }
  // push pairs into final result array
  for (var letter in frequencies) {
        result.push([letter, frequencies[letter]])
  }
  // sort pairs appropriately
  result.sort(function(a, b) {
    if (a[1] > b[1]) return -1;
    else if (a[1] < b[1]) return 1;
    else if(a[0] < b[0]) return -1;
    else if(a[0] > b[0]) return 1;
  });
  return result;
};
