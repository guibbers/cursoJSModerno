let varA = 'A'; // B
let varB = 'B'; // C
let varC = 'C'; // A
// let backupVar;

// backupVar = varA;
// varA = varB;
// varB = varC;
// varC = backupVar;

[varA, varB, varC] = [varB, varC, varA]

console.log(varA, varB, varC);