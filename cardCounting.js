//JS program to count high and low cards in Black Jack, then tell the user if they should bet or hold.
//Don't get caught with this in Las Vegas!

var count = 0;

function cc(card) {
  if (card === 2 || card === 3 || card === 4 || card === 5 || card === 6) {
    count += 1;
  } else if (card === 10 || card === 'J' || card === 'Q' || card === 'K' || card === 'A') {
    count -= 1;
  }
  
  if (count > 0) {
    return count + " Bet";
  } else {
    return count + " Hold";
  }
  
  return "Unable to advise";
}
