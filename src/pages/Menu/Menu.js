import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import {
  IconButton,
  AppBar,
  Toolbar,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@material-ui/core";
import { BiMenuAltRight, BiLogOut } from "react-icons/bi";
import { MdPets, MdFingerprint } from "react-icons/md";
import { FaPencilAlt, FaBookOpen, FaAddressCard } from "react-icons/fa";
import { BsFillPersonFill } from "react-icons/bs";
import "./Menu.css";
import { IconContext } from "react-icons/lib";

function Menu({ children }) {
  const history = useHistory();
  const [open, setOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState("/home");

  const signIn = false;

  const listButtons = [
    {
      pathName: "/adocao_animais",
      icon: <FaBookOpen />,
      text: "Adoção de animais",
    },
    {
      pathName: "/adote_ja",
      icon: <MdPets />,
      text: "Adote já",
    },
    {
      pathName: "/login",
      icon: <MdFingerprint />,
      text: "Login",
    },
    {
      pathName: "/cadastro",
      icon: <FaPencilAlt />,
      text: "Cadastre-se",
    },
  ];

  const listButtons2 = [
    {
      pathName: "/adocao_animais",
      icon: <FaBookOpen />,
      text: "Adoção de animais",
    },
    {
      pathName: "/adote_ja",
      icon: <MdPets />,
      text: "Adote já",
    },
    {
      pathName: "/perfil",
      icon: <FaAddressCard />,
      text: "Perfil",
    },
    {
      pathName: "/home",
      icon: <BiLogOut />,
      text: "Sair",
    },
  ];

  function handleClick(pathName) {
    history.push(pathName);
    setCurrentPage(pathName);
  }

  function handleDrawer(isOpen) {
    setOpen(isOpen);
  }

  if (signIn === false) {
    return (
      <div>
        <div className="tudo">
          <AppBar position="static">
            <Toolbar
              className="mae"
              style={{ backgroundColor: "#EDFE26", height: "6rem" }}
            >
              <img
                style={{ cursor: "pointer" }}
                className="logo"
                src="/images/Logo.png"
                alt="Logo"
                onClick={() => {
                  history.push("home");
                }}
              ></img>
              <div className="allButtons">
                <div className="buttonsSpace1">
                  <button
                    className="adocao"
                    onClick={() => {
                      history.push("adocao_animais");
                    }}
                  >
                    Adoção de animais
                  </button>
                  <button
                    className="adote"
                    onClick={() => {
                      history.push("adote_ja");
                    }}
                  >
                    Adote já
                  </button>
                </div>
                <div className="buttonsSpace2">
                  <button
                    className="Login"
                    onClick={() => {
                      history.push("login");
                    }}
                  >
                    Login
                  </button>{" "}
                  <button
                    className="cadastre"
                    onClick={() => {
                      history.push("cadastro");
                    }}
                  >
                    Cadastre-se
                  </button>{" "}
                </div>
              </div>
              <IconButton onClick={() => handleDrawer(!open)}>
                <BiMenuAltRight className="menuButton" />
              </IconButton>
            </Toolbar>
          </AppBar>
          <Drawer
            anchor="right"
            className="menuDrawer"
            open={open}
            onClose={() => handleDrawer(false)}
          >
            <List className="listMenu">
              {listButtons.map((listItem) => {
                return (
                  <ListItem
                    button
                    selected={currentPage === listItem.pathName}
                    onClick={() => {
                      return handleClick(listItem.pathName), handleDrawer(false);
                    }}
                  >
                    <div className="buttonsDrawerConfig">
                      <div className="iconConfig">
                        <IconContext.Provider value={{ size: "1.5rem" }}>
                          {listItem.icon}
                        </IconContext.Provider>
                      </div>
                      <ListItemText className="listItemText">
                        <Typography style={{ fontWeight: "bold" }}>
                          {listItem.text}
                        </Typography>
                      </ListItemText>
                    </div>
                  </ListItem>
                );
              })}
            </List>
          </Drawer>
        </div>
        {children}
      </div>
    );
  }
  if (signIn === true) {
    return (
      <div>
        <div className="tudo">
          <AppBar position="static">
            <Toolbar
              className="mae"
              style={{ backgroundColor: "#EDFE26", height: "6rem" }}
            >
              <img
                style={{ cursor: "pointer" }}
                className="logo"
                src="/images/Logo.png"
                alt="Logo"
                onClick={() => {
                  history.push("home");
                }}
              ></img>
              <div className="allButtons">
                <div className="buttonsSpace1">
                  <button
                    className="adocao"
                    onClick={() => {
                      history.push("adocao_animais");
                    }}
                  >
                    Adoção de animais
                  </button>
                  <button
                    className="adote"
                    onClick={() => {
                      history.push("adote_ja");
                    }}
                  >
                    Adote já
                  </button>
                </div>
                <div className="allButtonMenu">
                  <div className="userOverMenu">
                    <IconContext.Provider
                      value={{ size: "2.3rem", color: "black" }}
                    >
                      <BsFillPersonFill
                        onClick={() => {
                          history.push("perfil");
                        }}
                        style={{ cursor: "pointer" }}
                      />
                    </IconContext.Provider>
                    <p
                      className="usernameConfig"
                      onClick={() => {
                        history.push("perfil");
                      }}
                      style={{ cursor: "pointer" }}
                    >
                      Giovanni Silva Pantuzzo
                    </p>
                  </div>
                  <div className="buttonsSpace3">
                    <button
                      className="perfilButton"
                      onClick={() => {
                        history.push("perfil");
                      }}
                    >
                      Perfil
                    </button>{" "}
                    <button
                      className="sairButton"
                      onClick={() => {
                        history.push("home");
                      }}
                    >
                      Sair
                    </button>{" "}
                  </div>
                </div>
              </div>
              <IconButton onClick={() => handleDrawer(!open)}>
                <BiMenuAltRight className="menuButton" />
              </IconButton>
            </Toolbar>
          </AppBar>
          <Drawer
            anchor="right"
            className="menuDrawer"
            open={open}
            onClose={() => handleDrawer(false)}
          >
            <List className="listMenu">
              <div className="loginDrawer">
                <IconContext.Provider value={{ size: "2.3rem" }}>
                  <BsFillPersonFill />
                </IconContext.Provider>
                <p className="usernameDrawer"> Giovanni Silva Pantuzzo</p>
              </div>
              {listButtons2.map((listItem) => {
                return (
                  <ListItem
                    button
                    selected={currentPage === listItem.pathName}
                    onClick={() => {
                      return handleClick(listItem.pathName), handleDrawer(false);
                    }}
                  >
                    <div className="buttonsDrawerConfig">
                      <div className="iconConfig">
                        <IconContext.Provider value={{ size: "1.5rem" }}>
                          {listItem.icon}
                        </IconContext.Provider>
                      </div>
                      <ListItemText className="listItemText">
                        <Typography style={{ fontWeight: "bold" }}>
                          {listItem.text}
                        </Typography>
                      </ListItemText>
                    </div>
                  </ListItem>
                );
              })}
            </List>
          </Drawer>
        </div>
        {children}
      </div>
    );
  }
}

export default Menu;
