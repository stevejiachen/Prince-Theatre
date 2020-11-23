# Prince's Theatre code challenge

## Get started
clone the repo and cd to the root directory

## Get frontend running
`cd prince-theatre-ui`

`npm install`

`npm run start`

## Get backend running
`cd prince-theatre-service`

`npm install`

`npm run start`


**Note: the api key for movie catalogue is saved in .env file for code reviewer's convenience, it should not be committed to git repo in real case **

## Project Architect
### Frontend
* React
* React-router
* Redux
* Redux-saga
* Immutable
* Material-UI
* Styled-components
* axios

Solution:
1. simple react-router setup for movie list and movie detail pages
2. using redux for state management and redux-saga for side effect
3. using Material-UI for polishing(saving a bit styling time)



### Backend
* Express
* axios
* axios-retry

Solution: 
1. Since the third party api for movie catalogue is not stable, every request send to 
it has been apply a retry mechanism(default 5 times), this could cover most of the third party server down time(for this code test)
2. two provider's movie list been merged into one list(by movie's Title), while one provider's list not available,
the other one will be send to the frontend, avoid down time as much as possible
3. Movie detail from two providers also been combined in the backend, 5 times retry for each of them should
surfice most of the cases, in worst scenario, 'price unavialable' will be sent to the frontend and let user try later


### Assumption
movie ids are same for both of the providers after removing the prefix 'cw' and 'fw')


### trade-offs
1. Due to time limit, there isn't much unit/e2e test available for the code challenge
2. Frontend could also add a retry(auto & manual) when error occurs
3. Some caching could add to backend(eg Redis) for movie catalogue or movie detail if price not changing frequently
4. error handling for frontend
5. make the UI more visual attractive
6. prop-types checking for frontend
