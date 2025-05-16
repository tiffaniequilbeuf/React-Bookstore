import * as Dialog from "@radix-ui/react-dialog";
import { useState } from "react";
import { useLibrary } from '../../store/Library';

export default function ModalForm({ isOpen, onOpenChange }) {

  const { addBook } = useLibrary((state) => state);
  const [title, setTitle] = useState("")
  const [author, setAuthor] = useState("")
  const [year, setYear] = useState("")
  const [cover, setCover] = useState("")
  const [quantity, setQuantity] = useState(1)

  function handleSubmit(event) {
    event.preventDefault();
    addBook({
      title,
      author,
      year,
      cover,
      quantity: 1
    })
    onOpenChange(false);
  }


  return (
    <>
      <Dialog.Root open={isOpen} onOpenChange={onOpenChange}>
        <Dialog.Trigger className="btn">
          Ajouter un livre
        </Dialog.Trigger>

        <Dialog.Portal >
          <Dialog.Overlay className="backdrop" />
          <Dialog.Content className="dialog-content">
            <div className="flex">
              <Dialog.Title className="title">
                Ajouter un livre
              </Dialog.Title>
              <Dialog.Close className="btn close-button">
                X
              </Dialog.Close>
            </div>
            <Dialog.Description />
            <form onSubmit={handleSubmit} className="form">

              <label htmlFor="title">Titre</label>
              <input type="text" id="title" value={title} onChange={(event) => setTitle(event.target.value)} />

              <label htmlFor="author">Auteur</label>
              <input type="text" id="author" value={author} onChange={(event) => setAuthor(event.target.value)} />

              <label htmlFor="year">Date de parution</label>
              <input type="number" id="year" value={year} onChange={(event) => setYear(event.target.value)} />

              <label htmlFor="cover">Ajouter une couverture</label>
              <input type="url" id="cover" value={cover} onChange={(event) => setCover(event.target.value)} />

              <button className="btn" type="submit">Ajouter</button>
            </form>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </>
  );
}