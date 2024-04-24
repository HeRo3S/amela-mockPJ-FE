import { Box, Paper, styled } from "@mui/material";
import backgroundImg from "../../../assets/loginBG.png";

export const BackgroundContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  alignContent: "center",
  backgroundImage: `url(${backgroundImg})`,
  backgroundSize: "cover",

  backgroundPosition: "contain",
  width: "100vw",
  height: "100vh",

  [theme.breakpoints.down("md")]: {
    width: "auto",
  },
}));

