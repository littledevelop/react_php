import React from 'react'

import { Link,Outlet} from 'react-router-dom';

function Nav() {
  return (
    <>
    <nav>
       <Link to="/">Home</Link>
        <Link to="/registeration">Registration</Link>
    </nav>
  <Outlet/>
    </>
  )
}

export default Nav