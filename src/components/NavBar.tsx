"use client";

import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { setSelectedNavBarView } from "@/redux/features/NavBarSlice";

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
  const dispatch = useAppDispatch();
  const selectedView = useAppSelector((state) => state.navBar.selectedView);

  const theme = createTheme({
    components: {
      MuiBottomNavigation: {
        styleOverrides: {
          root: {
            position: "fixed",
            bottom: 25,
            height: 50,
            width: 230,
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
          value={selectedView}
          onChange={(event, newValue) =>
            dispatch(setSelectedNavBarView(newValue))
          }
        >
          <BottomNavigationAction
            icon={<RocketLaunchIcon className="h-6 w-6" aria-hidden="true" />}
          />
          <BottomNavigationAction
            icon={<HomeIcon className="h-6 w-6" aria-hidden="true" />}
          />
          <BottomNavigationAction
            icon={<UserGroupIcon className="h-6 w-6" aria-hidden="true" />}
          />
        </BottomNavigation>
      </ThemeProvider>
    </Box>
  );
}
