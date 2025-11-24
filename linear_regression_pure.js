/** 
 * ⚡ PURE JAVASCRIPT LINEAR REGRESSION
 * No frameworks. No training wheels. Just math and dominance.
 * This code calculates the exact regression line and predicts with precision.
 */

// Dataset — the numbers bow before the equation
const X = [1, 2, 3, 4, 5];
const Y = [5, 9, 15, 21, 25];

//  mean of a list
  const mean = arr => arr.reduce((a, b) => a + b, 0) / arr.length;

//  Compute slope (m) and intercept (b) manually
function linearRegression(x, y) {
  const xMean = mean(x);
  const yMean = mean(y);

  let numerator = 0;
  let denominator = 0;

  for (let i = 0; i < x.length; i++) {
    numerator += (x[i] - xMean) * (y[i] - yMean);
    denominator += (x[i] - xMean) ** 2;
  }

  const m = numerator / denominator;
  const b = yMean - m * xMean;

  return { m, b };
}


const { m, b } = linearRegression(X, Y);

console.log("🔥 Linear Regression Model Parameters:");
console.log(`Slope (m): ${m}`);
console.log(`Intercept (b): ${b}`);

// Prediction function 
function predict(x) {
  return m * x + b;
}


const input = 6;
const output = predict(input);

console.log(`⚡ Prediction for x = ${input}: ${output}`);
