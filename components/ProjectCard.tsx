import Image from "next/image";

export const ProjectCard = (props: any) => {
	return (
		<div>
			<div className="w-56 h-80 rounded-lg border-4 border-main grid place-items-center m-4 shadow-2xl">
				<Image src={props.imgPath} alt="project sample" width={200} height={9}/>
			</div>
			<p className="px-6 mb-6"> {props.name + " >"} </p>
		</div>
	)
}