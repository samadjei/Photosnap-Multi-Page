import React from 'react';
// import Logo from '../../public/logo.svg';
import Image from 'next/image';
import Link from 'next/link';

const Navbar = () => {
	return (
		<nav>
			<div className="logo">
				<Image src="/logo.svg" alt="Photosnap logo" width={200} height={20} />
			</div>
			<Link href="/stories">Stories</Link>
			<Link href="/features">Features</Link>
			<Link href="/pricing">Pricing</Link>
		</nav>
	);
};

export default Navbar;
