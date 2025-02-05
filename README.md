# 🌦️ Weather App

A React application to check the weather in cities selected.  
Users can search by city and country, and the app retrieves real-time weather data using the [OpenWeatherMap API.](https://openweathermap.org/current)

## 🚀 Features

- **Search Weather by City & Country**
- **Displays:** Temperature, Weather Conditions, Sensation, Min & Max Temperature.
- **Loading Spinner** while fetching data.
- **Error Handling** for invalid locations.

## 🛠️ Technologies Used

- ⚛ **React** – UI Library
- 📝 **TypeScript** – Static typing for better maintainability
- 🔗 **Axios** – HTTP requests to fetch weather data
- ✅ **Zod** – Data validation for API responses
- 🎯 **react-hook-form** – Form management and validation
- 🎨 **CSS Modules** – Scoped styling

## Explanation of key Technologies

- [Zod](https://www.npmjs.com/package/zod):
  Zod is used for schema validation and type inference. It ensures that the data received from the weather API conforms to the expected structure. This helps in catching errors early and provides type safety throughout the application.

- [Simple CSS Spinner](https://tobiasahlin.com/spinkit/):
  A simple CSS spinner is used to indicate loading state while fetching data from the API. This enhances the user experience by providing visual feedback that the application is processing the request.

## Deploy in Netlify

[Weather Search](https://relaxed-weatherapp.netlify.app/)
