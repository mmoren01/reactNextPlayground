---
title: 'Redux Basics'
date: '2021-07-05'
---

Being a SEIR has been a lot fun and instrumental in my growth. It has forced me to go back and take a deep dive into topics that I had a hard time understanding because it is now my job to help other understand those very same topics.

One of those topics is Redux. This week was my second time around helping people through Hack Reactor's Redux sprint and it's still a doozy. Here I attempt to spell out the basics of adding Redux to your project.

First of all, what is Redux? Redux is a state management library. It aims to give you more control of the state of your application by extracting away the state of your individual components and storing them all in a single source of truth, the store.

That's all well and good, but that's where all the headaches of learning Redux begin. As a beginner I thought to myself "I'm struggling with manipulating state in a parent component, now you want to put what where now?" Not to fear past me, future you is here to save you. Here are the basic building blocks of Redux.

**Store**

As per the Redux docs:
>*A store holds the whole state tree of your application. The only way to change the state inside it is to dispatch an action on it.*

This is your source of all truth. This is where you store state and this is where you pull state from to serve to your components.

An important part that some beginners seem to miss is that because your state in now located in the store there is little reason why your React components have to be class components. All the work of manipulating state will now be done via Redux, so our React components can not be lightweight functional components that accept props.

Speaking of manipulating state, let's see how that is done by starting with Actions.

**Actions**

As per the Redux docs:

>*An action is a plain object that represents an intention to change the state. Actions are the only way to get data into the store. Any data, whether from UI events, network callbacks, or other sources such as WebSockets needs to eventually be dispatched as actions.*

An action is an object. It's as simple as that. At bare minimum an action is an object with a key/value pair of "type" and some string. Typically, you also add some data to the object known as the payload. The payload can be anything you want it to be. The payload will eventually be your new desired state.

For ease of use we typically define functions that accept the desired payload as it's arguments and return an action object with the correct type and desired payload. In Redux, every action has a... Reducer!

**Reducer**

Every action has a sibling counterpart known as a reducer. As per the Redux docs:

>*A reducer (also called a reducing function) is a function that accepts an accumulation and a value and returns a new accumulation. They are used to reduce a collection of values down to a single value.*

Also from the docs:

>*Reducers are the most important concept in Redux.*

This sibling counterpart is what takes the action object that we have previous created, analyzes it, and returns **a version** of state. Let's break this concept down further.

A reducer is a function that takes two parameters. It takes the current state as it's first parameter and an action object as it's second parameter. Now remember, our action objects must have an type property. The reason for that is that a reducer determines whether the payload will be returned based on an action's type. There are a few ways implement this in our reducers. The ways I've seen them done is by the use of switch statements or using if statements. In both cases, we analyze the value stored in our "type" key and if the statements match our expectations for a particular reducer the payload is returned. If the value at type does not match our expectation we return the original state that our function received.

A common pitfall for beginners is our reducer should under no circumstances return *undefined*. To avoid this scenario you can add an "or" statement as both the default state in our parameters and in our payload return statement

Now that we have our Redux building blocks. Let's hook them up to our React app. It's important to note at this point that the way we will hook up to our Redux components using a particular style. There are many styles, including using hooks. In this style we will make use of Container components and a Provider component.

**Container**

Containers are components that we wrap around our React components. Here is where most of the magic happens. We use containers to accomplish two tasks:
1. Connect our component to our store
2. Remove most of the logic from our React component

The connection to our store is done via four important functions:

- **mapStateToProps**: This function is named so as a convention. This is a function we define ourselves, using these guidelines. This function takes up to two parameters *state* and *ownProps*. In this post we won't go into the use cases of the second parameter. The first parameter is the state from our store. This function will return an object composed of state properties that will get passed to our component as props.

- **dispatch**: This is a Redux function. Specifically, *dispatch* is a method of our store, it is already defined. *dispatch* accepts one argument, an *action* and returns a value which will be considered the next *state*.
  - Behind the scenes *dispatch* sends the *action object* it received as it's argument to the proper reducer.

- **mapDispatchToProps**: This function is also named so as a convention. This function also takes a maximum of two parameters *dispatch* and *ownProps*. Again, we will ignore the use cases of *ownProps* in this post. This function returns an object where each key in the object will be a different prop, and the value will be a function that *dispatched* an action object.
>*Note: mapDispatchToProps can also be plain object. That is a different style that is out of our scope*

- **connect**: This is a Redux function. From the docs: *It provides its connected component with the pieces of the data it needs from the store, and the functions it can use to dispatch actions to the store.* It takes four parameters *mapToStateProps*, *mapDispatchToProps*, *mergeProps*, and *options*. For this blog post we will only focus on the first two. *connect* returns a wrapper component with the props it will inject.

When these four functions get declared and invoked in a very specific order they will connect your component to your store and populate your component with props that are derived from state. Additionally, your component will also have functions passed to it as props that will allow it to interact with your store and make changes to state via dispatched actions.

**Provider**

The final piece of our puzzle is our Provider. Provider is a Redux component that makes a Redux store available to any nested components. The Provider component will take one prop *store*, in which you pass the store. You typically wrap your root component in the Provider to allow any subsequently nested components access to the store.

One last trick is that your ReactDOM.render function can take a third argument called *context* where you can make calls to an API that you may need when your app first renders.

**That's it...**
Those are the basic concepts behind using Redux in your project. Redux is tricky and vast. When I first started writing this post I didn't know of many of the different options and styles that these basic building blocks could accept. I did my best to try and touch on the basics without getting lost in all the details. I hope this was useful to you. If you run into any issues, or if you notice something really dumb please feel free to reach out. I'm happy to make changes and adjustments.

Thanks for reading.