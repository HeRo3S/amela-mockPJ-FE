import { GetEmployeeInfoByID } from "api/employeesList";
import AccountView from "components/AccountView";
import PageTitle from "components/Layouts/DashboardLayout/PageTitle";
import Loading from "components/Loading";
import API from "constants/api";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import styles from "../../Admin/AdminCreateAccount/style.module.scss";

export default function ViewAccount() {
  const { id } = useParams();

  const { isLoading, data } = useQuery([API.GET_EMPLOYEES_ID, id], () =>
    GetEmployeeInfoByID(id as string)
  );

  if (isLoading) return <Loading />;
  return (
    <div className={styles.contentWrapper}>
      <PageTitle text="Tài khoản đồng nghiệp" />
      <AccountView info={data} />
    </div>
  );
}
