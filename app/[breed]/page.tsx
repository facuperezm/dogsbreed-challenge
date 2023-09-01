import FavouritableImage from '../../components/favImages'

interface Props {
	params: {
		breed: string
	}
}

const BreedPage = async ({ params: { breed } }: Props) => {
	const { message: images } = await fetch(
		`https://dog.ceo/api/breed/${breed}/images/random/10`
	).then(response => response.json() as Promise<{ message: string[] }>)

	if (images.includes('Breed not found (master breed does not exist)')) {
		return <div>not found</div>
	}

	return (
		<section>
			<div className='grid grid-cols-[repeat(auto-fill,_minmax(200px,_1fr))] gap-6'>
				{images.map(image => {
					return <FavouritableImage src={image} key={image} />
				})}
			</div>
		</section>
	)
}

export default BreedPage
