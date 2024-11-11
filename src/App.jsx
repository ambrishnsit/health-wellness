import React, { useState, useEffect } from 'react';
import { Card, CardContent } from "./components/ui/card";
import { Button } from "./components/ui/button";
import { Input } from "./components/ui/input";
import { Textarea } from "./components/ui/textarea";

const handleSubmit = (e) => {
  e.preventDefault();  // Prevent default form submission
  alert("Your response has been submitted.");
};

const HomeCarousel = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % items.length);
    }, 3000); // Change slide every 3 seconds
    return () => clearInterval(interval);
  }, [items.length]);

  const nextSlide = () => setActiveIndex((activeIndex + 1) % items.length);
  const prevSlide = () => setActiveIndex((activeIndex - 1 + items.length) % items.length);

  return (
    <div className="relative w-screen h-screen">
      {items.map((item, index) => (
        <div
          key={index}
          className={`${
            index === activeIndex ? "opacity-100" : "opacity-0"
          } absolute inset-0 transition-opacity duration-700 ease-in-out w-full h-full flex items-center justify-center`}
          style={{
            backgroundImage: `url(${item.image})`,
            backgroundSize: "cover",
            backgroundPosition: "center"
          }}
        >
          <h2 className="text-white text-3xl md:text-5xl font-bold text-center p-4 bg-black bg-opacity-50 rounded">
            {item.text}
          </h2>
        </div>
      ))}
      <button onClick={prevSlide} className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-4 rounded-full">‹</button>
      <button onClick={nextSlide} className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-4 rounded-full">›</button>
    </div>
  );
};

const HealthWellnessPage = () => {
  const [activeTab, setActiveTab] = useState('home');

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveTab(sectionId);
    }
  };

  const carouselItems = [
    { text: "Join our health community", image: "https://images.pexels.com/photos/40568/medical-appointment-doctor-healthcare-40568.jpeg" },
    { text: "Stay informed, Stay healthy", bg: "bg-green-500", image: "https://images.pexels.com/photos/6129149/pexels-photo-6129149.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" },
    { text: "Your health is our priority", bg: "bg-purple-500", image: "https://images.pexels.com/photos/1350560/pexels-photo-1350560.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" },
    { text: "24/7 Health Monitoring", bg: "bg-red-500", image: "https://images.pexels.com/photos/5215000/pexels-photo-5215000.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" }
  ];

  const services = [
    { title: "Real-time Health Monitoring", image: "https://images.pexels.com/photos/7659573/pexels-photo-7659573.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" },
    { title: "Vital Signs Tracking", image: "https://images.pexels.com/photos/8900018/pexels-photo-8900018.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" },
    { title: "Health Risk Assessment", image: "https://images.pexels.com/photos/6823509/pexels-photo-6823509.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" }
  ];

  const testimonials = [
    { name: "John Doe", text: "The health monitoring system has been a game-changer for managing my chronic condition." },
    { name: "Jane Smith", text: "The real-time alerts helped my doctor catch a potential health issue early." },
    { name: "Mike Johnson", text: "Excellent service and user-friendly interface. Highly recommended!" }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="fixed top-0 w-full bg-white shadow-md z-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <h1 className="text-xl font-bold">Health & Wellness</h1>
            <nav className="hidden md:flex space-x-4">
              {['home', 'about', 'services', 'testimonials', 'contact', 'medical-history'].map((tab) => (
                <Button
                  key={tab}
                  variant="ghost"
                  className={`capitalize ${activeTab === tab ? 'bg-blue-100' : ''}`}
                  onClick={() => scrollToSection(tab)}
                >
                  {tab.replace('-', ' ')}
                </Button>
              ))}
            </nav>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="pt-4">
        {/* Home Section */}
        <section id="home" className="min-h-screen">
          <div className="container mx-auto px-4 text-white">
            <HomeCarousel items={carouselItems} />
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="min-h-screen bg-white py-12">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <img src="https://images.pexels.com/photos/7527085/pexels-photo-7527085.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="About Us" className="rounded-lg w-full md:w-1/2" />
              <p className="text-lg leading-relaxed text-gray-700">
                We are a health monitoring system offering early diagnosis, improved chronic disease management, and timely emergency intervention. With continuous data, healthcare professionals can make more informed decisions.
              </p>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="min-h-screen py-12">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <Card key={index} className="text-center">
                  <CardContent className="p-6">
                    <img src={service.image} alt={service.title} className="mb-4 w-full rounded-lg" />
                    <h3 className="text-xl font-semibold text-gray-800">{service.title}</h3>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section id="testimonials" className="min-h-screen bg-gray-100 py-12">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <Card key={index} className="p-6 bg-white shadow-lg">
                  <CardContent>
                    <p className="text-gray-600 mb-4">"{testimonial.text}"</p>
                    <p className="font-semibold text-gray-800">- {testimonial.name}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="min-h-screen py-12 bg-gradient-to-r from-yellow-200 to-green-200 text-white" onSubmit={handleSubmit}>
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d227821.93376121653!2d80.80242115!3d26.8467088!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399bfd991f32b16b%3A0x93ccba8909978be7!2sLucknow%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1699683223"
                  width="100%"
                  height="450"
                  className="border-0 rounded-lg"
                  loading="lazy"
                ></iframe>
              </div>
              <div>
                <Card>
                  <CardContent className="p-6">
                    <form className="space-y-4">
                      <div className="space-y-2">
                        <label className="block text-sm font-medium">Name</label>
                        <Input placeholder="Your name" />
                      </div>
                      <div className="space-y-2">
                        <label className="block text-sm font-medium">Email</label>
                        <Input type="email" placeholder="Your email" />
                      </div>
                      <div className="space-y-2">
                        <label className="block text-sm font-medium">Message</label>
                        <Textarea placeholder="Your message" />
                      </div>
                      <Button type="submit" className="w-full bg-white text-gray-800">Send Message</Button>
                    </form>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Medical History Section */}
        <section id="medical-history" className="min-h-screen bg-gray-100 py-12" onSubmit={handleSubmit}>
          <div className="container mx-auto px-4">
            <Card>
              <CardContent className="p-6">
                <form className="space-y-4">
                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-gray-800">Full Name</label>
                    <Input className="block text-sm font-medium text-gray-800" placeholder="Your full name" />
                  </div>
                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-gray-800">Date of Birth</label>
                    <Input className="block text-sm font-medium text-gray-800" type="date" />
                  </div>
                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-gray-800">Blood Group</label>
                    <Input className="block text-sm font-medium text-gray-800" placeholder="Your blood group" />
                  </div>
                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-gray-800">Existing Medical Conditions</label>
                    <Textarea className="block text-sm font-medium text-gray-800" placeholder="List any existing medical conditions" />
                  </div>
                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-gray-800">Current Medications</label>
                    <Textarea className="block text-sm font-medium text-gray-800" placeholder="List your current medications" />
                  </div>
                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-gray-800">Allergies</label>
                    <Textarea className="block text-sm font-medium text-gray-800" placeholder="List any allergies" />
                  </div>
                  <Button type="submit" className="w-full bg-blue-500 text-white">Submit Medical History</Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>
    </div>
  );
};

export default HealthWellnessPage;
