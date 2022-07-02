import React, { useContext, useEffect, useState } from 'react';
import { FirebaseContext } from '../../Contexts/Contexts';
import { postcontext } from '../../Contexts/postContexts';

import './View.css';
function View() {
  const [userDetails, setUserDetails] = useState({})
  const { postDetails } = useContext(postcontext)
  const { firebase } = useContext(FirebaseContext)
  useEffect(() => {

    const { userId } = postDetails
    firebase.firestore().collection('users').where('id', '==', userId).get().then((res) => {
      
      res.forEach(element => {
        setUserDetails(element.data())
      });
    })
    
  }, []);
  return (
    <div className="viewParentDiv">
      <div className="imageShowDiv">
        <img
          src={postDetails.url}
          alt=""
        />
      </div>
      <div className="rightSection">
        <div className="productDetails">
          <p>&#x20B9;{postDetails.price} </p>
          <span>{postDetails.name}</span>
          <p>{postDetails.category}</p>
          <span>{postDetails.createdAt}</span>
        </div>
        <div className="contactDetails">
          <p>Seller details</p>
          <p>{userDetails?userDetails.username:''}</p>
          <p>{userDetails.phone?userDetails.phone:''}</p>
        </div>
      </div>
    </div>
  );
}
export default View;
