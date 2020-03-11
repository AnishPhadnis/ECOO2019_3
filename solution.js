function sideScroll(jumpHeight, width, height, level){
  let position;
  let lposition;
  console.log(level);

  for(let i = 0; i <= level[level.length-1].length; i++){
    if(level[level.length - 2][i] == 'L'){
      lposition = i;
    }
  }

  for(let i = lposition; i <= level[level.length-1].length; i++){
    position = level[level.length - 2][i];

      if(position == '@'){
        if(level[level.length - (2 + jumpHeight)][i] == '@'){
          return i + 1
        }
        else{
          i += 1;
          continue;
        }
      }
      else if(position == 'G'){
        return 'CLEAR'
      }
    
  }

    
}


//let level = [['.', '.', '.', '.', '.', '.', '.', '.', '.', '.'], ['.', '.', '.', '.', '.', '.', '.', '@', '.', '.'], ['.', '.', '.', '.', '.', '.', '.', '@', '.', '.'], ['L', '.', '.', '.', '.', '.', '.', '@', '.', 'G'], ['#', '#', '#', '#', '#', '#', '#', '#', '#', '#']];

//let level = [['.', '.', '.', '.', '.', '.', '.', '.', '.', '.'], ['.', '.', '@', '.', '.', '@', '@', '.', '.', '.'], ['.', '.', '@', '.', '.', '.', '.', '.', '.', '.'], ['L', '.', '.', '.', '.', '.', '@', '.', '.', 'G'], ['#', '#', '#', '#', '#', '#', '#', '#', '#', '#']]

let level = [['.', '@', '.', '.', '.', '.', '.', '.', '.', '.'], ['.', '@', '@', '.', '.', '@', '@', '.', '.', '.'], ['.', '@', '@', '.', '.', '.', '.', '.', '.', '.'], ['.', '@', 'L', '.', '.', '.', '@', '.', '.', 'G'], ['#', '#', '#', '#', '#', '#', '#', '#', '#', '#']]

sideScroll(1, 10, 5, level);

