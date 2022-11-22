import Image from 'next/image'

export const Header = () => {
	return (
		<header className="sticky top-0 bg-white shadow-md mb-4">
			<div className="p-5">
				<div className="flex justify-between items-center">
					<div>
						<Image src="/img/AvalancheLogo.svg" alt='Logo' width={110} height={36}/>
					</div>
					<div className='invisible md:visible'>
						<ul className="flex md:space-x-12">
							<li>
								<a href='#Projects' className="block md:hover:text-main">SBT Project</a>
							</li>
							<li>
								<a href='#' className="block md:hover:text-main">Roadmap</a>
							</li>
							<li>
								<a href='#' className="block md:hover:text-main">Partnership</a>
							</li>
							<li>
								<a href='#' className="block md:hover:text-main">FAQ</a>
							</li>
							<li>
								<a href='#' className="block md:hover:text-main">Contact</a>
							</li>
							<li>
								<a href='#' className="block md:hover:text-main">JA / EN</a>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</header>
	)
}