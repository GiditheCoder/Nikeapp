import '../Contact.css'

const Contact = () => {
    return ( <div className='contact--container'>
        <h1 className='contact--header'>Contact Us</h1>
      <p className='para--1 '>Have questions or need assistance? We're here to help!</p>
      <p className='para--2'>Feel free to reach out to us via email, phone, or visit our store location:</p>
      <ul>
        <li>Email: info@nikestore.com</li>
        <li>Phone: 1-800-NIKE-STORE</li>
        <li>Address: 123 Nike Ave, Portland, OR 97201</li>
      </ul>
      <p>Our customer service team is available to assist you with product inquiries, orders, returns, and more. We value your feedback and strive to provide the best shopping experience possible.</p>
      <p>Connect with us on social media for the latest updates, promotions, and exclusive offers!</p> 
    </div>);
}
 
export default Contact;