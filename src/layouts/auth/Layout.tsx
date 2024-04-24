import { Box, Typography, Unstable_Grid2 as Grid } from "@mui/material";
import { Link } from "react-router-dom";
import styles from "./style.module.scss";
import Img from "assets/img";

interface IProps {
  children: React.ReactNode;
}
function Layout(props: IProps) {
  const { children } = props;

  return (
    <Grid container className={styles.layoutWrapper}>
      <Grid xs={12} lg={6} className={styles.leftGridWrapper}>
        <Box component="header">
          <Box component={Link} to="/" className={styles.logoLink}>
            <img alt="" src={Img.logo} />
          </Box>
        </Box>
        {children}
      </Grid>
      <Grid xs={12} lg={6} className={styles.rightGridWrapper}>
        <Box sx={{ p: 3 }}>
          <Typography className={styles.welcomeText} variant="h5">
            Chào mừng đến với{" "}
            <Box component="a" target="_blank">
              Amela
            </Box>
          </Typography>
          <Typography className={styles.sloganText} variant="subtitle1">
            Tek For Human - Công nghệ vị nhân sinh
          </Typography>
          {
            // <img alt="" src={Img.logo} />
          }
        </Box>
      </Grid>
    </Grid>
  );
}

export default Layout;
