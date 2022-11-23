import Carousel from 'react-bootstrap/Carousel';

function Home() {
    return (
        <Carousel slide={false}>
            <Carousel.Item>
                <img style={{ height: "550px", padding: "10px" }}
                    className="d-block  w-100"
                    src="./img/ok.jpg"
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3>Player</h3>
                    <p style={{ color: "white" }}>Details about the most famous players in the game</p>
                    <button ><a style={{ color: "black" }} href='/Player'>see more </a></button>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    style={{ height: "550px", padding: "10px" }}
                    className="d-block w-100"
                    src="./img/ok2.jpg"
                    alt="Second slide"
                />

                <Carousel.Caption>
                    <h3>Matchs</h3>
                    <p style={{ color: "white" }}>Details about the times matchs in the game</p>
                    <button><a style={{ color: "black" }} href='/Match'>see more </a></button>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    style={{ height: "550px", padding: "10px" }}
                    className="d-block w-100"
                    src="./img/ok3.jpg"
                    alt="Third slide"
                />

                <Carousel.Caption>
                    <h3>Teams</h3>
                    <p style={{ color: 'white' }}>
                        Details about the most famous teams in the game
                    </p>
                    <button><a style={{ color: "black" }} href='/Team'>see more </a></button>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}

export default Home;