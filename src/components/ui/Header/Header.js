import React, { useEffect, useState } from "react";

import { BiMenuAltRight } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";

import classes from "./Header.module.scss";
import { Link, useNavigate } from "react-router-dom";

import { Avatar, Menu, Dropdown } from "antd";
import {
  UserOutlined,
  SolutionOutlined,
  LockOutlined,
  TranslationOutlined,
  PoweroffOutlined,
} from "@ant-design/icons";
import { logout } from "../../user/UserAuth";

const Header = () => {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
  const [size, setSize] = useState({
    width: undefined,
    height: undefined,
  });
  // const Token = localStorage.getItem("REACT_TOKEN_AUTH");

  const widgetMenu = (
    <Menu>
      {/* <Menu.Item>
        <SolutionOutlined className="icon" />
        Profile
      </Menu.Item> */}
      {/* <Menu.Item>
        <LockOutlined className="icon" />
        change password
      </Menu.Item>
      <Menu.Item>
        <TranslationOutlined className="icon" />
        change language
      </Menu.Item> */}
      <Menu.Item
        onClick={() => {
          logout();
        }}
      >
        <PoweroffOutlined className="icon" />
        Logout
      </Menu.Item>
    </Menu>
  );

  useEffect(() => {
    const handleResize = () => {
      setSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (size.width > 768 && menuOpen) {
      setMenuOpen(false);
    }
  }, [size.width, menuOpen]);

  const menuToggleHandler = () => {
    setMenuOpen((p) => !p);
  };

  const signupClickHandler = () => {
    menuToggleHandler();
    navigate("/");
  };

  return (
    <header className={classes.header}>
      <div className={classes.header__content}>
        <Link to="/dashboard" className={classes.header__content__logo}>
          CRYPTO - CARE
        </Link>
        <nav
          className={`${classes.header__content__nav} ${
            menuOpen && size.width < 768 ? classes.isMenu : ""
          }`}
        >
          <ul>
            {localStorage.getItem("REACT_TOKEN_AUTH") && (
              <>
                <li>
                  <Link to="/screener" onClick={menuToggleHandler}>
                    Screener
                  </Link>
                </li>

                <li>
                  <Link to="/plans" onClick={menuToggleHandler}>
                    Plans
                  </Link>
                </li>
                <li>
                  <Link to="/news" onClick={menuToggleHandler}>
                    News
                  </Link>
                </li>
              </>
            )}
          </ul>

          {!localStorage.getItem("REACT_TOKEN_AUTH") ? (
            // <button onClick={signupClickHandler}>Login</button>
            <></>
          ) : (
            <Dropdown overlay={widgetMenu}>
              <Avatar icon={<UserOutlined />} />
            </Dropdown>
          )}
          {/*  */}
        </nav>
        <div className={classes.header__content__toggle}>
          {!menuOpen ? (
            <BiMenuAltRight onClick={menuToggleHandler} />
          ) : (
            <AiOutlineClose onClick={menuToggleHandler} />
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
