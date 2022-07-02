import React, { Fragment, useContext, useState } from "react";
import "./Create.css";
import Header from "../Header/Header";
import { useNavigate } from "react-router-dom";
import { FirebaseContext, Contexts } from "../../Contexts/Contexts";
const Create = () => {
  const navigate = useNavigate()
  const [name, setName] = useState('');
  const [category, setCategory] = useState('')
  const [price, setPrice] = useState('')
  const [image, setImage] = useState()
  const { firebase } = useContext(FirebaseContext)
  const { user, setLoading } = useContext(Contexts)
  const date =new Date()
  const handleSubmit = (e) => {
    e.preventDefault()
    setLoading(true)

    firebase.storage().ref(`/images/${image.name}`).put(image).then((result) => {
      result.ref.getDownloadURL().then(url => {
        console.log(url)
        firebase.firestore().collection('products').add({
          name, category, price, url,userId:user.uid,createdAt:date.toDateString()
        })
        navigate('/')
        setLoading(false)
      })
    })
  }
  return (
    <Fragment>
      <Header />
      <div style={{ height: '100vh', width: '100%', display: 'flex', justifyContent: "center", alignItems: "center" }}>
        <div className="centerDiv">
          <form>
            <label htmlFor="fname">Name</label>
            <br />
            <input
              className="input"
              type="text"
              id="fname"
              name="Name"
              value={name}
              onChange={e => setName(e.target.value)}
            />
            <br />
            <label htmlFor="fname">Category</label>
            <br />
            <input
              className="input"
              type="text"
              id="fname"
              name="category"
              onChange={e => setCategory(e.target.value)}

              value={category}
            />
            <br />
            <label htmlFor="fname">Price</label>
            <br />
            <input className="input" type="number" value={price} id="fname" onChange={e => setPrice(e.target.value)} name="Price" />
            <br />
          </form>
          <br />
          <img alt="Posts" width="200px" height="200px" src={image ? URL.createObjectURL(image) : ''}></img>
          <form>
            <br />
            <input type="file" onChange={e => setImage(e.target.files[0])} />
            <br />
            <button onClick={handleSubmit} className="uploadBtn">upload and Submit</button>
          </form>
        </div>
      </div>
    </Fragment>
  );
};

export default Create;
