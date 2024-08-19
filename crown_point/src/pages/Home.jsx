import Jumbotron from "../components/Jumbotron"
import Mission from "../components/Mission"
import Blogcards from "../components/Blogcards"
import HomeCarousel from "../components/HomeCarousel"
import Google from "../components/Google";

export default function Home () {
    return (
        <> 
            <Jumbotron />
            <Mission />
            <Blogcards />
            <HomeCarousel/>
            <Google />
        </>
    )
} 