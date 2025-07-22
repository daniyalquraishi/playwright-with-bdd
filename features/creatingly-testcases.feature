@Creatingly
Feature: Login

  @testcase1
  Scenario: As a user, I want to add artboard
    Given I am on the Web Studio Apps Page
    When I click on Art Board
    And I pick the container and drop it to the artboard
    And I dropped a chart inside stack container
    And I resize the chart element to fit it into the container size
