import Image from 'next/image'

export const Footer = () => {
	return (
		<div>
			<div className="p-20 grid place-items-center">
				<Image src="/img/AvalancheLogo.svg" alt="Logo" width={110} height={36}/>
				<p className="p-10">
					Copyright ©️ 2022
				</p>
			</div>
		</div>
	)
}
