import { Outlet, NavLink } from "react-router-dom";
import cn from "classnames";
import React from "react";


const getTabClassNames = ({ isActive }: { isActive: boolean }) => cn('navbar-item', { 'is-active': isActive });
  export const App: React.FC = () => {

  return (
    <>

      <nav
        className={cn("navbar is-light is-fixed-top is-mobile", { 'has-shadow': true })}
        data-cy="Nav"
      >
      <div className="container">
        <div className="navbar-brand">
          <NavLink to="/" className={getTabClassNames}>
            Home
          </NavLink>
          <NavLink to="/tabs" className={getTabClassNames}>
            Tabs
          </NavLink>
        </div>
      </div>
    </nav>

    <div className="section">
      <div className="container">
      <Outlet />

        <div className="block" data-cy="TabContent">
          Please select a tab
        </div>
      </div>
    </div>
  </>
)
}
