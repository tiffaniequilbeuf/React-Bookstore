export function Archives({book}) {
    return (
        <> 
            <li>{book.title} - {book.author} ({book.year}) </li>
        </>
    )
}