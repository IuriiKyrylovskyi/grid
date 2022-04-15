let R, C;

let x=[-1, -1, -1, 0, 0, 1, 1, 1];

let y=[-1, 0, 1, -1, 1, -1, 0, 1];

function reverseWord (word) {
  return word.split("").reverse().join("");
}

function createGrid(incomingArr) {
  return incomingArr.map(arrRow => arrRow.split(''));
}

function search2D(arr,row,col,word)
{
  const grid = createGrid(arr);
		if (grid[row][col] != word[0])
			return false;

		let len = word.length;

		for (let dir = 0; dir < 8; dir++) {
			let k, rd = row + x[dir], cd = col + y[dir];

			for (k = 1; k < len; k++) {
				if (rd >= R || rd < 0 || cd >= C || cd < 0)
					break;

				if (grid[rd][cd] != word[k])
					break;

				rd += x[dir];
				cd += y[dir];
			}

			if (k == len)
				return true;
		}
		return false;
}

function patternSearch( grid,word, endWord)
{
		for (let row = 0; row < R; row++) {
			for (let col = 0; col < C; col++) {
				if (search2D(grid, row, col, word))
					return `${endWord}: [${row}, ${col}]`
			}
		}
}

function getResult(grid, word) {
  const reverse = reverseWord(word);
  const start = patternSearch(grid, word, 'start');
  const end = patternSearch(grid, reverse, 'end');
  return ({[word]: 
    {
    start,
    end
  }})
}

// Result calculations
R = 7;
C = 6;

let grid = [
  "_____l",
  "_c__o_",
  "_s_g__",
  "_hl___",
  "basic_",
  "_r____",
  "_p____",
]
getResult(grid, "algol");
console.log(getResult(grid, "algol"));
