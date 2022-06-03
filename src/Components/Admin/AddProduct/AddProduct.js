import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

import SideNav from '../../SideNav/SideNav';
import './AddProduct.css'

const AddProduct = () => {
    const { register, handleSubmit,  formState: { errors } } = useForm();
    const [imageURL, setImageURL] = useState(null);

    const onSubmit = data => {
        const bookData = {
            name: data.bookName,
            authorName: data.authorName,
            price: data.price,
            image: imageURL
        };
        const url = `http://localhost:5000/addBookInfo`;
        fetch(url,{
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(bookData)
        })
        .then(res => console.log('server side response'))
    };
    
    const handleImageUpload = event =>{
        console.log(event.target.files[0])
        const imageData = new FormData();
         imageData.set('key', '6a52efbcb14ac6f1541aa5d999317e73');
         imageData.append('image', event.target.files[0])

         axios.post('https://api.imgbb.com/1/upload',imageData)
            .then(function (response) {
                setImageURL(response.data.data.display_url);
                // setImageURL(response.data.data.display_url);
            })
            .catch(function (error) {
                console.log(error);
            })
            .then(function () {
                
            });
    }
    return (
        <div className = "container">
             <div className = "row">
             <div className = "col-md-2">
                 <SideNav></SideNav>
             </div>
                <div className = "col-md-10">
                    <h2 className = "text-center fs-4 heading-color">Add Book</h2>
                    <hr className = "text-center"style={{ height: '2px', color: '#130f40', backgroundColor: 'red',}} />
                    <form className = "book-form" onSubmit={handleSubmit(onSubmit)}>
                        <div>
                        <label>
                            <p className = "fw-bold text-danger">Book Name</p>
                            <input name="bookName" {...register("bookName",{ required: true })} className="mt-0" placeholder ="Enter Name" />
                            {errors.bookName && <span className ='error'>Book name is required</span>}&nbsp;&nbsp;
                        </label>
                        <label>
                            <p className = "fw-bold text-danger">Author Name</p>
                            <input name="authorName" {...register("authorName",{ required: true })} className="mt-0" placeholder ="Enter Name" />
                            {errors.AuthorName && <span span className ='error'>Author name required</span>}<br/>
                        </label>
                        </div>

                        <div className = "mt-3">
                        <label>
                            <h6 className = "fw-bold mb-3 text-danger">Add Price</h6>
                            <input name="price" type = "number" {...register("price",{ required: true })} className="mt-0" placeholder ="Enter Price" />
                            {errors.price && <span className ='error'>Add price is required</span>}&nbsp;&nbsp;
                        </label>
                        
                        <label>
                            <h6 className = "fw-bold mb-3 text-danger">Add Book Cover Photo</h6>
                            <input name='imageURL'  type='file'  {...register("imageURL", { required: true })}  onChange = {handleImageUpload}  placeholder="Upload image" />
                            {errors.imageURL && <p className="error">imageUpload is required</p>}
                        </label>
                        {/* {errors.exampleRequired && <span>Upload image required</span>}<br/> */}
                        </div>
                        <input style = {{width: "100px"}} type="submit" />
                    </form>
                </div>
             </div>
        </div>
    );
};

export default AddProduct;