// var names = ['Andrew', 'Julie', 'Jen'];
//
// names.forEach(function (name) {
//     console.log('forEach', name);
// });
//
// names.forEach((name) => {
//     console.log('arrowFunc', name);
// });
//
// names.forEach((name) => console.log(name));

// var returnMe = (name) => name + '!';
// console.log(returnMe('KaiMing'));

// var person = {
//     name: 'Andrew',
//     greet: function () {
//         names.forEach((name) => {
//             console.log(this.name + ' Say hi to ' + name);
//         });
//     }
// };
//
// person.greet();

// Challenge Area
// function add(a, b) {
//     return a + b;
// }

// addStatement
var addStatement=(a, b) => {
    return a + b;
};
console.log(addStatement(1,3));
console.log(addStatement(9,0));

// addExpression
var addExpression = (a, b) => a + b;

console.log(addExpression(5,3));
console.log(addExpression(9,1));
// console.log(add(1,3));
// console.log(add(9,0));

