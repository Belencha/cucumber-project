Feature: Add two numbers
    Our client needs to know the result of adding two integer numbers

    Scenario: 2 + 3
        Given I have two integer numbers: 2 y 3
        When I add the first one to the second one
        Then the result should be 5

    Scenario: 54 + -89
        Given I have two integer numbers: 54 y -89
        When I add the first one to the second one
        Then the result should be -35