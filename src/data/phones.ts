export interface PhoneSpec {
	display: string
	processor: string
	ram: string
	storage: string
	camera: string
	battery: string
	os: string
}

export interface Phone {
	id: number
	brand: string
	model: string
	price: number
	originalPrice?: number
	image: string
	specs: PhoneSpec
	badge?: 'New' | 'Sale' | 'Hot'
	bgColor: string
}

export const phones: Phone[] = [
	{
		id: 1,
		brand: 'Apple',
		model: 'iPhone 16 Pro Max',
		price: 1199,
		image: 'https://placehold.co/280x360/1a1a2e/ffffff?text=iPhone+16+Pro+Max',
		specs: {
			display: '6.9" Super Retina XDR OLED, 2868×1320, 460 ppi',
			processor: 'Apple A18 Pro',
			ram: '8 GB',
			storage: '256 GB / 512 GB / 1 TB',
			camera: '48 MP Main + 48 MP Ultra Wide + 12 MP Telephoto (5×)',
			battery: '4685 mAh, MagSafe 25W',
			os: 'iOS 18',
		},
		badge: 'New',
		bgColor: '#1a1a2e',
	},
	{
		id: 2,
		brand: 'Apple',
		model: 'iPhone 16',
		price: 799,
		originalPrice: 899,
		image: 'https://placehold.co/280x360/2c3e50/ffffff?text=iPhone+16',
		specs: {
			display: '6.1" Super Retina XDR OLED, 2556×1179, 460 ppi',
			processor: 'Apple A18',
			ram: '8 GB',
			storage: '128 GB / 256 GB / 512 GB',
			camera: '48 MP Main + 12 MP Ultra Wide',
			battery: '3561 mAh, MagSafe 25W',
			os: 'iOS 18',
		},
		badge: 'Sale',
		bgColor: '#2c3e50',
	},
	{
		id: 3,
		brand: 'Samsung',
		model: 'Galaxy S25 Ultra',
		price: 1299,
		image: 'https://placehold.co/280x360/0f3460/ffffff?text=Galaxy+S25+Ultra',
		specs: {
			display: '6.9" QHD+ Dynamic AMOLED 2X, 3088×1440, 505 ppi',
			processor: 'Snapdragon 8 Elite',
			ram: '12 GB',
			storage: '256 GB / 512 GB / 1 TB',
			camera: '200 MP Main + 50 MP Periscope + 10 MP Telephoto + 12 MP Ultra Wide',
			battery: '5000 mAh, 45W wired',
			os: 'Android 15, One UI 7',
		},
		badge: 'New',
		bgColor: '#0f3460',
	},
	{
		id: 4,
		brand: 'Samsung',
		model: 'Galaxy S25+',
		price: 999,
		image: 'https://placehold.co/280x360/16213e/ffffff?text=Galaxy+S25+Plus',
		specs: {
			display: '6.7" QHD+ Dynamic AMOLED 2X, 3080×1440, 510 ppi',
			processor: 'Snapdragon 8 Elite',
			ram: '12 GB',
			storage: '256 GB / 512 GB',
			camera: '50 MP Main + 10 MP Telephoto + 12 MP Ultra Wide',
			battery: '4900 mAh, 45W wired',
			os: 'Android 15, One UI 7',
		},
		bgColor: '#16213e',
	},
	{
		id: 5,
		brand: 'Google',
		model: 'Pixel 9 Pro',
		price: 999,
		originalPrice: 1099,
		image: 'https://placehold.co/280x360/1b4332/ffffff?text=Pixel+9+Pro',
		specs: {
			display: '6.3" LTPO OLED, 2992×1344, 495 ppi',
			processor: 'Google Tensor G4',
			ram: '16 GB',
			storage: '128 GB / 256 GB / 512 GB / 1 TB',
			camera: '50 MP Main + 48 MP Ultra Wide + 48 MP Telephoto (5×)',
			battery: '4700 mAh, 30W wired',
			os: 'Android 15',
		},
		badge: 'Sale',
		bgColor: '#1b4332',
	},
	{
		id: 6,
		brand: 'Google',
		model: 'Pixel 9',
		price: 699,
		image: 'https://placehold.co/280x360/2d6a4f/ffffff?text=Pixel+9',
		specs: {
			display: '6.3" OLED, 2424×1080, 422 ppi',
			processor: 'Google Tensor G4',
			ram: '12 GB',
			storage: '128 GB / 256 GB',
			camera: '50 MP Main + 10.5 MP Ultra Wide',
			battery: '4700 mAh, 27W wired',
			os: 'Android 15',
		},
		bgColor: '#2d6a4f',
	},
	{
		id: 7,
		brand: 'OnePlus',
		model: 'OnePlus 13',
		price: 899,
		image: 'https://placehold.co/280x360/6b2737/ffffff?text=OnePlus+13',
		specs: {
			display: '6.82" QHD+ AMOLED, 3168×1440, 510 ppi',
			processor: 'Snapdragon 8 Elite',
			ram: '12 GB / 16 GB',
			storage: '256 GB / 512 GB',
			camera: '50 MP Main + 50 MP Ultra Wide + 50 MP Telephoto (3×)',
			battery: '6000 mAh, 100W SuperVOOC',
			os: 'Android 15, OxygenOS 15',
		},
		badge: 'Hot',
		bgColor: '#6b2737',
	},
	{
		id: 8,
		brand: 'Xiaomi',
		model: 'Xiaomi 15 Pro',
		price: 999,
		originalPrice: 1099,
		image: 'https://placehold.co/280x360/7b2d8b/ffffff?text=Xiaomi+15+Pro',
		specs: {
			display: '6.73" QHD+ AMOLED, 3200×1440, 522 ppi',
			processor: 'Snapdragon 8 Elite',
			ram: '12 GB / 16 GB',
			storage: '256 GB / 512 GB / 1 TB',
			camera: '50 MP Main + 50 MP Ultra Wide + 200 MP Telephoto',
			battery: '6100 mAh, 90W HyperCharge',
			os: 'Android 15, HyperOS 2',
		},
		badge: 'Sale',
		bgColor: '#7b2d8b',
	},
]

export const brands = ['All', ...Array.from(new Set(phones.map((p) => p.brand)))]
