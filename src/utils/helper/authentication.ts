import { history } from "App";
import { signin } from "api/authentication";
import { ROUTERS } from "constants/routers";
import { handleErrorMessage } from "i18n";
import Cookies from "js-cookie";
import _ from "lodash";

export const login = async (payload: any) => {
  const params = _.pick(payload, ["email", "password"]);
  try {
    const data = await signin(params);
    const { token, refreshToken } = data.data;
    Cookies.set("token", token, {
      expires: payload.rememberMe ? 999999 : undefined,
    });
    Cookies.set("refreshToken", refreshToken, {
      expires: payload.rememberMe ? 999999 : undefined,
    });
    history.push(ROUTERS.HOME);
  } catch (error) {
    handleErrorMessage(error);
  }
};

export const logout = () => {
  Cookies.remove("token");
  Cookies.remove("refreshToken");
  history.push(ROUTERS.AUTH.LOGIN);
};
