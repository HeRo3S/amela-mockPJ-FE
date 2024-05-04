import { Box, Button, Fab, Grid, Stack, Typography } from "@mui/material";
import CommonCard from "components/StatsOverview/CommonCard";
import AdminCardsList from "./CardsList";
import { CustomCalendar } from "components/CustomCalendar";
import styles from "./style.module.scss";
import { CheckIcon } from "@heroicons/react/24/solid";

export default function AdminDashboard() {
  const renderCards = Object.entries(AdminCardsList).map(([key, e]) => (
    <Grid key={key} item xs={12} md={6} xl={3}>
      <CommonCard
        title={e.title}
        data={e.data}
        icon={e.icon}
        iconColor={e.iconColor}
      />
    </Grid>
  ));

  return (
    <div className={styles.dashboardWrapper}>
      <Grid container spacing={2}>
        {renderCards}
      </Grid>
      <Stack className={styles.calendarStack}>
        <Typography color="text.secondary">Lịch chấm công tháng này</Typography>
        <CustomCalendar />
      </Stack>
      <div className={styles.actionBtnsWrapper}>
        <Button variant="contained" size="large">
          Chấm công ngay!
        </Button>
      </div>
    </div>
  );
}
