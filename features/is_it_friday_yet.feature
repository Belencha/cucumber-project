Feature: Is it Friday yet?
    Everybody wants to know when it's Friday

    Scenario: Sunday isn't Friday
        Given Today is Sunday
        When I ask whether it's Friday yet
        Then I should be told "Nopee"

    Scenario: Friday is Friday
        Given Today is Friday
        When I ask whether it's Friday yet
        Then I should be told "Of coursee babyy"