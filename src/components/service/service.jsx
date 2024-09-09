
import Slider from 'react-slick';
import './Service.css'; // Import the CSS file for styling
import b2bImage from '../../assets/b2b.jpg'
import onlineImage from '../../assets/growth.png';
import interImage from '../../assets/inter.png';
import service4Image from '../../assets/planing.jpg'

const Service = () => {
  // Slider settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true, // Enable autoplay
    autoplaySpeed: 3000, // Set the delay in milliseconds (e.g., 3000ms = 3 seconds)
  };

  return (
    <div className='service-container'>
      <div className='service-header'>
        <h1>Our Web Solutions</h1>
        <p>Creating Stunning Websites & Web Apps at Unbeatable Prices</p>
      </div>
      
      <div className='service-content'>
        <h2>Why Choose Us?</h2>
        <p>
          We offer top-notch web development services including custom websites and web applications, 
          all at prices that wont break the bank. Our team specializes in creating responsive, user-friendly 
          designs tailored to your needs, whether its for personal projects, small businesses, or large enterprises.
          <br /><br />
          <strong>Key Features:</strong>
          <ul>
            <li>High-quality web design and development</li>
            <li>Responsive and mobile-friendly layouts</li>
            <li>Fast turnaround time</li>
            <li>Affordable pricing packages</li>
            <li>Ongoing support and maintenance</li>
          </ul>
        </p>
        
        <div className='service-slider'>
          <Slider {...settings}>
            <div><img src={b2bImage} alt='B2B Service' /></div>
            <div><img src={onlineImage} alt='Online Service' /></div>
            <div><img src={interImage} alt='Interactive Service' /></div>
            <div><img src={service4Image} alt='Service 4' /></div>
          </Slider>
        </div>
      </div>
      
      <div className='service-footer'>
        <p>Contact us today to get a quote and start your project!</p>
      </div>
    </div>
  );
}

export default Service;
