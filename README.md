# Micro Front-End

## Benefits

### Why use microfrontends?

Each application can now be thought of as separate independent apps.

Two different engineering teams inside of the same company, and they can decide to make radically different technical decisions for implementing each of these projects.

For example, one team could decide to build this project using react and maybe another team could use angular, vue, backbone, and/or vanilla javascript.

There's no direct communication between them.

There's no direct dependency between them.

It would be best to probably limit the number of frameworks being used.

Overall each engineering team can build their application with their own preferred
development style, whatever works best for them.

A container app is going to decide when and where to show each microfront end, so it really implies that the container needs to get access to the source code of the apps products.

Focus on different ways of implementing this, and focusing on the different ways of making sure the container gets access to the different apps is referred to as integration (assemble
together or orchestrate the different micro-frontends).

There are many ways of implementing integration. This way is not the only one. And each method has its pros and cons. It really comes down to requirements.

## Common Categories of Integration

Build-Time Integration (compile-Time Integration

Before Container gets loaded in the browser, it gets access to an apps source code

Run-Time Integration (client side integration)

After Container gets loaded in the browser, it gets access to an apps source code

## Server Integration

While sending down JS to load up Container, a server decides on whether or not to include an apps source code

For this demo, I’ve implemented build-time and run-time (majority run-time) integration. But, if this application needed a backend, then server integration would be an option to explore

[build-time and run-time integration examples]

### Pros and Cons for Build-Time Integration

- Pro: Easy to setup and understand

- Con: COntainer has to be re-deployed everytime an app is updated
  Con: Tempting to tightly couple the Container and other apps together

### Pros and Cons for Run-Time Integration

- **Pro:** An app can be deployed independently at any time

- **Pro:** Different versions of an App can be deployed and Container can decide which one to use (Notably good for AB testing)

- **Con:** Tooling and setup can be complicated. More complicated than Build-Time Integration (uses Webpack)

- **Using the Webpack module Federation, it’s flexible for this demo**

## Architecture

For this demo, no shared imports functinos/objects/classes etc with outher front-ends No shared state amongst front-ends. Just to prevent any coupling, and to elevaiate migration issues if this service is going to be replaced or discontinued.

Shared libraries via Module Federation The container does not need to be aware of the specific front-end frame-work Able to use a monorepo or a seperate repo. Seperate repos require more setup This demo is setup as a monorepo

## Routing Amongst Apps

Navigation is implemented in a geneic way, so different apps can communicate information about routing. In this case, routing implementation is done in the container app, and passed down to the sub apps. This repo's routing logic is inside of the container that's going to decide what sub app we want to show at any given time. And then inside of all the sub applications, there is routing logic to decide what actual page to display on the screen.

The reason for this is to be able to have different versions of react router or even different routing libraries entirely inside of each of these different applications. Whenever a copy of React Router is created, we have to tell it exactly what kind of history we want to use so we can utilize, browser history, memory, history or hash history.

The most common way of setting up navigation inside of micro-frontends and apps when it comes to history is to make use of browser history inside of your container and then memory history inside of all the different sub applications.

The reason's for this are, 
* Different sub applications and the container might have different routing solutions. 
* Second, even if they are using the same routing libraries, we might decide to use different versions between them entirely possible.
* If a developer decides to upgrade the version of the routing library inside, the container, there isn't the overhead of having to refactor all of the routing logic inside of all the different containers.
* This approach will allow access between multiple front-ends too.

A data management library would be recommended to take care of the data. But for this base repo, it is implemented without a data manager.

Routing libraries can really be thought of as two separate parts. First is the history object. The history object is an object that is used to figure out what path the user is currently visiting inside of application and then eventually make changes to that path as well.

These objects are:
* Browser History
* Hash History
* Memory History
(Each library may use different syntax for these objects)

The other component of these routing libraries is a router. The router is used to figure out what content to show to the user based upon the current path that they are visiting.

## React vs Create React App

Unable to use create react app because it has a version of webpack that doesn’t have support for the Module Federation plugin. Same with Vue CLI

Additionally, there’s a bunch of dependecies being used, and versions change all the time

[cz-cli](https://github.com/commitizen/cz-cli)

[commit lint](https://github.com/conventional-changelog/commitlint)

## Dependecies

* webpack (@5.4.0)

* webpack-cli (@4.2.0)

* webpack-dev-server (@3.11.0)

* faker (@5.1.0)
(Just use to generate fake data)

* html-webpack-plugin (@4.5.0)

* nodemon