const BASE_URL = "https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api";
const RESOURCE = "/books";
const API = `${BASE_URL}${RESOURCE}`;

export async function getBooks() {
  try {
    const response = await fetch(API);
    const result = await response.json();
    console.log(result);
    return result;
  } catch (error) {
    console.error("There was an issue fetching books from the API", error);
  }
}

export async function getSingleBook(id) {
  try {
    const response = await fetch(`${API}/${id}`);
    const result = await response.json();
    console.log("singleBook", result);
    return result;
  } catch (error) {
    console.error("There was an issue fetching book id from API", error);
  }
}

getSingleBook(15);
