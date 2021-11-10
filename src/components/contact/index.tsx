import Button from '../button';
import './index.scss';

const Contact = () => {
  return (
    <div className="contact section" id="contact">
      <h2 className="font-size-xl mb-2 text-primary">Get In Touch</h2>
      <p className='text-gray mb-2'>
        Whether you have questions or just want to say hi, feel free to drop by.
        My inbox is always open and I'll try my best to get back to you!
      </p>
      <Button onClick={() => window.location.href = 'mailto:leeyoongti@gmail.com'} text='Say Hello'/>
    </div>
  );
};

export default Contact;
