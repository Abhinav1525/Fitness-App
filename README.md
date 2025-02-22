# Gym Fitness App

Welcome to the Gym Fitness App! This project is a ReactJS-based web application designed to provide users with information about a fitness gym, including services, membership plans, gallery, contact details, and more.

## Features

- **Home Page**: An overview of the gym with background images and floating images.
- **About Us**: Information about the gym, its mission, and values.
- **Services**: Details about the various services offered by the gym, including personal training, group fitness, yoga, and nutrition diet training.
- **Membership**: Information about membership plans and benefits.
- **Gallery**: A gallery showcasing images of the gym facilities.
- **Contact**: Contact details and a form for users to get in touch with the gym.
- **Fees**: Information about the fees for different services and membership plans.
- **Diet Plans**: Details about the diet plans offered by the gym.

## Technologies Used

- **ReactJS**: A JavaScript library for building user interfaces.
- **React Router**: A library for routing in React applications.
- **Bootstrap**: A CSS framework for building responsive and mobile-first websites.
- **React Bootstrap**: Bootstrap components built with React.
- **CSS**: Custom styles for the application.
- **React Hooks**: Use different react features from different components. Ex - useState(), useEffect()
- **props**: These are the arguments passed to react components.

The provided App.js file is the main entry point for your React application. It sets up the routing for different pages of your gym fitness app using react-router-dom. Here’s a breakdown of the functionalities and components used in this file:

## Functionalities - 

- **Routing**: The application uses react-router-dom to handle client-side routing. The BrowserRouter component wraps the entire application to enable routing.
- **Navigation**: The Navbar component is included at the top of the application to provide navigation links to different pages.
- **Routes**: The Routes component contains multiple Route components that define the paths and the corresponding components to render for each path.
- **Footer**: The Footer component is included at the bottom of the application to provide footer content.

## Components and Their Functionalities - 

**1. Navbar**: This component provides navigation links to different pages of the application. It is always visible at the top of the page.

**2. Home**: This component is rendered when the user navigates to the root path (/). It typically contains an overview of the gym and its offerings.

**3. About**: This component is rendered when the user navigates to the /about path. It contains information about the gym, its mission, and values.

**4. Services**: This component is rendered when the user navigates to the /services path. It lists the various services offered by the gym, such as personal training, group fitness, yoga, and nutrition diet training.

**5. Gallery**: This component is rendered when the user navigates to the /gallery path. It showcases images of the gym facilities.

**6. Contact**: This component is rendered when the user navigates to the /contact path. It provides contact details and a form for users to get in touch with the gym.

**7. PersonalTraining**: This component is rendered when the user navigates to the /services/PersonalTraining path. It provides detailed information about personal training services.

**8. GroupFitness**: This component is rendered when the user navigates to the /services/GroupFitness path. It provides detailed information about group fitness classes.

**9. Yoga**: This component is rendered when the user navigates to the /services/Yoga path. It provides detailed information about yoga and meditation services.

**10. NutritionDietTraining**: This component is rendered when the user navigates to the /services/NutritionDietTraining path. It provides detailed information about nutrition guidance and diet training services.

**11. Footer**: This component provides footer content and is always visible at the bottom of the page.


## Starting the application - 
- Navigating to the directory: cd gym-fitness-app
- Start the development server: npm start
- Open your browser and navigate to http://localhost:3000 to view the application.


## Application Interface - 
- This application will open up to a Home Page with a navbar and background image of gym along with the about section. Then it would be followed by services we offer in our gym. Then the gallery of the gym and the contact box for reaching out to us in case of any queries. It is lastly followed by the footer all the way down.
- The navbar links are functional and navigates the user to the desired section of the page that the user seeks to look for.
- Navigation has also been used in the services section where the user when clicks on any of the services, it would navigate the user to a new page to guide the user regarding the different service plans and information along with the fee structure for that and the booking of a session.
- This application makes use of routing, many functions, porps, react-hooks, css styling, boostrap framework, import and export functions. 


## Contributions are welcome! Please open an issue or submit a pull request for any improvements or bug fixes.
