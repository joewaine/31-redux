This lab was a heck of a challenge to get my head around - the concepts of Redux are starting to sink in, but I think I am getting somewhere.

Feature Tasks
category
in this app a category should contain at least the following properties
id a uuid
timestamp a date from when the category was created
name a string that is the name of the category
budget a number that is the total amount of $ in the category
feel free to add more to your categories
redux
reducer
create a category reducer in your reducer directory
this reducer should support the following interactions
CATEGORY_CREATE
CATEGORY_UPDATE
CATEGORY_DESTORY
action creators
you should create an action creator for each interaction supported by your category reducer
store
in lib/store.js export a function that will return a new redux store from your category reducer
Components
Create the following components and structure them according to the following diagram.

App
  Provider
    BrowserRouter
      Route / Dashboard
        CategoryForm -- for creating categories
        [Category Item]
           CategoryForm  -- for updating categories
App Component
The App component should set up the Provider for the redux store and the Router.

Dashboard Component
should be displayed on the / route
should use react-redux's connect to map state and dispatchable methods to props
should display a CategoryForm for adding categories to the app state
should display a CategoryItem for each category in the app state
CategoryForm Component
should expect an onComplete prop to be a function
that function should be invoked with the CategoryForms state when the form is submitted
should expect a buttonText prop to configure the submit buttons text
should support an optional category prop that will initialize the state of the form
CategoryItem Component
should display the category's name and budget
should display a delete button
onClick the category should be removed from the application state
should display a CategoryForm
onComplete the form should update the component in the application state