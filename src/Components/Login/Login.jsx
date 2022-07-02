import React, { useContext, useState } from "react";

import Logo from "../../olx-logo.png";
import "./Login.css";
import  { FirebaseContext,Contexts } from '../../Contexts/Contexts'
import { useNavigate,Link } from "react-router-dom";
function Login() {
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const { firebase } = useContext(FirebaseContext)
  const {setLoading,isLoading} = useContext(Contexts)
  const [errMsg, setErrMsg] = useState('')
  const handleLogin = async e => {
    e.preventDefault();
    setLoading(true);
    try {
      await firebase.auth().signInWithEmailAndPassword(email, password)
      navigate('/')
      setLoading(false)
    } catch (err) {
      switch (err.code) {
        case 'auth/wrong-password':
          setErrMsg('Wrong email or password');
          break;
        case 'auth/user-not-found':
          setErrMsg('Wrong email or password')
          break;
        default:
          setErrMsg('Oops something wrong...')
          break;
      }
      console.log(err.code)
      setLoading(false)
    }
  }
  return (
    <div>
      <div className="loginParentDiv">
        <img width="200px" height="200px" src={Logo} alt='Logo'></img>
        <form onSubmit={handleLogin}>
          {errMsg&&<p style={{color:"red",margin:"0 auto"}}>{errMsg}</p>}
          <label htmlFor="email">Email</label>
          <br />
          <input
            className="input"
            type="email"
            id="email"
            value={email}
            name="email"
            onChange={e => setEmail(e.target.value)}
          />
          <br />
          <label htmlFor="password">Password</label>
          <br />
          <input
            className="input"
            type="password"
            id="password"
            value={password}
            name="password"
            onChange={e => setPassword(e.target.value)}
          />
          <br />
          <br />
          <button>Login</button>
        </form>
        <Link to='/signup'>Signup</Link>
      </div>
    </div>
  );
}

export default Login;
