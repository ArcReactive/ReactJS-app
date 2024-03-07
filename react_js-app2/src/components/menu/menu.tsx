import { Link } from "react-router-dom"
import SmsIcon from '@mui/icons-material/Sms';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import DashboardIcon from '@mui/icons-material/Dashboard';
import RememberMeIcon from '@mui/icons-material/RememberMe';
import CakeIcon from '@mui/icons-material/Cake';
import CampaignIcon from '@mui/icons-material/Campaign';
import "./menu.scss"

function Menu() {
  return (
    <div className="menu">
      <div className="item">
        <Link className="listItem" to="/">
          <DashboardIcon />
          <span className="listItemTitle">DASHBOARD</span>
        </Link>
        <Link className="listItem" to="/members">
          <RememberMeIcon />
          <span className="listItemTitle">MEMBERS</span>
        </Link>
        <Link className="listItem" to="/upcommingBirthdays">
          <CakeIcon />
          <span className="listItemTitle">UPCOMMING BIRTHDAYS</span>
        </Link>
        <Link className="listItem" to="/campaigns">
          <CampaignIcon />
          <span className="listItemTitle">CAMPAIGNS</span>
        </Link>
        <Link className="listItem" to="/recentSms">
          <SmsIcon />
          <span className="listItemTitle">RECENT SMS</span>
        </Link>
        <Link className="listItem" to="/userAccount">
          <AccountBoxIcon />
          <span className="listItemTitle">USER ACCOUNTS</span>
        </Link>
      </div>
    </div>
  )
}

export default Menu