import './topbar.css';
import {Link} from "react-router-dom"
import { Context } from '../../context/Context';
import { useContext } from 'react';

function TopBar() {
  
  const {user, dispatch} = useContext(Context);
  const PF = "http://localhost:5000/images/"

  const handleLogout = ()=>{
    dispatch({type: "LOGOUT"});
  }

  return (
    <div className="top">
      {/* left */}
        <div className="topLeft">
          <i className="topIcon fa-brands fa-facebook-square"></i>
          <i className="topIcon fa-brands fa-twitter-square"></i>
          <i className="topIcon fa-brands fa-pinterest-square"></i>
          <i className="topIcon fa-brands fa-instagram-square"></i>
        </div>
        {/* center */}
        <div className="topCenter">
          <ul className="topList">
          <li className="topListItem"><Link to="/" className="link"> HOME</Link> </li>
          <li className="topListItem"><Link to="/" className="link"> ABOUT</Link></li>
          <li className="topListItem"><Link to="/" className="link"> CONTACT</Link></li>
          <li className="topListItem"><Link to="/write" className="link"> WRITE</Link></li>
          <li className="topListItem" onClick={handleLogout}> {user && "LOGOUT"}</li>
          </ul>
        </div>
        {/* Right */}
        <div className="topRight">
        {
          user ? (
            <Link to="/settings">
              <img src={PF + user.profilePic} alt="" className="topImg" />
            </Link>
          ) : (
            <ul className="topList">
              <li className="topListItem">
            <Link to="/login" className="link">LOGIN</Link>
              </li>
              <li className="topListItem">
            <Link to="register" className="link">REGISTER</Link>
              </li>
            </ul>
          )
        }
          <i className="topSearchIcon fa-solid fa-magnifying-glass"></i>
        </div>
    </div>
  )
}

export default TopBar