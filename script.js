let rows = document.querySelector('#rows');
let columns = document.querySelector('#columns');

let button = document.querySelector('button');
let table = document.querySelector('#field');

const colors = ['red', 'green', 'blue'];

function getColor() {
    randomElement = Math.floor(Math.random() * colors.length);
    return colors[randomElement];
}

function getNextColor(arr, currentElem) {
    let currentElemIndex = arr.indexOf(currentElem);
    nextElem = (currentElemIndex + 1) % arr.length;
    return arr[nextElem];
}

button.addEventListener('click', function func() {
    let turns = 0;
    for (let i = 0; i < rows.value; i++) {
        let tr = document.createElement('tr');
    
        for (let j = 0; j < columns.value; j++) {
            let td = document.createElement('td');
            let currentColor = getColor(colors)
            td.classList.add(currentColor)
            td.addEventListener('click', function setNextColor() {
                let nextColor = getNextColor(colors, currentColor)
                td.classList.remove(currentColor);
                currentColor = nextColor;
                td.classList.add(currentColor);
                turns++
                let counter = 0;
    
                for (let k of table.children) {
                    for (let l of k.children) {
                        if (td.classList[0] == l.classList[0]) {
                            counter++
                        }
                    }
                }
                if (counter == (rows.value*columns.value)) {
                    alert(`Вы выиграли за: ${turns} ходов.`);
                    document.location.href='index.html';
                }
                else {
                    counter = 0;
                }
    
            })
            tr.appendChild(td);
        }
    
        table.appendChild(tr)
    }

    button.removeEventListener('click', func)
})


