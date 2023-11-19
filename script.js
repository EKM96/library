const myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

Book.prototype.info = function () {
    if (this.read === true) {
        return `${this.title} by ${this.author}, ${this.pages} pages, already read`;
    } else if (this.read === false) {
        return `${this.title} by ${this.author}, ${this.pages} pages, not read yet`;
    }
}   


const addButton = document.querySelector('.js-addButton');
addButton.addEventListener('click', addBookToLibrary);
addButton.addEventListener('click', resetInputs);
addButton.addEventListener('click', removeCards);
addButton.addEventListener('click', displayCards);


const title = document.querySelector('input[name="title"]');
const author = document.querySelector('input[name="author"]');
const pages = (document.querySelector('input[name="pages"]'));
const read = document.querySelector('input[name="read"]');

function addBookToLibrary() {

    const book = new Book(title.value, author.value, +pages.value, read.checked);
    myLibrary.push(book);
}

function resetInputs() {
    const textInputs = document.querySelectorAll('input[type="text"]');
    
    textInputs.forEach((input)=> {
        input.value = '';
    });

    pages.value = '';
    read.checked = false;

}

function displayCards() {

    myLibrary.forEach((book) => {
        const cardsContainer = document.querySelector('.js-cards-container')
        const card = document.createElement('div');
        const cardTitle = document.createElement('p');
        const cardPages = document.createElement('p')
        const cardRead = document.createElement('p'); 
        const cardAuthor = document.createElement('p');
    

        cardTitle.textContent = book.title;
        cardPages.textContent = book.pages;
        cardRead.textContent = book.read;
        cardAuthor.textContent = book.author

        card.classList.add('card');
        card.appendChild(cardTitle);
        card.appendChild(cardPages);
        card.appendChild(cardRead);
        card.appendChild(cardAuthor);

        cardsContainer.appendChild(card);
    })

}

function removeCards() {
    
    const cards = document.querySelectorAll('.card');

    cards.forEach((card) => {
        card.remove();
    })
    
}