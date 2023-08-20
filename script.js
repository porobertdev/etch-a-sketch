// TO DO: let user choose grid size
const minGridSize = 10;
const maxGridSize = 65;
let gridSize = 10; // 10 * 10
const defaultColor = '#E7E7E7';
const colorPicker = new Alwan('#color-picker', {color: 'rgb(253,197,145)'});
const gridContainer = document.querySelector('.grid-container');

createGrid(gridSize);
resize();
let squares = document.querySelectorAll('.grid-square');

function createGrid(size, resize) {

    // remove existing rows if grid was resized
    if (resize) {
        console.log('resizing detected...')
        const rows = document.querySelectorAll('.row');
        rows.forEach( row => gridContainer.removeChild(row));
    }

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
            
            if (resize) {
                const gridComp = window.getComputedStyle(gridContainer);
                const width = +(gridComp.getPropertyValue('width').replace('px', ''));
                const height = +(gridComp.getPropertyValue('height').replace('px', ''));
        
                square.style.width = `${width / gridSize}px`;
                square.style.height = `${height / gridSize}px`;
            }
            row.appendChild(square);
        }
    }

    createClickEvents();
}

function createClickEvents() {
    const options = document.querySelectorAll('.option img');

    options.forEach( option => option.addEventListener('click', eventHandler));
    colorPicker.on('close', eventHandler); // when the color-picker's window closes

    function eventHandler(event) {
        if (event.type == 'close') { // it's the color picker
            console.log('okkk');
            draw('color');
        } else {

            const className = event.target.parentElement.classList;
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

function resize() {
    gridContainer.addEventListener('wheel', scrollHandler);

    function scrollHandler(event) {
        
        if (event.wheelDelta > 0){ // wheel up: positive +168
            if (gridSize < maxGridSize) gridSize += 5;
            console.log(`wheel up: ${gridSize}`)
        } else if (event.wheelDelta < 0) { // wheel down: negative -168);
            if (gridSize > minGridSize) gridSize -= 5;
            console.log(`wheel down: ${gridSize}`);
        }

        // no point to recreate the grid if it's min/max size
        if (gridSize > minGridSize && gridSize < maxGridSize) {
            createGrid(gridSize, true);
        }
    }
}

function draw(mode) {
    // need to reselect the squares after resizing grid
    // TO DO: find a better solution
    squares = document.querySelectorAll('.grid-square');
    
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

function share() {
    html2canvas(document.querySelector("#capture")).then(canvas => {
        // Thanks to Stackoverflow: https://stackoverflow.com/a/59462270
        canvas.toBlob(blob => navigator.clipboard.write([new ClipboardItem({'image/png': blob})]))
    });
}