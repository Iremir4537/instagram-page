import React from "react";
import { useState } from "react";
import "./styles.css";
import axios from "axios";

export default function ImageUpload(){
    const[image,setImage] = useState('')
    function handleImage(e) {
        console.log(e.target.files)
        setImage(e.target.files[0])
    }
    function handleApi(){
        const formData = new FormData()
        formData.append('image', image)
        axios.post('url', formData).then((res) => {
            console.log(res)
        })
    }

    return(
        <div>
            <input type="file" name='file' onChange={handleImage} />
            <button onClick={handleApi}>Submit</button>
        </div>
    )
}
