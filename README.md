# Form Validation with Formik and Styled-Components

This is a React project that demonstrates form validation using Formik to handle form state and Yup for validations. It also utilizes Styled-Components to style the components.

## **Select Language:**
- [Español (Spanish)](README-es.md)
- [English](README.md)

## Result
### Home
![Alt text](docs/home.PNG) 
### Validation 1
![Alt text](docs/1.PNG) 
### Validation 2
![Alt text](docs/2.PNG) 

## Installation

To install and run this project on your local machine, follow these steps:

1. Clone this repository to your local machine:

```
git clone https://github.com/Anyel-ec/Vite-React-FormValidation-Formik-Yup
```

2. Navigate to the project directory:

```
cd formik-validation
```

3. Install the project dependencies using npm:

```
npm install
```

## Usage

Once you have cloned the repository and installed the dependencies, you can start the development server by running the following command:

```
npm run dev
```

This will start the development server, and you can view the application in your web browser at [http://localhost:3000](http://localhost:3000).

## Features

The form includes the following fields:

- Name: Allows entering only text and has a maximum length of 50 characters.
- Last Name: Allows entering only text and has a maximum length of 50 characters.
- ID Number: Allows entering only numbers and must have exactly 10 digits.
- Phone Number: Allows entering only numbers and must have exactly 10 digits.
- Email: Must be a valid email address.
- Terms and Conditions Checkbox.
- Selection of one option among three possible options.

## Project Structure

The project has the following file structure:

- `src/`: Contains the source files of the application.
  - `components/`: Contains reusable components.
    - `Input.js`: Reusable input component with validation.
  - `App.js`: Main component of the application.
- `package.json`: npm configuration file with project dependencies.
- `README.md`: This file you are reading.

## Contribution

If you wish to contribute to this project, you can open an issue or submit a pull request with your improvements.

## License

This project is licensed under the MIT License. For more details, see the [LICENSE](LICENSE) file.
