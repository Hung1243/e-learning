import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { logout } from '../redux/Reducers/UserReducer';
import { Tooltip } from 'antd';
const Header = () => {
    const [click, setClick] = useState(false);
    const userInfo = useSelector((state) => state.user);
    const dispatch = useDispatch();
    const onLogout = () => {
        dispatch(logout());
    };
    const [searchTerm, setSearchTerm] = useState('');
    const navigate = useNavigate();
    const handleInputChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const handleSearch = () => {
        const newUrl = `course?key=${encodeURIComponent(searchTerm)}`;
        navigate(newUrl)
    };
    return (
        <>
            <section className="head">
                <div className="container flexSB">
                    <div className="logo">
                        <h1>ACADEMIA</h1>
                        <span>ONLINE EDUCATION & LEARNING</span>
                    </div>

                    <div className="social">
                        <i className="fab fa-facebook-f icon"></i>
                        <i className="fab fa-instagram icon"></i>
                        <i className="fab fa-twitter icon"></i>
                        <i className="fab fa-youtube icon"></i>
                    </div>
                </div>
            </section>

            <header>
                <nav className="flexSB">
                    <ul className={click ? 'mobile-nav' : 'flexSB fs-5'} onClick={() => setClick(false)}>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/course">All Courses</Link>
                        </li>
                        {/* <li>
              <Link to="/my-profile">My Profile</Link>
            </li> */}
                        <li>
                            <Link to="/about">About Us</Link>
                        </li>
                        <li>
                            <Link to="/journal">Journal</Link>
                        </li>

                        <li>
                            {userInfo.taiKhoan != null ? <> <Link to="/my-profile">Hi {userInfo.taiKhoan}</Link>{' '}
                                <Tooltip title="Logout" className=" cursor-pointer"><i onClick={onLogout} className="fa fa-power-off cursor-pointer"></i></Tooltip>
                            </> : <Link to="/login">Account</Link>}

                        </li>

                    </ul>

                    <div className="start">
                        {/* <div className="button">GET CERTIFICATE</div> */}
                        <div className="header-search">
                            <input
                                type="text"
                                placeholder="Search courses..."
                                value={searchTerm}
                                onChange={handleInputChange}
                                style={{ background: 'transparent', color: '##fffffff0' }}
                            />
                            <button
                                style={{
                                    margin: 0,
                                    padding: 0,
                                    background: 'transparent',
                                    color: '#fffffff0'
                                }}
                                onClick={handleSearch}>
                                <i className="fa fa-search" style={{ cursor: 'pointer' }}></i>
                            </button>
                        </div>
                    </div>
                    <button className="toggle" onClick={() => setClick(!click)}>
                        {click ? <i className="fa fa-times"> </i> : <i className="fa fa-bars"></i>}
                    </button>
                </nav>
            </header>
        </>
    );
};

export default Header;
