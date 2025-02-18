import React, {FC, ReactElement} from 'react'
import Navigation from '../Navigation';

const Header: FC = (): ReactElement => { 
    return (      
      <header className="ds_site-header  ds_site-header--gradient" role="banner">
      <div className="ds_wrapper">
          <div className="ds_site-header__content">
              <div className="ds_site-branding">
                  <a className="ds_site-branding__logo  ds_site-branding__link" href="/">
                      <img className="ds_site-branding__logo-image" src="https://designsystem.gov.scot/binaries/content/gallery/designsystem/examples/scottish-government-svg" alt="Scottish Government" />
                  </a>
  
                  <div className="ds_site-branding__title">
                      React Query
                  </div>
              </div>
          
              <div className="ds_site-header__controls">
                  <label aria-controls="mobile-navigation" className="ds_site-header__control  js-toggle-menu" >
                      <span className="ds_site-header__control-text">Menu</span>
                      <svg className="ds_icon  ds_site-header__control-icon" aria-hidden="true" role="img"><use href="/assets/images/icons/icons.stack.svg#menu"></use></svg>
                      <svg className="ds_icon  ds_site-header__control-icon  ds_site-header__control-icon--active-icon" aria-hidden="true" role="img"><use href="/assets/images/icons/icons.stack.svg#close"></use></svg>
                  </label>
              </div>
  
              <input className="ds_site-navigation__toggle" id="menu" type="checkbox" />
              <nav id="mobile-navigation" className="ds_site-navigation  ds_site-navigation--mobile" data-module="ds-mobile-navigation-menu">
                  <ul className="ds_site-navigation__list">
                      <li className="ds_site-navigation__item">
                          <a href="#" className="ds_site-navigation__link ds_current" aria-current="true">
                              Users
                          </a>
                      </li>
                      <li className="ds_site-navigation__item">
                          <a href="#" className="ds_site-navigation__link">
                              Styles
                          </a>
                      </li>
                      <li className="ds_site-navigation__item">
                          <a href="#" className="ds_site-navigation__link" >
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
  
              <div className="ds_site-search  ds_site-header__search" data-module="ds-site-search">
                  <form role="search" className="ds_site-search__form">
                      <label className="ds_label  visually-hidden">Search</label>
                      <div className="ds_input__wrapper  ds_input__wrapper--has-icon">
                          <input name="q" required id="site-search" className="ds_input  ds_site-search__input" type="text" placeholder="Search" />
                          <button type="submit" className="ds_button  js-site-search-button">
                              <span className="visually-hidden">Search</span>
                              <svg className="ds_icon" aria-hidden="true" role="img"><use href="https://designsystem.gov.scot/webfiles/1739880225623/assets/images/icons/icons.stack.svg#search"></use></svg>
                          </button>
                      </div>
                  </form>
              </div>
          </div>
      </div>
  
      <Navigation />
  </header>
    )
  };

export default Header