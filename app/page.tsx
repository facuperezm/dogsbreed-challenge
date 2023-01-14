type Props = {}

const FavouritableImage = ({src}: { src: string }) => {
    return (
        <div className="relative">
            <img src={src} alt="dog" className="w-full h-64 object-cover" />
            <button className="absolute top-2 right-2 bg-white rounded-full p-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 13l-7 7-7-7m14-8l-7 7-7-7" />
                </svg>
            </button>
        </div>
    )
}

const Home = (props: Props) => {
    return (
        <span className="mt-2 text-gray-600">Select a breed above</span>
    )
}

export default Home