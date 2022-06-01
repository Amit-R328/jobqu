import { NavLink } from "react-router-dom";

export const ProfileMenu = ({onLogout, user, closeMenu}) => {
    return (
        <div className="profile-menu">
            <div className="Menu-subcategory"></div>
            <ul className="sub-category clean-list">
            <li className="menu-item" onClick={() => closeMenu()}><NavLink  to={`/business/add-gig`}>Add gig</NavLink></li>
            <li className="menu-item" onClick={() => closeMenu()}><NavLink to={`/profile/${user._id}`}>User Profile</NavLink></li>
            {/* <li className="menu-item" onClick={() => closeMenu()}><NavLink to={`/business/dashboard/${user._id}`}>Dashboard</NavLink></li> */}
            <li className="menu-item logout" onClick={() => onLogout()}><NavLink to={`/`}>Puki</NavLink></li>
            </ul>
        </div>
    )
}