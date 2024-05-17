import {
  Avatar,
  IconButton,
  SvgIcon,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TablePagination,
  TableRow,
  Typography,
} from "@mui/material";
import { IGetAccInfo } from "interfaces";
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
    page: number,
  ) => {
    parentOnPageChange(page);
  };
  const onRowsPerPageChange = (
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>,
  ) => {
    parentOnRowsPerPageChange(+e.target.value);
  };

  const onClickViewInfoButton = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    data: IGetAccInfo,
  ) => {
    parentOnClickViewInfoButton(data);
  };
  const onClickEditInfoButton = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    data: IGetAccInfo,
  ) => {
    parentOnClickEditInfoButton(data);
  };

  return (
    <div className={styles.tableWrapper}>
      <Table className={styles.table}>
        <TableHead>
          <TableRow>
            <TableCell>Tên nhân viên</TableCell>
            <TableCell className={styles.emailColumn}>Email</TableCell>
            <TableCell>Bộ phận</TableCell>
            <TableCell>Chức vụ</TableCell>
            <TableCell className={styles.genderColumn}>Giới tinh</TableCell>
            <TableCell className={styles.actionCell}></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((e) => (
            <TableRow key={e._id} hover>
              <TableCell className={styles.nameCell}>
                <Avatar src={e.avtString} />
                <Typography>{e.lastName + " " + e.firstName}</Typography>
              </TableCell>
              <TableCell className={styles.emailColumn}>{e.email}</TableCell>
              <TableCell>{e.division}</TableCell>
              <TableCell>{e.role}</TableCell>
              <TableCell className={styles.genderColumn}>{e.gender}</TableCell>
              <TableCell className={styles.actionCell}>
                <IconButton
                  onClick={(event) => onClickViewInfoButton(event, e)}
                >
                  <SvgIcon color="secondary">
                    <DocumentMagnifyingGlassIcon />
                  </SvgIcon>
                </IconButton>
                {adminMode && (
                  <IconButton
                    onClick={(event) => onClickEditInfoButton(event, e)}
                  >
                    <SvgIcon color="success">
                      <PencilSquareIcon />
                    </SvgIcon>
                  </IconButton>
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
          rowsPerPageOptions={[7, 10, 15, 20]}
          onRowsPerPageChange={onRowsPerPageChange}
        />
      </Table>
    </div>
  );
}
