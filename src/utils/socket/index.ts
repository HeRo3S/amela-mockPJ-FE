// import configs from "@/constants/config";
// import Cookies from "js-cookie";
// import { io } from "socket.io-client";

// const socket = io(configs.API_DOMAIN);
// socket.on("connect", () => {
//   authenticateSocket();
// });

// export const authenticateSocket = async () => {
//   if (Cookies.get("token")) {
//     socket.emit("authenticate", {
//       token: Cookies.get("token"),
//       role: "Member",
//     });
//   }
// };

// export default socket;
export const socket = () => {};
