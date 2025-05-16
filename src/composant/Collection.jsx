import { useState } from 'react'
import { Book } from './Book';
import { Archives } from './Archives';
import { useLibrary } from '../../store/Library';
import ModalForm from './ModalForm';

export function Collection() {

    const availableBooks = useLibrary(state => state.availableBooks);
    const archivedBooks = useLibrary(state => state.archivedBooks);
    const [isOpen, setIsOpen] = useState(false);

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
                    availableBooks().map((book) => <Book book={book} key={book.title} />)
                }
            </ul>
            <ModalForm open={isOpen} onOpenChange={(val)=>{console.log("val",val);setIsOpen(val);}}/>

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