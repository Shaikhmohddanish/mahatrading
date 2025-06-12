"use client"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle } from "lucide-react"
import ScrollAnimation from "@/components/scroll-animation"

export default function UserConsentPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="container mx-auto px-4 md:px-6 py-12">
        <div className="max-w-4xl mx-auto">
          <ScrollAnimation direction="right">
            <h1 className="text-4xl md:text-5xl font-bold text-center mb-8">User Consent</h1>
          </ScrollAnimation>

          <ScrollAnimation direction="left">
            <Card className="mb-8">
              <CardContent className="p-8 space-y-6">
                <p className="text-lg leading-relaxed">
                  By accessing or using the <span className="font-semibold text-green-600">Capital-Grow</span> website,
                  mobile application, or subscribing to our research services, you agree to adhere to the terms and
                  conditions, legal disclaimer, disclosures, policies, and user consent outlined on the official
                  Capital-Grow platform. Please note, we may update these terms from time to time, and your continued
                  use of our services will signify your acceptance of the revised terms. We encourage you to regularly
                  check the sections related to 'Terms and Conditions,' 'Legal Disclaimer,' 'Disclosure,' 'User
                  Consent,' 'Refund Policy,' and 'Privacy Policy' on our website to stay informed.
                </p>

                <p className="text-lg leading-relaxed">
                  The term <span className="font-semibold">Capital-Grow</span> refers to our website, mobile app, its
                  owners, and associates. "You" refers to the user, subscriber, or visitor of our website, app, or
                  research services.
                </p>
              </CardContent>
            </Card>
          </ScrollAnimation>

          <div className="space-y-6">
            <ScrollAnimation direction="right">
              <Card>
                <CardContent className="p-6">
                  <h2 className="text-xl font-bold mb-4 flex items-center">
                    <CheckCircle className="h-6 w-6 text-green-600 mr-2" />
                    Subscription & Information Accuracy:
                  </h2>
                  <p className="text-gray-700 leading-relaxed">
                    By subscribing to Capital-Grow's services, you confirm that the information provided during the
                    subscription process is accurate. In the event of any misleading or incorrect information, you
                    acknowledge that you may be held liable. You also agree to notify us of any changes to the details
                    provided.
                  </p>
                </CardContent>
              </Card>
            </ScrollAnimation>

            <ScrollAnimation direction="left">
              <Card>
                <CardContent className="p-6">
                  <h2 className="text-xl font-bold mb-4 flex items-center">
                    <CheckCircle className="h-6 w-6 text-green-600 mr-2" />
                    Understanding Risk in Trading:
                  </h2>
                  <p className="text-gray-700 leading-relaxed">
                    You acknowledge that share market trading and investing carry significant risks, including the loss
                    of partial or entire capital. You accept that Capital Grow provides research and technical analysis
                    only as a reference, not investment advice. The decision to execute trades based on our alerts is
                    entirely yours, including the trade volume and stock selection. You bear full responsibility for the
                    results of your trading activities, whether profitable or otherwise.
                  </p>
                </CardContent>
              </Card>
            </ScrollAnimation>

            <ScrollAnimation direction="right">
              <Card>
                <CardContent className="p-6">
                  <h2 className="text-xl font-bold mb-4 flex items-center">
                    <CheckCircle className="h-6 w-6 text-green-600 mr-2" />
                    Accuracy & Expectations:
                  </h2>
                  <p className="text-gray-700 leading-relaxed">
                    You understand and agree that Capital-Grow and its team do not guarantee the accuracy or consistency
                    of any research alerts provided. Any accuracy percentages communicated via email, advertisements, or
                    mobile app are for reference only and subject to fluctuation. There is no commitment to maintain a
                    fixed accuracy rate for research alerts or trading recommendations.
                  </p>
                </CardContent>
              </Card>
            </ScrollAnimation>

            <ScrollAnimation direction="left">
              <Card>
                <CardContent className="p-6">
                  <h2 className="text-xl font-bold mb-4 flex items-center">
                    <CheckCircle className="h-6 w-6 text-green-600 mr-2" />
                    Responsibility for Trades:
                  </h2>
                  <p className="text-gray-700 leading-relaxed">
                    You accept that Capital-Grow is not responsible for executing trades on your behalf. Any decisions
                    to buy or sell stocks in your trading or Demat account during your subscription to our research
                    services are entirely your own. Any gains or losses incurred from these trades are solely your
                    responsibility.
                  </p>
                </CardContent>
              </Card>
            </ScrollAnimation>

            <ScrollAnimation direction="right">
              <Card>
                <CardContent className="p-6">
                  <h2 className="text-xl font-bold mb-4 flex items-center">
                    <CheckCircle className="h-6 w-6 text-green-600 mr-2" />
                    Research Services Only:
                  </h2>
                  <p className="text-gray-700 leading-relaxed">
                    The research services provided by Capital-Grow are not to be mistaken for personalized investment
                    advice. We offer trading analysis for reference only. You acknowledge that any profits or losses
                    that result from trades made by following our alerts are entirely your liability.
                  </p>
                </CardContent>
              </Card>
            </ScrollAnimation>

            <ScrollAnimation direction="left">
              <Card>
                <CardContent className="p-6">
                  <h2 className="text-xl font-bold mb-4 flex items-center">
                    <CheckCircle className="h-6 w-6 text-green-600 mr-2" />
                    No Guarantee of Profit:
                  </h2>
                  <p className="text-gray-700 leading-relaxed">
                    You confirm that you fully understand the risks associated with trading and investing in the stock
                    market, and you do not expect guaranteed or fixed returns from Capital-Grow's research alerts. You
                    acknowledge that trading based on our research may result in partial or complete loss of your
                    invested capital.
                  </p>
                </CardContent>
              </Card>
            </ScrollAnimation>

            <ScrollAnimation direction="right">
              <Card>
                <CardContent className="p-6">
                  <h2 className="text-xl font-bold mb-4 flex items-center">
                    <CheckCircle className="h-6 w-6 text-green-600 mr-2" />
                    No Refund Policy:
                  </h2>
                  <p className="text-gray-700 leading-relaxed">
                    The fees paid for Capital-Grow's research services are non-refundable under any circumstances. You
                    accept that these fees are strictly for accessing research services and not for direct stock market
                    investment.
                  </p>
                </CardContent>
              </Card>
            </ScrollAnimation>

            <ScrollAnimation direction="left">
              <Card>
                <CardContent className="p-6">
                  <h2 className="text-xl font-bold mb-4 flex items-center">
                    <CheckCircle className="h-6 w-6 text-green-600 mr-2" />
                    Legal Liability & Consent:
                  </h2>
                  <p className="text-gray-700 leading-relaxed">
                    You agree that Capital-Grow and its owners, employees, or associates cannot be held responsible for
                    any losses you may incur as a result of trading activities based on our research alerts. You also
                    confirm that you will not disclose your Demat or trading account credentials to anyone and that you
                    alone are responsible for managing your account. You agree that Capital-Grow has not guaranteed or
                    assured any profits, and you will not file any legal complaint or claim if you incur losses during
                    your trading activities.
                  </p>
                </CardContent>
              </Card>
            </ScrollAnimation>

            <ScrollAnimation direction="right">
              <Card className="bg-green-50 border-green-200">
                <CardContent className="p-6">
                  <h2 className="text-xl font-bold mb-4 flex items-center text-green-700">
                    <CheckCircle className="h-6 w-6 text-green-600 mr-2" />
                    Acceptance of Terms:
                  </h2>
                  <p className="text-gray-700 leading-relaxed">
                    By clicking "Yes, I Agree," you confirm that you have read, understood, and accepted all the terms
                    and conditions, disclaimers, disclosures, and policies mentioned on the Capital-Grow website and
                    mobile app. This consent will be recorded and considered final for all future services and
                    transactions with Capital-Grow.
                  </p>
                </CardContent>
              </Card>
            </ScrollAnimation>
          </div>

          <div className="mt-12 text-center">
            <p className="text-gray-500 text-sm">
              Last updated: January 2025 | For any questions regarding this consent, please contact us at{" "}
              <a href="mailto:compliance@capital-grow.com" className="text-green-600 hover:underline">
                compliance@capital-grow.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
