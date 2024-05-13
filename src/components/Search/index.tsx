import { Card, InputAdornment, OutlinedInput, SvgIcon } from "@mui/material";
import MagnifyingGlassIcon from "@heroicons/react/24/solid/MagnifyingGlassIcon";
import React from "react";

interface IProps {
  onKeyDown: (keySearch: string) => void;
  placeholder: string;
}
export default function Search(props: IProps) {
  const { onKeyDown: onParentKeyDown, placeholder } = props;

  const handleKeyDown = (
    e: React.KeyboardEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    if (e.key === "Enter") {
      const eTarget = e.target as HTMLInputElement;
      onParentKeyDown(eTarget.value);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    onParentKeyDown(e.target.value);
  };

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
          onKeyDown={handleKeyDown}
          onChange={handleChange}
        />
      </Card>
    </>
  );
}
