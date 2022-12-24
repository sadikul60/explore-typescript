// (null, undefined, any) type, Type Assertions(as)
// Non-null Assertion Operator (Postfix!),
// Optional Chaining (?)
// Literal Type(value as type)
// Literal Inference(as const)

interface User {
    name: string,
    email: string
}

// null and undefined
// let user: User | null | undefined = null;

// assertions (as)
let user = {} as User;

user = {
    name: 'user',
    email: 'user@email.com'
}

console.log(user?.email);