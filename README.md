# ThinkZone-Assignment-final-

# Frontend:
Here I have created a students' registration form with input fields like name(text), gender(radio) and class(dropdown).

For this registration and validation process I have used react-hook-form and yup validator.

The react-hook-form gives us register and handleSubmit method for ease of making forms in react whereas yup allows us to define a schema which will ensure that the correct response is sent.

To integrate the schema with the form, we have to use yupResolver(since we have used a yup validator) and can use the validator with our registration form.


# Backend:
Here I have created a database which will store the information sent through the registration form.

Here I have used MongoDB, express, nodeJS and mongoose to connect to the database.

In the index page I have used the require method to call express and mongoose.Using mongoose I created a connection with the mongoDB.

Also I have used the app.use(express.json()) as middleware to handle the incoming requests with json payload.

Then I have simply run the app to connect to database.

In the model, I have used mongoose to create a schema according to which our collection will be created. I have mentioned the fields as mentioned in the registration form.We also have to export it to be used in the routeer.

In the routeer we have to invoke the express router to use it. Here we have 5 main methods- Get all the data, Get data with a given id with get method, Create a data through post method, Update a data through Patch method and finally delete a data through delete method.

Since we will have to deal with promise when we are making the api call, I have used the async and await method.

To check the api call, I have used a visual studio code extension called Thunder Client.


