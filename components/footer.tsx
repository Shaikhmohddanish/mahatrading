import Link from "next/link"
import Image from "next/image"
import { Phone, Mail, MapPin, MessageCircle } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-green-600 text-white pt-12 pb-6">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Link href="/" className="inline-block">
              <Image src="/mahatradings-logo.png" alt="Maha Tradings" width={180} height={50} className="h-12 w-auto" />
            </Link>
            <p className="text-sm">
              ODR Portal (Securities Market Approach for Resolution through ODR Portal) can be accessed via the
              following link- https://smartodr.in/
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/standard-dos-donts" className="text-sm hover:underline">
                  Standard Do's & Don'ts
                </Link>
              </li>
              <li>
                <Link href="/refund-policy" className="text-sm hover:underline">
                  Refund Policy
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy" className="text-sm hover:underline">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms-conditions" className="text-sm hover:underline">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link href="/user-consent" className="text-sm hover:underline">
                  User Consent
                </Link>
              </li>
              <li>
                <Link href="/legal-disclaimer" className="text-sm hover:underline">
                  Legal Disclaimer
                </Link>
              </li>
              <li>
                <Link href="/ad-disclaimer" className="text-sm hover:underline">
                  AD Disclaimer
                </Link>
              </li>
              <li>
                <Link href="/grievance-redressal" className="text-sm hover:underline">
                  Grievance Redressal Process
                </Link>
              </li>
              <li>
                <Link href="/investor-charter" className="text-sm hover:underline">
                  Investor Charter
                </Link>
              </li>
              <li>
                <Link href="/talk-to-us" className="text-sm hover:underline">
                  Talk To Us
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Packages</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/packages/equity" className="text-sm hover:underline">
                  Research Alerts Package (Equity)
                </Link>
              </li>
              <li>
                <Link href="/packages/equity" className="text-sm hover:underline">
                  Research Alerts Package (Equity Plus)
                </Link>
              </li>
              <li>
                <Link href="/packages/options" className="text-sm hover:underline">
                  Research Alerts Package (Index Option)
                </Link>
              </li>
              <li>
                <Link href="/packages/options" className="text-sm hover:underline">
                  Research Alerts Package (Index Option Plus)
                </Link>
              </li>
              <li>
                <Link href="/packages/options" className="text-sm hover:underline">
                  Research Alerts Package (Index Option Combo)
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <Phone className="h-5 w-5 mr-2 mt-0.5" />
                <div>
                  <p className="font-medium">7738420349</p>
                  <p className="text-xs">Mon-Fri : 09:00 AM - 06:00 PM</p>
                  <p className="text-xs">Sat & Sun - Closed</p>
                </div>
              </li>
              <li className="flex items-start">
                <Mail className="h-5 w-5 mr-2 mt-0.5" />
                <div>
                  <p className="font-medium">info@mahatradings.com</p>
                  <p className="text-xs">Customer support</p>
                </div>
              </li>
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-2 mt-0.5" />
                <div>
                  <p className="font-medium">Kopar Khairane, Navi Mumbai – 400709</p>
                  <p className="text-xs">Main office location</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/20 mt-8 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm">Maha Tradings</p>
          <p className="text-sm mt-2 md:mt-0">© Copyright 2025, All Rights Reserved by Maha Tradings.</p>
        </div>
      </div>
      {/* Floating Action Buttons */}
      <div className="fixed bottom-6 left-0 right-0 flex justify-between px-4 z-50 pointer-events-none">
        {/* Phone Button */}
        <a
          href="tel:+917738420349"
          className="bg-blue-600 hover:bg-blue-700 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 pointer-events-auto"
          aria-label="Call us"
        >
          <Phone className="h-6 w-6" />
        </a>

        {/* WhatsApp Button */}
        <a
          href="https://wa.me/917738420349?text=Hi%20Maha%20Tradings,%20I%20would%20like%20to%20know%20more%20about%20your%20trading%20research%20services."
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 pointer-events-auto"
          aria-label="Chat on WhatsApp"
        >
          <MessageCircle className="h-6 w-6" />
        </a>
      </div>
    </footer>
  )
}
