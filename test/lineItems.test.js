// IMPORT MODULES under test here:
// import example from '../src/example.js';



import { findId, createDolareanout } from '../src/commen/calculateLineItems.js';

const test = QUnit.test;


test('findId', assert => {
    const arrayOfThings = [
        { name: 'spot', id: 3 }, 
        { name: 'rover', id: 2 },
    ];
    const expect = { name: 'spot' };

    const actual = findId(arrayOfThings, 3);

    assert.equal(actual.name, expect.name);
});

test('makeReadablePrice', assert => {
    const price = '2';
    const expect = '$2.00';

    const actual = createDolareanout(price);

    assert.equal(actual, expect);
});

