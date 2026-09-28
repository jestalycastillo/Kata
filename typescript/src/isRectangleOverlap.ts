function isRectangleOverlap(rec1: number[], rec2: number[]): boolean {
    const noOverlap =
    (rec1[2] ?? 0) <= (rec2[0] ?? 0) || // rec1 is left of rec2
    (rec1[0] ?? 0) >= (rec2[2] ?? 0) || // rec1 is right of rec2
    (rec1[3] ?? 0) <= (rec2[1] ?? 0) || // rec1 is below rec2
    (rec1[1] ?? 0) >= (rec2[3] ?? 0);   // rec1 is above rec2

    return !noOverlap;
};

isRectangleOverlap([0, 0, 2, 2], [1, 1, 3, 3]);