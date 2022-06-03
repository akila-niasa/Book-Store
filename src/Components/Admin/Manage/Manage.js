import React, { useEffect, useState } from 'react';
import SideNav from '../../SideNav/SideNav';
import { FaTrashAlt } from 'react-icons/fa';

const Manage = () => {
    const [books, setBooks] = useState([])
    useEffect(() => {
        fetch('https://peaceful-inlet-55752.herokuapp.com/books')
            .then(res => res.json())
            .then(data => setBooks(data))
    }, [setBooks]);

    const specificDeleteBook = (id) => {
        const url = `https://peaceful-inlet-55752.herokuapp.com/deleteBook/${id}`;
        fetch(url, {
            method: 'DELETE',
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.deletedCount > 0) {
                    const remainOrder = books.filter(book => book._id !== id)
                    setBooks(remainOrder)
                }
            })
        // console.log("clicked", id);
    };
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-3 col-sm-2">
                    <SideNav></SideNav>
                </div>
                <div className="col-md-9 col-sm-10">
                    <h2 className="text-danger fw-bold fs-3">Manage Book</h2>
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col" className="text-danger">Book Name</th>
                                <th scope="col">Author Name</th>
                                <th scope="col" className="text-danger">Price</th>
                                <th scope="col">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                books.length === 0 && <div class="d-flex justify-content-center">
                                    <div class="spinner-border text-danger" role="status">
                                        <span class="visually-hidden">Loading...</span>
                                    </div>
                                </div>
                            }
                            {
                                books.map(info => {
                                    const { bookName, authorName, price, _id } = info;
                                    return (
                                        <tr key={_id}>
                                            <th>{bookName}</th>
                                            <td>{authorName}</td>
                                            <td>{price}</td>
                                            <td><button onClick={() => specificDeleteBook(_id)}>
                                                <FaTrashAlt /></button>
                                            </td>
                                        </tr>
                                    );
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Manage;