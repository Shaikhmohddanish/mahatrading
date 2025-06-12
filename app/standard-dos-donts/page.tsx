"use client"

import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, XCircle, Shield, Smartphone, TrendingUp, AlertTriangle } from "lucide-react"
import ScrollAnimation from "@/components/scroll-animation"

export default function StandardDosDontsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="container mx-auto px-4 md:px-6 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Header Section */}
          <ScrollAnimation direction="right">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Standard Do's & Don'ts</h1>
              <h2 className="text-2xl md:text-3xl font-semibold text-gray-700 mb-6">
                Essential Do's & Don'ts for Smart Trading and Investing
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                Before embarking on your stock market journey using Capital Grow's research alerts and reports, it's
                crucial to follow best practices for maximizing success and minimizing risk in trading and investing.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                The stock market is inherently uncertain and volatile, and to navigate this environment effectively, we
                recommend these essential Do's and Don'ts:
              </p>
            </div>
          </ScrollAnimation>

          {/* Do's Section */}
          <ScrollAnimation direction="left">
            <Card className="mb-12 shadow-lg border-green-200">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <CheckCircle className="h-8 w-8 text-green-600 mr-3" />
                  <h2 className="text-3xl font-bold text-green-700">Do's for Better Investment & Trading</h2>
                </div>

                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mr-4 mt-1">
                      <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                        <CheckCircle className="h-4 w-4 text-white" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">Always Use a Stop Loss:</h3>
                      <p className="text-gray-700 leading-relaxed">
                        Set a stop loss for every trade to limit potential losses. Enter the stop loss in the trading
                        system—avoid keeping a mental stop loss.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 mr-4 mt-1">
                      <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                        <TrendingUp className="h-4 w-4 text-white" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">Place a Target Order:</h3>
                      <p className="text-gray-700 leading-relaxed">
                        Lock in profits by placing a target order at the desired price where you wish to exit and book
                        your profits.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 mr-4 mt-1">
                      <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                        <Shield className="h-4 w-4 text-white" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">Diversify Your Capital:</h3>
                      <p className="text-gray-700 leading-relaxed">
                        Only trade with a portion of your capital—spread your risk across multiple trades to protect
                        your investments.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 mr-4 mt-1">
                      <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                        <CheckCircle className="h-4 w-4 text-white" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">Capital Preservation is Key:</h3>
                      <p className="text-gray-700 leading-relaxed">
                        Focus on preserving your capital. Systematic trading over the long term can generate profits if
                        your capital remains intact.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 mr-4 mt-1">
                      <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                        <CheckCircle className="h-4 w-4 text-white" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">Use Capital Wisely:</h3>
                      <p className="text-gray-700 leading-relaxed">
                        As a general guideline, only invest a small percentage of your total capital in any single trade
                        to mitigate risk. For example, if you have Rs. 5 lakhs, allocate only Rs. 1 lakh to a single
                        trade to manage risk effectively.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </ScrollAnimation>

          {/* Don'ts Section */}
          <ScrollAnimation direction="right">
            <Card className="mb-12 shadow-lg border-red-200">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <XCircle className="h-8 w-8 text-red-600 mr-3" />
                  <h2 className="text-3xl font-bold text-red-700">Don'ts for Avoiding Pitfalls in Trading</h2>
                </div>

                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mr-4 mt-1">
                      <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center">
                        <XCircle className="h-4 w-4 text-white" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">Never Risk All Your Capital in One Trade:</h3>
                      <p className="text-gray-700 leading-relaxed">
                        Avoid putting all your funds into a single trade. Diversification helps reduce the impact of
                        losses.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 mr-4 mt-1">
                      <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center">
                        <AlertTriangle className="h-4 w-4 text-white" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">Limit Leverage Usage:</h3>
                      <p className="text-gray-700 leading-relaxed">
                        Refrain from using excessive leverage, as it can increase risk and potential losses.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 mr-4 mt-1">
                      <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center">
                        <XCircle className="h-4 w-4 text-white" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">Don't Share Your Login Credentials:</h3>
                      <p className="text-gray-700 leading-relaxed">
                        Capital-Grow will never ask for your D-mat/Trading account login ID or password. If anyone
                        requests this information, immediately decline and report it to us at{" "}
                        <a href="mailto:compliance@capital-grow.com" className="text-blue-600 hover:underline">
                          compliance@capital-grow.com
                        </a>
                        .
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </ScrollAnimation>

          {/* Risk Management Section */}
          <ScrollAnimation direction="left">
            <Card className="mb-12 shadow-lg border-blue-200">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <Shield className="h-8 w-8 text-blue-600 mr-3" />
                  <h2 className="text-3xl font-bold text-blue-700">The Importance of Risk Management</h2>
                </div>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Diversifying your capital is essential in trading. For instance, if your total capital is Rs. 5 lakhs,
                  allocate just Rs. 1 lakh to a single trade. This way, if the trade doesn't go as planned and the stop
                  loss is triggered, the loss will have minimal impact on your overall capital. Diversification
                  increases your chances of making a profit over time while minimizing the risk of significant losses.
                </p>
              </CardContent>
            </Card>
          </ScrollAnimation>

          {/* Mobile App Section */}
          <ScrollAnimation direction="right">
            <Card className="mb-12 shadow-lg border-green-200 bg-gradient-to-br from-green-50 to-blue-50">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <Smartphone className="h-8 w-8 text-green-600 mr-3" />
                  <h2 className="text-3xl font-bold text-green-700">All Recommendations via Mobile App Only</h2>
                </div>
                <p className="text-lg text-gray-700 leading-relaxed">
                  All our research recommendations are delivered exclusively through the Capital-Grow mobile app. Please
                  download the app to receive alerts and updates, and contact our customer support team for any queries.
                </p>
              </CardContent>
            </Card>
          </ScrollAnimation>

          {/* Conclusion */}
          <ScrollAnimation direction="left">
            <Card className="shadow-lg bg-gradient-to-r from-green-600 to-blue-600 text-white">
              <CardContent className="p-8 text-center">
                <h2 className="text-3xl font-bold mb-4">Smart Trading for Long-term Success</h2>
                <p className="text-xl leading-relaxed">
                  By adhering to these practices, you can enhance your chances of long-term success in the stock market.
                  Capital-Grow encourages you to prioritize risk management and smart investing for a profitable trading
                  experience.
                </p>
              </CardContent>
            </Card>
          </ScrollAnimation>
        </div>
      </div>
    </div>
  )
}
