import React from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";

import { NavLink, useHistory } from "react-router-dom";
// import { UserStoreContext } from '../context/UserContext';

//redux
import {updateProfile} from '../redux/actions/authAction'
import { useSelector, useDispatch } from 'react-redux'

const NavBar = () => {
  const history = useHistory();
  // const [profile, setProfile] = useState(null);
  // const userStore = React.useContext(UserStoreContext);
  //redux
  const profileRedux = useSelector((state) => state.authReducer.profile)
  const total = useSelector((state) => state.cartReducer.total)

  const dispatch = useDispatch();
  // const getProfile = () => {
  //   const profileValue = JSON.parse(localStorage.getItem('profile'));
  //   if (profileValue) {
  //     setProfile(profileValue);
  //   }
  // };

  // React.useEffect(() => {
  //   console.log("use Effect navbar");
  //   getProfile();
  // }, []);



  // //new version with context
  // const getProfile = () => {
  //     const profileValue = JSON.parse(localStorage.getItem('profile'));
  //     if (profileValue) {
  //      userStore.updateProfile(profileValue);
  //     }
  //   };
  
  //   React.useEffect(() => {
  //     console.log("use Effect navbar");
  //     getProfile();
  //     // eslint-disable-next-line react-hooks/exhaustive-deps
  //   }, []);

  //new version with Redux
  const getProfile = () => {
    const profileValue = JSON.parse(localStorage.getItem('profile'));
    if (profileValue) {
     dispatch(updateProfile(profileValue));
    }
  };

  React.useEffect(() => {
    console.log("use Effect navbar");
    getProfile();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const logout = () => {
    localStorage.removeItem('token')
    localStorage.removeItem('profile')
    history.replace('/')
    // history.go(0)
    // userStore.updateProfile(null)

    dispatch(updateProfile(null));
  }

  return (
    <>
      <Navbar bg="light" expand="lg">
        <NavLink className="navbar-brand" to="/" exact={true}>
          <img
            alt=""
            src="/logo192.png"
            width="30"
            height="30"
            className="d-inline-block align-top"
          />{" "}
          CodingThailand
        </NavLink>
        {/* <Navbar.Brand href="#home">
            <img
              alt=""
              src="/logo192.png"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}
            CodingThailand
          </Navbar.Brand> */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <NavLink className="nav-link" to="/" exact activeClassName="active">
              หน้าหลัก
            </NavLink>
            <NavLink
              className="nav-link"
              to="/product"
              activeClassName="active"
            >
              สินค้า
            </NavLink>
            <NavLink className="nav-link" to="/about" activeClassName="active">
              เกี่ยวกับ
            </NavLink>

            <NavLink className="nav-link" to="/cart" activeClassName="active">
              ตะกร้าสินค้า {total} ชิ้น
            </NavLink>

            <NavDropdown
              title="Workshop (Pagination + CRUD)"
              id="basic-nav-dropdown"
            >
              <NavDropdown.Item
                onClick={() => {
                  history.replace("/hospital");
                }}
              >
                ข้อมูลสถานพยาบาล (Pagination)
              </NavDropdown.Item>

              <NavDropdown.Item
                onClick={() => {
                  history.replace("/category");
                }}
              >
                หมวดหมู่ข่าว (CRUD)
              </NavDropdown.Item>
            </NavDropdown>

            <NavLink className="nav-link" to="/upload" activeClassName="active">
              อัปโหลดไฟล์
            </NavLink>

            <NavLink className="nav-link" to="/member" activeClassName="active">
              เมนูสมาชิก 
            </NavLink>
            <NavLink className="nav-link" to="/chart" activeClassName="active">
              Chart Report
            </NavLink>

          </Nav>

          

          {/* {
            userStore.profile ? (
            <span className="navbar-text text-gray">
            ยินดีต้อนรับคุณ {userStore.profile.name} status: {userStore.profile.role}
            <button className="btn btn-danger ml-2" onClick={logout}>
              Log out
            </button>
            </span>
          ) : (
            <>
            <Nav>
              <NavLink
                className="nav-link"
                to="/register"
                activeClassName="active"
              >
                สมัครสมาชิก
              </NavLink>
              <NavLink
                className="nav-link"
                to="/login"
                activeClassName="active"
              >
                เข้าสู่ระบบ
              </NavLink>
            </Nav>
            </>
          )
          } */}
          {
            profileRedux ? (
            <span className="navbar-text text-gray">
            ยินดีต้อนรับคุณ {profileRedux.name} status: {profileRedux.role}
            <button className="btn btn-danger ml-2" onClick={logout}>
              Log out
            </button>
            </span>
          ) : (
            <>
            <Nav>
              <NavLink
                className="nav-link"
                to="/register"
                activeClassName="active"
              >
                สมัครสมาชิก
              </NavLink>
              <NavLink
                className="nav-link"
                to="/login"
                activeClassName="active"
              >
                เข้าสู่ระบบ
              </NavLink>
            </Nav>
            </>
          )
          }
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default NavBar;
