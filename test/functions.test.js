// IMPORT MODULES under test here:
import { 
    addExclamationPoints,
} from '../functions.js';

const { test } = QUnit;

test('addExclamationPoints should take a string and add return an new string that adds three exclamation points to the argument', (expect) => {
    const expected = 'puppy!!!';
    const actual = addExclamationPoints('puppy');

    expect.equal(actual, expected);
});