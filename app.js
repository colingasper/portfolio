//  Navigation bar cursor effect from tutorial //

let innerCursor = document.querySelector('.inner-cursor');
let outerCursor = document.querySelector('.outer-cursor');

document.addEventListener('mousemove', moveCursor);

function moveCursor(e) {
    let x = e.clientX;
    let y = e.clientY;
    innerCursor.style.left = `${x}px`;
    innerCursor.style.top = `${y}px`;
    outerCursor.style.left = `${x}px`;
    outerCursor.style.top = `${y}px`;
}

let links = Array.from(document.querySelectorAll('div.nav-link-wrapper'));


console.log(links);

links.forEach(link =>{
    link.addEventListener('mouseover', ()=>{
        innerCursor.classList.add('grow');
    });
    link.addEventListener('mouseleave', ()=>{
        innerCursor.classList.remove('grow');
    });
})

//  Personal experimentation to figure out how to include cursor effect to h1, h2, and p //

let h1 = Array.from(document.querySelectorAll('h1'));
let h2 = Array.from(document.querySelectorAll('h2'));
let p = Array.from(document.querySelectorAll('p'));
console.log(h1);

h1.forEach(h1 =>{
    h1.addEventListener('mouseover', ()=>{
        innerCursor.classList.add('grow');
    });
    h1.addEventListener('mouseleave', ()=>{
        innerCursor.classList.remove('grow');
    });
})

console.log(h2);

h2.forEach(h2 =>{
    h2.addEventListener('mouseover', ()=>{
        innerCursor.classList.add('grow');
    });
    h2.addEventListener('mouseleave', ()=>{
        innerCursor.classList.remove('grow');
    });
})

console.log(h2);

p.forEach(p =>{
    p.addEventListener('mouseover', ()=>{
        innerCursor.classList.add('grow');
    });
    p.addEventListener('mouseleave', ()=>{
        innerCursor.classList.remove('grow');
    });
})