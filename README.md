
## React-Redux Application: Would You Rather ?

This application was built in the spirit of learning and solidifying the essentials of working with Redux and React together. The user is able to log in as a mock user and participate in a series of "Would you rather?" style polling. Once they log in they are able to view all of the polls they have yet to answer, answer polls, review polls previously participated in and create new polls. They are also able to access a leaderboard which displays the list of users with the most created/answered polls combined. 

All of the state in this application is managed through Redux, which is the single source of truth for all data actions in this application.

## Launch Project in Development Environment

- install all project dependencies with `npm install`
- start the development environment with `npm start`

## Notes

"Logging in" to this application is only for show. Once you refresh the app or close it and come back, you will return to the previous state. The API is also a mock, local API so should you refresh or close the app and come back, the data will be reset to the base version.
