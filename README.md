# Redux with TypeScript

This is all about understanding **Redux** & **TypeScript** together

## Process

1. User, Search some package name in a input
2. click on submit button
3. take that search term and search of the NPM API

## Install

    npx create-react-app redux-ts --template typescript

## Setting

    npm install --save-exact @types/react-redux@7.1.15 axios@0.21.1 react-redux@7.2.2 redux@4.0.5 redux-thunk@2.3.0

## API

> registry.npmjs.org/-/v1/search?text=react

## Redux Store

1. Fetching 'packages' from NPM
2. 'package' is a reserved keyword in Typescript
3. Call NPM packages 'repositories

repositories
-> data : List of repositories from NPM
-> loading : True/false whether we are fetching data
-> error : String , error message if one occurred during fetch

## Separate interfaces for Actions

-  SearchRepositories Action
-  SearchRepositoriesSuccess Action
-  SearchRepositoriesError Action

⇒ **Repositories Reducer**

## Big Issues with Redux/React-Redux + TS

-  Imports between files can turn into a mess very quickly
-  Communicating types over to you components can be challenging
-  Type definition files for Redux, React-Redux, and others are possibly over-engineered
