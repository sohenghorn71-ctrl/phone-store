import { useState, useMemo } from 'react'
import Navbar from './components/Navbar/Navbar'
import BannerSlider from './components/BannerSlider/BannerSlider'
import PhoneCard from './components/PhoneCard/PhoneCard'
import PhoneModal from './components/PhoneModal/PhoneModal'
import { phones, brands } from './data/phones'
import type { Phone } from './data/phones'
import './App.css'

type SortOption = 'default' | 'price-asc' | 'price-desc'

function App() {
	const [selectedBrand, setSelectedBrand] = useState('All')
	const [search, setSearch] = useState('')
	const [sort, setSort] = useState<SortOption>('default')
	const [selectedPhone, setSelectedPhone] = useState<Phone | null>(null)

	const filtered = useMemo(() => {
		let list = phones
		if (selectedBrand !== 'All') list = list.filter((p) => p.brand === selectedBrand)
		if (search.trim()) {
			const q = search.toLowerCase()
			list = list.filter(
				(p) => p.model.toLowerCase().includes(q) || p.brand.toLowerCase().includes(q),
			)
		}
		if (sort === 'price-asc') list = [...list].sort((a, b) => a.price - b.price)
		if (sort === 'price-desc') list = [...list].sort((a, b) => b.price - a.price)
		return list
	}, [selectedBrand, search, sort])

	return (
		<>
			<Navbar />
			<main>
				<BannerSlider />

				<section className='catalog-section' id='phones'>
					<div className='catalog-header'>
						<h2 className='catalog-title'>Our Phones</h2>
						<p className='catalog-subtitle'>
							Find your perfect smartphone from our curated collection
						</p>
					</div>

					<div className='catalog-controls'>
						<input
							type='search'
							placeholder='Search model or brand…'
							value={search}
							onChange={(e) => setSearch(e.target.value)}
							className='search-input'
							aria-label='Search phones'
						/>
						<div className='brand-filters' role='group' aria-label='Filter by brand'>
							{brands.map((b) => (
								<button
									key={b}
									className={`filter-btn ${selectedBrand === b ? 'active' : ''}`}
									onClick={() => setSelectedBrand(b)}
								>
									{b}
								</button>
							))}
						</div>
						<select
							value={sort}
							onChange={(e) => setSort(e.target.value as SortOption)}
							className='sort-select'
							aria-label='Sort phones'
						>
							<option value='default'>Sort: Default</option>
							<option value='price-asc'>Price: Low to High</option>
							<option value='price-desc'>Price: High to Low</option>
						</select>
					</div>

					{filtered.length === 0 ? (
						<div className='no-results'>
							<p>😔 No phones found matching your search.</p>
							<button
								className='filter-btn active'
								onClick={() => {
									setSearch('')
									setSelectedBrand('All')
								}}
							>
								Clear Filters
							</button>
						</div>
					) : (
						<>
							<p className='results-count'>
								{filtered.length} phone{filtered.length !== 1 ? 's' : ''} found
							</p>
							<div className='phones-grid'>
								{filtered.map((phone) => (
									<PhoneCard
										key={phone.id}
										phone={phone}
										onSelect={setSelectedPhone}
									/>
								))}
							</div>
						</>
					)}
				</section>

				<section className='deals-section' id='deals'>
					<div className='deals-content'>
						<span className='deals-label'>Stay Updated</span>
						<h2>Get Exclusive Deals</h2>
						<p>Subscribe and be first to know about new arrivals and flash sales.</p>
						<form className='subscribe-form' onSubmit={(e) => e.preventDefault()}>
							<input
								type='email'
								placeholder='Enter your email address'
								aria-label='Email address for newsletter'
							/>
							<button type='submit'>Subscribe</button>
						</form>
					</div>
				</section>
			</main>

			<footer className='footer' id='about'>
				<div className='footer-container'>
					<div className='footer-brand'>
						<span className='footer-logo'>📱 PhoneStore</span>
						<p>
							Your one-stop destination for the latest smartphones at the best prices.
						</p>
					</div>
					<div className='footer-links'>
						<h4>Quick Links</h4>
						<ul>
							<li>
								<a href='#home'>Home</a>
							</li>
							<li>
								<a href='#phones'>Phones</a>
							</li>
							<li>
								<a href='#deals'>Deals</a>
							</li>
						</ul>
					</div>
					<div className='footer-contact'>
						<h4>Contact Us</h4>
						<p>📧 support@phonestore.com</p>
						<p>📞 +1 (800) 123-4567</p>
						<p>🕐 Mon–Sat, 9am–6pm</p>
					</div>
				</div>
				<div className='footer-bottom'>
					<p>© 2026 PhoneStore. All rights reserved.</p>
				</div>
			</footer>

			{selectedPhone && (
				<PhoneModal phone={selectedPhone} onClose={() => setSelectedPhone(null)} />
			)}
		</>
	)
}

export default App
