import '../../App.css'
import HeroSection from '../HeroSection.js'
import HouseTemplate from '../HouseTemplate.js'
import CardHouse from '../CardHouse.js'
import Footer from '../Footer.js'

function Home (){
    return(
        <>
            <HeroSection />
            <HouseTemplate />
            <CardHouse />
            <Footer />
        </>
    );
}

export default Home;