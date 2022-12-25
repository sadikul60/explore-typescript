"use strict";
// let amount = 1400;
// US-USD, BD-BDT, UG-UGX, GB-GBP(pound simble),
// let formatted = new Intl.NumberFormat("en-GB", {
//     style: 'currency',
//     currency: 'GBP'
// }).format(amount);
// console.log(formatted);
var Form = document.querySelector('#myForm');
var inputField = document.querySelector('#money');
Form === null || Form === void 0 ? void 0 : Form.addEventListener('submit', function (e) {
    var _a;
    e.preventDefault();
    var target = e.target;
    var amount = inputField === null || inputField === void 0 ? void 0 : inputField.value;
    var formatted = new Intl.NumberFormat("en-US", {
        style: 'currency',
        currency: 'USD'
    }).format(amount);
    inputField.value = formatted;
    var p = document.createElement('p');
    p.innerText = formatted;
    (_a = target.parentNode) === null || _a === void 0 ? void 0 : _a.appendChild(p);
    console.log(formatted);
});
