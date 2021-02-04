# NateCo Employee Directory - A React app
Homework #19 React: Employee Directory

[Employee Directory Deploy Link](http://www.natemking.dev/employee_directory/)

[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://github.com/natemking/employee_directory/blob/main/LICENSE)

![css3 badge](https://img.shields.io/badge/css3%20-%231572B6.svg?&style=flat&logo=css3&logoColor=white)
![bootstrap badge](https://img.shields.io/badge/bootstrap%20-%23563D7C.svg?&style=flat&logo=bootstrap&logoColor=white")
![javascript badge](https://img.shields.io/badge/javascript%20-%23323330.svg?&style=flat&logo=javascript&logoColor=%23F7DF1E)
![react badge](https://img.shields.io/badge/react%20-%2320232a.svg?&style=flat&logo=react&logoColor=%2361DAFB")

---
## Table of Contents
 * [Description](#description)
    + [Scope of Work](#scope-of-work)
    + [Rendering](#rendering)
    + [State, Search, and Sort](#state-search-and-sort)
  * [Screenshots](#screenshots)
  * [License](#license)
  * [Credits](#credits)

## Description

### Scope of Work
User Story
```
As a user, 
I want to be able to view my entire employee directory at once so that I have quick access to their information.
I want to be able to sort them in ascending and descending order by all available columns
I want to be able to easily search for an employee 
```
The task at hand was to create a simple employee directory by using React. The employee list is provided from an API call to randomusers.me. The list must be searchable and sortable. 

### Rendering
The app can be broken down into five custom components. There are Header & Wrapper, Table & SearchBar, and TableRow. There is also an API util that is being imported into the Wrapper which in turn sends its data down to its children. Only the wrapper is Class Component. The rest of the components are stateless functional components. 

The API data is called on Wrapper mount and set to state. It is then sent to the Table via props and there it is run through the `map()` method before being rendered down to the TableRow component. The TableRow component is set up to take the data and assign it to a relative table cell. The full table is rendered in the Wrapper with the SearchBar component. The Wrapper and Header are then, in turn, rendered to App.js and then to root. 

### State, Search, and Sort
All of the search and sort functionality is taken care of in the Wrapper as this is the stateful component in the app. The sorting is triggered by an onClick event on dynamically appearing icons in the table heading. I was able to keep the sorting ability to one function for all columns. I achieved this by nesting ternary's and have a global variable that changes with every click. 

The search is taken care of in the `handleInputChange()` function. When a user types in characters into the search bar, the value is set to state. Then there is a nested async function that updates the rendered employee list. First, in the function, the current API results are set to a saved state object. This is needed so that when the user deletes characters the list reverse filters. Next, the live data is filtered based on what the user is entering and then that state is updated.
 

## Screenshots

![app gif](public/images/screenshots/employee-directory.gif)
<br>

![component tree](public/images/screenshots/app-component-tree.png)
<br>

## License
Licensed under the GNU GPLv3.0 License. Copyright © 2020

## Credits

* [Header Photo by Tanner Boriack on Unsplash](https://unsplash.com/@tannerboriack?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText)

* [Change bootstrap input focus glow](https://stackoverflow.com/questions/14820952/change-bootstrap-input-focus-blue-glow)

* [Applying lists and Keys correctly in React](https://reactjs.org/docs/lists-and-keys.html)

* [Sort and array of objects by keys of the objects](https://flaviocopes.com/how-to-sort-array-of-objects-by-property-javascript/) 

---

GitHub: [@natemking](https://github.com/natemking/)

Email: [natmeking@gmail.com](mailto:natmeking@gmail.com)

