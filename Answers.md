1. What problem does the context API help solve? 
    context api allows a child component to access a value in a parent component to avoid prop drilling
1. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?
    actions control state,reducer takes previous state and an action to return the next state store is where the data is held, and because the store is the only place to represent the state of the application
1. What is the difference between Application state and Component state? When would be a good time to use one over the other?
    application state may not have access to the entire applications state 
1. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?
    thunk allows us to write action creators that return a function instead of an action and can be used to set rules or delay a dispatch
1. What is your favorite state management system you've learned and this sprint? Please explain why!
    redux because its what i struggle with the most
