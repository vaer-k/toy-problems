
// Given a number of rounds n, return all the possible rock-paper-scissors play possibilities for that number of rounds.

function rockPaperPermutation (roundCount) {
  var moves = ['r', 'p', 's'];
  var result = [];

  if (roundCount === 0) {
    return [];
  }

  var recurse = function(round) {
    if(round.length === roundCount) {
      result.push(round);
      return;
    }
    for(var i = 0; i < moves.length; i++){
      round += moves[i];
      recurse(round);
      round = round.substr(0, round.length - 1); // "pop" the last letter from the string
    }
  }

  recurse('');

  return result;
};
