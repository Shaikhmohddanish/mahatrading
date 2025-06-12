"use client"

import { Card, CardContent } from "@/components/ui/card"
import {
  AlertTriangle,
  Shield,
  FileText,
  Search,
  Users,
  Phone,
  MessageSquare,
  Building,
  Eye,
  CreditCard,
  TrendingUp,
  CheckCircle,
} from "lucide-react"
import ScrollAnimation from "@/components/scroll-animation"

export default function ADDisclaimerPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="container mx-auto px-4 md:px-6 py-12">
        <div className="max-w-6xl mx-auto">
          {/* Header Section */}
          <ScrollAnimation direction="right">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Advertisement Disclaimer</h1>
              <p className="text-lg text-gray-600 leading-relaxed">
                Please read this advertisement disclaimer carefully to understand our advertising policies and the
                nature of our services.
              </p>
            </div>
          </ScrollAnimation>

          {/* Important Notice */}
          <ScrollAnimation direction="left">
            <Card className="mb-8 shadow-lg border-red-200 bg-red-50">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <AlertTriangle className="h-8 w-8 text-red-600 mr-3" />
                  <h2 className="text-3xl font-bold text-red-700">Important Notice</h2>
                </div>
                <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
                  <p>
                    Trading in the stock market involves significant risk. Users of our services agree to assume full
                    responsibility for the outcomes of all trading decisions, including potential capital losses. Our
                    SEBI-registered experts may distribute their analysis, research reports, and recommendations through
                    various channels including SMS, email, or by instructing our staff.
                  </p>
                  <p>
                    However, none of these communications should be considered as an offer to buy or sell securities or
                    as trading advice. All recommendations provided are purely for informational purposes and should not
                    be used as the sole basis for trading actions. Capital-Grow Trading Research does not act as a
                    certified financial advisor, and the information provided on our website is intended solely for
                    informational use.
                  </p>
                </div>
              </CardContent>
            </Card>
          </ScrollAnimation>

          {/* Disclosure and Transparency */}
          <ScrollAnimation direction="right">
            <Card className="mb-8 shadow-lg border-blue-200">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <Eye className="h-8 w-8 text-blue-600 mr-3" />
                  <h2 className="text-3xl font-bold text-blue-700">Disclosure and Transparency</h2>
                </div>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Our website includes essential details such as the name of the Research Analyst (RA) registered with
                  SEBI, their office address, SEBI Registration Number, and CIN. We encourage users to use this
                  information as a reference only.
                </p>
              </CardContent>
            </Card>
          </ScrollAnimation>

          {/* Search Terms */}
          <ScrollAnimation direction="left">
            <Card className="mb-8 shadow-lg border-green-200">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <Search className="h-8 w-8 text-green-600 mr-3" />
                  <h2 className="text-3xl font-bold text-green-700">Search Terms</h2>
                </div>
                <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
                  <p>
                    We offer a complimentary demo of our services. Please note that this should not be misunderstood as
                    a lifetime free recommendation. Paid services are available for detailed trading tips.
                  </p>
                  <p>
                    Our recommendations are based on technical analysis and are not guarantees of fixed returns or
                    profits. The views expressed by our research analysts reflect their expertise and are not
                    necessarily those of the website or its management.
                  </p>
                </div>
              </CardContent>
            </Card>
          </ScrollAnimation>

          {/* Professional Advice */}
          <ScrollAnimation direction="right">
            <Card className="mb-8 shadow-lg border-orange-200 bg-orange-50">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <Users className="h-8 w-8 text-orange-600 mr-3" />
                  <h2 className="text-3xl font-bold text-orange-700">Professional Advice</h2>
                </div>
                <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
                  <p>
                    Users are advised to consult with certified financial experts before making any investment
                    decisions. Capital-Grow Trading Research does not guarantee the accuracy or completeness of the
                    information provided and assumes no responsibility for any errors or omissions.
                  </p>
                  <p>
                    Our company holds no financial liability for any losses incurred from using our paid or free
                    services. Investments discussed may not suit all investors; individual decisions should be based on
                    personal investment goals and financial conditions.
                  </p>
                </div>
              </CardContent>
            </Card>
          </ScrollAnimation>

          {/* Advertising Integrity */}
          <ScrollAnimation direction="left">
            <Card className="mb-8 shadow-lg border-purple-200">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <Shield className="h-8 w-8 text-purple-600 mr-3" />
                  <h2 className="text-3xl font-bold text-purple-700">Advertising Integrity</h2>
                </div>
                <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
                  <p>
                    We ensure that our advertisements do not mislead investors or exploit their lack of knowledge.
                    Statements in our advertisements are designed to be clear and not deceptive.
                  </p>
                  <p>
                    We do not accept liability for any advertisements or statements that are exaggerated or misaligned
                    with the actual risk and return profiles of the advertised products.
                  </p>
                </div>
              </CardContent>
            </Card>
          </ScrollAnimation>

          {/* Content Accuracy */}
          <ScrollAnimation direction="right">
            <Card className="mb-8 shadow-lg border-teal-200">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <CheckCircle className="h-8 w-8 text-teal-600 mr-3" />
                  <h2 className="text-3xl font-bold text-teal-700">Content Accuracy</h2>
                </div>
                <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
                  <p>
                    Information provided on our website and in paid advertisements is accurate, truthful, and presented
                    in a clear and concise manner. We expressly disclaim any implied warranties as per jurisdictional
                    laws.
                  </p>
                  <p>Our website does not include false, misleading, or deceptive statements.</p>
                </div>
              </CardContent>
            </Card>
          </ScrollAnimation>

          {/* Payment Policies */}
          <ScrollAnimation direction="left">
            <Card className="mb-8 shadow-lg border-green-200 bg-green-50">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <CreditCard className="h-8 w-8 text-green-600 mr-3" />
                  <h2 className="text-3xl font-bold text-green-700">Payment Policies</h2>
                </div>
                <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
                  <p>
                    We do not accept advance payments or requests for funds via personal accounts. All payments for
                    research services must be made to the company's designated current account only.
                  </p>
                  <p>We do not guarantee profits or returns with our services.</p>
                </div>
              </CardContent>
            </Card>
          </ScrollAnimation>

          {/* Research Usage */}
          <ScrollAnimation direction="right">
            <Card className="mb-8 shadow-lg border-indigo-200">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <TrendingUp className="h-8 w-8 text-indigo-600 mr-3" />
                  <h2 className="text-3xl font-bold text-indigo-700">Research Usage</h2>
                </div>
                <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
                  <p>
                    The research provided should not be interpreted as final advice or a definitive advertisement.
                    Investors are urged to consider all risk factors, including their financial condition and
                    suitability to risk-return profiles, and seek professional advice before investing.
                  </p>
                  <p>Our research does not assure guaranteed returns.</p>
                </div>
              </CardContent>
            </Card>
          </ScrollAnimation>

          {/* Advertisement Endorsement */}
          <ScrollAnimation direction="left">
            <Card className="mb-8 shadow-lg border-red-200">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <MessageSquare className="h-8 w-8 text-red-600 mr-3" />
                  <h2 className="text-3xl font-bold text-red-700">Advertisement Endorsement</h2>
                </div>
                <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
                  <p>
                    We do not endorse any advertisements or tips received through SMS or Telegram. Users should verify
                    the authenticity of all information independently.
                  </p>
                  <p>
                    We only promote our services through paid social media ads in compliance with our terms and
                    conditions.
                  </p>
                </div>
              </CardContent>
            </Card>
          </ScrollAnimation>

          {/* Company Information */}
          <ScrollAnimation direction="right">
            <Card className="mb-8 shadow-lg border-blue-200">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <Building className="h-8 w-8 text-blue-600 mr-3" />
                  <h2 className="text-3xl font-bold text-blue-700">Company Information</h2>
                </div>
                <p className="text-lg text-gray-700 leading-relaxed">
                  For detailed terms and conditions, please visit our website at Capital-Grow Trading Research.
                </p>
              </CardContent>
            </Card>
          </ScrollAnimation>

          {/* Key Points Summary */}
          <ScrollAnimation direction="left">
            <Card className="mb-8 shadow-lg bg-gradient-to-br from-blue-100 to-purple-100 border-2 border-blue-300">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <FileText className="h-10 w-10 text-blue-600 mr-4" />
                  <h2 className="text-3xl font-bold text-blue-700">Key Advertisement Policies</h2>
                </div>
                <div className="bg-white p-6 rounded-lg border-l-4 border-blue-500">
                  <p className="text-lg font-semibold text-gray-800 mb-4">Summary of our advertisement policies:</p>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2">✓</span>
                      All advertisements are clear and not deceptive
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2">✓</span>
                      Information provided is accurate and truthful
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2">✓</span>
                      Payments only accepted through designated company accounts
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2">✓</span>
                      Research provided for informational purposes only
                    </li>
                    <li className="flex items-start">
                      <span className="text-orange-500 mr-2">!</span>
                      No guarantees of profits or returns
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-500 mr-2">⚠</span>
                      Trading involves significant risk of capital loss
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </ScrollAnimation>

          {/* Contact Information */}
          <ScrollAnimation direction="right">
            <Card className="shadow-lg bg-gradient-to-r from-green-600 to-blue-600 text-white">
              <CardContent className="p-8 text-center">
                <div className="flex items-center justify-center mb-4">
                  <Phone className="h-8 w-8 mr-3" />
                  <h2 className="text-3xl font-bold">Questions About Our Advertisement Policies?</h2>
                </div>
                <p className="text-xl mb-6 opacity-90">
                  Contact us if you have any questions about our advertisement disclaimer
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="mailto:compliance@capital-grow.com"
                    className="bg-white text-green-600 hover:bg-gray-100 py-3 px-8 text-lg font-semibold rounded-xl transition-all duration-300 inline-block"
                  >
                    Email: compliance@capital-grow.com
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
