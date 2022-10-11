import "./sidebar.scss"
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import StoreIcon from "@mui/icons-material/Store";
import InsertChartIcon from "@mui/icons-material/InsertChart";
import SettingsApplicationsIcon from "@mui/icons-material/SettingsApplications";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import SettingsSystemDaydreamOutlinedIcon from "@mui/icons-material/SettingsSystemDaydreamOutlined";
import PsychologyOutlinedIcon from "@mui/icons-material/PsychologyOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="top">
        <span className="logo">Srtadmin</span>
      </div>
      <hr />
      <div className="center">
        <ul>
          <p className="title">MAIN</p>
          <li>
              <DashboardIcon className="icon"/>
            <span>Dashboard</span>
          </li>
        </ul>
        <ul>
        <p className="title">LISTS</p>
          <li>
          <PersonOutlineIcon className="icon"/>
            <span>Users</span>
          </li>
        </ul>
        <ul>
          <li>
          <StoreIcon className="icon"/>
            <span>Products</span>
          </li>
        </ul>
        <ul>
          <li>
          <CreditCardIcon className="icon"/>
            <span>Orders</span>
          </li>
        </ul>
        <ul>
          <li>
          <LocalShippingIcon className="icon"/>
            <span>Delivery</span>
          </li>
        </ul>
        <ul>
        <p className="title">USEFUL</p>
          <li>
          <InsertChartIcon className="icon"/>
            <span>Stats</span>
          </li>
        </ul>
        <ul>
          <li>
          <NotificationsNoneIcon className="icon"/>
            <span>Notifications</span>
          </li>
        </ul>
        <ul>
        <p className="title">SERVICE</p>
          <li>
          <SettingsSystemDaydreamOutlinedIcon className="icon"/>
            <span>System Health</span>
          </li>
        </ul>
        <ul>
          <li>
          <PsychologyOutlinedIcon className="icon"/>
            <span>Logs</span>
          </li>
        </ul>
        <ul>
          <li>
          <SettingsApplicationsIcon className="icon"/>
            <span>Settings</span>
          </li>
        </ul>
        <ul>
        <p className="title">USER</p>
          <li>
          <AccountCircleOutlinedIcon className="icon"/>
            <span>Profile</span>
          </li>
        </ul>
        <ul>
          <li>
          <ExitToAppIcon className="icon"/>
            <span>Logout</span>
          </li>
        </ul>
      </div>
      <div className="bottom">
        <div className="colorOption"></div>
        <div className="colorOption"></div>

      </div>
    </div>
  )
}

export default Sidebar