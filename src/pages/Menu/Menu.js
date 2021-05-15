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
import { BiMenuAltRight } from "react-icons/bi";
import { MdPets, MdFingerprint } from "react-icons/md";
import { FaPencilAlt, FaBookOpen } from "react-icons/fa";
import "./Menu.css";
import { IconContext } from "react-icons/lib";

function Menu({ children }) {
  const history = useHistory();
  const [open, setOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState("/home");

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

  function handleClick(pathName) {
    history.push(pathName);
    setCurrentPage(pathName);
  }

  function handleDrawer(isOpen) {
    setOpen(isOpen);
  }

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
                    handleClick(listItem.pathName);
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

export default Menu;
