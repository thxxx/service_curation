import React, { useState } from 'react';
import LeftMenu from './Sections/LeftMenu';
import RightMenu from './Sections/RightMenu';
import { Drawer, Button } from 'antd';
import './Sections/Navbar.css';
import { Link } from 'react-router-dom';

function NavBar() {
  const [visible, setVisible] = useState(false)

  const onClose = () => {
    setVisible(false)
  };

  return (
    <nav className="menu" style={{ position: 'fixed', zIndex: 5, width: '100%' }}>
      <div className="menu__logo">
        <Link to="/" style={{fontSize:'30px', color:'red', backgroundColor:'rgba(255,255,255,0.4)'}}>SC</Link>
      </div>
      <div className="menu__container">
        {/* <Drawer
          title="Basic Drawer"
          placement="right"
          className="menu_drawer"
          closable={false}
          onClose={onClose}
          visible={visible}
        >
          <LeftMenu mode="inline" />
          <RightMenu mode="inline" />
        </Drawer> */}
        <Link to="/upload" className="navButton">추천하고 싶은 서비스 등록하기</Link>
        <Link to="/all" className="navButton">서비스 모두 보기</Link>
        <Link to="/feedback" className="navButton">아이디어 제안하기</Link>
      </div>
    </nav>
  )
}

export default NavBar