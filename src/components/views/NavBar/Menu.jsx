import React from "react";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import { Link } from "react-router-dom";
import AccountCircle from "@material-ui/icons/AccountCircle";
import IconButton from "@material-ui/core/IconButton";

export const menuId = "primary-search-account-menu";
export const DesktopMenu = ({
  classes,
  anchorEl,
  isMenuOpen,
  handleMenuClose,
}) => (
  <Menu
    anchorEl={anchorEl}
    anchorOrigin={{ vertical: "top", horizontal: "right" }}
    id={menuId}
    keepMounted
    transformOrigin={{ vertical: "top", horizontal: "right" }}
    open={isMenuOpen}
    onClose={handleMenuClose}
  >
    <Link to="/register" className={classes.sectionDesktopMenuItem}>
      <MenuItem onClick={handleMenuClose}>회원가입</MenuItem>
    </Link>
    <Link to="/login" className={classes.sectionDesktopMenuItem}>
      <MenuItem onClick={handleMenuClose}>로그인</MenuItem>
    </Link>
  </Menu>
);

export const mobileMenuId = "primary-search-account-menu-mobile";
export const MobileMenu = ({
  mobileMoreAnchorEl,
  isMobileMenuOpen,
  handleMobileMenuClose,
  handleProfileMenuOpen,
}) => (
  <Menu
    anchorEl={mobileMoreAnchorEl}
    anchorOrigin={{ vertical: "top", horizontal: "right" }}
    id={mobileMenuId}
    keepMounted
    transformOrigin={{ vertical: "top", horizontal: "right" }}
    open={isMobileMenuOpen}
    onClose={handleMobileMenuClose}
  >
    <MenuItem onClick={handleProfileMenuOpen}>
      <IconButton
        aria-label="account of current user"
        aria-controls="primary-search-account-menu"
        aria-haspopup="true"
        color="inherit"
      >
        <AccountCircle />
      </IconButton>
      <p>Profile</p>
    </MenuItem>
  </Menu>
);
