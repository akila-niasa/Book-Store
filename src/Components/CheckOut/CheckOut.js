import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useParams } from 'react-router-dom';
import auth from '../../firebase.init';
import './CheckOut.css';

const CheckOut = () => {
    const[user]=useAuthState(auth)
    const { id } = useParams();
    const [book, setBook] = useState([]);
    const dateTime = new Date().toLocaleString();

    useEffect(() => {
        fetch('https://peaceful-inlet-55752.herokuapp.com/books')
            .then((res) => res.json())
            .then((data) => {
                const info = data.filter((book) => id === book._id);
                console.log(info , id)
                setBook(info[0]);
            });
    }, [id]);

    const handleChecked = () => {
        const {name, authorName, price, image} = book;
        const userInfo = {
            name: user.displayName,
            email:user.email
        }
        // console.log(userInfo)
        const newOrder = { userInfo, name, authorName, price, image, dateTime };
        // console.log(newOrder);
        fetch('https://peaceful-inlet-55752.herokuapp.com/addOrder', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newOrder)
        })
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                alert('Order placed successfully!')
            });
    };
    return (
        <div>
              <div className='container py-5'>
            <h1 className = "text-danger text-center">Checkout</h1>
            <hr className = "text-center" style={{ height: '2px', color: '#130f40', backgroundColor: 'red'}} />
            <h5 className = "text-danger">User Name: {user.displayName} </h5>
            <h5 className = "text-danger">User Email: {user.email} </h5>
            <h5 className = "text-danger text-end">Date & Time: {dateTime}</h5>
            <div className='card mb-3 p-3 shadow p-3 mb-5 bg-body rounded border-0 bg-dark'>
                <div className='row g-0'>
                    <div className='col-md-4'>
                        <div className='card-body '>
                        <img src={book.image} alt={book.image} className='w-100 shadow p-3 mb-5 bg-body rounded' />
                            <h4 className='card-title fw-bold text-warning d-flex justify-content-center align-items-center '>{book.name}</h4>
                            <p className='card-text text-warning d-flex justify-content-center align-items-center'>{book.authorName}</p>
                            <p className='card-text fs-3 text-warning fw-bold d-flex justify-content-center align-items-center'>${book.price}</p>
                            
                        </div>
                    </div>
                </div>
            </div>
            <div className="d-grid gap-2">
                <button className='btn btn-dark text-danger fs-4 fw-bold' onClick={handleChecked}>Order Now</button>
            </div>
        </div>
        </div>
    );
    
};

export default CheckOut;