import { useEffect, useState } from "react"
import Book from "../Book/Book";


export default function Books() {

    const [books, setBooks] = useState([]);

    useEffect(() => {
        fetch('booksData.json')
            .then(res => res.json())
            .then(data => setBooks(data))
    }, [])

    return (
        <div className="mt-20">
            <h2 className="text-4xl font-bold text-center">Books</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-10">
                {
                    books.map(book => <Book key={book.booksId} book={book}></Book>)
                }
            </div>
        </div>
    )
}
