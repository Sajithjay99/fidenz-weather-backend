# Weather App Backend 

This is the backend API for the **Fidenz Full Stack Weather Application**.  
It provides secure weather data using OpenWeatherMap API and Auth0-based JWT authentication.

---

##  Features
- Fetch weather data for multiple cities
- Cache responses for 5 minutes
- Protected routes using Auth0 JWT middleware
- CORS enabled for frontend access

---

## Technologies
- Node.js (Express)
- Axios
- dotenv
- express-oauth2-jwt-bearer
- Auth0 

---

##  Setup Instructions
1. **Clone the repository**
   ```bash
   git clone https://github.com/Sajithjay99/fidenz-weather-backend.git
   cd weather-backend
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Create a `.env` file** in the root folder:
   ```env
    PORT=3000
    WEATHER_KEY=69748cf8649ce272697d004c362553ae
    AUTH0_DOMAIN=dev-gk8papjykz6fewug.us.auth0.com
    AUTH0_AUDIENCE=https://weather.api
   ```

4. **Run the server**
   ```bash
   npm run dev
   ```

---


##  Developer
**Sajith Jayasooriya**
