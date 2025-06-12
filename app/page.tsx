"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import ScrollAnimation from "@/components/scroll-animation"
import { Lightbulb, BarChart3, Clock } from "lucide-react"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="py-12 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
            <ScrollAnimation direction="right">
              <div className="space-y-4">
                <h1 className="text-4xl md:text-6xl font-bold tracking-tighter">
                  Join Us for Expert Share Market Trading Insights
                </h1>
                <p className="text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Keep track of every trade with Capital-Grow, where transparency and security are our top priorities.
                  Rest assured that your funds are protected from loss and manipulation with our state-of-the-art
                  security measures.
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Button className="bg-green-600 hover:bg-green-700">JOIN US NOW</Button>
                </div>
              </div>
            </ScrollAnimation>
            <ScrollAnimation direction="left">
              <div className="flex justify-center">
                <div className="animate-float">
                  <Image
                    src="/banner-image.png"
                    alt="Trading Insights"
                    width={500}
                    height={500}
                    className="max-w-full h-auto"
                  />
                </div>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* What Will You Gain Section */}
      <section className="py-12 md:py-24 bg-gray-50">
        <div className="container px-4 md:px-6">
          <ScrollAnimation direction="right">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">What Will You Gain?</h2>
          </ScrollAnimation>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <ScrollAnimation direction="right">
              <Card className="border-none shadow-lg">
                <CardContent className="p-6 text-center space-y-4">
                  <div className="flex justify-center">
                    <Lightbulb className="h-12 w-12 text-teal-500" />
                  </div>
                  <h3 className="text-xl font-bold">Intraday alerts</h3>
                  <p className="text-gray-500">
                    Receive 1-3 high-quality intraday trading signals in both Equity and Options markets, customized for
                    precision.
                  </p>
                </CardContent>
              </Card>
            </ScrollAnimation>
            <ScrollAnimation direction="left">
              <Card className="border-none shadow-lg">
                <CardContent className="p-6 text-center space-y-4">
                  <div className="flex justify-center">
                    <BarChart3 className="h-12 w-12 text-teal-500" />
                  </div>
                  <h3 className="text-xl font-bold">Researched Trade Opportunities</h3>
                  <p className="text-gray-500">
                    Our expert team provides well-researched trade alerts, leveraging advanced tools, market indicators,
                    and years of trading experience.
                  </p>
                </CardContent>
              </Card>
            </ScrollAnimation>
            <ScrollAnimation direction="right">
              <Card className="border-none shadow-lg">
                <CardContent className="p-6 text-center space-y-4">
                  <div className="flex justify-center">
                    <Clock className="h-12 w-12 text-teal-500" />
                  </div>
                  <h3 className="text-xl font-bold">Timely Market Updates</h3>
                  <p className="text-gray-500">
                    Stay updated with timely market insights, delivered directly to your mobile through our dedicated
                    app, ensuring you're never behind on critical moves.
                  </p>
                </CardContent>
              </Card>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-12 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
            <ScrollAnimation direction="right">
              <div className="flex justify-center">
                <Image
                  src="/why-choose-us.webp"
                  alt="Why Choose Us"
                  width={400}
                  height={400}
                  className="max-w-full h-auto"
                />
              </div>
            </ScrollAnimation>
            <ScrollAnimation direction="left">
              <div className="space-y-4">
                <h2 className="text-3xl md:text-4xl font-bold tracking-tighter">Why Choose Us?</h2>
                <p className="text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Welcome to <span className="font-semibold">Capital-Grow</span>, your trusted partner in share market
                  research and analysis. At Capital-Grow, we are dedicated to providing top-notch, data-driven insights
                  through advanced tools and methodologies. Our expert team leverages deep industry experience to
                  deliver precise and actionable recommendations, ensuring you make informed investment decisions. We
                  prioritize accuracy over exaggeration, offering recommendations that align with your unique risk
                  profile and investment goals. Join the Capital-Grow community today and stay ahead in the market with
                  expert guidance tailored just for you.
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Button className="bg-green-600 hover:bg-green-700">JOIN US NOW</Button>
                </div>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Timing Your Investments Section */}
      <section className="py-12 md:py-24 bg-green-600 text-white">
        <div className="container px-4 md:px-6">
          <ScrollAnimation direction="right">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Timing Your Investments Just Right</h2>
          </ScrollAnimation>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <ScrollAnimation direction="right">
              <div className="space-y-4 text-center">
                <h3 className="text-xl font-bold">What is intraday trading?</h3>
                <p>
                  Intraday trading refers to buying and selling stocks within the same day to close all open positions
                  before the market closes. You can either buy first and sell or short-sell and repurchase before the
                  day's end for a balanced position.
                </p>
              </div>
            </ScrollAnimation>
            <ScrollAnimation direction="left">
              <div className="space-y-4 text-center">
                <h3 className="text-xl font-bold">Intraday Tips</h3>
                <p>
                  Intraday trading is day-based trading where traders open and close their position on the same day such
                  that the net position at the end of the day is zero.
                </p>
              </div>
            </ScrollAnimation>
            <ScrollAnimation direction="right">
              <div className="space-y-4 text-center">
                <h3 className="text-xl font-bold">Stop-Loss and Target</h3>
                <p>
                  Never trade without applying Stop-loss and Target provided by the research analyst because this may
                  lead to a loss of your complete capital.
                </p>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Stay Safe Section */}
      <section className="py-12 md:py-24">
        <div className="container px-4 md:px-6">
          <ScrollAnimation direction="right">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">Stay Safe from Phishing Scams</h2>
          </ScrollAnimation>
          <ScrollAnimation direction="left">
            <div className="max-w-3xl mx-auto space-y-4">
              <p className="text-lg">
                Dear Valued Customer, Greetings from <span className="font-semibold">Capital-Grow</span>!
              </p>
              <p>
                Your trust is our top priority, and we strive to deliver a secure and seamless experience with our
                services. To safeguard your interactions with us, please note that all official offers, promotions, and
                communications related to sales and discounts from <span className="font-semibold">Capital-Grow</span>{" "}
                will be sent only through our verified email address:{" "}
                <a href="mailto:sales@capital-grow.com" className="text-green-600 hover:underline">
                  sales@capital-grow.com
                </a>
                .
              </p>
              <p>
                We've recently been alerted to the possibility of unauthorized entities imitating our communication
                channels for fraudulent purposes. To protect yourself from phishing scams or other deceptive activities,
                be vigilant and only engage with emails sent from the official email address:{" "}
                <a href="mailto:sales@capital-grow.com" className="text-green-600 hover:underline">
                  sales@capital-grow.com
                </a>
                .
              </p>
              <p>
                If you suspect any suspicious activity or need to verify the authenticity of a message, do not hesitate
                to contact our customer support team at{" "}
                <a href="tel:8108556625" className="text-green-600 hover:underline">
                  8108556625
                </a>{" "}
                or via email at{" "}
                <a href="mailto:compliance@capital-grow.com" className="text-green-600 hover:underline">
                  compliance@capital-grow.com
                </a>
                .
              </p>
              <p>
                Thank you for your attention and continued trust in <span className="font-semibold">Capital-Grow</span>.
              </p>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* Request a Free Consultation */}
      <section className="py-12 md:py-24 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
            <ScrollAnimation direction="right">
              <div className="space-y-4">
                <h2 className="text-3xl md:text-4xl font-bold tracking-tighter">Request a Free Consultation</h2>
                <p className="text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Take advantage of a free consultation with the expert team at{" "}
                  <span className="font-semibold">Capital-Grow</span>! Receive personalized, professional support
                  tailored to your unique financial and trading needs. Our dedicated advisors are here to guide you
                  every step of the way, helping you make informed decisions and navigate the share market with
                  confidence. Don't miss this opportunity for expert guidance—schedule your consultation today!
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Button className="bg-green-600 hover:bg-green-700">REQUEST A FREE CONSULTATION</Button>
                </div>
              </div>
            </ScrollAnimation>
            <ScrollAnimation direction="left">
              <div className="flex justify-center">
                <Image
                  src="/consultation.webp"
                  alt="Free Consultation"
                  width={400}
                  height={400}
                  className="max-w-full h-auto"
                />
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>
    </div>
  )
}
