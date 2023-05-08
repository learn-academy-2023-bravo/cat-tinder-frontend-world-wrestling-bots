// homepage structure
// imports
import background from '../assets/apocalypse_bg.webp'
import { NavLink } from 'reactstrap'
  

const Home = () => {
    
    return (
        <>
            <NavLink href="/botindex">
                <div className='home-background' style={{ backgroundImage: `url(${background})`}}>
                    <h1 className='welcome-home'>Home of the Bot-o-pocalipse</h1>
                </div>
            </NavLink>
        </>
    )
}

export default Home