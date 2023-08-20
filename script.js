// TO DO: let user choose grid size
const gridSize = 10; // 10 * 10
const defaultColor = '#E7E7E7';
const colorPicker = new Alwan('#color-picker');
const gridContainer = document.querySelector('.grid-container');

createGrid(gridSize);
const squares = document.querySelectorAll('.grid-square');

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
            square.style.backgroundColor = defaultColor;
            row.appendChild(square);
        }
    }

    createClickEvents();
}

function createClickEvents() {
    const options = document.querySelectorAll('.option');

    options.forEach( option => option.addEventListener('click', eventHandler));
    colorPicker.on('close', eventHandler); // when the color-picker's window closes

    function eventHandler(event) {
        if (event.type == 'close') { // it's the color picker
            draw('color');
        } else {

            const className = event.target.classList;
            const option = className[0];

            if (className[1] == 'draw') {
                draw(option) // RGB or brush mode
            } else if (option == 'reset') {
                reset();
            } else if (option == 'share') {
                share();
            }
        }
    }
}

function draw(mode) {
    squares.forEach( square => square.addEventListener('mouseover', colorHandler));

    function colorHandler(event) {

        switch(true) {
            case (mode == 'color'):
                this.style.backgroundColor = colorPicker.getColor().rgb;
                break;

            case (mode == 'RGB'):
                this.style.backgroundColor = `rgb(${getRandomRGB()})`;
                break;

            case (mode == 'brush'):
                this.style.backgroundColor = defaultColor;

        }
    }

    function getRandomRGB() {
        let rgb = [];

        for (i = 1; i <= 3; i++) {
            rgb.push(Math.floor(Math.random() * 255));
        }

        return rgb.join();
    }
}

function reset() {
    squares.forEach( square => square.style.backgroundColor = defaultColor);
}