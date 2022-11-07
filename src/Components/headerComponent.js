import { logDOM } from '@testing-library/react';
import React from 'react';
import {
	Navbar,
	NavbarBrand,
	Nav,
	NavItem,
	NavLink,
  } from 'reactstrap';
  import {
	Link
  } from "react-router-dom";
  import './Component.css';

function Header(){
	
    return(
        <header>
			<div class=" ml-2 mr-2" style={{height: '20vh'}}>
				<div class="row pl-4 ">
					<div className='col-2 mr-0'>
						<img src="FinalLOGO.png" className=" d-block mx-auto rounded-circle mt-3" id="FinalLOGO" alt="FinalLOGO" style={{width :"60%",height : "70%"}}/>
					</div>
					<div className="col-5 p-0"><b classname=" mt-4" style={{color : 'white'}} id='b'> DevCom</b>
					</div>
					<div class="col-5 p-0 ">
						<div className='row d-flex justify-content-end'>
							<Navbar expand className='d-flex justify-content-end'>
								<Nav className="m-5 " navbar >
									<NavItem >
									<Link  to='/' className='nav-link'>
										HOME
									</Link>
									</NavItem>
									<NavItem>
									<Link to="/Events" className='nav-link'>
										EVENTS
									</Link>
									</NavItem>
									<NavItem>
									<Link  to='/Chapters' className='nav-link'>
										CHAPTERS
									</Link>
									</NavItem>
									<NavItem>
									<Link to='/AboutUs' className='nav-link' >
										ABOUT US
									</Link>
									</NavItem>
								</Nav>
							</Navbar>
						</div>
					</div>
				</div>
			</div>
        </header>       
    );
}

export default Header;
