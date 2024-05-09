import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TablePagination,
  TableRow,
} from "@mui/material";
import { IAccCreateFormData } from "interfaces";

interface IProps {
  data: IAccCreateFormData[];
}
export default function UsersTable(props: IProps) {
  const { data } = props;
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
            <TableRow hover>
              <TableCell></TableCell>
              <TableCell>{e.lastName + " " + e.firstName}</TableCell>
              <TableCell>{e.email}</TableCell>
              <TableCell>{e.division}</TableCell>
              <TableCell>{e.gender}</TableCell>
              <TableCell></TableCell>
            </TableRow>
          ))}
        </TableBody>
        <TablePagination />
      </Table>
    </>
  );
}
