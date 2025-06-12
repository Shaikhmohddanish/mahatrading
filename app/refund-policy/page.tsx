"use client"

import { Card, CardContent } from "@/components/ui/card"
import { AlertTriangle, XCircle, Info, Shield, FileText, Phone } from "lucide-react"
import ScrollAnimation from "@/components/scroll-animation"

export default function RefundPolicyPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="container mx-auto px-4 md:px-6 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Header Section */}
          <ScrollAnimation direction="right">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Refund Policy</h1>
              <p className="text-lg text-gray-600 leading-relaxed">
                At Capital-Grow, we prioritize delivering the best possible services to our clients, but it's important
                to note that we do not offer any guaranteed returns on stock market research calls. As a result, no
                refunds will be provided on any of our subscription packages, regardless of individual performance or
                outcomes.
              </p>
            </div>
          </ScrollAnimation>

          {/* No Cancellation or Refund Section */}
          <ScrollAnimation direction="left">
            <Card className="mb-8 shadow-lg border-red-200 bg-red-50">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <XCircle className="h-8 w-8 text-red-600 mr-3" />
                  <h2 className="text-3xl font-bold text-red-700">No Cancellation or Refund</h2>
                </div>
                <div className="space-y-4">
                  <p className="text-lg text-gray-700 leading-relaxed">
                    Once you subscribe to any of Capital-Grow's research services and make the corresponding payment,
                    the service cannot be canceled or refunded under any circumstances. We strongly encourage our
                    clients to thoroughly evaluate our services before making any payment decisions.
                  </p>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    If, for any reason, you are not satisfied with our research alerts or services, you are welcome to
                    contact our team for support. We will work diligently to address your concerns and improve your
                    satisfaction. However, we must emphasize that requests for refunds or cancellations of services will
                    not be entertained, as all clients are made aware of the risks associated with trading and investing
                    prior to subscribing to our services.
                  </p>
                </div>
              </CardContent>
            </Card>
          </ScrollAnimation>

          {/* What You Should Know Section */}
          <ScrollAnimation direction="right">
            <Card className="mb-8 shadow-lg border-blue-200">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <Info className="h-8 w-8 text-blue-600 mr-3" />
                  <h2 className="text-3xl font-bold text-blue-700">What You Should Know Before Subscribing</h2>
                </div>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Before making any payments, we strongly recommend that all visitors and potential clients:
                </p>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mr-4 mt-1">
                      <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center">
                        <FileText className="h-4 w-4 text-white" />
                      </div>
                    </div>
                    <p className="text-gray-700 leading-relaxed">
                      Carefully review all information regarding our research services, stock market alerts, and the
                      customer support we provide.
                    </p>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 mr-4 mt-1">
                      <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center">
                        <Shield className="h-4 w-4 text-white" />
                      </div>
                    </div>
                    <p className="text-gray-700 leading-relaxed">
                      Familiarize yourself with our Terms and Conditions, Privacy Policy, and Refund Policy to
                      understand our policies thoroughly.
                    </p>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 mr-4 mt-1">
                      <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center">
                        <AlertTriangle className="h-4 w-4 text-white" />
                      </div>
                    </div>
                    <p className="text-gray-700 leading-relaxed">
                      Be aware that no refunds are possible under any circumstances.
                    </p>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 mr-4 mt-1">
                      <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center">
                        <FileText className="h-4 w-4 text-white" />
                      </div>
                    </div>
                    <p className="text-gray-700 leading-relaxed">
                      By subscribing, you agree to all terms and conditions, disclaimers, and the non-refundability of
                      payments.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </ScrollAnimation>

          {/* Transparency and Risk Awareness Section */}
          <ScrollAnimation direction="left">
            <Card className="mb-8 shadow-lg border-orange-200 bg-orange-50">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <Shield className="h-8 w-8 text-orange-600 mr-3" />
                  <h2 className="text-3xl font-bold text-orange-700">Transparency and Risk Awareness</h2>
                </div>
                <div className="space-y-4">
                  <p className="text-lg text-gray-700 leading-relaxed">
                    At Capital-Grow, we believe in full transparency. We consistently communicate the inherent risks
                    involved in stock market trading and the possibility of capital loss. Therefore, clients should only
                    subscribe after fully understanding these risks.
                  </p>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    If you have any questions or concerns, feel free to reach out to our customer support team at{" "}
                    <a href="mailto:info@capital-grow.com" className="text-blue-600 hover:underline font-semibold">
                      info@capital-grow.com
                    </a>{" "}
                    for clarification before making any payment.
                  </p>
                </div>
              </CardContent>
            </Card>
          </ScrollAnimation>

          {/* Important Notice */}
          <ScrollAnimation direction="right">
            <Card className="mb-8 shadow-lg bg-gradient-to-br from-red-100 to-orange-100 border-2 border-red-300">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <AlertTriangle className="h-10 w-10 text-red-600 mr-4" />
                  <h2 className="text-3xl font-bold text-red-700">Important Notice</h2>
                </div>
                <div className="bg-white p-6 rounded-lg border-l-4 border-red-500">
                  <p className="text-lg font-semibold text-gray-800 mb-4">
                    Please read this policy carefully before subscribing to any of our services.
                  </p>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <span className="text-red-500 mr-2">•</span>
                      All payments are final and non-refundable
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-500 mr-2">•</span>
                      No cancellations are allowed after payment
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-500 mr-2">•</span>
                      Stock market investments carry inherent risks
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-500 mr-2">•</span>
                      No guaranteed returns are promised
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </ScrollAnimation>

          {/* Contact Information */}
          <ScrollAnimation direction="left">
            <Card className="shadow-lg bg-gradient-to-r from-green-600 to-blue-600 text-white">
              <CardContent className="p-8 text-center">
                <div className="flex items-center justify-center mb-4">
                  <Phone className="h-8 w-8 mr-3" />
                  <h2 className="text-3xl font-bold">Need Clarification?</h2>
                </div>
                <p className="text-xl mb-6 opacity-90">
                  Contact our customer support team before making any payment decisions
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="mailto:info@capital-grow.com"
                    className="bg-white text-green-600 hover:bg-gray-100 py-3 px-8 text-lg font-semibold rounded-xl transition-all duration-300 inline-block"
                  >
                    Email: info@capital-grow.com
                  </a>
                  <a
                    href="tel:8108556625"
                    className="border-2 border-white text-white hover:bg-white hover:text-green-600 py-3 px-8 text-lg font-semibold rounded-xl transition-all duration-300 inline-block"
                  >
                    Call: 8108556625
                  </a>
                </div>
              </CardContent>
            </Card>
          </ScrollAnimation>
        </div>
      </div>
    </div>
  )
}
