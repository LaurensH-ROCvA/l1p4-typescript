var scope = 'superscope';
var aantal = 0;
function testScope() {
    let scope = 'lokelescope';
    aantal++;
    console.log('\tDit is test nummer: ' + aantal);
    console.log('\tFunction scope is: ' + scope);
}
console.log('\tScript scope is: ' + scope);
testScope();
testScope();
