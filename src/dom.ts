// Explore DOM manipulation of TypeScript

const submitButton = document.getElementById('submit-btn');
const inputName = document.getElementById('inputName') as HTMLInputElement;
const inputEmail = document.getElementById('inputEmail') as HTMLInputElement;

const handleSubmit = ( (event: MouseEvent) => {
    // console.log( inputName?.value, inputEmail?.value );
    const target = event.target as HTMLElement;
    
    const h3 = document.createElement('h3');
    const p = document.createElement('p');
    h3.innerText = inputName?.value;
    p.innerText = inputEmail?.value;
    target?.parentNode?.appendChild(h3);
    target?.parentNode?.appendChild(p);
});

submitButton?.addEventListener('click', handleSubmit);