import "./navBar.scss"

const NavBar = () => {
  return (
    <div className="navBar">
      <div className="logo">
        <img src="logo.png" alt="logo" style={{ width: "100px" }}/>
        <span>TEBA</span>
      </div>
      <div className="icons">
        <img src="/search.svg" alt="" className="icon" />
        <img src="/app.svg" alt="" className="icon" />
        <img src="/expand.svg" alt="" className="icon" />
        <div className="notification">
          <img src="/notifications.svg" alt="" />
          <span>5</span>
        </div>
        <div className="user">
          <img src="noavatar.png" alt="user-logo" />
          <span>Ano</span>
        </div>
        <img src="/settings.svg" alt="" className="icon" />
      </div>
    </div>
  )
}

export default NavBar