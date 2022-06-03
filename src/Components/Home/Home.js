import React, { useEffect, useState } from 'react';
import Books from '../Books/Books';


const Home = () => {
    const [books, setBooks] = useState([])
    useEffect(() =>{
        fetch('http://localhost:5000/books')
        .then(res =>res.json())
        .then(data =>setBooks(data))
    },[setBooks])
    return (
            <div className = "container">
                <div className = "row">
                    <Books key={books._id} books={books}></Books>
                </div>
            </div>
    );
};
export default Home;