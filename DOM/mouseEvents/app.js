//// Mouse Events

const clearBtn = document.querySelector('.clear-tasks');
const card = document.querySelector('.card');
const heading = document.querySelector('h5');

// Click

//clearBtn.addEventListener('click', runEvent);

// Double Click

// clearBtn.addEventListener('dblclick', runEvent);

// Mouse Down (click then release)

//clearBtn.addEventListener('mousedown', runEvent);

// Mouse Up (click then release)

//clearBtn.addEventListener('mouseup', runEvent);

// Mouse Enter (mouse hover over element)

//clearBtn.addEventListener('mouseenter', runEvent);

// Mouse Leave (fires after mouse leave element)

//clearBtn.addEventListener('mouseleave', runEvent);

// Mouse Over

//clearBtn.addEventListener('mouseover', runEvent);

// Mouse Out

clearBtn.addEventListener('mouseout', runEvent);

// Mouse Move

card.addEventListener('mousemove', runEvent);

// Event Handler

function runEvent(e){
    console.log(`EVENT TYPE: ${e.type}`);

    heading.textContent = `MouseX: ${e.offsetX} MouseY: ${e.offsetY}`;

    document.body.style.backgroundColor = `rgb(${e.offsetX}, ${e.offsetY}, 90)`;
}