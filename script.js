const rows = 20;
const cols = 40;
const gridContainer = document.getElementById('grid-container');
let grid = []; 
let isMouseDown = false;

const START_ROW = 10, START_COL = 5;
const END_ROW = 10, END_COL = 35;


function createGrid() {
    gridContainer.style.gridTemplateColumns = `repeat(${cols}, 25px)`;
    
    for (let r = 0; r < rows; r++) {
        let rowArray = [];
        for (let c = 0; c < cols; c++) {
            const node = document.createElement('div');
            node.className = 'node';
            node.dataset.row = r;
            node.dataset.col = c;
            
            
            if (r === START_ROW && c === START_COL) node.classList.add('node-start');
            if (r === END_ROW && c === END_COL) node.classList.add('node-end');

            
            node.addEventListener('mousedown', () => { isMouseDown = true; toggleWall(node, r, c); });
            node.addEventListener('mouseenter', () => { if(isMouseDown) toggleWall(node, r, c); });
            node.addEventListener('mouseup', () => { isMouseDown = false; });

            gridContainer.appendChild(node);
            rowArray.push(node);
        }
        grid.push(rowArray);
    }
}

function toggleWall(node, r, c) {
    if ((r === START_ROW && c === START_COL) || (r === END_ROW && c === END_COL)) return;
    node.classList.toggle('node-wall');
}

document.addEventListener('mouseup', () => isMouseDown = false);

async function visualizeBFS() {
    let queue = [[START_ROW, START_COL]];
    let visited = new Set();
    let parentMap = new Map();
    visited.add(`${START_ROW},${START_COL}`);

    let found = false;

    while (queue.length > 0 && !found) {
        let [r, c] = queue.shift();

        if (!(r === START_ROW && c === START_COL)) {
            grid[r][c].classList.add('node-visited');
        }

        if (r === END_ROW && c === END_COL) {
            found = true;
            await reconstructPath(parentMap);
            return;
        }

        await new Promise(resolve => setTimeout(resolve, 10)); 

        const dirs = [[-1, 0], [1, 0], [0, -1], [0, 1]];
        for (let [dr, dc] of dirs) {
            let nr = r + dr, nc = c + dc;

            if (nr >= 0 && nr < rows && nc >= 0 && nc < cols) {
                let key = `${nr},${nc}`;
                if (!visited.has(key) && !grid[nr][nc].classList.contains('node-wall')) {
                    visited.add(key);
                    parentMap.set(key, [r, c]);
                    queue.push([nr, nc]);
                }
            }
        }
    }
    if(!found) alert("No path found!");
}

async function reconstructPath(parentMap) {
    let curr = [END_ROW, END_COL];
    let path = [];
    
    while (curr) {
        path.push(curr);
        let key = `${curr[0]},${curr[1]}`;
        curr = parentMap.get(key);
    }
    
    path.reverse(); 

    for (let [r, c] of path) {
        if (!((r === START_ROW && c === START_COL) || (r === END_ROW && c === END_COL))) {
            grid[r][c].classList.add('node-path');
            await new Promise(resolve => setTimeout(resolve, 30));
        }
    }
}

function clearBoard() {
    for(let r=0; r<rows; r++) {
        for(let c=0; c<cols; c++) {
            let node = grid[r][c];
            node.className = 'node';
            if (r === START_ROW && c === START_COL) node.classList.add('node-start');
            if (r === END_ROW && c === END_COL) node.classList.add('node-end');
        }
    }
}

createGrid();