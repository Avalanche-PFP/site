import Image from 'next/image'

import { Header } from '../components/Header'
import { Footer } from '../components/Footer '

export default function Hello() {
	return (
		<div>
			<Header/>
			<Image src="/img/Top.svg" alt='top' width={10000} height={10000}/>
			<div className="grid place-items-center">
				<div className="py-20">
					<p className="text-5xl font-bold">SBT ?</p>
				</div>
				<div className="py-20 grid place-items-center">
					<p className="w-6/12 text-xl text-center">
						Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
					</p>
				</div>
				<div>logo</div>
			</div>
			<Footer/>
		</div>
	)
}