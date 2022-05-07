import React from 'react'
import ScrollAnimation from 'react-animate-on-scroll'
import { FaEnvelope, FaLinkedin, FaMapMarkerAlt, FaTwitter, FaInstagram } from 'react-icons/fa'
import emailjs from 'emailjs-com';
import swal from 'sweetalert';
import './Contact.css'

const Contact = () => {
    const contactRef = React.useRef()
    React.useEffect(() => {
        window.addEventListener('scroll', () => {
            const socialheader = document.getElementsByClassName('header__socials')[0];
            window.pageYOffset > 1800 && socialheader.classList.add('hidden')
            window.pageYOffset < 1800 && socialheader.classList.contains('hidden') && socialheader.classList.remove('hidden')
        })
    }, [])

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_sz90g4d', 'template_lixjcoi', e.target, 'm8WINnMkiW7L9K86S')
            .then((result) => {
                swal({
                    title: "Delivered",
                    text: "We'll get back to you as soon as possible",
                    icon: "success",
                });

            }, (error) => {
                console.log(error.text);
                swal({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Something went wrong!',
                })
            });

        document.getElementById('contact-form').reset();
    }
    return (
        <section className='contact' id="contact" ref={contactRef}>
            <div className='max-width'>
                <h2 className='title'>Contact</h2>
                <div className='contact-content'>

                    <div className='column right'>
                        <ScrollAnimation animateIn='flipInY'>
                            <div className='text'>Send a Message</div>
                            <form id='contact-form' onSubmit={sendEmail} netlify>
                                <div className='fields'>
                                    <div className='field name'>
                                        <input type='text' placeholder='Name' name='name' required></input>
                                    </div>
                                    <div className='field email'>
                                        <input type='email' placeholder='Email' name='email' required></input>
                                    </div>
                                </div>

                                <div className='field subject'>
                                    <input type='text' placeholder='Subject' name='subject' required></input>
                                </div>
                                <div className='field textarea'>
                                    <textarea cols='40' rows='15' placeholder='Message...' name='message' required></textarea>
                                </div>
                                <div className='button'>
                                    <button type='submit'>Send Message</button>
                                </div>
                            </form>
                        </ScrollAnimation>
                    </div>
                    <div className='column left'>
                        <div className='text'>
                            Get In Touch
                        </div>
                        <div className='icons'>
                            <ScrollAnimation animateIn='bounceInLeft' delay={100} >
                                <div className='row'>
                                    <FaMapMarkerAlt />
                                    <div className='info'>
                                        <div className='head'>Location</div>
                                        <a href='https://goo.gl/maps/XSVsQ9Jn4fprYNPo9' target="blank"><div className='sub-title'>Afe-Babalola University Ado-Ekiti, Ekiti, Nigeria</div></a>
                                    </div>
                                </div>
                            </ScrollAnimation >
                            <ScrollAnimation animateIn='bounceInLeft' delay={150} >
                                <div className='row'>
                                    <FaEnvelope />
                                    <div className='info'>
                                        <div className='head'>Email</div>
                                        <a href='mailto:asvatechnical@gmail.com/' target="blank"><div className='sub-title'>asvatechnical@gmail.com</div></a>
                                    </div>
                                </div>
                            </ScrollAnimation >
                            <ScrollAnimation animateIn='bounceInLeft' delay={200} >
                                <div className='row'>
                                    <FaLinkedin />
                                    <div className='info'>
                                        <div className='head'>Linked In</div>
                                        <a href='https://www.linkedin.com/company/abuad-salt-valley-associates-asva/' target="blank"><div className='sub-title'>@ABUAD Salt Valley Associates</div></a>
                                    </div>
                                </div>
                            </ScrollAnimation >
                            <ScrollAnimation animateIn='bounceInLeft' delay={250} >
                                <div className='row'>
                                    <FaTwitter />
                                    <div className='info'>
                                        <div className='head'>Twitter</div>
                                        <a href='https://twitter.com/asva__' target="blank"><div className='sub-title'>@asva__</div></a>
                                    </div>
                                </div>
                            </ScrollAnimation >
                            <ScrollAnimation animateIn='bounceInLeft' delay={250} >
                                <div className='row'>
                                    <FaInstagram />
                                    <div className='info'>
                                        <div className='head'>Instagram</div>
                                        <a href='https://www.instagram.com/a.s.v.a__/' target="blank"><div className='sub-title'>@a.s.v.a__</div></a>
                                    </div>
                                </div>
                            </ScrollAnimation >
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Contact
