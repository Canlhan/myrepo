import React from 'react';
import { Link } from 'react-router-dom';
import style from './navbar.module.css';
const Navbar = () => {

  return (
      <>
      <nav className={style.navbar}>
            <div className={style.navbar_left}>
                <div className={style.logo}>
                    <Link to='/' className={style.link}>
                        <img src="/logo.png" alt="Logo" />
                        <span className={style.site_name}>Site İsmi</span>
                    </Link>
                </div>
            </div>
            <div className={style.navbar_right}>
                
                <div className={style.login}>
                <Link to='/login'  className={style.link}>
                    <span className={style.login_icon}>Giriş</span>
                </Link> 
                </div>
                <div className={style.logout}>
                    <Link to={`/logout`}  className={style.link}>
                    <span className={style.logout_icon}>Çıkış</span>
                    </Link>
                </div>
                <div className={style.details}>
                    <span className={style.detail_icon}>≡</span>
                </div>
            </div>
        </nav>
      </>
    
  )
}

export default Navbar