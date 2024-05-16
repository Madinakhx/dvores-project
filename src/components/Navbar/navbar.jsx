import React from 'react';
import logo from '../../assets/logo/1661227636_01 2 (1) (1) (1).png';
import {Link, NavLink, Outlet} from 'react-router-dom';
import "./index.css"


function Navbar(props) {
    const menu = [
        {
       path : "/about",
            title : "Biz haqimizda",
    },
        {
            path : "/sports",
            title : "Sport Turlari",
        },
        {
            path : "/awards",
            title : "Erishilgan Yutuqlar",
        },
        {
            path : "/staff",
            title : "Xodimlar",
        },
        {
            path : "/contact",
            title : "Bog'lanish",
        },
    ]

    return (
        <nav className="navbar">
            <div className="logo">
                <Link to="/"> <img src={logo} alt=""/></Link>
                <h5>ANGREN SHAHAR <br/>
                2-SON SPORT <br/>
                MAKTABI</h5>
                {/*<a href="#"> ANGREN SHAHAR*/}
                {/*<br/> 2-SON SPORT <br/> MAKTABI </a>*/}
                {/*<Link to="/"><h5>ANGREN SHAHAR <br/>*/}
                {/*    2-SON SPORT*/}
                {/*    <br/> MAKTABI</h5></Link>*/}

            </div>
            <div className="menu">
                {
                    menu.map((item, index) => <ul key={item.path}>
                        <li><NavLink to={item.path}> {item.title} </NavLink></li>
</ul>)
    }
</div>
            <Outlet/>
        </nav>
    );
}

export default Navbar;