import { useEffect } from 'react'
import type { Phone } from '../../data/phones'
import './PhoneModal.css'

interface Props {
	phone: Phone
	onClose: () => void
}

const specLabels: Record<keyof Phone['specs'], string> = {
	display: 'Display',
	processor: 'Processor',
	ram: 'RAM',
	storage: 'Storage',
	camera: 'Camera',
	battery: 'Battery',
	os: 'Operating System',
}

const PhoneModal = ({ phone, onClose }: Props) => {
	const discount = phone.originalPrice
		? Math.round(((phone.originalPrice - phone.price) / phone.originalPrice) * 100)
		: null

	useEffect(() => {
		const handleKey = (e: KeyboardEvent) => {
			if (e.key === 'Escape') onClose()
		}
		document.addEventListener('keydown', handleKey)
		document.body.style.overflow = 'hidden'
		return () => {
			document.removeEventListener('keydown', handleKey)
			document.body.style.overflow = ''
		}
	}, [onClose])

	return (
		<div
			className='modal-overlay'
			onClick={onClose}
			role='dialog'
			aria-modal='true'
			aria-label={`${phone.brand} ${phone.model} details`}
		>
			<div className='modal-content' onClick={(e) => e.stopPropagation()}>
				<button className='modal-close' onClick={onClose} aria-label='Close'>
					✕
				</button>
				<div className='modal-body'>
					<div className='modal-image-side' style={{ background: phone.bgColor }}>
						<img
							src={phone.image}
							alt={`${phone.brand} ${phone.model}`}
							className='modal-image'
						/>
					</div>
					<div className='modal-detail-side'>
						<span className='modal-brand'>{phone.brand}</span>
						<h2 className='modal-model'>{phone.model}</h2>
						<div className='modal-price-row'>
							<span className='modal-price'>${phone.price.toLocaleString()}</span>
							{phone.originalPrice && (
								<>
									<span className='modal-original-price'>
										${phone.originalPrice.toLocaleString()}
									</span>
									<span className='modal-discount'>Save {discount}%</span>
								</>
							)}
						</div>
						<h4 className='specs-heading'>Specifications</h4>
						<table className='specs-table'>
							<tbody>
								{(Object.keys(phone.specs) as Array<keyof Phone['specs']>).map(
									(key) => (
										<tr key={key}>
											<td className='spec-label'>{specLabels[key]}</td>
											<td className='spec-value'>{phone.specs[key]}</td>
										</tr>
									),
								)}
							</tbody>
						</table>
						<div className='modal-actions'>
							<button className='btn-add-cart'>🛒 Add to Cart</button>
							<button className='btn-buy-now'>Buy Now</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default PhoneModal
