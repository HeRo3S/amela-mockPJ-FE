import { createTheme } from "@mui/material/styles";
import { createTypography } from "./create-typography";
import { createPalette } from "./create-palette";
import { createShadows } from "./create-shadows";
import { createComponents } from "./create-components";

const typography = createTypography();
const palette = createPalette();
const shadows = createShadows();
const components = createComponents({ palette });

const MUI_THEME = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1440,
    },
  },
  typography,
  palette,
  shadows,
  components,
});

export default MUI_THEME;
