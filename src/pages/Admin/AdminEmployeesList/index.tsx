import { GetEmployeesList } from "api/employeesList";
import Loading from "components/Loading";
import Search from "components/Search";
import UsersTable from "components/Tables/UsersTable";
import API from "constants/api";
import { useEffect, useState } from "react";
import { useQuery } from "react-query";

export default function AdminEmployeesList() {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(7);

  const { isLoading, data, error } = useQuery(
    [API.GET_EMPLOYEES_LIST, page, rowsPerPage],
    () => GetEmployeesList(page, rowsPerPage)
  );

  const changeRowsPerPage = (rowsPerPage: number) => {
    setRowsPerPage(rowsPerPage);
  };

  const changePage = (page: number) => {
    setPage(page);
  };

  return (
    <div>
      <Search />
      {isLoading ? (
        <Loading />
      ) : (
        <UsersTable
          data={data.pageData}
          count={data.length}
          page={page}
          rowsPerPage={rowsPerPage}
          onPageChange={changePage}
          onRowsPerPageChange={changeRowsPerPage}
        />
      )}
    </div>
  );
}
