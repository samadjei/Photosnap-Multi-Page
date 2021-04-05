import React from 'react';
// import Logo from '../../public/logo.svg';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from './button';

const Navbar = () => {
	return (
		<nav className="navbar">
			<div className="navbar__logo">
				<Image src="/logo.svg" alt="Photosnap logo" width={170} height={16} />
			</div>
			<ul className="navbar__links">
				<li>
					<Link href="/stories">Stories</Link>
				</li>
				<li>
					<Link href="/features">Features</Link>
				</li>
				<li>
					<Link href="/pricing">Pricing</Link>
				</li>
			</ul>
			<div className="navbar__cta">
				<Button className="btn" buttonStyle="btn--outline" buttonSize="btn--desktop">
					Get an invite
				</Button>
				{/* <Button className="btn" buttonStyle="btn--outline" buttonSize="btn--desktop">
					Hire Me Today
				</Button> */}
			</div>
		</nav>
	);
};

export default Navbar;
