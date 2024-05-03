import { Grid } from "@mui/material";
import CommonCard from "components/StatsOverview/CommonCard";
import AdminCardsList from "./CardsList";

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
    <Grid container spacing={2}>
      {renderCards}
    </Grid>
  );
}
