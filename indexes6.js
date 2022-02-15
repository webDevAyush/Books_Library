console.log('This is Es6 Version of Tyhe project');
class Book {
    constructor(name, author, type) {
        this.name = name;
        this.author = author;
        this.type = type;
    }
}

class Display {
    add(book) {
        console.log('Adding to UI');
        let tableBody = document.getElementById('tableBody');
        let uiString = `<tr>
                        <td>${book.name}</td>
                        <td>${book.author}</td>
                        <td>${book.type}</td>
                    </tr>`
        tableBody.innerHTML += uiString;
    }
    clear() {
        let libraryform = document.getElementById('libraryForm');
        libraryForm.reset();
    }
    validate(book) {
        if (book.name.length < 2 || book.author.length < 3) {
            return false;
        }
        else {
            return true;
        }
    }
    show(type, displayMsg) {
        let message = document.getElementById('message');
        message.innerHTML = `<div class="alert alert-${type} alert-dismissible fade show" role="alert">
                                <strong>Message:</strong> ${displayMsg}
                                <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                        </div>`

        setTimeout(() => {
            message.innerHTML = '';
        }, 3000);
    }
}


let libraryform = document.getElementById('libraryForm');
libraryform.addEventListener('submit', libraryFormSubmit);

function libraryFormSubmit(e) {
    console.log('You Have submitted Library Form');
    let name = document.getElementById('bookName').value;
    let author = document.getElementById('author').value;
    let type;
    let fiction = document.getElementById('fiction');
    let programming = document.getElementById('programming');
    let cooking = document.getElementById('cooking');
    if (fiction.checked) {
        type = fiction.value;
    }
    else if (programming.checked) {
        type = programming.value;
    }
    else if (cooking.checked) {
        type = cooking.value;
    }


    let book = new Book(name, author, type);
    console.log(book);

    let display = new Display();
    if(display.validate(book)){
        display.add(book);
        display.clear();
        display.show('success', 'Your book is Successfully Added')
    }
    else{
        // Show error to the user 
        display.show('danger', ' Sorry you Cant Add This Book')
    }
    
    e.preventDefault();
};



