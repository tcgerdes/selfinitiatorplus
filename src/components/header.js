import React from 'react'
import { Link } from 'gatsby'

const Header = () => (
  <div
    style={{
      background: '#f5f5f5',
      marginBottom: '3rem',
      borderBottom: '2px solid #e6e6e6',
    }}
  >
    <div
      style={{
        margin: '0 auto',
        maxWidth: 980,
        padding: '1.45rem 1.0875rem',
      }}
   >
     <h1 style={{margin: 0, textAlign: 'center',fontSize: '18px'}}>
        <Link to="/"
          style={{
            color: 'black',
            textDecoration: 'none',
          }}
        >
          CodeStack
        </Link>
      </h1>
    </div>
  </div>
);

const Sidebar = (props) => (
  <div
      style={{
        border: '2px solid #e6e6e6',
        maxWidth: 960,
        padding: '0.5rem',
        marginBottom: '25px'
      }}
      >
      <strong>{props.title}.</strong> {props.description}
  </div>
  );

export default Header
export default Sidebar

