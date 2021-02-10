## Things I learned in this project.

### for the authentication part
- using firebase for authentication.
    - implementing sign up using email and password.
    - implementing sign in using email and password.
    - forgot password option to reset password
    - updating user information in the update profile .
- using bootstrap components in react using _react-bootstrap_ and _bootstrap_ library.
- routing using the _react-router-dom_.
- making private routes.
- maintaing local environment variables in _.env.local_ file.( such that the variables a prepended bt **REACT_APP_** ).


### for the google drive clone part

- setting up firebase firestore and using its functions
    - make collection 
    - add documents to the collection
    - read the documents by id
    - filter out the rewuired documents from the collection using _where()_ function
    - index the databse when getting data in a particular order
- understanding the data structure that an be used to implement folder structure
- making custom hooks (__useFolder__ hook)
- __using the useReducer hook__ 
- making breadcrumbs using bootstrap
- using bootstrap component as __Link__ component 
- using the slice function on Array    // to learn 


- setting up the firebase rules
    > such that only the authenticated users can read the data i.e the folders, also to create a folder we need to have the same authId as the authid We are using to created the folder with. 
    
    - >thus another user cannot see nor create a folder of a different user