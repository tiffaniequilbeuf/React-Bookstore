import { create } from "zustand";

export const useLibrary = create((set, get) => ({
    //States
    books: [
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
            "quantity": 0,
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
            "quantity": 2,
        }
    ],

    //getters
    availableBooks : get().books.filter(book => { return book.quantity > 0; }),
    archivedBooks : get().books.filter(book => { return book.quantity <= 0; }),

    //setters
})
)