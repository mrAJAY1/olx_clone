import React, { useContext } from 'react';

import './Header.css';
import OlxLogo from '../../assets/OlxLogo';
import Search from '../../assets/Search';
import Arrow from '../../assets/Arrow';
import SellButton from '../../assets/SellButton';
import SellButtonPlus from '../../assets/SellButtonPlus';
import { Contexts, FirebaseContext } from '../../Contexts/Contexts';
import { Link, useNavigate } from 'react-router-dom';
function Header() {
  const { user, setLoading } = useContext(Contexts)
  const { firebase } = useContext(FirebaseContext)
  const navigate = useNavigate()
  const logoutHandler = () => {
    setLoading(true)
    firebase.auth().signOut().then(() => {
      navigate('/login')
      setLoading(false)
    })
  }
  return (
    <div className="headerParentDiv">
      <div className="headerChildDiv">
        <div className="brandName">
          <OlxLogo />
        </div>
        <div className="placeSearch">
          <Search />
          <input type="text" />
          <Arrow />
        </div>
        <div className="productSearch">
          <div className="input">
            <input
              type="text"
              placeholder="Find car,mobile phone and more..."
            />
          </div>
          <div className="searchAction">
            <Search color="#ffffff"></Search>
          </div>
        </div>
        <div className="language">
          <span> ENGLISH </span>
          <Arrow />
        </div>
        <div className="loginPage">
          {user ? <span>{user.displayName}</span> : <Link to={'/login'}> Login</Link>}
          <hr />
        </div>
        {user && <span onClick={logoutHandler}>Logout</span>}
        
        <div className="sellMenu" onClick={e=>{user?navigate('/create'):navigate('/login')}} >
          <SellButton/>
          <div className="sellMenuContent">
            <SellButtonPlus />
            <span>SELL</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
