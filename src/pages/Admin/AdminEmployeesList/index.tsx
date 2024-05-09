import { sendGet } from "api/axios";
import Search from "components/Search";
import UsersTable from "components/Tables/UsersTable";
import configs from "constants/config";
import { createMultipleEmployees } from "mocks/objects/employeesList";
import { useEffect } from "react";

export default function EmployeesList() {
  useEffect(() => {
    fetch("https://example.com/employeesList")
      .then((res) => res.json())
      .then((json) => {
        console.log(json);
      });
  }, []);

  return (
    <div>
      <Search />
      <UsersTable data={createMultipleEmployees(30)} />
    </div>
  );
}
