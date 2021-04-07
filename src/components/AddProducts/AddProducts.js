import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from "react-hook-form";

const AddProducts = () => {
  const { register, handleSubmit } = useForm();
  const [imageURL, setImageURL]= useState(null);

  const onSubmit = data => {
    const eventData = {
      name: data.name,
      quality: data.quality,
      price: data.price,
      imageURL: imageURL
    };
    const url = `https://the-food-store.herokuapp.com/addProducts`;

  
    fetch(url, {
      method: 'POST',
      headers:{
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(eventData)
    })
    .then(res => console.log('server side responsive', res))
  };

  const handleImageUpload= event =>{
    console.log(event.target.files[0])
    const imageData = new FormData();
    imageData.set('key', '8e50d4e360fda66a2d4bc8db8d03fde2')
    imageData.append('image', event.target.files[0])

    axios.post('https://api.imgbb.com/1/upload', imageData)
    .then(function (response) {
      setImageURL(response.data.data.display_url)
      if(response.data.data.display_url){
        alert('Product Added Successfully')
      }
    })
    .catch(function (error) {
      console.log(error)
    })
  }

  return (
    <div>
      <h1>Add Your Product</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
     
      <input placeholder="Product Name" {...register("name")} />
    <br/>
    <input placeholder="quality" {...register("quality")} />
    <br/>
    <input placeholder="price" {...register("price")} />
    <br/>
    <input name="file" type="file" onChange={handleImageUpload}/>
    
     <br/>
      
      <input type="submit" />
    </form>
    </div>
  );
};

export default AddProducts;