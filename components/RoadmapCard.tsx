export const RoadmapCard = (props: any) => {
	return (
		<div className="pb-20">
			<p className="pl-36 text-white text-3xl font-bold mb-4">{props.season}</p>
			<div className="relative grid place-items-center z-10">
				<div className="border-4 border-dashed border-transparent border-b-white w-96 pt-2.5 mb-3"></div>
				<div className="bg-white w-8 h-8 rounded-full absolute top-0"></div>
				<div className="w-2 h-16 bg-white"></div>
				<div className="w-64 h-44 bg-white rounded-3xl shadow-2xl grid place-content-center">
					<p className="text-center m-4">{props.content}</p>
				</div>
			</div>
		</div>
	)
}
