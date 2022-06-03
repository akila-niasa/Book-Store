import React, { useEffect, useState } from 'react';
import Header from '../../Shared/Header/Header';
import Manage from '../Admin/Manage/Manage';
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
                <Header></Header>
                <div className = "row">
                    <Books key={books._id} books={books}></Books>
                </div>
             
            </div>
    );
};
export default Home;