import colorVariables from "@/style/variables";
import HomeIcon from "@mui/icons-material/Home";
import AccountTreeIcon from "@mui/icons-material/AccountTree";
import InfoIcon from "@mui/icons-material/Info";

export const navigation = [
  {
    label: "Home",
    background: colorVariables.error,
    icon: <HomeIcon className="icon" />,
    link: "home",
  },
  {
    label: "Project",
    background: colorVariables.warning,
    icon: <AccountTreeIcon className="icon" />,
    link: "project",
  },
  {
    label: "About",
    background: colorVariables.success,
    icon: <InfoIcon className="icon" />,
    link: "about",
  },
];
