//Book constructor
function Book(title, author, isbn){
    this.title = title;
    this.author = author;
    this.isbn = isbn;
}


//UI constructor
function UI(){}

UI.prototype.addBookToList = function(book){
    const list = document.getElementById('book-list');

    //create tr element
    const row = document.createElement('tr');

    //insert calls
    row.innerHTML = `
    <td>${book.title}</td>
    <td>${book.author}</td>
    <td>${book.isbn}</td>
    <td><a href = "#" class="delete">X</a></td>
    `

    list.appendChild(row);
}

//Show Alert
UI.prototype.showAlert = function(message, className){
    //Create div
    const div = document.createElement('div');
    //add class
    div.className = `alert ${className}`;
    //add text
    div.appendChild(document.createTextNode(message));
    //Get parent
    const container = document.querySelector('.container');
    //get form
    const form = document.querySelector('#book-form');
    //insert alert
    container.insertBefore(div, form);
    //disappear after 3 seconds
    setTimeout(function(){
        document.querySelector('.alert').remove();
    }, 3000);
}

//delete book
UI.prototype.deleteBook = function(target){
    if(target.className === 'delete'){
        target.parentElement.parentElement.remove();
    }
}

//clear fields
UI.prototype.clearFields = function(){
    document.getElementById
}

//event listeners
document.getElementById('book-form').addEventListener('submit',
    function(e){
    //get form values
    const title = document.getElementById('title').value,
            author = document.getElementById('author').value,
            isbn = document.getElementById('isbn').value
    //instantiating book
    const book = new Book(title, author, isbn);

    //instantiate ui object
    const ui = new UI();

    //validate
    if(title === '' || author === '' || isbn === ''){
        //error alert
        ui.showAlert('Please fill in all fields', 'error');
    } else{
        //add book to list
    ui.addBookToList(book);

    //show success
    ui.showAlert('Book added!', 'success');

    //Clear fields
    ui.clearFields();
    }

    

    e.preventDefault();
});

//Event listener for delete
document.getElementById('book-list').addEventListener('click', function(e){
    const ui = new UI();
    //delete book
    ui.deleteBook(e.target);

    //show message
    ui.showAlert('Book removed!', 'success');

    e.preventDefault();
})