import {
  HomeIcon,
  UserCircleIcon,
  TableCellsIcon,
  BellIcon,
  ArrowRightOnRectangleIcon,
  UserPlusIcon,
} from "@heroicons/react/24/solid";
import { Home, UpcomingEvents, LastEvents, Certification } from "@/pages/dashboard";
import { SignIn, SignUp } from "@/pages/auth";

const icon = {
  className: "w-5 h-5 text-inherit",
};

export const routes = [
  {
    layout: "dashboard",
    pages: [
      {
        icon: <HomeIcon {...icon} />,
        name: "dashboard",
        path: "/home",
        element: <Home />,
      },
      {
        icon: <HomeIcon {...icon} />,
        name: "UpcomingEvents",
        path: "/UpcomingEvents",
        element: <UpcomingEvents />,
      },
      {
        icon: <HomeIcon {...icon} />,
        name: "LastEvents",
        path: "/LastEvents",
        element: <LastEvents />,
      },
      {
        icon: <HomeIcon {...icon} />,
        name: "Certification",
        path: "/Certification",
        element: <Certification />,
      },
      {
        icon: <HomeIcon {...icon} />,
        name: "joinEvent",
        path: "/joinEvent",
        element: <joinEvent />,
      }
    ],
  },
  {
    title: "auth pages",
    layout: "auth",
    pages: [
      {
        icon: <ArrowRightOnRectangleIcon {...icon} />,
        name: "sign in",
        path: "/sign-in",
        element: <SignIn />,
      },
      {
        icon: <UserPlusIcon {...icon} />,
        name: "sign up",
        path: "/sign-up",
        element: <SignUp />,
      },
    ],
  },
];

export default routes;
