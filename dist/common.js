"use strict";
// (null, undefined, any) type, Type Assertions(as)
// Non-null Assertion Operator (Postfix!),
// Optional Chaining (?)
// Literal Type(value as type)
// Literal Inference(as const)
// null and undefined
// let user: User | null | undefined = null;
// assertions (as)
var user = {};
user = {
    name: 'user',
    email: 'user@email.com'
};
console.log(user === null || user === void 0 ? void 0 : user.email);
