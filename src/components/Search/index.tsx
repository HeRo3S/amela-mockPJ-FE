import { Card, InputAdornment, OutlinedInput, SvgIcon } from "@mui/material";
import MagnifyingGlassIcon from "@heroicons/react/24/solid/MagnifyingGlassIcon";

interface IProps {
  onKeyDown: () => void;
  placeholder: string;
}
export default function Search(props: IProps) {
  const { onKeyDown, placeholder } = props;
  return (
    <>
      <Card sx={{ p: 2 }}>
        <OutlinedInput
          defaultValue=""
          fullWidth
          placeholder={placeholder || "Tìm kiếm"}
          startAdornment={
            <InputAdornment position="start">
              <SvgIcon color="action" fontSize="small">
                <MagnifyingGlassIcon />
              </SvgIcon>
            </InputAdornment>
          }
          sx={{ maxWidth: 500 }}
          onKeyDown={onKeyDown}
        />
      </Card>
    </>
  );
}
