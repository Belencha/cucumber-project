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
