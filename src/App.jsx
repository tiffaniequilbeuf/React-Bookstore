import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Book } from './composant/Book'

function App() {

    const initialBooks = [
        {
            "title": "1984",
            "author": "George Orwell",
            "year": 1949,
            "quantity": 1,
        },
        {
            "title": "Le Meilleur des mondes",
            "author": "Aldous Huxley",
            "year": 1932,
            "quantity": 1,
        },
        {
            "title": "Fahrenheit 451",
            "author": "Ray Bradbury",
            "year": 1953,
            "quantity": 1,
        },
        {
            "title": "La Peste",
            "author": "Albert Camus",
            "year": 1947,
            "quantity": 1,
        },
        {
            "title": "Les Fleurs du mal",
            "author": "Charles Baudelaire",
            "year": 1857,
            "quantity": 1,
        }
    ]

    const [books, setBooks] = useState(initialBooks)
    const [statusBtn, setStatusBtn] = useState(false)
    const [title, setTitle] = useState()
    const [author, setAuthor] = useState()
    const [year, setYear] = useState()
    const [cover, setCover] = useState("")
    const [quantity, setQuantity] = useState(1)

    function handleSubmit(event) {
        event.preventDefault();

        const newBook = {
            title: title,
            author: author,
            year: year,
            cover: cover,
            quantity: quantity,
        }
        console.log(newBook)
        const newBooks = [...books, newBook]
        setBooks(newBooks);
        setStatusBtn(false);
    }

    function addBook(title) {
        const updatedBooks = books.map((book) => {

            if (book.title == title) {
                book.quantity = book.quantity + 1
            }
            return book;
        })
        setBooks(updatedBooks);
    }

    function onChangeBook(title, value) {
        const updatedBooks = books.map((book) => {

            if (book.title == title) {
                book.quantity = book.quantity + value
            }
            return book;
        })
        setBooks(updatedBooks);
    }

    function removeBook() {
        console.log("c'est moins !");
    }

    return (
        <>
            <div className='titre bold'>Liste des livres dans la bibliothèque</div>
            <div className="grid bold">
                <p>Quantités</p>
                <p>Livre</p>
                <p>Couverture</p>
            </div>
            <ul>
                {
                    books.map((book) => <Book book={book} addBook={addBook} removeBook={removeBook} onChangeBook={onChangeBook} key={book.title} />)
                }
            </ul>
            <button onClick={() => setStatusBtn(!statusBtn)} className="btn">Ajouter un livre</button>

            {
                statusBtn &&
                <form onSubmit={handleSubmit} className="form">

                    <label htmlFor="title">Titre</label>
                    <input type="text" id="title" value={title} onChange={(event) => setTitle(event.target.value)} />

                    <label htmlFor="author">Auteur</label>
                    <input type="" id="author" value={author} onChange={(event) => setAuthor(event.target.value)} />

                    <label htmlFor="year">Date de parution</label>
                    <input type="number" id="year" value={year} onChange={(event) => setYear(event.target.value)} />

                    <label htmlFor="cover">Ajouter une couverture</label>
                    <input type="url" id="cover" value={cover} onChange={(event) => setCover(event.target.value)} />

                    <button className="btn" type="submit">Ajouter</button>
                </form>
            }
        </>
    )
}

export default App
