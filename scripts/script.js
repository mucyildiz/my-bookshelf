function Book(title, author, numPages, read){
    this.title = title;
    this.author = author;
    this.numPages = numPages;
    this.read = read;
}

let library = [];

function addBookToLib(book){
    library.push(book);
}

function generateTableHead(table, data){
    let thead = table.createTHead();
    let row = thead.insertRow();
    // go through data array and add data[i] as column header
    for (let item of data) {
        let th = document.createElement("th");
        let text = document.createTextNode(item);
        th.appendChild(text);
        row.appendChild(th);
      }
}

let table = document.querySelector('.library-table');
let data = ['Title', 'Author', 'Pages', 'Status'];



let book = new Book('Har', 'JK', 34, true);
let anotherBook = new Book('ok', 'no', 32, false);
let yaEnoterBook = new Book('test', 'r', 421, true);
addBookToLib(book);
addBookToLib(anotherBook);
addBookToLib(yaEnoterBook);

function createButton(bgColor, textColor, text){
    let cellItem = document.createElement('button');
    cellItem.className = 'readBtn';
    cellItem.style.backgroundColor = bgColor;
    cellItem.style.color = textColor;
    cellItem.innerHTML = text;
    cellItem.addEventListener('click', toggleButton);
    return cellItem;
}

function toggleButton(){
    // if it is a "Read" button
    if(this.style.backgroundColor == 'darkgreen'){
        this.style.backgroundColor = '#990000';
        this.innerHTML = 'Not Read';
    }
    else{
        this.style.backgroundColor = 'darkgreen';
        this.innerHTML = 'Read';
    }
}

function generateTable(table, bookArray){
    for(let element of bookArray){
        let row = table.insertRow();
        row.className = 'row';
        for(let item in element){
            let cell = row.insertCell();
            let content = element[item];
            if(content === true){
                let readBtn = createButton('darkgreen', 'white', 'Read');
                cell.appendChild(readBtn)
            }
            else if(content === false){
                let unreadBtn = createButton('#990000', 'white', 'Not Read');
                cell.appendChild(unreadBtn)
            }
            else{
                let text = document.createTextNode(content);
                cell.appendChild(text);
            }
        }
    }
}

//we call generateTable first so we can create a table body, otherwise the rows would append to the table head
generateTable(table, library);
generateTableHead(table, data);

function openForm() {
    document.getElementById('bookForm').style.display = 'block';
}

function closeForm() {
    document.getElementById("bookForm").style.display = "none";
}

function addNewBook(){
    document.getElementById("bookForm").style.display = "block";
}

