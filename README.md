# seedly-qa-interview-question
For seedly interview
## Share the steps on how you will plan out the QA for the above feature and user stories

| TC # | Use Case | TC name |
| :-:  | :-: | :-: |
| 1 | 1 | validate url of review page |
| 2 | 1 | User should be able to enter input for all prod search bar |
| 3 | 1 | User is able to enter input for main nav search bar |
| 4 | 1 | User is able to search for a related term on the main nav bar and click on it |
| 5 | 1 | User is able to search for the same result for partial searches |
| 6 | 1 | The number of search results are valid |
| 7 | 1 | User is able to see the search results for all products search bar |
| 8 | 2 | Should display logo on iphone-6 screen and navigate to the second page |
| 9 | 2 | Should display logo on ipad-2 screen and navigate to the second page |
| 10 | 2 | Should display logo on samsung-note9 screen and navigate to the second page |

###Thought process:
* Identify the straighthrough scenarios and focused automating first . 
* Identify any possible edge cases if possible . 

## How to run the cypress Tests
`npm test`

## Difficulties that i have encountered 
* The behavior of website is not congruent to the actual user behavior on a browser . I had to resort to an explicit wait to solve this . Given more time , I would have resorted to an implicit wait with alias on waiting for some of the seedly api calls to be done . 
* Given the lack of time , I had to put the test data within the spec files and page object files . Ideally , i would like consolidate the test data under one folder . 

## Additional plugins that i used:
cypress-real-events/support