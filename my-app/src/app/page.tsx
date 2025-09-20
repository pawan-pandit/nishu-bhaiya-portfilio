"use client"

import Image from "next/image"
import Link from "next/link"
import { Menu, X } from 'lucide-react'
import { useState } from 'react'
import HeroSection from "@/component/hero"
import AboutSection from "@/component/about"
import ReviewsSection from "@/component/review"
import IncludeSection from "@/component/what-include"
import ProgramSummarySection from "@/component/program-summary"
import PriceSection from "@/component/price-cards"
import FAQSection from "@/component/f-&-q"
import { CTASection } from "@/component/cta"
import { Footer } from "@/component/footer"


export default function Home() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const handleNavLinkClick = (id: string) => {
    setIsMobileMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div>
      <nav className="fixed left-0 right-0 top-0 z-100 w-full bg-white plus" aria-label="Main navigation">
        <div className="max-w-[1268px] mx-auto px-[24px]">
          <div className="bg-[#141414] h-[50px] lg:h-[75px] flex items-center justify-between px-4 py-[10px] md:py-[15px] lg:py-[30px] text-white">
            <div>
              <a href="#home">
                <Image src="/logo1.svg" alt="Logo" width={70} height={40} className="w-12 lg:w-18" />
              </a>
            </div>

            <div className="hidden lg:block">
              <ul className="flex uppercase gap-4 font-light ">
                <li>
                  <Link href="#about-me"
                    className="relative pb-1 after:content-[''] after:absolute after:w-0 after:h-[2px] after:bg-green-500 after:left-0 after:bottom-0 after:transition-all after:duration-300 hover:after:w-full"
                  > About me</Link>
                </li>
                <li>
                  <Link href="#reviews"
                    className="relative pb-1 after:content-[''] after:absolute after:w-0 after:h-[2px] after:bg-green-500 after:left-0 after:bottom-0 after:transition-all after:duration-300 hover:after:w-full"
                  > Reviews </Link>
                </li>
                <li>
                  <Link href="#whats-include"
                    className="relative pb-1 after:content-[''] after:absolute after:w-0 after:h-[2px] after:bg-green-500 after:left-0 after:bottom-0 after:transition-all after:duration-300 hover:after:w-full"
                  >What’s included</Link>
                </li>
                <li>
                  <Link href="#program-details"
                    className="relative pb-1 after:content-[''] after:absolute after:w-0 after:h-[2px] after:bg-green-500 after:left-0 after:bottom-0 after:transition-all after:duration-300 hover:after:w-full"
                  >program details</Link>
                </li>
                <li>
                  {/* <Link href="#contact">Contact</Link> */}
                </li>
              </ul>
            </div>
            <div className="hidden lg:block">
              <Link
                href="https://forms.gle/nqDF4TBXLnRYuuFRA"
                className="ml-6 px-6 py-2  anton tracking-wider rounded-md border border-white text-white font-medium uppercase 
               transition-all duration-300 ease-in-out 
               transform hover:scale-110 hover:-rotate-2 
               hover:backdrop-blur-md hover:bg-white/10"
              >
                Apply Now
              </Link>
            </div>




            <div className="lg:hidden">
              <button
                onClick={toggleMobileMenu}
                className="text-white focus:outline-none focus:ring-2 focus:ring-white"
                aria-label="Toggle navigation menu"
                aria-expanded={isMobileMenuOpen}
                aria-controls="mobile-menu"
              >
                {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {isMobileMenuOpen && (
          <div
            id="mobile-menu"
            className="fixed inset-0 bg-black/80 z-40 lg:hidden"
            onClick={toggleMobileMenu}
          ></div>
        )}

        <div
          className={`fixed inset-y-0 right-0 z-50 w-3/4 bg-[#141414] text-white shadow-lg transform transition-transform duration-300 ease-in-out lg:hidden
          ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}
          role="dialog"
          aria-modal="true"
          aria-labelledby="mobile-menu-title"
        >
          <div className="flex justify-end p-6">
            <button
              onClick={toggleMobileMenu}
              className="text-white focus:outline-none focus:ring-2 focus:ring-white"
              aria-label="Close navigation menu"
            >
              <X className="h-6 w-6" />
            </button>
          </div>
          <h2 id="mobile-menu-title" className="sr-only">Mobile Navigation</h2>
          <ul className="flex flex-col gap-4 py-6 px-6 uppercase font-extralight">
            <li>
              <Link href="#about-me"
                className="relative pb-1 after:content-[''] after:absolute after:w-0 after:h-[2px] after:bg-green-500 after:left-0 after:bottom-0 after:transition-all after:duration-300 hover:after:w-full"
                onClick={() => handleNavLinkClick("home")}>About me</Link>
            </li>
            <li>
              <Link href="#reviews"
                className="relative pb-1 after:content-[''] after:absolute after:w-0 after:h-[2px] after:bg-green-500 after:left-0 after:bottom-0 after:transition-all after:duration-300 hover:after:w-full"
                onClick={() => handleNavLinkClick("about")}>Reviews</Link>
            </li>
            <li>
              <Link href="#whats-include"
                className="relative pb-1 after:content-[''] after:absolute after:w-0 after:h-[2px] after:bg-green-500 after:left-0 after:bottom-0 after:transition-all after:duration-300 hover:after:w-full"
                onClick={() => handleNavLinkClick("services")}>What’s included</Link>
            </li>
            <li>
              <Link href="#program-details"
                className="relative pb-1 after:content-[''] after:absolute after:w-0 after:h-[2px] after:bg-green-500 after:left-0 after:bottom-0 after:transition-all after:duration-300 hover:after:w-full"
                onClick={() => handleNavLinkClick("blogs")}>program details</Link>
            </li>
            <li>
              {/* <Link href="#contact" onClick={() => handleNavLinkClick("contact")}>Contact</Link> */}
            </li>
          </ul>
          <div className="w-full px-6 mt-4">
            <Link
              href="https://forms.gle/nqDF4TBXLnRYuuFRA"
              className="block anton tracking-wider  w-full text-center px-6 py-3 rounded-md border border-white text-white font-medium uppercase 
               transition-all duration-300 ease-in-out 
               transform hover:scale-110 hover:-rotate-2 
               hover:backdrop-blur-md hover:bg-white/10"
            >
              Apply Now
            </Link>
          </div>

        </div>
      </nav>

      <HeroSection
        id="home"
        className="pt-[50px] lg:pt-[75px] mx-auto  md:px-10 "
      />
      <AboutSection id="about-me"
        className=" " />
      <ReviewsSection id="reviews"  />
      <IncludeSection id="whats-include"  />
      <ProgramSummarySection id="program-details" />
      <PriceSection/>
      <FAQSection/>
      <CTASection/>
      <Footer/>
    </div>
  )
}
