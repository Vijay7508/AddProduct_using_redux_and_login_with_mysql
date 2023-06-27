import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar'
import Carousel from 'react-bootstrap/Carousel';
import vijay from './vijay.jpeg';
import vnv from './vnv.jpeg';
import tw from './tw.jpeg'


function ColorSchemesExample() {
  return (
    <>

    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={vnv}
          alt="First slide"
        />
        <Carousel.Caption>
       
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={vijay}
          alt="Second slide"
        />

        <Carousel.Caption>
         
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={tw}
          alt="Third slide"
        />

        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>


     
    
    </>
  );
}

export default ColorSchemesExample;