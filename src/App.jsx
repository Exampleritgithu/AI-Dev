import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import SeoSection from './components/SeoSection';
import ServicesSection from './components/ServicesSection';
import AboutSection from './components/AboutSection';
import FeaturesSection from './components/FeaturesSection';
import LogoBrand from './components/LogoBrand';
import BlockChainSolutions from './components/BlockChainSolutions';
import CaseStudySection from './components/CaseStudySection';
import TestimonialSection from './components/TestimonialSection';
import IndustriesSection from './components/IndustriesSection';
import ContactSection from './components/ContactSection';
import BlogSection from './components/BlogSection';
import OurLocation from './components/OurLocation';
import Footer from './components/Footer';
import AboutUs from './components/about/AboutUs';
import Blogs from './components/blog/Blogs';
import BlogCard from './components/blog/BlogCard';
import BlogDetails from './components/blog/BlogDetails';
import ServicesDetail from './components/services/ServicesDetail';
import Services from './components/services/Services';
import FAQSection from './components/pages/FAQSection';
import TeamSection from './components/pages/TeamSection';
import PrivacySection from './components/pages/PrivacySction';
import ServicesCard from './components/services/ServicesCard';
import TeamHome from './components/pages/TeamHome';
const App = () => {
  return (
    <Router>
      <Navbar />

      <Routes>

        {/* Home Page */}
        <Route
          path="/"
          element={
            <>
              <Home />
              <SeoSection />
              <ServicesSection />
              <AboutSection />
              <FeaturesSection />
              <LogoBrand />
              <BlockChainSolutions />
              <CaseStudySection />
              <TestimonialSection />
              <IndustriesSection />
              <ContactSection />
              <BlogSection />
              <OurLocation />
            </>
          }
        />

        {/* About Page */}
        <Route
          path="/about"
          element={
            <>
              <AboutUs />
              <SeoSection />
              <CaseStudySection />
              <LogoBrand />
              <ServicesSection />
            </>
          }
        />

        {/* Blog List Page */}
        <Route
          path="/blog"
          element={
            <>
              <Blogs />
              <BlogCard />
            </>
          }
        />

        {/* Single Blog Details Page */}
        <Route
          path="/blog/:id"
          element={<BlogDetails />}
        />

        {/* Services Page */}
        <Route path="/services" element={
          <>
          <Services />
          
          </>
          } />

        {/* Services Dynamic Details Page */}
        <Route
          path="/services/:id"
          element={
            <>
              <ServicesDetail />
              <ServicesSection />
            </>
          }
        />

        {/* Pages Section */}
        <Route path="/pages/faq" element={<FAQSection />} />
        <Route path="/pages/team" element={<>
        <TeamHome/>
          <TeamSection />
          </>} />
        <Route path="/pages/privacy" element={<PrivacySection />} />

      </Routes>

      <Footer />
    </Router>
  );
};

export default App;
