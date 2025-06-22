"use client"

import { useState, useEffect, useRef } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Phone, Mail, MapPin, Clock, MessageCircle, Send, CheckCircle, AlertCircle } from "lucide-react"
import ScrollAnimation from "@/components/scroll-animation"

// Form validation schema
const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  phone: z.string().min(8, { message: "Please enter a valid phone number" }),
  subject: z.string().min(5, { message: "Subject must be at least 5 characters" }),
  message: z.string().min(10, { message: "Message must be at least 10 characters" }),
})

type FormValues = z.infer<typeof formSchema>

export default function TalkToUsPage() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")
  const [showLoader, setShowLoader] = useState(false)
  const popupRef = useRef<HTMLDivElement | null>(null)

  // Initialize form
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    },
  })

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  // Handle form submission
  const onSubmit = async (data: FormValues) => {
    setIsSubmitting(true)
    setShowLoader(true)
    try {
      const response = await fetch("/api/contact-proxy", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      })
      if (!response.ok) throw new Error("Network response was not ok")
      setSubmitStatus("success")
      form.reset()
    } catch (error) {
      setSubmitStatus("error")
    } finally {
      setIsSubmitting(false)
      setShowLoader(false)
    }
  }

  // Reset status after 5 seconds
  useEffect(() => {
    if (submitStatus !== "idle") {
      const timer = setTimeout(() => {
        setSubmitStatus("idle")
      }, 5000)
      return () => clearTimeout(timer)
    }
  }, [submitStatus])

  return (
    <div className="flex flex-col min-h-screen">
      {showLoader && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60">
          <div className="bg-white rounded-full p-6 shadow-lg animate-spin">
            <svg className="h-10 w-10 text-green-600" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
          </div>
        </div>
      )}
      {(submitStatus === "success" || submitStatus === "error") && (
        <div
          ref={popupRef}
          className={`fixed top-8 left-1/2 z-50 -translate-x-1/2 px-6 py-4 rounded-xl shadow-2xl flex items-center gap-4 transition-all duration-300
            ${submitStatus === "success" ? "bg-green-500/95 text-white border-2 border-green-700" : "bg-red-500/95 text-white border-2 border-red-700"}
          `}
          role="alert"
          style={{ minWidth: 320, maxWidth: 400 }}
        >
          {submitStatus === "success" ? (
            <>
              <CheckCircle className="h-6 w-6 text-white" />
              <span className="font-semibold">Message sent successfully! We'll get back to you soon.</span>
            </>
          ) : (
            <>
              <AlertCircle className="h-6 w-6 text-white" />
              <span className="font-semibold">There was an error sending your message. Please try again.</span>
            </>
          )}
          <button
            className="ml-auto text-white/80 hover:text-white focus:outline-none text-2xl px-2"
            onClick={() => setSubmitStatus("idle")}
            aria-label="Dismiss"
            style={{ lineHeight: 1 }}
          >
            ×
          </button>
        </div>
      )}
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
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                          Full Name *
                        </label>
                        <Input
                          id="name"
                          {...form.register("name")}
                          type="text"
                          className="w-full"
                          placeholder="Enter your full name"
                        />
                        {form.formState.errors.name && (
                          <p className="text-red-600 text-xs mt-1">{form.formState.errors.name.message as string}</p>
                        )}
                      </div>
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                          Phone Number *
                        </label>
                        <Input
                          id="phone"
                          {...form.register("phone")}
                          type="tel"
                          className="w-full"
                          placeholder="Enter your phone number"
                        />
                        {form.formState.errors.phone && (
                          <p className="text-red-600 text-xs mt-1">{form.formState.errors.phone.message as string}</p>
                        )}
                      </div>
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <Input
                        id="email"
                        {...form.register("email")}
                        type="email"
                        className="w-full"
                        placeholder="Enter your email address"
                      />
                      {form.formState.errors.email && (
                        <p className="text-red-600 text-xs mt-1">{form.formState.errors.email.message as string}</p>
                      )}
                    </div>
                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                        Subject *
                      </label>
                      <Input
                        id="subject"
                        {...form.register("subject")}
                        type="text"
                        className="w-full"
                        placeholder="What is this regarding?"
                      />
                      {form.formState.errors.subject && (
                        <p className="text-red-600 text-xs mt-1">{form.formState.errors.subject.message as string}</p>
                      )}
                    </div>
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                        Message *
                      </label>
                      <Textarea
                        id="message"
                        {...form.register("message")}
                        className="w-full min-h-[120px]"
                        placeholder="Tell us how we can help you..."
                      />
                      {form.formState.errors.message && (
                        <p className="text-red-600 text-xs mt-1">{form.formState.errors.message.message as string}</p>
                      )}
                    </div>
                    <Button
                      type="submit"
                      className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white py-3 text-lg font-semibold rounded-xl transition-all duration-300 hover:shadow-xl transform hover:scale-105"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <span className="flex items-center">
                          <svg
                            className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                          >
                            <circle
                              className="opacity-25"
                              cx="12"
                              cy="12"
                              r="10"
                              stroke="currentColor"
                              strokeWidth="4"
                            ></circle>
                            <path
                              className="opacity-75"
                              fill="currentColor"
                              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                            ></path>
                          </svg>
                          Sending...
                        </span>
                      ) : (
                        <>
                          <Send className="h-5 w-5 mr-2" />
                          Send Message
                        </>
                      )}
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
                          <a href="tel:7738420349" className="text-green-600 hover:underline font-semibold text-lg">
                            7738420349
                          </a>
                        </div>
                      </div>

                      <div className="flex items-start">
                        <Mail className="h-6 w-6 text-green-600 mr-4 mt-1" />
                        <div>
                          <h3 className="font-semibold text-lg">Email</h3>
                          <p className="text-gray-600">Send us an email anytime</p>
                          <a
                            href="mailto:info@mahatradings.com"
                            className="text-green-600 hover:underline font-semibold"
                          >
                            info@mahatradings.com
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
                        onClick={() => window.open("tel:7738420349")}
                      >
                        <Phone className="h-5 w-5 mr-2" />
                        Call Now
                      </Button>

                      <Button
                        variant="outline"
                        className="w-full border-green-600 text-green-600 hover:bg-green-600 hover:text-white py-3 text-lg font-semibold rounded-xl"
                        onClick={() => window.open("mailto:info@mahatradings.com")}
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
                  Join thousands of successful traders who trust Maha Tradings for expert market insights and research
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
                    className="border-white text-green-600 hover:bg-white hover:text-green-600 py-3 px-8 text-lg font-semibold rounded-xl"
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
