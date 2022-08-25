const BASE_URL = "https://scorebot-api-service-q3nu3.ondigitalocean.app/";

const requests = {
  fetchLeaderBoard: `${BASE_URL}v1/leaderboards/_9fj0FuRSCgQFFKYPeQWM/entries?page=1&size=10
    `,
  fetchPlayer: `${BASE_URL}v1/players/`,
};

export default requests;
