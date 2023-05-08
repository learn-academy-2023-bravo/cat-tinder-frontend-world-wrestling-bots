// homepage structure
// imports
import background from '../assets/apocalypse_bg.webp'

const Home = () => {
    
    return (
        <>
            <div className='home-background' style={{ backgroundImage: `url(${background})`}}>
                <h1 className='welcome-home'>Home of the Bot-o-pocalipse</h1>
            </div>
        </>
    )
}

export default Home