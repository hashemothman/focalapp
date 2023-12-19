import { Gestroutes } from "../modules/Guest/routers/Gestroutes";
import App from "./../App";


export const routers = [
  {
    path: "/",
    element: <App />,
    children: [
      ...Gestroutes,


    ],
  },
];