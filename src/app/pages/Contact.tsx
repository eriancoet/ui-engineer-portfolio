import { Mail, Github, Linkedin, Twitter } from "lucide-react";
import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="py-12 sm:py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl sm:text-5xl mb-4">Get in Touch</h1>
        <p className="text-xl text-gray-600 mb-12">
          Interested in collaborating on a UI or frontend project? Let’s connect.
        </p>

        <div className="grid gap-12 lg:grid-cols-2">
          {/* FORM */}
          <div>
          <form
            name="contact"
            method="POST"
            action="/thank-you.html"

            data-netlify="true"
            netlify-honeypot="bot-field"
            className="space-y-6"
>

              {/* Netlify required hidden fields */}
              <input type="hidden" name="form-name" value="contact" />
              <input type="hidden" name="bot-field" />

              <div>
                <label htmlFor="name" className="block text-sm mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-600 focus:outline-none"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-600 focus:outline-none"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-600 focus:outline-none resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* CONTACT INFO */}
          <div>
            <h2 className="text-2xl mb-6">Connect With Me</h2>

            <div className="space-y-4 mb-8">
              <a
                href="mailto:riancoetz@gmail.com"
                className="flex items-center gap-3 text-gray-600 hover:text-blue-600 transition-colors"
              >
                <Mail className="w-6 h-6" />
                <span>riancoetz@gmail.com</span>
              </a>

              <a
                href="https://github.com/eriancoet"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-gray-600 hover:text-blue-600 transition-colors"
              >
                <Github className="w-6 h-6" />
                <span>github.com/eriancoet</span>
              </a>

              <a
                href="https://www.linkedin.com/in/rian-coetzee-865337218/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-gray-600 hover:text-blue-600 transition-colors"
              >
                <Linkedin className="w-6 h-6" />
                <span>LinkedIn</span>
              </a>

              <a
                href="https://twitter.com/riancoetz"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-gray-600 hover:text-blue-600 transition-colors"
              >
                <Twitter className="w-6 h-6" />
                <span>@riancoetz</span>
              </a>
            </div>

            <div className="border-2 border-gray-200 rounded-lg p-6">
              <h3 className="text-xl mb-3">Looking to collaborate?</h3>
              <p className="text-gray-600 mb-4">
                I’m always open to discussing new projects, creative ideas, or
                opportunities to be part of your vision.
              </p>
              <p className="text-gray-600">
                Response time: Usually within 24 hours
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
