import Book from './Book.js';
import dataBooks from '../../data/dataBooks.js';
import { useSelector } from "react-redux";
import { getSelectedCategory } from "../../redux/booksSlice";

const Books = () => {
    const selectedCategory = useSelector(getSelectedCategory)
    return (
        <div>
            {dataBooks
                .filter(book => {
                if (selectedCategory === 'ALL BOOKS') return true;
                return selectedCategory === book.category;
            })
            .map(book => <Book key={book.id} book={book}/>)}
        </div>
    )
}

export default Books;