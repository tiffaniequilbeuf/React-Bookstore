export function Archives({book}) {
    return (
        <> 
        { book.quantity <= 0 &&
            <li>{book.title} - {book.author} ({book.year}) </li>
        }
        </>
    )
}