const moves = ["north", "north", "west", "west", "north", "east", "north"];

const finalPosition = function(moves) {
  let xDir = 0;
  let yDir = 0;
  for (let i = 0; i <= moves.length; i++){
    if (moves[i] === "north"){
      yDir++;
    }
    else if (moves[i] === "south") {
      yDir--;
    }
    else if (moves[i] === "east") {
      xDir++
    }
    else if (moves[i] === "west") {
      xDir--
    }
  }
  return [xDir,yDir];
}
console.log(finalPosition(moves));
