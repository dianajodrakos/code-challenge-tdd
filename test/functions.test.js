// IMPORT MODULES under test here:
import { 
    addExclamationPoints, multiplyBy12ThenHalve, multiplyBySeven,
} from '../functions.js';

const { test } = QUnit;

test('addExclamationPoints should take a string and add return an new string that adds three exclamation points to the argument', (expect) => {
    const expected = 'puppy!!!';
    const actual = addExclamationPoints('puppy');

    expect.equal(actual, expected, 'add !!!');
});

test('multiplyBySeven should take in a number and multiply it by seven', (expect) => {
    const expected = 14;
    const actual = multiplyBySeven(2);

    expect.equal(actual, expected, 'multiply 2 by 7');
});

test('multiplyBy12ThenHalve should take in a number and multiply it by twelve then cut the result in half', (expect) => {
    const expected = 24;
    const actual = multiplyBy12ThenHalve(4);

    expect.equal(actual, expected, 'multiply 4 by 12 then divide by 2');

});