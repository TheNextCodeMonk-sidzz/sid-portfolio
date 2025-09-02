import React from "react";
import linkedin from "../../assets/linkedin.svg"
import github from "../../assets/github (1).svg";
import SocialIcon from "../SocialIcon";
import { useState, useRef } from "react";
import emailjs from '@emailjs/browser';
import { NavLink } from "react-router-dom";

const Contact_Form = () => {
  const form = useRef();
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setFormData({ name: '', email: '', subject: '', message: '' });

    emailjs
      .sendForm('service_q57t8xe', 'template_ql0yukd', form.current, {
        publicKey: 'hlSdplD_L4CdQh7jT',
      })
      .then(
        (result) => {
          console.log('Email sent!' , result.text);
          alert("Message sent successfully !")
          setIsSubmitting(false);
        },
        (error) => {
          console.log('FAILED...', error.text);
          alert("Oops! Something went wrong.");
          setIsSubmitting(false);
        },
      );
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="space-y-12 sm:space-y-16 lg:space-y-20 ">
    
      <div className="grid grid-cols-1 xl:grid-cols-4 gap-8 lg:gap-5 lg:mt-15">
      
        <div className="xl:col-span-1 order-2 xl:order-1">
          <div className="bg-zinc-900/50 border border-zinc-800 rounded-3xl p-6 sm:p-8 lg:p-10 h-fit">
            <h2 className="text-2xl sm:text-3xl lg:text-3xl font-bold text-white mb-6">Hey !!</h2>
            <p className="text-zinc-400 text-sm sm:text-base lg:text-base leading-relaxed mb-8">
              I'm available to take on new projects. Feel free to message me
              about anything you'd like me to work on. I'm open to
              collaborations and freelance opportunities.
            </p>
            
            <div>
              <h3 className="text-xl sm:text-2xl lg:text-2xl font-bold mb-6 lg:mt-20 text-white">Follow Me</h3>
              <div className="space-y-4">
                <SocialIcon link={"https://www.linkedin.com/in/siddhantbhujbal1/"} icon={linkedin} label="LinkedIn" />
                <SocialIcon link={"https://github.com/TheNextCodeMonk-sidzz"} icon={github} label="GitHub" />
              </div>
            </div>
          </div>
        </div>
        
        {/* Right Side - Contact Form */}
        <div className="xl:col-span-3 order-1 xl:order-2">
          <div className="bg-zinc-900/50 border border-zinc-800 rounded-3xl p-6 sm:p-8 lg:p-10">
            <div className="mb-8">
              <h2 className="text-2xl sm:text-3xl lg:text-3xl font-bold text-white mb-4">
                Send a message
              </h2>
              <p className="text-zinc-400 text-sm sm:text-base lg:text-base">
                Fill out the form below and I'll get back to you within 24
                hours.
              </p>
            </div>
            
            <form ref={form} onSubmit={sendEmail} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Enter your name"
                    className="w-full px-4 py-4 bg-black border border-zinc-700 rounded-xl text-white placeholder-zinc-500 focus:border-white focus:outline-none transition-colors duration-300 text-base"
                    required
                  />
                </div>
                
                <div>
                  <input
                    type="email"
                    name="your_email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-4 bg-black border border-zinc-700 rounded-xl text-white placeholder-zinc-500 focus:border-white focus:outline-none transition-colors duration-300 text-base"
                    placeholder="Your Email"
                    required
                  />
                </div>
              </div>
              
              <div>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="w-full px-4 py-4 bg-black border border-zinc-700 rounded-xl text-white placeholder-zinc-500 focus:border-white focus:outline-none transition-colors duration-300 text-base"
                  placeholder="Subject"
                  required
                />
              </div>
              
              <div>
                <textarea
                  name="message"
                  rows="6"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-4 bg-black border border-zinc-700 rounded-xl text-white placeholder-zinc-500 focus:border-white focus:outline-none transition-colors duration-300 resize-none text-base"
                  placeholder="Write your message..."
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="group w-full bg-white text-black py-4 px-8 rounded-xl font-semibold text-base sm:text-lg lg:text-xl hover:bg-zinc-200 transition-all duration-300 flex items-center justify-center space-x-3 disabled:opacity-50 disabled:cursor-not-allowed transform hover:scale-105"
              >
                {isSubmitting ? (
                  <div className="w-6 h-6 border-2 border-black border-t-transparent rounded-full animate-spin"></div>
                ) : (
                  <>
                    <span>Send Message</span>
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
      
 
      <div className="text-center bg-gradient-to-br from-zinc-700 via-zinc-900 to-zinc-800 rounded-3xl p-8 sm:p-12 lg:p-16">
        <h2 className="text-3xl sm:text-4xl lg:text-4xl  font-bold text-white mb-6 sm:mb-8">
          Ready to Start Something Amazing?
        </h2>
        <p className="text-zinc-400 text-base sm:text-lg lg:text-xl xl:text-xl mb-8 sm:mb-12 max-w-4xl mx-auto leading-relaxed">
          Let's turn your ideas into reality. Schedule a free consultation
          call to discuss your project.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center">
          <button className="group px-8 py-4 bg-white text-black rounded-xl font-semibold hover:bg-zinc-200 transition-all duration-300 flex items-center justify-center space-x-2 transform hover:scale-105 text-base sm:text-lg lg:text-base">
            <span>Schedule a Call</span>
            <span className="relative group">
              <span className="absolute left-1/2 -translate-x-1/2 bottom-full mb-8 w-max px-1 py-2 rounded bg-zinc-900 text-white text-xs opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-200 z-20 shadow-lg">
                Send me a message and will connect soon
              </span>
            </span>
          </button>
          <NavLink to="/projects" className="px-8 py-4 border border-zinc-600 text-white rounded-xl font-semibold hover:border-white hover:bg-zinc-800 transition-all duration-300 transform hover:scale-105 text-base sm:text-lg lg:text-base">
            View My Work
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Contact_Form;
