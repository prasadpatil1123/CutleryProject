import React, { useState } from 'react';
import {
    MDBContainer,
    MDBNavbar,
    MDBNavbarBrand,
    MDBNavbarToggler,
    MDBIcon,
    MDBNavbarNav,
    MDBNavbarItem,
    MDBNavbarLink,
    MDBBtn,
    MDBDropdown,
    MDBDropdownToggle,
    MDBDropdownMenu,
    MDBDropdownItem,
    MDBCollapse,
} from 'mdb-react-ui-kit';
import Logo from '../../assets/Logo.png';

export default function NavigationBar() {
    const [showBasic, setShowBasic] = useState(false);

    return (
        <MDBNavbar expand='lg' light bgColor='light'>
            <MDBContainer fluid>
                <MDBNavbarBrand href='/'>
                    <img src={Logo} className="mr-5 h-12" alt="Logo" />
                </MDBNavbarBrand>

                <MDBNavbarToggler
                    aria-controls='navbarSupportedContent'
                    aria-expanded='false'
                    aria-label='Toggle navigation'
                    onClick={() => setShowBasic(!showBasic)}
                >
                    <MDBIcon icon='bars' fas />
                </MDBNavbarToggler>

                <MDBCollapse navbar show={showBasic}>
                    <MDBNavbarNav className='mr-auto mb-2 mb-lg-0'>
                        <MDBNavbarItem>
                            <MDBNavbarLink href='./../Home/Home.jsx'>
                                Home
                            </MDBNavbarLink>
                        </MDBNavbarItem>

                        <MDBNavbarItem>
                            <MDBNavbarLink href='./../Login/Login.jsx'>
                                login
                            </MDBNavbarLink>
                        </MDBNavbarItem>

                        <MDBNavbarItem>
                            <MDBNavbarLink href='#'>Link</MDBNavbarLink>
                        </MDBNavbarItem>

                        <MDBNavbarItem>
                            <MDBDropdown>
                                <MDBDropdownToggle tag='a' className='nav-link' role='button'>
                                    Dropdown
                                </MDBDropdownToggle>
                                <MDBDropdownMenu>

                                    <MDBDropdownItem >
                                        <MDBNavbarLink href='./../User/role/admin/AdminPanel.jsx'>
                                            Admin Panel
                                        </MDBNavbarLink>
                                    </MDBDropdownItem>
                                    <MDBDropdownItem >
                                        <MDBNavbarLink href='./../User/role/seller/SellerPanel.jsx'>
                                            Seller Panel
                                        </MDBNavbarLink>
                                    </MDBDropdownItem>
                                    <MDBDropdownItem >
                                        <MDBNavbarLink href='./../User/role/customer/CustomerPanel.jsx'>
                                            Customer Panel
                                        </MDBNavbarLink>
                                    </MDBDropdownItem>

                                </MDBDropdownMenu>
                            </MDBDropdown>
                        </MDBNavbarItem>

                        <MDBNavbarItem>
                            <MDBNavbarLink disabled href='#' tabIndex={-1} aria-disabled='true'>
                                Disabled
                            </MDBNavbarLink>
                        </MDBNavbarItem>
                    </MDBNavbarNav>

                    <form className='d-flex input-group w-auto'>
                        <input type='search' className='form-control' placeholder='Type query' aria-label='Search' />
                        <MDBBtn color='primary'>Search</MDBBtn>
                    </form>
                </MDBCollapse>
            </MDBContainer>
        </MDBNavbar>
    );
}