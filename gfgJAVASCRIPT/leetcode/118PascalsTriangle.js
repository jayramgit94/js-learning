function generate(numRows) {
    const pascal = []; // Array to hold all rows

    for (let i = 0; i < numRows; i++) {
        const row = Array(i + 1).fill(1); // Initialize row with 1s

        // Calculate in-between values
        for (let j = 1; j < i; j++) {
            row[j] = pascal[i - 1][j - 1] + pascal[i - 1][j];
        }

        pascal.push(row); // Add the row to the triangle
    }

    return pascal;
}

console.log(generate(5));
