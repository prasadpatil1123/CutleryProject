import React from 'react';
import NavBarHeader from '../Navbar/NavBarHeader';
import Title from './Title';

export default function Header() {

  return (
    <header className="shadow">
      <Title/>    
      <NavBarHeader/>
    </header>
  );
}
