import { Button, Grid, Stack, Typography } from "@mui/material";
import CommonCard from "components/StatsOverview/CommonCard";
import AdminCardsList from "./CardsList";
import { CustomCalendar } from "components/CustomCalendar";
import styles from "./style.module.scss";
import { useDialog } from "utils/hooks/useDialog";
import ConfirmationDialog from "components/Dialog/ConfirmationDialog";

export default function AdminDashboard() {
  const {
    open: dialogOpen,
    handleClose: handleDialogClose,
    handleOpen: handleDialogOpen,
    handleToggle: handleDialogToggle,
  } = useDialog();

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
      <ConfirmationDialog
        open={dialogOpen}
        onClose={handleDialogClose}
        loading
        title="Thực hiện chấm công"
        successMessage="Chấm công thành công!"
        errorMessage="Chấm công thất bại!"
      />
      <Grid container spacing={2}>
        {renderCards}
      </Grid>
      <Stack className={styles.calendarStack}>
        <Typography color="text.secondary">Lịch chấm công tháng này</Typography>
        <CustomCalendar />
      </Stack>
      <div className={styles.actionBtnsWrapper}>
        <Button variant="contained" size="large" onClick={handleDialogOpen}>
          Chấm công ngay!
        </Button>
      </div>
    </div>
  );
}
