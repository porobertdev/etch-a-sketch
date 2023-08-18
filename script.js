// TO DO: let user choose grid size
const gridSize = 10; // 10 * 10

const gridContainer = document.querySelector('.grid-container');


function getTestColor() {

    /*
        Helper function to test the grid until I add options
        to allow user selecting color.
    */

    const colors = [
        'red', 'blue', 'yellow', 'black',
        'green', 'purple', 'pink', 'cyan'
    ];

    function getRandomColor(colors) {
        return colors[Math.floor( Math.random() * colors.length - 1 / 10)];
    }

    return getRandomColor(colors);
}

function createGrid(size) {

    /*
        Grid is size * size (rows * columns).

        So, we create a row with *size* - 1 squares
        (index starts from 0) until we get to *size* - 1
        row on the first column, which means column[4][0].
    */

    // for each square on first column
    // i[0][0], i[1][0]. i[2][0] ... i[size - 1][0]
    for (i = 0; i < size; i++) {
        const row = document.createElement('div');
        row.classList.add('row');
        gridContainer.appendChild(row);
        
        // add *size* -1 rows for each
        for (j = 0; j < size; j++) {
            const square = document.createElement('div');
            square.classList.add('grid-square');
            square.style.backgroundColor = getTestColor();
            row.appendChild(square);
        }
    }
}

createGrid(gridSize);