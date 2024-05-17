import { styled } from "@mui/material/styles";
import { useEffect, useState } from "react";
import { Slide, Alert, Box } from "@mui/material";
import { useAppDispatch, useAppSelector } from "utils/hooks/reduxToolkit";
import { clearAlert } from "redux/features/alertSlice";

const StyledAlertContainer = styled(Box)({
  position: "fixed",
  top: "50px",
  right: "50px",
  zIndex: 100000000,
});

function GlobalAlert() {
  const { severity, message } = useAppSelector((state) => state.alert);
  const [open, setOpen] = useState(false);
  const dispatch = useAppDispatch();

  useEffect(() => {
    setOpen(message !== "");
    const timer = setTimeout(() => {
      setOpen(false);
      dispatch(clearAlert());
    }, 3000);

    return () => clearTimeout(timer);
  }, [severity, message, dispatch]);

  return (
    <StyledAlertContainer>
      <Slide in={open}>
        <Alert variant="filled" severity={severity}>
          {message}
        </Alert>
      </Slide>
    </StyledAlertContainer>
  );
}

export default GlobalAlert;
