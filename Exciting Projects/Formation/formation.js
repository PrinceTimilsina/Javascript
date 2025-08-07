const players = [
    { name: 'MBAPPE', x: 50, y: 30 },
    { name: 'VINICIUS', x: 20, y: 45 },
    { name: 'RODRYGO', x: 80, y: 45 },
    { name: 'JUDE', x: 50, y: 50 },
    { name: 'CAMA', x: 35, y: 60 },
    { name: 'FEDE', x: 65, y: 60 },
    { name: 'MENDY', x: 20, y: 75 },
    { name: 'RUDIGER', x: 40, y: 75 },
    { name: 'ASENCIO', x: 60, y: 75 },
    { name: 'TRENT', x: 80, y: 75 }
];

const pitch = document.querySelector('.pitch'); 

// Create input element for editing names
const nameInput = document.createElement('input');
nameInput.className = 'name-input';
document.body.appendChild(nameInput);

players.forEach(player => {
    const playerEl = document.createElement('div');
    playerEl.className = 'player';
    playerEl.innerHTML = `
        <div class="player-dot"></div>
        <div class="player-name">${player.name}</div>
    `;
    playerEl.style.left = `${player.x}%`;
    playerEl.style.top = `${player.y}%`;
    pitch.appendChild(playerEl);
    
    makeDraggable(playerEl);

    // Add double-click listener for name editing
    const nameEl = playerEl.querySelector('.player-name');
    nameEl.addEventListener('dblclick', (e) => {
        e.stopPropagation();
        
        // Position and show input
        const rect = nameEl.getBoundingClientRect();
        nameInput.style.left = rect.left + 'px';
        nameInput.style.top = rect.top + 'px';
        nameInput.style.width = rect.width + 'px';
        nameInput.value = nameEl.textContent;
        nameInput.style.display = 'block';
        nameInput.focus();

        // Handle input blur
        const handleBlur = () => {
            nameEl.textContent = nameInput.value;
            nameInput.style.display = 'none';
            nameInput.removeEventListener('blur', handleBlur);
            nameInput.removeEventListener('keypress', handleEnter);
        };

        // Handle enter key
        const handleEnter = (e) => {
            if (e.key === 'Enter') {
                nameInput.blur();
            }
        };

        nameInput.addEventListener('blur', handleBlur);
        nameInput.addEventListener('keypress', handleEnter);
    });
});

function makeDraggable(element) {
    let pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
    element.onmousedown = dragMouseDown;

    function dragMouseDown(e) {
        if (e.target.classList.contains('player-name')) return;
        e.preventDefault();
        pos3 = e.clientX;
        pos4 = e.clientY;
        document.onmouseup = closeDragElement;
        document.onmousemove = elementDrag;
    }

    function elementDrag(e) {
        e.preventDefault();
        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        pos3 = e.clientX;
        pos4 = e.clientY;
        
        const newTop = element.offsetTop - pos2;
        const newLeft = element.offsetLeft - pos1;
        
        // Keep player within pitch bounds
        const bounds = pitch.getBoundingClientRect();
        const elBounds = element.getBoundingClientRect();
        
        if (newTop >= 0 && newTop <= bounds.height - elBounds.height) {
            element.style.top = newTop + "px";
        }
        if (newLeft >= 0 && newLeft <= bounds.width - elBounds.width) {
            element.style.left = newLeft + "px";
        }
    }

    function closeDragElement() {
        document.onmouseup = null;
        document.onmousemove = null;
    }
}

function saveFormation() {
    const players = [];
    document.querySelectorAll('.player').forEach(player => {
        players.push({
            name: player.querySelector('.player-name').textContent,
            x: (player.offsetLeft / pitch.offsetWidth) * 100,
            y: (player.offsetTop / pitch.offsetHeight) * 100
        });
    });
    localStorage.setItem('formation', JSON.stringify(players));
    alert('Formation saved!');
}

function loadFormation() {
    const savedPlayers = JSON.parse(localStorage.getItem('formation'));
    if (savedPlayers) {
        document.querySelectorAll('.player').forEach((player, index) => {
            player.style.left = `${savedPlayers[index].x}%`;
            player.style.top = `${savedPlayers[index].y}%`;
            player.querySelector('.player-name').textContent = savedPlayers[index].name;
        });
    }
}