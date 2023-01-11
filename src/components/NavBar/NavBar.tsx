import FavoriteIcon from "@mui/icons-material/Favorite";
import { AppBar, IconButton, Toolbar, Typography } from "@mui/material";

import React from "react";
import { CustomDialog } from "../CustomDialog";
import { dialogOpenSubject$ } from "../CustomDialog/CustomDialog";
import { FavoriteTable } from "./FavoriteTable";
export interface NavBarInterface {}

const NavBar: React.FC<NavBarInterface> = () => {
  const handleClick = () => {
    dialogOpenSubject$.setSubject = true;
  };

  return (
    <>
      <CustomDialog>
        <FavoriteTable />
      </CustomDialog>
      <AppBar position="fixed" color="primary">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Programming with TypeScript, Vite and Redux by Kevin Guzman
          </Typography>
          <IconButton
            color="error"
            aria-label="favorites"
            component="label"
            onClick={handleClick}
          >
            <FavoriteIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default NavBar;
