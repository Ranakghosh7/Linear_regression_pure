# Pure JavaScript Linear Regression  
This repository contains a complete from-scratch implementation of Linear Regression using pure JavaScript. No libraries, no frameworks, no hidden magic. One file, full math, full control. The goal is simple: prove that machine learning isn’t complicated when you understand the core formulas.

Linear Regression tries to fit a straight line through data points using the equation **y = mx + b**, where **m** is the slope and **b** is the intercept. We calculate them using the real statistical formulas:  
**m = Σ((x - x̄)(y - ȳ)) / Σ((x - x̄)²)**  
**b = ȳ - m * x̄**  
These are implemented manually in JavaScript using nothing but arrays and arithmetic operations.

The project includes one file:  
`linear_regression_pure.js`  
Running it with Node.js prints the computed slope, intercept, and a prediction example. To run:  
```
node linear_regression_pure.js
```  
Example output:  
```
🔥 Linear Regression Model Parameters:
Slope (m): 5
Intercept (b): -1
⚡ Prediction for x = 6: 29
```

This is a direct demonstration of how linear regression works internally, without hiding behind frameworks like scikit-learn or TensorFlow. If you can implement linear regression manually, you can understand any ML model better than most. Free, open, and simple — licensed under MIT.
