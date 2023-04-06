"use client";

import { useState } from "react";
import {
  ThemeProvider,
  BottomNavigation,
  BottomNavigationAction,
  Box,
} from "@mui/material";
import { createTheme } from "@mui/material/styles";
import {
  RocketLaunchIcon,
  HomeIcon,
  UserGroupIcon,
} from "@heroicons/react/24/solid";

export default function NavBar() {
  const [value, setValue] = useState(0);
  const theme = createTheme({
    components: {
      MuiBottomNavigation: {
        styleOverrides: {
          root: {
            position: "fixed",
            bottom: 50,
            width: 300,
            backgroundColor: "black",
            borderRadius: 10,
          },
        },
      },
      MuiBottomNavigationAction: {
        styleOverrides: { root: { color: "white" } },
      },
    },
  });

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
      }}
    >
      <ThemeProvider theme={theme}>
        <BottomNavigation
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        >
          <BottomNavigationAction
            label="Explore"
            icon={<RocketLaunchIcon className="h-6 w-6" aria-hidden="true" />}
          />
          <BottomNavigationAction
            label="Build"
            icon={<HomeIcon className="h-6 w-6" aria-hidden="true" />}
          />
          <BottomNavigationAction
            label="Colab"
            icon={<UserGroupIcon className="h-6 w-6" aria-hidden="true" />}
          />
        </BottomNavigation>
      </ThemeProvider>
    </Box>
  );
}
