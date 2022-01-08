export const API_URL =
  process.env.NODE_ENV === "production"
    ? "https://kangji-market-server.herokuapp.com"
    : "https://localhost:8080";
