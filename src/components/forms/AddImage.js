import React, { useState, useRef } from 'react';
import axios from 'axios';
import styled from 'styled-components';

const Portrait = styled.img`
    width: 200px;
    height: 200px;
`;

function AddImage(props){
    const [img, setImg] = useState(null);
    const formRef = useRef(null);
    const handleSubmit = ev => {
        ev.preventDefault();
        if (!img) return;
        const formData = new FormData();
        formData.append('img', img);
        setImg(null);
        formRef.current.reset();
        axios({
            url: 'https://agile-escarpment-31149.herokuapp.com/api/user/upload',
            method: 'POST',
            data: formData,
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'Authorization': localStorage.getItem('jwt'),
            },
        })
        .then(res => console.log(res))
        .catch(err => console.log(err));
    }
    return (
        <>
            <section className="thumbnail-display">
                <Portrait src="https://gladstoneentertainment.com/wp-content/uploads/2018/08/blank-portrait.png" />
            </section>
            <form onSubmit={handleSubmit} ref={formRef}>
                <input type="file" accept="image/*" onChange={ev => setImg(ev.target.files[0])} />
                <button type="submit">Upload Image</button>
            </form>
        </>
    );
}

export default AddImage;