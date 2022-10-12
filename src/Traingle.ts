export class Traingle {
    check(a: number, b: number, c: number): string {
        if (a <= 0 || b <= 0 || c <= 0) {
            return "Cạnh tam giác phải > 0";
        }

        if (a + b <= c || a + c <= b || b + c <= a) {
            return "Khong la tam giác"
        }

        return "la tam giác"
    }
}
