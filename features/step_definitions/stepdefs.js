const assert = require("assert");
const { Given, When, Then } = require("cucumber");

function isItFriday(today) {
  // We'll leave the implementation blank for now
  if (today === "Friday") return "Of coursee babyy";
  else return "Nopee";
}

Given("Today is {string}", function(givenDay) {
  this.today = givenDay;
});

When("I ask whether it's Friday yet", function() {
  this.actualAnswer = isItFriday(this.today);
});

Then("I should be told {string}", function(expectedAnswer) {
  assert.equal(this.actualAnswer, expectedAnswer);
});

/* Adding operation */
Given("I have two integer numbers: {int} y {int}", function(int, int2) {
  this.number1 = int;
  this.number2 = int2;
});

When("I add the first one to the second one", function() {
  this.result = this.number1 + this.number2;
});

Then("the result should be {int}", function(int) {
  assert.equal(this.result, int);
});
