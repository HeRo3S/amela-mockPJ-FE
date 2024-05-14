export const ROUTERS = {
  HOME: "/",
  AUTH: {
    LOGIN: "/auth/login",
    SIGN_UP: "/auth/sign-up",
    FORGOT_PASSWORD: "/auth/forgot-password",
    RESET_PASSWORD: "/auth/reset-password",
  },
  USER: {
    ROOT: "/user",
    DASHBOARD: "/user/dashboard",
    MY_ACCOUNT: "/user/my-account",

    ORIGINAL_NOTIFICATION: "/user/notification",
    NOTIFICATION: "/user/notification/:id",

    ORIGINAL_SEE_PROFILE: "/user/see-profile",
    SEE_PROFILE: `/user/see-profile/:id`,
  },
  ADMIN: {
    ROOT: "/admin",
    DASHBOARD: "/admin/dashboard",
    CREATE_NOTIFICATION: "/admin/create-notification",
    CREATE_ACCOUNT: "/admin/create-account",
    EMPLOYEES_LIST: "/admin/employees-list",

    ORIGINAL_EDIT_ACCOUNT: "/admin/edit-account",
    EDIT_ACCOUNT: `/admin/edit-account/:id`,
  },
};

