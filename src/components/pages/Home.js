import '../../App.css'
import HeroSection from '../HeroSection.js'
import HouseTemplate from '../HouseTemplate.js'
import CardHouse from '../CardHouse.js'

function Home (){
    return(
        <>
            <HeroSection />
            <HouseTemplate />
            <CardHouse />
        </>
    );
}

export default Home;