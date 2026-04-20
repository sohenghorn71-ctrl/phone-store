import './Navbar.css'

const Navbar = () => {
	return (
		<nav className='navbar'>
			<div className='navbar-container'>
				<a href='#home' className='navbar-brand'>
					<span className='brand-icon'>📱</span>
					<span className='brand-name'>PhoneStore</span>
				</a>
				<ul className='navbar-links'>
					<li>
						<a href='#home'>Home</a>
					</li>
					<li>
						<a href='#phones'>Phones</a>
					</li>
					<li>
						<a href='#deals'>Deals</a>
					</li>
					<li>
						<a href='#about'>About</a>
					</li>
				</ul>
				<div className='navbar-actions'>
					<button className='btn-cart' aria-label='Shopping cart'>
						🛒 <span>Cart</span>
					</button>
				</div>
			</div>
		</nav>
	)
}

export default Navbar
