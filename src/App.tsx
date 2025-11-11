import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';

import cn from 'classnames';
import { NavLink } from 'react-router-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HomePage } from './components/HomePage';
import { NotFound } from './components/NotFound';
import { TabsPage } from './components/TabsPage';



export const getActiveNavClass = ({ isActive }: { isActive: boolean }) => {
  return cn('navbar-item', { 'is-active': isActive });
};

export const App: React.FC = () => {
  return (
    <>
      <nav
        className="navbar is-light is-fixed-top is-mobile has-shadow"
        data-cy="Nav"
      >
        <div className="container">
          <div className="navbar-brand">
            <NavLink to="/" className={getActiveNavClass}>
              Home
            </NavLink>
            <NavLink to="/tabs" className={getActiveNavClass}>
              Tabs
            </NavLink>
          </div>
        </div>
      </nav>

      <div className="section">
        <div className="container">
             <Router>
            <Routes>
              <Route path="/" element={<App />} >
                <Route index element={<HomePage />} />
                <Route path="tabs">
                  <Route index element={<TabsPage />} />
                  <Route path=":tabId" element={<TabsPage />} />
                </Route>
                <Route path="*" element={<NotFound />} />
              </Route>
            </Routes>
          </Router>
        </div>
      </div>
    </>
  );
};

