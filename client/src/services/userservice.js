

const apiBaseURL = "http://localhost:4000/api/users";

export const Fetch = (query) => {
  return fetch(`${apiBaseURL}${query}`).then((response) => {
    if (response.ok) {
      return response.json();
    }
    throw response;
  });
};