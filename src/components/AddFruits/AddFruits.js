import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import css from '../AddFruits/AddFruits.css'

const AddFruits = () => {
  const { register, handleSubmit, watch, errors } = useForm();
  const [imageUrl, setImageUrl] = useState(null)

  const onSubmit = data => {
    const eventData = {
      name: data.name,
      imageUrl: imageUrl,
      price: data.price
    }
    const url = 'http://localhost:5000/addFruits'

    fetch(url, {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(eventData)
    })
      .then(res => console.log("server side replace", res))
  };

  const handleImageUpload = event => {
    console.log(event.target.files[0]);
    const imageData = new FormData();
    imageData.set('key', 'f35ece2ae2a3f254e290491503aa7bb8');
    imageData.append('image', event.target.files[0])

    axios.post('https://api.imgbb.com/1/upload', imageData)
      .then(function (response) {
        setImageUrl(response.data.data.display_url);
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  return (
    <div className="admin-table">
      <h2 style={{ color: 'Black' }}>ADD YOUR FRUITS</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <br/>
        <h6 style={{ color: 'Black' }}>Product Name</h6>
        <input name="name" defaultValue="" ref={register} />
        <br />
        <br/>
        <h6 style={{ color: 'Black' }}>Add Price</h6>
        <input name="price" ref={register} />
        <br />
        <br/>
        <h6>Upload Images</h6>
        <input name="exampleRequired" type="file" onChange={handleImageUpload} />
        <br />
        <br/>
        <input className="submit-button" type="submit" />
      </form>
    </div>
  );
};

export default AddFruits;