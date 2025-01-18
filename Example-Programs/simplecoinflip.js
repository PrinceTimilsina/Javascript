let num = Math.random();

if (num > 0.5) {
  console.log("Heads");
} else {
  console.log("Tails");
}
//Explanation:
//Math.random():
//Math.random() generates a random number between 0 (inclusive) and 1 (exclusive), meaning it could be any value between 0 and just under 1. For example, it could generate values like 0.23, 0.89, 0.01, etc., but never exactly 1 or 0.
//The Condition num > 0.5:,The if (num > 0.5) condition is used to decide whether to print "Heads" or "Tails". Here's why:
//Since Math.random() generates a value between 0 and 1, the probability of getting a value greater than 0.5 is 50% (because half of the values between 0 and 1 will be greater than 0.5).
//The values greater than 0.5 will be mapped to "Heads".
//The values less than or equal to 0.5 will be mapped to "Tails".
//In this way, you are simulating a random coin flip where the two outcomes (Heads and Tails) are equally likely.