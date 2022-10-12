
import {describe, expect, test} from '@jest/globals';
import {Calculator} from "../Calculator";

describe('sum module', () => {
    test('adds 1 + 2 to equal 3', () => {
        let a = 1;
        let b = 2;
        let expected = 3;
        let calculator = new Calculator();

        expect(calculator.sum(a, b)).toBe(expected);
    });

    test('adds 0 + 0 to equal 0', () => {
        let a = 0;
        let b = 0;
        let expected = 0;
        let calculator = new Calculator();

        expect(calculator.sum(a, b)).toBe(expected);
    });

    test('adds -1 + -1 to equal -2', () => {
        let a = -1;
        let b = -1;
        let expected = -2;
        let calculator = new Calculator();

        expect(calculator.sum(a, b)).toBe(expected);
    });

    test('adds -1 + 2 to equal 1', () => {
        let a = -1;
        let b = 2;
        let expected = 1;
        let calculator = new Calculator();

        expect(calculator.sum(a, b)).toBe(expected);
    });
});

describe("sub module", () => {
    test("test sub 1 - 1 to equal 0", () => {
        let a = 1;
        let b = 1;
        let expected = 0;
        let calculator = new Calculator();

        expect(calculator.sub(a, b)).toBe(expected);
    })

    test("test sub -11 - 1 to equal -12", () => {
        let a = -11;
        let b = 1;
        let expected = -12;
        let calculator = new Calculator();

        expect(calculator.sub(a, b)).toBe(expected);
    })


    test("test sub -11 - (-1) to equal -10", () => {
        let a = -11;
        let b = -1;
        let expected = -10;
        let calculator = new Calculator();

        expect(calculator.sub(a, b)).toBe(expected);
    })

    test("test sub 11 - (-1) to equal 12", () => {
        let a = 11;
        let b = -1;
        let expected = 12;
        let calculator = new Calculator();

        expect(calculator.sub(a, b)).toBe(expected);
    })
})
