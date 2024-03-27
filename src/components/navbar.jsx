import { React } from 'react'
import './navbar.css' // CSS file for styling
import { MenuItems } from './menuItems.js' // Menu items javascript data file
import { Link } from "react-router-dom"
import { Grid } from '@mui/material';

export default function Navbar() {
  return (
    <>
      <nav className='NavbarItems'>
        <Grid container>
          <Grid item xs='3'>
            <h1 className='navbar-logo'>
              IPIX
            </h1>
          </Grid>
          <Grid item xs='3'></Grid>
          <Grid item xs='5'>
            <ul className='nav-menu ' >

              {/* Mapping over menu items */}
              {MenuItems.map((item, index) => (
                <li
                  key={index}>
                  <Link
                    className={item.cName}
                    to={item.url} >
                    {item.title}
                  </Link>
                </li>
              ))}

            </ul>
          </Grid>
          <Grid item xs='1'> </Grid>
        </Grid>
      </nav>
    </>
  )
}
