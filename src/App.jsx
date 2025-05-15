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
            "year": 1949
        },
        {
            "title": "Le Meilleur des mondes",
            "author": "Aldous Huxley",
            "year": 1932
        },
        {
            "title": "Fahrenheit 451",
            "author": "Ray Bradbury",
            "year": 1953
        },
        {
            "title": "La Peste",
            "author": "Albert Camus",
            "year": 1947
        },
        {
            "title": "Les Fleurs du mal",
            "author": "Charles Baudelaire",
            "year": 1857
        }
    ]

    const [books, setBooks] = useState(initialBooks)
    const [statusBtn, setStatusBtn] = useState(false)
    const [title, setTitle] = useState()
    const [author, setAuthor] = useState()
    const [year, setYear] = useState()
    const [cover, setCover] = useState("")
    const [quantity, setQuantity] = useState(1)

    /* mon objet initialBooks n'a pas de propriété quantité. Je vais ajouter pour chaque livre une quantité à 1.Il y a sans doute du map là dessous. 
    */
    // function InitQuantity {

    // }


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

    return (
        <>
            <div className='titre'>Liste des livres dans la bibliothèque</div>
            <ul>
                {
                    books.map((book) => <Book book={book} key={book.title} />)
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
