import Image from 'next/image'

import { Header } from '../components/Header'

export default function Hello() {
	return (
		<div>
			<Header/>
			<Image src="/img/Top.svg" alt='top' width={10000} height={10000}/>
		</div>
	)
}