import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination, Navigation } from 'swiper/modules'
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import 'swiper/css'
// @ts-ignore
import 'swiper/css/pagination'
// @ts-ignore
import 'swiper/css/navigation'
import './BannerSlider.css'

const banners = [
	{
		id: 1,
		tag: 'New Arrival',
		title: 'iPhone 16 Pro Max',
		subtitle: 'Titanium design. A18 Pro chip. The most powerful iPhone ever made.',
		cta: 'Shop Now',
		offer: 'Up to $200 Off',
		bg: 'linear-gradient(135deg, #1a1a2e 0%, #0f3460 100%)',
		emoji: '📱',
	},
	{
		id: 2,
		tag: 'Best Seller',
		title: 'Samsung Galaxy S25 Ultra',
		subtitle: 'AI-powered intelligence. S Pen precision. 200 MP photography redefined.',
		cta: 'Explore',
		offer: 'Free Galaxy Buds Worth $149',
		bg: 'linear-gradient(135deg, #0f3460 0%, #533483 100%)',
		emoji: '🌟',
	},
	{
		id: 3,
		tag: 'Flash Sale',
		title: 'Google Pixel 9 Pro',
		subtitle: 'Gemini AI built right in. The smartest, most helpful camera phone yet.',
		cta: 'Get Deal',
		offer: 'Save $100 Today Only',
		bg: 'linear-gradient(135deg, #1b4332 0%, #40916c 100%)',
		emoji: '⚡',
	},
	{
		id: 4,
		tag: 'Limited Time',
		title: 'Trade-In & Save Big',
		subtitle: 'Trade in your current phone and receive instant credit toward your next device.',
		cta: 'Trade In Now',
		offer: 'Up to $500 Credit',
		bg: 'linear-gradient(135deg, #7b2d8b 0%, #c0392b 100%)',
		emoji: '🔄',
	},
]

const BannerSlider = () => {
	const handleCtaClick = (cta: string) => {
		switch (cta) {
			case 'Shop Now':
			case 'Explore':
				document.getElementById('phones')?.scrollIntoView({ behavior: 'smooth' })
				break
			case 'Get Deal':
				document.getElementById('deals')?.scrollIntoView({ behavior: 'smooth' })
				break
			case 'Trade In Now':
				document.getElementById('phones')?.scrollIntoView({ behavior: 'smooth' })
				break
			default:
				break
		}
	}

	return (
		<section className='banner-section' id='home'>
			<Swiper
				modules={[Autoplay, Pagination, Navigation]}
				autoplay={{ delay: 4500, disableOnInteraction: false }}
				pagination={{ clickable: true }}
				navigation
				loop
				className='banner-swiper'
			>
				{banners.map((banner) => (
					<SwiperSlide key={banner.id}>
						<div className='banner-slide' style={{ background: banner.bg }}>
							<div className='banner-content'>
								<span className='banner-tag'>{banner.tag}</span>
								<h1 className='banner-title'>{banner.title}</h1>
								<p className='banner-subtitle'>{banner.subtitle}</p>
								<div className='banner-offer-pill'>{banner.offer}</div>
								<button className='banner-cta' onClick={() => handleCtaClick(banner.cta)}>
									{banner.cta} →
								</button>
							</div>
							<div className='banner-visual'>
								<div className='banner-emoji'>{banner.emoji}</div>
							</div>
						</div>
					</SwiperSlide>
				))}
			</Swiper>
		</section>
	)
}

export default BannerSlider
