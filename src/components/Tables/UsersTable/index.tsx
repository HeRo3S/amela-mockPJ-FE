import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TablePagination,
  TableRow,
} from "@mui/material";
import { IAccCreateFormData } from "interfaces";
import Loading from "components/Loading";
import { useEffect } from "react";

interface IProps {
  data: IAccCreateFormData[];
  count: number;
  page: number;
  rowsPerPage: number;
  onPageChange: (page: number) => void;
  onRowsPerPageChange: (page: number) => void;
}

export default function UsersTable(props: IProps) {
  const {
    data,
    count,
    page,
    rowsPerPage,
    onPageChange: parentOnPageChange,
    onRowsPerPageChange: parentOnRowsPerPageChange,
  } = props;

  const onPageChange = (e, page: number) => {
    parentOnPageChange(page);
  };
  const onRowsPerPageChange = (
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    parentOnRowsPerPageChange(+e.target.value);
  };

  return (
    <>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Số thứ tự</TableCell>
            <TableCell>Tên nhân viên</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Bộ phận</TableCell>
            <TableCell>Giới tinh</TableCell>
            <TableCell></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((e) => (
            <TableRow key={e._id} hover>
              <TableCell></TableCell>
              <TableCell>{e.lastName + " " + e.firstName}</TableCell>
              <TableCell>{e.email}</TableCell>
              <TableCell>{e.division}</TableCell>
              <TableCell>{e.gender}</TableCell>
              <TableCell></TableCell>
            </TableRow>
          ))}
        </TableBody>
        <TablePagination
          count={count}
          onPageChange={onPageChange}
          page={page}
          rowsPerPage={rowsPerPage}
          onRowsPerPageChange={onRowsPerPageChange}
        />
      </Table>
    </>
  );
}
