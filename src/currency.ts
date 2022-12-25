// let amount = 1400;

// US-USD, BD-BDT, UG-UGX, GB-GBP(pound simble),
// let formatted = new Intl.NumberFormat("en-GB", {
//     style: 'currency',
//     currency: 'GBP'
// }).format(amount);

// console.log(formatted);

let Form = document.querySelector('#myForm');
let inputField = document.querySelector('#money') as HTMLInputElement;

Form?.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const target = e.target as HTMLElement;

    let amount = inputField?.value;
    let formatted = new Intl.NumberFormat("en-US", {
        style: 'currency',
        currency: 'USD'
    }).format(amount);

    inputField.value = formatted;

    const p = document.createElement('p');
    p.innerText = formatted;

    target.parentNode?.appendChild(p);

    console.log(formatted)
})