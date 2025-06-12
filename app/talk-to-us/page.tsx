"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Phone, Mail, MapPin, Clock, MessageCircle, Send } from "lucide-react"
import ScrollAnimation from "@/components/scroll-animation"

export default function TalkToUsPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log("Form submitted:", formData)
    // You can add actual form submission logic here
  }

  return (
    <div className="flex flex-col min-h-screen">
      <div className="container mx-auto px-4 md:px-6 py-12">
        <div className="max-w-6xl mx-auto">
          {/* Header Section */}
          <ScrollAnimation direction="right">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Talk To Us</h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Have questions about our services? Need help with your trading journey? We're here to help! Get in touch
                with our expert team for personalized assistance.
              </p>
            </div>
          </ScrollAnimation>

          <ScrollAnimation direction="left">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <Card className="shadow-xl border-0">
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <MessageCircle className="h-8 w-8 text-green-600 mr-3" />
                    <h2 className="text-2xl font-bold">Send us a Message</h2>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                          Full Name *
                        </label>
                        <Input
                          id="name"
                          name="name"
                          type="text"
                          required
                          value={formData.name}
                          onChange={handleInputChange}
                          className="w-full"
                          placeholder="Enter your full name"
                        />
                      </div>
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                          Phone Number *
                        </label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="w-full"
                          placeholder="Enter your phone number"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full"
                        placeholder="Enter your email address"
                      />
                    </div>

                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                        Subject *
                      </label>
                      <Input
                        id="subject"
                        name="subject"
                        type="text"
                        required
                        value={formData.subject}
                        onChange={handleInputChange}
                        className="w-full"
                        placeholder="What is this regarding?"
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                        Message *
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        required
                        value={formData.message}
                        onChange={handleInputChange}
                        className="w-full min-h-[120px]"
                        placeholder="Tell us how we can help you..."
                      />
                    </div>

                    <Button
                      type="submit"
                      className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white py-3 text-lg font-semibold rounded-xl transition-all duration-300 hover:shadow-xl transform hover:scale-105"
                    >
                      <Send className="h-5 w-5 mr-2" />
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>

              {/* Contact Information */}
              <div className="space-y-8">
                {/* Contact Details */}
                <Card className="shadow-xl border-0">
                  <CardContent className="p-8">
                    <h2 className="text-2xl font-bold mb-6">Get in Touch</h2>
                    <div className="space-y-6">
                      <div className="flex items-start">
                        <Phone className="h-6 w-6 text-green-600 mr-4 mt-1" />
                        <div>
                          <h3 className="font-semibold text-lg">Phone</h3>
                          <p className="text-gray-600">Call us for immediate assistance</p>
                          <a href="tel:8108556625" className="text-green-600 hover:underline font-semibold text-lg">
                            8108556625
                          </a>
                        </div>
                      </div>

                      <div className="flex items-start">
                        <Mail className="h-6 w-6 text-green-600 mr-4 mt-1" />
                        <div>
                          <h3 className="font-semibold text-lg">Email</h3>
                          <p className="text-gray-600">Send us an email anytime</p>
                          <a
                            href="mailto:compliance@capital-grow.com"
                            className="text-green-600 hover:underline font-semibold"
                          >
                            compliance@capital-grow.com
                          </a>
                        </div>
                      </div>

                      <div className="flex items-start">
                        <MapPin className="h-6 w-6 text-green-600 mr-4 mt-1" />
                        <div>
                          <h3 className="font-semibold text-lg">Office Address</h3>
                          <p className="text-gray-600">Visit our main office</p>
                          <p className="font-semibold">Kopar Khairane, Navi Mumbai, 400709</p>
                        </div>
                      </div>

                      <div className="flex items-start">
                        <Clock className="h-6 w-6 text-green-600 mr-4 mt-1" />
                        <div>
                          <h3 className="font-semibold text-lg">Business Hours</h3>
                          <p className="text-gray-600">Monday - Friday: 09:00 AM - 06:00 PM</p>
                          <p className="text-gray-600">Saturday & Sunday: Closed</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Quick Actions */}
                <Card className="shadow-xl border-0 bg-gradient-to-br from-green-50 to-blue-50">
                  <CardContent className="p-8">
                    <h2 className="text-2xl font-bold mb-6">Quick Actions</h2>
                    <div className="space-y-4">
                      <Button
                        className="w-full bg-green-600 hover:bg-green-700 text-white py-3 text-lg font-semibold rounded-xl"
                        onClick={() => window.open("tel:8108556625")}
                      >
                        <Phone className="h-5 w-5 mr-2" />
                        Call Now
                      </Button>

                      <Button
                        variant="outline"
                        className="w-full border-green-600 text-green-600 hover:bg-green-600 hover:text-white py-3 text-lg font-semibold rounded-xl"
                        onClick={() => window.open("mailto:compliance@capital-grow.com")}
                      >
                        <Mail className="h-5 w-5 mr-2" />
                        Send Email
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                {/* FAQ Section */}
                <Card className="shadow-xl border-0">
                  <CardContent className="p-8">
                    <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
                    <div className="space-y-4">
                      <div>
                        <h3 className="font-semibold text-lg mb-2">How quickly will I get a response?</h3>
                        <p className="text-gray-600">
                          We typically respond to all inquiries within 24 hours during business days.
                        </p>
                      </div>

                      <div>
                        <h3 className="font-semibold text-lg mb-2">What information should I include?</h3>
                        <p className="text-gray-600">
                          Please include your contact details and a detailed description of your inquiry for faster
                          assistance.
                        </p>
                      </div>

                      <div>
                        <h3 className="font-semibold text-lg mb-2">Can I schedule a consultation?</h3>
                        <p className="text-gray-600">
                          Yes! Contact us to schedule a free consultation with our expert team.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </ScrollAnimation>

          {/* Additional Information */}
          <ScrollAnimation direction="right">
            <Card className="mt-12 bg-gradient-to-r from-blue-600 to-green-600 text-white">
              <CardContent className="p-8 text-center">
                <h2 className="text-3xl font-bold mb-4">Ready to Start Your Trading Journey?</h2>
                <p className="text-xl mb-6 opacity-90">
                  Join thousands of successful traders who trust Capital Grow for expert market insights and research
                  alerts.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button
                    className="bg-white text-green-600 hover:bg-gray-100 py-3 px-8 text-lg font-semibold rounded-xl"
                    onClick={() => (window.location.href = "/packages/equity")}
                  >
                    View Equity Packages
                  </Button>
                  <Button
                    variant="outline"
                    className="border-white text-white hover:bg-white hover:text-green-600 py-3 px-8 text-lg font-semibold rounded-xl"
                    onClick={() => (window.location.href = "/packages/options")}
                  >
                    View Options Packages
                  </Button>
                </div>
              </CardContent>
            </Card>
          </ScrollAnimation>
        </div>
      </div>
    </div>
  )
}
