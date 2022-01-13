import MovieCarousel from "./MovieCarousel"
import Header from "./Header"
import { Container } from "react-bootstrap"

const TVShows = () => {
   return <>
    <Header/>
    <Container fluid>
        <h3 className="py-3">Lord of The Rings</h3>
        <MovieCarousel query="lord of the rings" />
        <h3 className="py-3">Harry Potter</h3>
        <MovieCarousel query="harry potter" />
        <h3 className="py-3">Star Wars</h3>
        <MovieCarousel query="star wars" />
    
    </Container>
    </>
}

export default TVShows