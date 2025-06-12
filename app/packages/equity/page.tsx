"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Check, Star, Crown } from "lucide-react"
import ScrollAnimation from "@/components/scroll-animation"

export default function EquityPackagesPage() {
  const [activeTab, setActiveTab] = useState("equity")

  const equityPackages = [
    {
      id: "equity-standard",
      title: "Equity",
      subtitle: "Standard",
      originalPrice: "₹50,000",
      currentPrice: "₹35,000",
      badge: "POPULAR",
      badgeColor: "bg-blue-500",
      features: [
        "Get Positional Equity alerts",
        "Get well-researched targets and stop-loss on every research alert",
        "Live Market customer support is available to all members",
        "Risk Level — High to Very High",
      ],
      isPopular: true,
    },
    {
      id: "equity-premium",
      title: "Equity",
      subtitle: "Premium",
      originalPrice: "₹95,000",
      currentPrice: "₹55,000",
      badge: "BEST VALUE",
      badgeColor: "bg-green-500",
      features: [
        "Get Positional Equity alerts",
        "Get well-researched targets and stop-loss on every research alert",
        "Live Market customer support is available to all members",
        "Risk Level — High to Very High",
      ],
      isPopular: false,
    },
  ]

  const equityPlusPackages = [
    {
      id: "equity-plus-standard",
      title: "Equity Plus",
      subtitle: "Standard",
      originalPrice: "₹1,00,000",
      currentPrice: "₹85,000",
      badge: "ADVANCED",
      badgeColor: "bg-purple-500",
      features: [
        "Get Positional Equity alerts",
        "Get premium research alerts in top stocks",
        "Get well-researched targets and stop-loss on every research alert",
        "Live Market customer support is available to all members",
        "Risk Level — High to Very High",
      ],
      isPopular: false,
    },
    {
      id: "equity-plus-premium",
      title: "Equity Plus",
      subtitle: "Premium",
      originalPrice: "₹3,40,000",
      currentPrice: "₹3,10,000",
      badge: "PREMIUM",
      badgeColor: "bg-gradient-to-r from-yellow-400 to-orange-500",
      features: [
        "Get Positional Equity alerts",
        "Get premium research alerts in top stocks",
        "Get well-researched targets and stop-loss on every research alert",
        "Live Market customer support is available to all members",
        "Risk Level — High to Very High",
      ],
      isPopular: true,
    },
  ]

  const currentPackages = activeTab === "equity" ? equityPackages : equityPlusPackages

  return (
    <div className="flex flex-col min-h-screen">
      <div className="container mx-auto px-4 md:px-6 py-12">
        <div className="max-w-6xl mx-auto">
          <ScrollAnimation direction="right">
            <h1 className="text-4xl md:text-5xl font-bold text-center mb-12">Equity Packages</h1>
          </ScrollAnimation>

          {/* Tab Navigation */}
          <ScrollAnimation direction="left">
            <div className="flex justify-center mb-12">
              <div className="bg-gray-100 p-1 rounded-xl inline-flex">
                <button
                  onClick={() => setActiveTab("equity")}
                  className={`px-8 py-3 rounded-lg font-semibold transition-all duration-300 ${
                    activeTab === "equity" ? "bg-white text-green-600 shadow-md" : "text-gray-600 hover:text-gray-800"
                  }`}
                >
                  Equity
                </button>
                <button
                  onClick={() => setActiveTab("equity-plus")}
                  className={`px-8 py-3 rounded-lg font-semibold transition-all duration-300 ${
                    activeTab === "equity-plus"
                      ? "bg-white text-green-600 shadow-md"
                      : "text-gray-600 hover:text-gray-800"
                  }`}
                >
                  Equity Plus
                </button>
              </div>
            </div>
          </ScrollAnimation>

          {/* Package Cards */}
          <ScrollAnimation direction="right">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
              {currentPackages.map((pkg, index) => (
                <Card
                  key={pkg.id}
                  className={`relative overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 ${
                    pkg.isPopular
                      ? "border-2 border-green-500 shadow-xl scale-105"
                      : "border border-gray-200 hover:border-green-300"
                  }`}
                >
                  {/* Badge */}
                  <div className={`absolute top-0 right-0 ${pkg.badgeColor} text-white px-4 py-2 text-sm font-bold`}>
                    {pkg.badge}
                  </div>

                  <CardContent className="p-0">
                    {/* Header */}
                    <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-8 text-center relative">
                      {pkg.isPopular && (
                        <div className="absolute top-4 left-4">
                          <Crown className="h-6 w-6 text-yellow-300" />
                        </div>
                      )}
                      <h2 className="text-2xl font-bold mb-2">{pkg.title}</h2>
                      <div className="text-blue-100">{pkg.subtitle}</div>
                    </div>

                    {/* Pricing */}
                    <div className="text-center py-8 bg-gradient-to-b from-gray-50 to-white">
                      <div className="mb-4">
                        <span className="text-gray-500 line-through text-lg">{pkg.originalPrice}</span>
                      </div>
                      <div className="text-5xl font-bold text-gray-900 mb-2">{pkg.currentPrice}</div>
                      <div className="text-gray-600 font-medium">{pkg.subtitle}</div>
                      <div className="mt-4">
                        <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold">
                          Save{" "}
                          {Math.round(
                            ((Number.parseInt(pkg.originalPrice.replace(/[₹,]/g, "")) -
                              Number.parseInt(pkg.currentPrice.replace(/[₹,]/g, ""))) /
                              Number.parseInt(pkg.originalPrice.replace(/[₹,]/g, ""))) *
                              100,
                          )}
                          %
                        </span>
                      </div>
                    </div>

                    {/* Features */}
                    <div className="px-8 pb-8">
                      <div className="space-y-4 mb-8">
                        {pkg.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-start">
                            <div className="flex-shrink-0 mr-3 mt-1">
                              <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
                                <Check className="h-3 w-3 text-white" />
                              </div>
                            </div>
                            <span className="text-gray-700 leading-relaxed">{feature}</span>
                          </div>
                        ))}
                      </div>

                      {/* CTA Button */}
                      <Button
                        className={`w-full py-4 text-lg font-semibold rounded-xl transition-all duration-300 ${
                          pkg.isPopular
                            ? "bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 shadow-lg"
                            : "bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700"
                        } text-white hover:shadow-xl transform hover:scale-105`}
                      >
                        {pkg.isPopular && <Star className="h-5 w-5 mr-2" />}
                        GET STARTED
                      </Button>

                      <p className="text-xs text-gray-500 mt-4 text-center">*All Prices are inclusive of GST</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </ScrollAnimation>

          {/* Phishing Scams Warning Section */}
          <ScrollAnimation direction="left">
            <Card className="bg-gradient-to-br from-red-50 to-orange-50 border-2 border-red-200 shadow-lg">
              <CardContent className="p-8">
                <div className="text-center mb-6">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-red-100 rounded-full mb-4">
                    <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z"
                      />
                    </svg>
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                    Protect Yourself from Phishing Scams
                  </h2>
                </div>
                <div className="max-w-4xl mx-auto space-y-6 text-lg leading-relaxed text-gray-700">
                  <p className="text-xl font-semibold text-center text-gray-900">
                    Dear Customer, Greetings from Capital Grow!!!
                  </p>
                  <p>
                    We value your trust and want to ensure that you have the best possible experience with our services.
                    Please be informed that all our offers, promotions, discounts, and sales-related email
                    communications from Capital Grow will only be sent from the email address:{" "}
                    <a href="mailto:sales@capital-grow.com" className="text-blue-600 hover:underline font-semibold">
                      sales@capital-grow.com
                    </a>
                    .
                  </p>
                  <p>
                    It has come to our attention that unauthorized entities may attempt to imitate our communication
                    channels for malicious purposes. To protect yourself from potential phishing scams or fraudulent
                    activities, please be cautious and only respond to emails originating from the specified official
                    email address:{" "}
                    <a href="mailto:sales@capital-grow.com" className="text-blue-600 hover:underline font-semibold">
                      sales@capital-grow.com
                    </a>
                    .
                  </p>
                  <p>
                    If you have any doubts or concerns about the authenticity of an email, please reach out to our
                    customer support number{" "}
                    <a href="tel:8108556625" className="text-blue-600 hover:underline font-semibold">
                      8108556625
                    </a>{" "}
                    or email us at{" "}
                    <a
                      href="mailto:compliance@capital-grow.com"
                      className="text-blue-600 hover:underline font-semibold"
                    >
                      compliance@capital-grow.com
                    </a>
                    .
                  </p>
                  <p className="text-xl font-semibold text-center text-gray-900">
                    Thank you for your understanding and cooperation.
                  </p>
                </div>
              </CardContent>
            </Card>
          </ScrollAnimation>
        </div>
      </div>
    </div>
  )
}
