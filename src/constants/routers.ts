export const ROUTERS = {
  HOME: "/",
  AUTH: {
    LOGIN: "/auth/login",
    SIGN_UP: "/auth/sign-up",
    FORGOT_PASSWORD: "/auth/forgot-password",
    RESET_PASSWORD: "/auth/reset-password",
  },
  ADMIN: {
    ROOT: "/admin",
    DASHBOARD: "/admin/dashboard",
    CREATE_NOTIFICATION: "/admin/create-notification",
    CREATE_ACCOUNT: "/admin/create-account",
    EMPLOYEES_LIST: "/admin/employees-list",
  },
  USER: {
    DASHBOARD: "/user/dashboard",
    MY_ACCOUNT: "/user/my-account",
    NOTIFICATION: "/notification/:id"
  },
};
