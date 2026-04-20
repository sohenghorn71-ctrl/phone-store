import type { Phone } from '../../data/phones'
import './PhoneCard.css'

interface Props {
	phone: Phone
	onSelect: (phone: Phone) => void
}

const badgeColors: Record<string, string> = {
	New: '#4f46e5',
	Sale: '#ef4444',
	Hot: '#f97316',
}

const PhoneCard = ({ phone, onSelect }: Props) => {
	const discount = phone.originalPrice
		? Math.round(((phone.originalPrice - phone.price) / phone.originalPrice) * 100)
		: null

	return (
		<article className='phone-card' onClick={() => onSelect(phone)}>
			{phone.badge && (
				<span className='phone-badge' style={{ background: badgeColors[phone.badge] }}>
					{phone.badge}
				</span>
			)}
			<div className='phone-image-wrap' style={{ background: phone.bgColor }}>
				<img
					src={phone.image}
					alt={`${phone.brand} ${phone.model}`}
					className='phone-image'
					loading='lazy'
				/>
			</div>
			<div className='phone-info'>
				<span className='phone-brand'>{phone.brand}</span>
				<h3 className='phone-model'>{phone.model}</h3>
				<div className='phone-price-row'>
					<span className='phone-price'>${phone.price.toLocaleString()}</span>
					{phone.originalPrice && (
						<>
							<span className='phone-original-price'>
								${phone.originalPrice.toLocaleString()}
							</span>
							<span className='phone-discount'>-{discount}%</span>
						</>
					)}
				</div>
				<ul className='phone-quick-specs'>
					<li>
						<span className='spec-icon'>🖥</span>
						{phone.specs.display.split(',')[0]}
					</li>
					<li>
						<span className='spec-icon'>⚡</span>
						{phone.specs.processor}
					</li>
					<li>
						<span className='spec-icon'>💾</span>
						{phone.specs.ram} RAM
					</li>
					<li>
						<span className='spec-icon'>📷</span>
						{phone.specs.camera.split('+')[0].trim()}
					</li>
				</ul>
				<button className='btn-details'>View Details →</button>
			</div>
		</article>
	)
}

export default PhoneCard
