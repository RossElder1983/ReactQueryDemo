import React, { FC } from 'react';

const Navigation:FC = () => {
    return(
        <div className="ds_site-header__navigation">
          <div className="ds_wrapper">
              <nav className="ds_site-navigation">
                  <ul className="ds_site-navigation__list">
                      <li className="ds_site-navigation__item">
                          <a href="#" className="ds_site-navigation__link ds_current" aria-current="true">
                              Users
                          </a>
                      </li>
                      <li className="ds_site-navigation__item">
                          <a href="#" className="ds_site-navigation__link">
                              Users (Query)
                          </a>
                      </li>
                      <li className="ds_site-navigation__item">
                          <a href="#" className="ds_site-navigation__link ">
                              Components
                          </a>
                      </li>
                      <li className="ds_site-navigation__item">
                          <a href="#" className="ds_site-navigation__link">
                              Patterns
                          </a>
                      </li>
                  </ul>
              </nav>
          </div>
      </div>
    )
}

export default Navigation