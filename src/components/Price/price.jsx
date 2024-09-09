
import './Price.css'; // Import the CSS file for styling
import shop from '../../assets/shop.png';
import planing from '../../assets/planing.jpg';

const Price = () => {
  return (
    <>
      <h2 className='header-text'>Price Details</h2>
  
      <div className="price-container">
        <div className="promotion-left">
          <img src={planing} alt='Planning' />
        </div>
        
        <div className="price-table">
          <h1>Pricing Plans</h1>
          <table>
            <thead>
              <tr>
                <th>Package</th>
                <th>Price</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>.in Domain + Hosting + Email</td>
                <td>₹1500</td>
              </tr>
              <tr>
                <td>.com Domain + Hosting + Email</td>
                <td>₹3000</td>
              </tr>
            </tbody>
          </table>
        </div>
        
        <div className="promotion-right">
          <img src={shop} alt='Shop Promotion' />
        </div>
      </div>

      {/* Contact Section */}
      <div className="contact-section">
        <h2>Contact Us</h2>
        <p>For inquiries or to get started with our services, call or WhatsApp us at:</p>
        <a href="tel:+919969802679" className="contact-link">+91 99698 02679</a>
        <p>Or send us an email at <a href="mailto:webpagetrading@gmail.com" className="contact-link">webpagetrading@gmail.com</a></p>
      </div>
    </>
  );
}

export default Price;
