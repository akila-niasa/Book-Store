import React, { useEffect, useState } from 'react';
import Header from '../../Shared/Header/Header';

const Orders = () => {
    const [order, setOrder] = useState([]);
    useEffect(() => {
        const url = 'https://peaceful-inlet-55752.herokuapp.com/orders';
        fetch(url)
        .then(res =>res.json())
        .then(data =>setOrder(data))
    }, []);
    return (
        <div className = "container">
            <Header></Header>
        <div className = "row">
            <div className = "col-md-12">
            <table className="table mb-5">
        <thead>
            <tr>
                <th scope="col" className="text-danger">Book Name</th>
                <th scope="col" >Author Name</th>
                <th scope="col" className="text-danger">Quantity</th>
                <th scope="col" >price</th>
            </tr>
        </thead>
            {
                order.length > 0 ? order.map(singleOrder => 
                <tbody>
                    <tr>
                        <th scope="row">{singleOrder.name}</th>
                        <th scope="row">{singleOrder.authorName}</th>
                        <td>1</td>
                        <td>${singleOrder.price}</td>
                    </tr>
                </tbody>) :
                <div class="d-flex justify-content-center">
                    <div class="spinner-border text-danger" role="status">
                        <span class="visually-hidden">Loading...</span>
                    </div>
                </div>    
            }
          </table>
        </div>
    </div>
</div>
    );
};

export default Orders;