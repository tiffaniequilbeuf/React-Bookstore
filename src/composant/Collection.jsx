import { useState } from 'react'
import { Book } from './Book';
import { Archives } from './Archives';
import { useLibrary } from '../../store/Library';

export function Collection() {

    const availableBooks = useLibrary(state => state.availableBooks);
    const archivedBooks = useLibrary(state => state.archivedBooks);

    const { addBook } = useLibrary((state) => state);

    function handleSubmit(event) {
        event.preventDefault();
        addBook({
            title,
            author,
            year,
            cover,
            quantity: 1
        })
        setStatusBtn(false);
    }

    const [statusBtn, setStatusBtn] = useState(false)
    const [title, setTitle] = useState()
    const [author, setAuthor] = useState()
    const [year, setYear] = useState()
    const [cover, setCover] = useState("")
    const [quantity, setQuantity] = useState(1)

    return (
        <>
            {/* <Home/> */}
            <div className='titre bold'>Liste des livres dans la bibliothèque</div>
            <div className="grid bold">
                <p>Quantités</p>
                <p>Livre</p>
                <p>Couverture</p>
            </div>
            <ul>
                {
                    availableBooks().map((book) => <Book book={book} key={book.title} />)
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
            <section className='archived'>
                <div className='bold'>Livres archivés </div>
                <ul>
                    {
                        archivedBooks().map((book) => <Archives book={book} key={book.title} />)
                    }
                </ul>
            </section>
        </>
    )
}