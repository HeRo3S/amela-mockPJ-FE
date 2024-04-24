import CustomNotification from "components/CustomNotification";
import configs from "constants/config";
import i18next from "i18next";

export const handleErrorMessage = (error: any) => {
  CustomNotification({
    type: "error",
    message: i18next.t("common.error"),
    description: getErrorMessage(error),
  });
  if (configs.APP_ENV !== "prod") {
    // tslint:disable-next-line: no-console
    console.log(error);
  }
};

export const getErrorMessage = (error: any) => {
  return (
    error?.response?.data?.errorMessage ||
    i18next.t("notification.somethingWentWrong")
  );
};
