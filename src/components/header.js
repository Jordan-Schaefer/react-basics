import React from 'react';
import '../css/styles.css';

const Header = (props) => {
    return (
      <header>
        <div
        className='logo'>Logo</div>
        <input
        type='text'
          onChange={props.keyWords}></input>
      </header>
    )
}



export default Header;
