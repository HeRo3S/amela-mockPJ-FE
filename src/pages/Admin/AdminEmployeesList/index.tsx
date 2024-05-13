import { GetEmployeesList } from "api/employeesList";
import Loading from "components/Loading";
import Search from "components/Search";
import UsersTable from "components/Tables/UsersTable";
import API from "constants/api";
import { ROUTERS } from "constants/routers";
import { IGetAccInfo } from "interfaces";
import { useState } from "react";
import { useQuery } from "react-query";
import { useNavigate } from "react-router-dom";

export default function AdminEmployeesList() {
  const navigate = useNavigate();
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [searchKey, setSearchKey] = useState("");

  const { isLoading, data, error } = useQuery(
    [API.GET_EMPLOYEES_LIST, page, rowsPerPage, searchKey],
    () => GetEmployeesList(page, rowsPerPage, searchKey)
  );

  // *Note: Table component's function
  const handleOnSearchKeyDown = (searchKey: string) => {
    setSearchKey(searchKey);
  };

  // *Note: Table component's function
  const handleOnClickEditButton = (data: IGetAccInfo) => {
    navigate(`${ROUTERS.ADMIN.ORIGINAL_EDIT_ACCOUNT}/${data._id}`);
  };
  const handleOnClickViewButton = (data: IGetAccInfo) => {};
  const changeRowsPerPage = (rowsPerPage: number) => {
    setRowsPerPage(rowsPerPage);
  };
  const changePage = (page: number) => {
    setPage(page);
  };

  return (
    <div>
      <Search
        onKeyDown={handleOnSearchKeyDown}
        placeholder="Tìm kiếm theo tên..."
      />
      {isLoading ? (
        <Loading />
      ) : (
        <UsersTable
          adminMode
          data={data.pageData}
          count={data.length}
          page={page}
          rowsPerPage={rowsPerPage}
          onPageChange={changePage}
          onRowsPerPageChange={changeRowsPerPage}
          onClickViewInfoButton={handleOnClickViewButton}
          onClickEditInfoButton={handleOnClickEditButton}
        />
      )}
    </div>
  );
}
