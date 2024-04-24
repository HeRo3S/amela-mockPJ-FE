import React, { memo } from "react";
import { Spin } from "antd";
import styles from "./styles.module.scss";
import classNames from "classnames";
import { uniqueId } from "lodash";

interface LoaderProps {
  isVisible?: boolean;
  className?: any;
  children?: any;
}

const Loader: React.FC<LoaderProps> = ({ children, className, isVisible }) => {
  return (
    <Spin
      className={classNames(styles.loader, { [className]: !!className })}
      spinning={isVisible}
      key={uniqueId()}
    >
      {children}
    </Spin>
  );
};

export default memo<React.FC<LoaderProps>>(Loader);
