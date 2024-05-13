import {
  Avatar,
  SvgIcon,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TablePagination,
  TableRow,
  Typography,
} from "@mui/material";
import { IAccCreateFormData, IGetAccInfo } from "interfaces";
import styles from "./style.module.scss";
import {
  DocumentMagnifyingGlassIcon,
  PencilSquareIcon,
} from "@heroicons/react/24/outline";

interface IProps {
  data: IGetAccInfo[];
  count: number;
  page: number;
  rowsPerPage: number;
  onPageChange: (page: number) => void;
  onRowsPerPageChange: (page: number) => void;
  onClickViewInfoButton: (data: IGetAccInfo) => void;
  adminMode?: boolean | false;
  onClickEditInfoButton: (data: IGetAccInfo) => void;
}

export default function UsersTable(props: IProps) {
  const {
    data,
    count,
    page,
    rowsPerPage,
    onPageChange: parentOnPageChange,
    onRowsPerPageChange: parentOnRowsPerPageChange,
    adminMode,
    onClickEditInfoButton: parentOnClickEditInfoButton,
    onClickViewInfoButton: parentOnClickViewInfoButton,
  } = props;

  const onPageChange = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent> | null,
    page: number
  ) => {
    parentOnPageChange(page);
  };
  const onRowsPerPageChange = (
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    parentOnRowsPerPageChange(+e.target.value);
  };

  const onClickViewInfoButton = (
    e: React.MouseEvent<SVGSVGElement, MouseEvent>,
    data: IAccCreateFormData
  ) => {
    parentOnClickViewInfoButton(data);
  };
  const onClickEditInfoButton = (
    e: React.MouseEvent<SVGSVGElement, MouseEvent>,
    data: IAccCreateFormData
  ) => {
    parentOnClickEditInfoButton(data);
  };

  return (
    <>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Tên nhân viên</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Bộ phận</TableCell>
            <TableCell>Chức vụ</TableCell>
            <TableCell>Giới tinh</TableCell>
            <TableCell></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((e) => (
            <TableRow key={e._id} hover>
              <TableCell className={styles.nameCell}>
                <Avatar src={e.avtString} />
                <Typography>{e.lastName + " " + e.firstName}</Typography>
              </TableCell>
              <TableCell>{e.email}</TableCell>
              <TableCell>{e.division}</TableCell>
              <TableCell>{e.role}</TableCell>
              <TableCell>{e.gender}</TableCell>
              <TableCell className={styles.actionCell}>
                <SvgIcon color="secondary">
                  <DocumentMagnifyingGlassIcon
                    onClick={(event) => onClickViewInfoButton(event, e)}
                  />
                </SvgIcon>
                {adminMode && (
                  <SvgIcon color="success">
                    <PencilSquareIcon
                      onClick={(event) => onClickEditInfoButton(event, e)}
                    />
                  </SvgIcon>
                )}
              </TableCell>
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
