const BASE_URL = "https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api";
const RESOURCE = "/books";
const API = `${BASE_URL}${RESOURCE}`;

export async function getBooks() {
  try {
    const response = await fetch(API);
    const result = await response.json();
    return result;
  } catch (error) {
    console.error("There was an issue fetching books from the API", error);
  }
}

export async function getSingleBook(id) {
  try {
    const response = await fetch(`${API}/${id}`);
    const result = await response.json();
    return result;
  } catch (error) {
    console.error("There was an issue fetching book id from API", error);
  }
}

export async function register(credentials) {
  try {
    const response = await fetch(`${BASE_URL}/users/register`, {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(credentials),
    });
    console.log(response);
    const result = await response.json();
    return result.token;
  } catch (error) {
    console.error("There was an error with /register", error);
  }
}

export async function loginUser(credentials) {
  try {
    const response = await fetch(`${BASE_URL}/users/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(credentials),
    });
    const result = await response.json();
    localStorage.setItem("token", result.token);
    return result;
  } catch (error) {
    console.error("THERE WAS AN ISSUE LOGGING IN", error);
  }
}

export async function getAccount(token) {
  try {
    const response = await fetch(`${BASE_URL}/users/me`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const result = await response.json();
    return result;
  } catch (error) {
    console.error("There was an issue getting your account", error);
  }
}

export async function getReservation(token) {
  try {
    const response = await fetch(`${BASE_URL}/reservations`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const result = await response.json();
    return result;
  } catch (error) {
    console.error("There was an issue getting your reservations", error);
  }
}

export async function reserveBook(token) {
  try {
    const response = await fetch(`${BASE_URL}/reservations`, {
      method: "POST",
      headers: {
        "Content-Style": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(),
    });
    const result = response.json();
    return result;
  } catch (error) {
    console.error("There was an error reserving a book", error);
  }
}

export async function returnBook(token, reservationId) {
  try {
    const response = await fetch(`${BASE_URL}/reservations/${reservationId}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const result = response.json();
    return result;
  } catch (error) {
    console.error("There was an issue returning a book", error);
  }
}
