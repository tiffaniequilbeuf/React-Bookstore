export function Book({ book, onChangeBook }) {

    return (
        <>
            <li className="grid">
                <div> 
                    {book.quantity && book.quantity}
                    </div>
                <p>{book.title} - {book.author} ({book.year}) </p>
                {book.cover ?
                    <img src={book.cover} alt="alt de l'image" />:
                    <div></div>
                }
                <button onClick={() => onChangeBook(book.title, 1)} className="btn tiny-btn bold">+</button>
                <button onClick={() => onChangeBook(book.title, -1)} className="btn tiny-btn bold">-</button>
            </li>
        </>
    )
}

// https://picsum.photos/70/100