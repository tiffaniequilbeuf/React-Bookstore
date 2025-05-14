export function Book({book}){

    return <li className="item"> {book.title} - {book.author} ({book.year}) </li>
}