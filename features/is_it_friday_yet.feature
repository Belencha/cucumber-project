Feature: Is it Friday yet?
    Everybody wants to know when it's Friday

    Scenario Outline: Today is or is not Friday
        Given Today is "<day>"
        When I ask whether it's Friday yet
        Then I should be told "<answer>"

        Examples:
            | day            | answer           |
            | Monday         | Nopee            |
            | Friday         | Of coursee babyy |
            | anything else! | Nopee            |

