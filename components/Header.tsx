import Image from 'next/image'

export const Header = () => {
	return (
		<header className="sticky top-0 bg-white">
			<div className="p-5">
				<div className="flex justify-between items-center">
					<div>
						<Image src="/img/AvalancheLogo.svg" alt='Logo' width={110} height={36}/>
					</div>
					<div>
						<ul className="flex lg:space-x-12">
							<li>
								<a href='#' className="block lg:hover:text-main">SBT Project</a>
							</li>
							<li>
								<a href='#' className="block lg:hover:text-main">Roadmap</a>
							</li>
							<li>
								<a href='#' className="block lg:hover:text-main">Partnership</a>
							</li>
							<li>
								<a href='#' className="block lg:hover:text-main">FAQ</a>
							</li>
							<li>
								<a href='#' className="block lg:hover:text-main">Contact</a>
							</li>
							<li>
								<a href='#' className="block lg:hover:text-main">JA / EN</a>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</header>
	)
}