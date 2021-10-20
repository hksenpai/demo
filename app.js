//class for book
class Book {
  constructor(name, authorname, type) {
    this.name = name;
    this.authorname = authorname;
    this.type = type;
  }
}
//showing books
function showbooks() {
  var data = localStorage.getItem("books");
  var book = data ? JSON.parse(data) : [];
  var uiString = "";
  book.forEach((book, index) => {
    uiString += `
            <tr>
                <td>${book.name}</td>
                <td>${book.authorname}</td>
                <td>${book.type}</td>
                <td>
                <button id=${index} onclick="deletebook(this.id)">Delete</button>
                </td>
            </tr>
        `;
  });
  var tableContent = document.querySelector("#tablecontent");
  tableContent.innerHTML = uiString;
}
showbooks();
//adding books
function addbook(book) {
  var data = localStorage.getItem("books");
  var books = data ? JSON.parse(data) : [];
  books.push(book);
  localStorage.setItem("books", JSON.stringify(books));
  showbooks();
}
//deleting book
function deletebook(index) {
  var data = localStorage.getItem("books");
  var books = data ? JSON.parse(data) : [];
  books.splice(index, 1);
  localStorage.setItem("books", JSON.stringify(books));
  showbooks();
}
//clearing the form
function clear() {
  var Form = document.querySelector("#storeForm");
  Form.reset();
}
//handleFormSubmit
var Form = document.querySelector("#storeForm");
Form.addEventListener("submit", handleSubmit);
function handleSubmit(e) {
  e.preventDefault();

  var name = document.querySelector("#name");
  var authorName = document.querySelector("#authorName");
  var programming = document.querySelector("#programming");
  var sci_fi = document.querySelector("#sci_fi");
  var thriller = document.querySelector("#thriller");

  console.log(authorName.value);

  var type;

  if (programming.checked) type = "Programming";
  if (sci_fi.checked) type = "Sci-fi";
  if (thriller.checked) type = "Thriller";

  var book = new Book(name.value, authorName.value, type);

  addbook(book);
  showbooks();
  clear();
}
