export function Book({ book }) {

    return (
        <>
            <li className="grid">
                <div> 
                    {/* {
                       !book.quantity ? setQuantity(1) : book.quantity
                    } */}
                    </div>
                <p>{book.title} - {book.author} ({book.year}) </p>
                {book.cover &&
                    <img src={book.cover} alt="alt de l'image" />
                }
            </li>
        </>
    )
}

// https://picsum.photos/70/100