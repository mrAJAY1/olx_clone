import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom'
import Logo from '../../olx-logo.png';
import { FirebaseContext, Contexts } from '../../Contexts/Contexts';
import './Signup.css';

export default function Signup() {
  const navigate = useNavigate()
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [errMsg, setErrMsg] = useState('')

  const { firebase } = useContext(FirebaseContext)
  const {setLoading} = useContext(Contexts)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    try {
      await firebase.auth().createUserWithEmailAndPassword(email, password)
        .then(result => {
          result.user.updateProfile({ displayName: username }).then(() => {
            firebase.firestore().collection('users').add({
              id: result.user.uid,
              username: username,
              phone: phone
            }).then(() => {
              setLoading(false)
              navigate('/login')
            })
          })
        })
    } catch (err) {
      setLoading(false)
      console.log(err.message)
      switch (err.code) {
        case 'auth/email-already-in-use':
          setErrMsg("That email is already in use")
          break;
        case 'auth/invalid-email':
          setErrMsg('Enter a valid email')
          break;
        case 'auth/invalid-password':
          setErrMsg('Enter a valid Password')
          break;
        default:
          setErrMsg("Some error occured , try again")
      }
    }
  }
  return (
    <div>
      <div className="signupParentDiv">
        <img width="200px" alt='logo' height="200px" src={Logo}></img>
        <form onSubmit={handleSubmit}>
          {errMsg && <p style={{ color: "red", margin: "0 auto" }}>{errMsg}</p>}
          <label htmlFor="fname">Username</label>
          <br />
          <input
            className="input"
            type="text"
            id="fname"
            name="name"
            value={username}
            onChange={e => setUsername(e.target.value)}
            placeholder="Username"
          />
          <br />
          <label htmlFor="email">Email</label>
          <br />
          <input
            className="input"
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            placeholder='Email...'
          />
          <br />
          <label htmlFor="phone">Phone</label>
          <br />
          <input
            className="input"
            type="number"
            id="phone"
            valeu={phone}
            name="phone"
            placeholder='phone'
            onChange={e => setPhone(e.target.value)}
          />
          <br />
          <label htmlFor="password">Password</label>
          <br />
          <input
            className="input"
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
          <br />
          <br />
          <button>Signup</button>
        </form>
        <a href=' '>Login</a>
      </div>
    </div>
  );
}
