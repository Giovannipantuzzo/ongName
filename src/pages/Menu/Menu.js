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
import "./Menu.css";

function Menu() {
    const history = useHistory();
    const [open, setOpen] = useState(false);
    const [currentPage, setCurrentPage] = useState("/home");

    const listButtons = [
        {
            pathName: "/adocao_animal",
            text: "Adoção de animais",
         },
         {
            pathName: "/adote-ja",
            text: "Adote já",
         },
         {
            pathName: "/login",
            text: "Login",
         },
         {
            pathName: "/cadastro",
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

    return(
        <div className="tudo"> 
               <AppBar position="static">
                <Toolbar className="mae" style={{ backgroundColor: "#EDFE26", height: "6rem"}}>
                        <img style={{ cursor: "pointer" }} className="logo" src="/images/Logo.png" alt="Logo" onClick={() => {
                                history.push("home");
                            }}></img>
                        <div className="allButtons">
                            <div className="buttonsSpace1">
                                <button className="adocao" onClick={() => {
                                    history.push("adocao_animal");
                                }}>
                                    Adoção de animais
                                </button>
                                <button className="adote" onClick={() => {
                                    history.push("adote-ja");
                                }}>
                                    Adote já
                                </button>
                            </div>
                            <div className="buttonsSpace2">
                                <button className="Login" onClick={() => {
                                    history.push("login");
                                }}>
                                    Login</button>{' '}
                                <button className="cadastre" onClick={() => {
                                    history.push("cadastro");
                                }}>
                                    Cadastre-se</button>{' '}
                            </div>
                        </div> 
                        <IconButton onClick={() => handleDrawer(!open)}>
                            <BiMenuAltRight className="menuButton"/>
                        </IconButton>
                       
                </Toolbar>
            </AppBar>
            <Drawer open={open} onClose={() => handleDrawer(false)}>
                <List className="listMenu">
                    {listButtons.map((ListItem) => {
                        return (
                            <ListItem 
                             button 
                             selected={currentPage === listItem.pathName} 
                             onClick={() => {
                                 handleClick(listButtons.pathName);
                                }}
                             >
                                <ListItemText className="listItemText">
                                    <Typography>{listButtons.text}</Typography>
                                </ListItemText>
                             </ListItem>
                        );
                    })}
                </List>
            </Drawer>
        </div>
    );
    
}

export default Menu;