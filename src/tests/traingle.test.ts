import {describe, expect, test} from '@jest/globals';
import {Traingle} from "../Traingle";


describe("Data input > 0", () => {
    test("test with a = -2, b = 2, c = 3", () => {
        let a = -2;
        let b = 2;
        let c = 3;

        let  expected = "Cạnh tam giác phải > 0";

        let traingle = new Traingle();

        expect(traingle.check(a, b, c)).toBe(expected)
    })

    test("test with a = 2, b = -2, c = 3", () => {
        let a = 2;
        let b = -2;
        let c = 3;

        let  expected = "Cạnh tam giác phải > 0";

        let traingle = new Traingle();

        expect(traingle.check(a, b, c)).toBe(expected)
    })

    test("test with a = -2, b = 2, c = 3", () => {
        let a = -2;
        let b = 2;
        let c = 3;

        let  expected = "Cạnh tam giác phải > 0";

        let traingle = new Traingle();

        expect(traingle.check(a, b, c)).toBe(expected)
    })

    test("test with a = 2, b = 3, c = -2", () => {
        let a = 2;
        let b = 3;
        let c = -2;

        let  expected = "Cạnh tam giác phải > 0";

        let traingle = new Traingle();

        expect(traingle.check(a, b, c)).toBe(expected)
    })

    test("test with a = 0, b = 2, c = 1", () => {
        let a = 0;
        let b = 2;
        let c = 1;

        let  expected = "Cạnh tam giác phải > 0";

        let traingle = new Traingle();

        expect(traingle.check(a, b, c)).toBe(expected)
    })

    test("test with a = 2, b = 0, c = 1", () => {
        let a = 2;
        let b = 0;
        let c = 1;

        let  expected = "Cạnh tam giác phải > 0";

        let traingle = new Traingle();

        expect(traingle.check(a, b, c)).toBe(expected)
    })

    test("test with a = 2, b = 1, c = 0", () => {
        let a = 2;
        let b = 1;
        let c = 0;

        let  expected = "Cạnh tam giác phải > 0";

        let traingle = new Traingle();

        expect(traingle.check(a, b, c)).toBe(expected)
    })

    test("test with a = 1, b = 4, c = 2", () => {
        let a = 1;
        let b = 4;
        let c = 2;

        let  expected = "Khong la tam giác";

        let traingle = new Traingle();

        expect(traingle.check(a, b, c)).toBe(expected)
    })

    test("test with a = 4, b = 1, c = 2", () => {
        let a = 4;
        let b = 1;
        let c = 2;

        let  expected = "Khong la tam giác";

        let traingle = new Traingle();

        expect(traingle.check(a, b, c)).toBe(expected)
    })

    test("test with a = 2, b = 1, c = 4", () => {
        let a = 2;
        let b = 1;
        let c = 4;

        let  expected = "Khong la tam giác";

        let traingle = new Traingle();

        expect(traingle.check(a, b, c)).toBe(expected)
    })

    test("test with is traingle", () => {
        let a = 3;
        let b = 4;
        let c = 6;

        let  expected = "la tam giác";

        let traingle = new Traingle();

        expect(traingle.check(a, b, c)).toBe(expected)
    })
})
