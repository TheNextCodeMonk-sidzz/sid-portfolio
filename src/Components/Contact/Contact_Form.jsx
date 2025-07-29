import React from "react";
import linkedin from "../../assets/linkedin.svg"
import github from "../../assets/github (1).svg";
import SocialIcon from "../SocialIcon";
import { useState, useRef } from "react";
import emailjs from '@emailjs/browser';



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
    <div>
      <div className="grid grid-cols-4  gap-5">
        <div className="flex flex-col justify-between gap-8 col-span-1">
          <div className="mt-10 bg-zinc-900 border border-zinc-800 rounded-3xl p-8 lg:p-10 ">
            <h2 className="text-3xl font-bold text-white mb-4">Hey !!</h2>
            <p className="text-zinc-400 text-md leading-relaxed">
              I'm available to take on new projects. Feel free to message me
              about anything you'd like me to work on. I'm open to
              collaborations and freelance opportunities.
            </p>
            <div>
              <h3 className="text-2xl font-bold mb-6 mt-37 text-white">Follow Me</h3>
              <div className="space-y-4 mt-4">
                <div className="w-35">
                  <SocialIcon  link={"https://www.linkedin.com/in/siddhantbhujbal1/"} icon={linkedin} label="LinkedIn" />
                </div>
                <div className="w-35">
                  <SocialIcon link={"https://github.com/TheNextCodeMonk-sidzz"} icon={github} label="GitHub" />
                </div>

              </div>
              </div>
          </div>
        </div>
        <div className="col-span-3">
          <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8 lg:p-10 mt-10 ">
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-white mb-4">
                Send a message
              </h2>
              <p className="text-zinc-400">
                Fill out the form below and I'll get back to you within 24
                hours.
              </p>
            </div>
            <form ref={form} onSubmit={sendEmail} className="space-y-6">
              <div className="grid gap-3">
                <div className="relative">
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Enter your name"
                    className="w-full px-4 py-4 bg-black border border-zinc-700 rounded-xl text-white placeholder-zinc-500 focus:border-white focus:outline-none transition-colors duration-300 "
                    required
                  />
                  {/* <div className={`absolute bottom-0 left-0 h-0.5 rounded bg-white transition-all duration-300 ${focusedField === 'name' ? 'w-full' : 'w-0'}`}></div> */}
                </div>
                
                <div className="relative">
                  <input
                    type="email"
                    name="your_email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-4 bg-black border border-zinc-700 rounded-xl text-white placeholder-zinc-500 focus:border-white focus:outline-none transition-colors duration-300"
                    placeholder="Your Email"
                    required
                  />
                  {/* <div className={`absolute bottom-0 left-0 h-0.5 bg-white transition-all duration-300 ${focusedField === 'email' ? 'w-full' : 'w-0'}`}></div> */}
                </div>
                <div></div>
              </div>
              <div className="relative">
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="w-full px-4 py-4 bg-black border border-zinc-700 rounded-xl text-white placeholder-zinc-500 focus:border-white focus:outline-none transition-colors duration-300"
                  placeholder="Subject"
                  required
                />
                {/* <div className={`absolute bottom-0 left-0 h-0.5 bg-white transition-all duration-300 ${focusedField === 'subject' ? 'w-full' : 'w-0'}`}></div> */}
              </div>
              <div className="relative">
                <textarea
                  name="message"
                  rows="6"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-4 bg-black border border-zinc-700 rounded-xl text-white placeholder-zinc-500 focus:border-white focus:outline-none transition-colors duration-300 resize-none"
                  placeholder="Tell me about your project..."
                  required
                ></textarea>
                {/* <div className={`absolute bottom-0 left-0 h-0.5 bg-white transition-all duration-300 ${focusedField === 'message' ? 'w-full' : 'w-0'}`}></div> */}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="group w-full bg-white text-black py-4 px-8 rounded-xl font-semibold text-lg hover:bg-zinc-200 transition-all duration-300 flex items-center justify-center space-x-3 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <div className="w-6 h-6 border-2 border-black border-t-transparent rounded-full animate-spin"></div>
                ) : (
                  <>
                    <span>Send Message</span>
                    {/* <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" /> */}
                  </>
                )}
              </button>
            </form>
          </div>
        </div>

        <div>
          
        </div>
      </div>
      <div className="text-center inset-0 bg-gradient-to-br from-zinc-900 via-black to-zinc-800 mt-10 rounded-2xl">
            <div className="max-w-7xl mx-auto px-6 py-16 text-center">
              <h2 className="text-4xl font-bold text-white mb-6">
                Ready to Start Something Amazing?
              </h2>
              <p className="text-zinc-400 text-xl mb-8 max-w-2xl mx-auto">
                Let's turn your ideas into reality. Schedule a free consultation
                call to discuss your project.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="group px-8 py-4 bg-white text-black rounded-xl font-semibold hover:bg-zinc-200 transition-all duration-300 flex items-center justify-center space-x-2">
                  <span>Schedule a Call</span>
                  {/* <ExternalLink className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" /> */}
                </button>
                <button className="px-8 py-4 border border-zinc-600 text-white rounded-xl font-semibold hover:border-white hover:bg-zinc-800 transition-all duration-300">
                  View My Work
                </button>
              </div>
            </div>
          </div>
    </div>
  );
};

export default Contact_Form;
