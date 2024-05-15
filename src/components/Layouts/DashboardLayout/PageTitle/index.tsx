import { Typography, styled } from "@mui/material";

const StyledTitle = styled(Typography)(({ theme }) => ({
  paddingBottom: "1rem",
  [theme.breakpoints.down("lg")]: {
    paddingLeft: "1rem",
  },
}));

interface IProps {
  text: string;
}
export default function PageTitle(props: IProps) {
  const { text } = props;
  return (
    <StyledTitle variant="h3" gutterBottom>
      {text}
    </StyledTitle>
  );
}
