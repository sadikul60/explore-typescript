"use strict";
// Explore DOM manipulation of TypeScript
var submitButton = document.getElementById('submit-btn');
var inputName = document.getElementById('inputName');
var inputEmail = document.getElementById('inputEmail');
var handleSubmit = (function (event) {
    var _a, _b;
    // console.log( inputName?.value, inputEmail?.value );
    var target = event.target;
    var h3 = document.createElement('h3');
    var p = document.createElement('p');
    h3.innerText = inputName === null || inputName === void 0 ? void 0 : inputName.value;
    p.innerText = inputEmail === null || inputEmail === void 0 ? void 0 : inputEmail.value;
    (_a = target === null || target === void 0 ? void 0 : target.parentNode) === null || _a === void 0 ? void 0 : _a.appendChild(h3);
    (_b = target === null || target === void 0 ? void 0 : target.parentNode) === null || _b === void 0 ? void 0 : _b.appendChild(p);
});
submitButton === null || submitButton === void 0 ? void 0 : submitButton.addEventListener('click', handleSubmit);
