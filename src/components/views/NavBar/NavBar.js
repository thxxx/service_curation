import React, { useState } from 'react';
import LeftMenu from './Sections/LeftMenu';
import RightMenu from './Sections/RightMenu';
import { Drawer, Button } from 'antd';
import './Sections/Navbar.scss';
import { Link } from 'react-router-dom';

function NavBar() {
  const [visible, setVisible] = useState(false)

  const onClose = () => {
    setVisible(false)
  };

  return (
    <nav className="menu">
      <span className="menu__logo">
        <Link to="/" >SeCu</Link>
      </span>
      <span className="menu__container">
        <Link to="/upload" className="navButton">서비스 등록하기</Link>
      </span>
      <span className="menu__container">
        <Link to="/all" className="navButton">모두 보기</Link>
      </span>
      <span className="menu__container">
        <Link to="/feedback" className="navButton">아이디어 제안하기</Link>
      </span>
    </nav>
  )
}

export default NavBar