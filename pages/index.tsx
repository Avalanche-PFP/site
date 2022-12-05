import Image from 'next/image'

import { Header } from '../components/Header'
import { Footer } from '../components/Footer '
import { ProjectCard } from '../components/ProjectCard'
import { RoadmapCard } from '../components/RoadmapCard'
import { MemberIcon } from '../components/MemberIcon'

export default function Home() {
	return (
		<div>
			<Header/>

			<Image src="/img/Top.svg" alt='top' width={10000} height={10000}/>
			<div className="grid place-items-center">
				<div className="md:m-20">
					<p className="text-5xl font-bold">SBT ?</p>
				</div>
				<div className="m-24 grid place-items-center">
					<p className="w-6/12 text-xl text-center">
						Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
					</p>
				</div>
				<div>SNS logos</div>
			</div>

			<div id='Projects' className='m-24 pt-32 grid place-items-center'>
				<p className='text-5xl font-bold my-6'>SBT Projects</p>
				<span className='grid grid-cols-1 lg:grid-cols-3'>
					<span>
						<ProjectCard name="AVALANCHE NFT" imgPath="/img/projectSample.svg"/>
					</span>
					<span>
						<ProjectCard name="AVALANCHE NFT" imgPath="/img/projectSample.svg"/>
					</span>
					<span>
						<ProjectCard name="AVALANCHE NFT" imgPath="/img/projectSample.svg"/>
					</span>
					<span>
						<ProjectCard name="AVALANCHE NFT" imgPath="/img/projectSample.svg"/>
					</span>
					<span>
						<ProjectCard name="AVALANCHE NFT" imgPath="/img/projectSample.svg"/>
					</span>
					<span>
						<ProjectCard name="AVALANCHE NFT" imgPath="/img/projectSample.svg"/>
					</span>
					<span>
						<ProjectCard name="AVALANCHE NFT" imgPath="/img/projectSample.svg"/>
					</span>
					<span>
						<ProjectCard name="AVALANCHE NFT" imgPath="/img/projectSample.svg"/>
					</span>
					<span>
						<ProjectCard name="AVALANCHE NFT" imgPath="/img/projectSample.svg"/>
					</span>
				</span>
				<button type='button' className='inline-block px-10 py-4 m-10 bg-main text-white text-xl rounded-full shadow-xl hover:shadow-2xl hover:bg-red-600 active:bg-red-700'>More</button>
			</div>

			<div  id='Roadmap'>
				<div className='w-full h-40 bg-gradient-to-l from-main to-red-200 grid place-content-center'>
					<p className='text-white text-5xl font-bold'>Roadmap</p>
				</div>
				<div className='w-full h-96 bg-gradient-to-l from-main to-red-200'>
					<div className='flex overflow-x-auto pl-32'>
						<div className='scroll-ml-6 snap-start'>
							<RoadmapCard season="2020 1Q" content="Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry."/>
						</div>
						<div className='scroll-ml-6 snap-start'>
							<RoadmapCard season="2020 1Q" content="Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry."/>
						</div>
						<div className='scroll-ml-6 snap-start'>
							<RoadmapCard season="2020 1Q" content="Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry."/>
						</div>
						<div className='scroll-ml-6 snap-start'>
							<RoadmapCard season="2020 1Q" content="Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry."/>
						</div>
						<div className='scroll-ml-6 snap-start'>
							<RoadmapCard season="2020 1Q" content="Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry."/>
						</div>
						<div className='scroll-ml-6 snap-start'>
							<RoadmapCard season="2020 1Q" content="Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry."/>
						</div>
						<div className='scroll-ml-6 snap-start'>
							<RoadmapCard season="2020 1Q" content="Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry."/>
						</div>
						<div className='scroll-ml-6 snap-start'>
							<RoadmapCard season="2020 1Q" content="Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry."/>
						</div>
					</div>
				</div>
			</div>

			<div>
				<div className='mt-20 grid place-content-center'>
					<p className='text-5xl'>Team</p>
				</div>
				<div className='m-32 flex justify-between'>
					{/* <MemberIcon imgPath="/img/marty.jpg" name="Marty McFly" content="It's heavy..."/>
					<MemberIcon imgPath="/img/marty.jpg" name="Marty McFly" content="It's heavy..."/>
					<MemberIcon imgPath="/img/marty.jpg" name="Marty McFly" content="It's heavy..."/>
					<MemberIcon imgPath="/img/marty.jpg" name="Marty McFly" content="It's heavy..."/>
					<MemberIcon imgPath="/img/marty.jpg" name="Marty McFly" content="It's heavy..."/>
					<MemberIcon imgPath="/img/marty.jpg" name="Marty McFly" content="It's heavy..."/> */}
				</div>
			</div>

			<Footer/>
		</div>
	)
}