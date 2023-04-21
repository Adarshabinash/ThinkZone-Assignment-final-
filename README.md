# ThinkZone-Assignment-final-

# Frontend:
Here I have created a students' registration form with input fields like name(text), gender(radio) and class(dropdown).

For this registration and validation process I have used react-hook-form and yup validator.

The react-hook-form gives us register and handleSubmit method for ease of making forms in react whereas yup allows us to define a schema which will ensure that the correct response is sent.

To integrate the schema with the form, we have to use yupResolver(since we have used a yup validator) and can use the validator with our registration form.


# Backend:
Here I have created a database which will store the information sent through the registration form.

