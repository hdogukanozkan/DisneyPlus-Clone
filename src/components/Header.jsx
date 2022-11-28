import styled from "styled-components";
import { auth, provider } from "../firebase.js";
import { useDispatch, useSelector } from "react-redux";
import {
  setUserLoginDetails,
  setSignOutState,
} from "../features/user/userSlice";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Header(props) {
  const userName = useSelector((state) => state.user.name);
  const userPhoto = useSelector((state) => state.user.photo);
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const handleAuth = () => {
    if (!userName) {
      // Giriş için kullanıyoruz. ve setUser'a veri dönderiyoruz
      auth
        .signInWithPopup(provider)
        .then((result) => {
          setUser(result.user);
        })
        .catch((error) => {
          alert(error.message);
        });
    } else {
      // Burada da çıkış yaptırıyoruz. Ve state action ile tüm girdileri null yapıyoruz.
      auth
        .signOut()
        .then(() => {
          dispatch(setSignOutState());
          navigate("/");
        })
        .catch((err) => alert(err.message));
    }
  };

  const setUser = (user) => {
    // Bura da state action'ı çalıştırıp verileri giriyoruz.
    dispatch(
      setUserLoginDetails({
        name: user.displayName,
        email: user.email,
        photo: user.photoURL,
      })
    );
  };

  useEffect(() => {
    // BU NE İŞE YARIYOR TAM ANLAYAMADIM..
    auth.onAuthStateChanged(async (user) => {
      if (user) {
        setUser(user);
        navigate("/home");
      } else {
        navigate("/");
      }
    });
  }, [userName]);

  return (
    <Nav>
      <Logo>
        <img src="/images/logo.svg" alt="Disney+" />
      </Logo>

      {!userName ? (
        <Login onClick={handleAuth}>Login</Login>
      ) : (
        <>
          <NavMenu>
            <a href="/home">
              <img src="/images/home-icon.svg" alt="HOME" />
              <span>HOME</span>
            </a>
            <a href="/home">
              <img src="/images/search-icon.svg" alt="SEARCH" />
              <span>SEARCH</span>
            </a>
            <a href="/home">
              <img src="/images/watchlist-icon.svg" alt="WATCH" />
              <span>WATCHLİST</span>
            </a>
            <a href="/home">
              <img src="/images/original-icon.svg" alt="ORIGINALS" />
              <span>ORIGINALS</span>
            </a>
            <a href="/home">
              <img src="/images/movie-icon.svg" alt="MOVIES" />
              <span>MOVIES</span>
            </a>
            <a href="/home">
              <img src="/images/series-icon.svg" alt="SERIES" />
              <span>SERIES</span>
            </a>
          </NavMenu>
          <SignOut>
            <UserImg src={userPhoto} alt={userName} />
            <DropDown>
              <span onClick={handleAuth}>Sign Out</span>
            </DropDown>
          </SignOut>
        </>
      )}
    </Nav>
  );
}

const Nav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 85px;
  background-color: #090b13;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  color: #f9f9f9;
  padding: 0 36px;
  z-index: 3;
`;

const Logo = styled.a`
  padding: 0;
  width: 95px;
  margin-top: 4px;
  max-height: 70px;
  display: inline-block;
  img {
    display: block;
    width: 100%;
  }
`;

const NavMenu = styled.div`
  align-items: center;
  display: flex;
  flex-flow: row nowrap;
  height: 100%;
  justify-content: flex-end;
  margin: 0;
  padding: 0;
  position: relative;
  margin-right: auto;
  margin-left: 25px;

  a {
    display: flex;
    align-items: center;
    padding: 0 12px;

    img {
      height: 25px;
      min-width: 25px;
      width: 25px;
    }

    span {
      color: rgb(249, 249, 249);
      font-size: 16px;
      letter-spacing: 1.5px;
      line-height: 1.08;
      padding: 2px 0;
      white-space: nowrap;
      position: relative;

      &:before {
        background-color: rgb(249, 249, 249);
        border: none;
        border-radius: 0 0 4px 4px;
        bottom: -6px;
        content: "";
        height: 2px;
        position: absolute;
        left: 0;
        width: 100%;
        opacity: 0;
        visibility: hidden;
        transform: scaleX(0);
        transform-origin: left center;
        transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
      }
    }
    &:hover {
      span:before {
        transform: scaleX(1);
        opacity: 1 !important;
        visibility: visible;
      }
    }
  }

  ${
    "" /*   @media (max-width: 768px) {
    display: none;
  } */
  }
`;

const Login = styled.a`
  background-color: rgba(0, 0, 0, 0.6);
  padding: 10px 16px;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  border: 1px solid #f9f9f9;
  border-radius: 4px;
  transition: all 0.2s ease 0s;
  cursor: pointer;
  font-size: 20px;

  &:hover {
    background-color: #f9f9f9;
    color: #000;
    border-color: transparent;
  }
`;

const UserImg = styled.img`
  height: 100%;
`;

const DropDown = styled.div`
  position: absolute;
  top: 48px;
  right: 0;
  background: rgb(19, 19, 19);
  border: 1px solid rgba(151, 151, 151, 0.34);
  border-radius: 4px;
  box-shadow: rgb(0 0 0 /50%), 0 0 18px 0;
  padding: 10px;
  font-size: 16px;
  width: 8rem;
  text-align: center;
  letter-spacing: 3px;
  opacity: 0;
`;

const SignOut = styled.div`
  position: relative;
  width: 65px;
  height: 65px;
  display: flex;
  cursor: pointer;
  align-items: center;
  justify-content: center;

  ${UserImg} {
    border-radius: 50%;
  }

  &:hover {
    ${DropDown} {
      opacity: 1;
      transition-duration: 1s;
    }
  }
`;

export default Header;
