import React from "react"
import { Link } from "react-router-dom"

const Header = () => (
  <div>
    <h1>
      Menu
    </h1>
    <ul>
      <li>
        <Link to="/">Main Page</Link>
      </li>
      <li>
        <Link to="/cart">Cart</Link>
      </li>
    </ul>
  </div>
)

export default Header