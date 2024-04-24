import { Box } from "@mui/material";
import { BackgroundContainer } from "./index.style";

interface IProps {
  children: React.ReactNode;
}

export default function AuthLayout(props: IProps) {
  const { children } = props;
  return <BackgroundContainer>{children}</BackgroundContainer>;
}
