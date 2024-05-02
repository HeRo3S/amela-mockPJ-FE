import { Link } from "react-router-dom";
import { Box, ButtonBase } from "@mui/material";
import styles from "./style.module.scss";
import classNames from "classnames";

interface IProps {
  active: boolean;
  disabled?: boolean;
  external?: boolean;
  icon: JSX.Element;
  path: string;
  title: string;
}
function SideNavItem(props: IProps) {
  const { active = false, disabled, external, icon, path, title } = props;

  const linkProps = path
    ? external
      ? {
          component: "a",
          to: path,
          target: "_blank",
        }
      : {
          component: Link,
          to: path,
        }
    : {};

  return (
    <li className={styles.customListItem}>
      <ButtonBase
        {...linkProps}
        className={classNames(styles.buttonBase, { [styles.active]: active })}
      >
        {icon && (
          <Box
            component="span"
            className={`${styles.customListIcon} ${active && styles.active}`}
          >
            {icon}
          </Box>
        )}
        <Box
          component="span"
          className={classNames(styles.customTitle, {
            [styles.active]: active,
            [styles.disabled]: disabled,
          })}
        >
          {title}
        </Box>
      </ButtonBase>
    </li>
  );
}

export default SideNavItem;
