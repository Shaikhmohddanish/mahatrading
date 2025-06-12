"use client"

import { Card, CardContent } from "@/components/ui/card"
import {
  AlertTriangle,
  Shield,
  FileText,
  Scale,
  Globe,
  Users,
  Phone,
  Copyright,
  BookOpen,
  BarChart2,
  FileWarning,
  MessageSquare,
  UserCheck,
} from "lucide-react"
import ScrollAnimation from "@/components/scroll-animation"

export default function LegalDisclaimerPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="container mx-auto px-4 md:px-6 py-12">
        <div className="max-w-6xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Legal Disclaimer</h1>
            <p className="text-lg text-gray-600 leading-relaxed">
              Please read this legal disclaimer carefully before using our services or acting upon any information
              provided by Capital-Grow Trading Research.
            </p>
          </div>

          {/* Copyright Notice */}
          <ScrollAnimation direction="right">
            <Card className="mb-8 shadow-lg border-blue-200">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <Copyright className="h-8 w-8 text-blue-600 mr-3" />
                  <h2 className="text-3xl font-bold text-blue-700">Copyright Notice</h2>
                </div>
                <p className="text-lg text-gray-700 leading-relaxed">
                  All rights reserved. Any unauthorized copying, reproduction, or distribution of research reports and
                  alerts published by Capital-Grow Trading Research on its website, mobile app, or other
                  platforms—whether in full or part—is strictly prohibited and will be considered a copyright
                  infringement. Capital-Grow Trading Research (referred to as "Capital-Grow Trading Research") is an
                  independent equity research firm operating under the license of its proprietor (Registered Research
                  Analyst).
                </p>
              </CardContent>
            </Card>
          </ScrollAnimation>

          {/* Not an Investment Adviser */}
          <ScrollAnimation direction="left">
            <Card className="mb-8 shadow-lg border-orange-200 bg-orange-50">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <AlertTriangle className="h-8 w-8 text-orange-600 mr-3" />
                  <h2 className="text-3xl font-bold text-orange-700">Not an Investment Adviser</h2>
                </div>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Please note, Capital-Grow Trading Research is not an Investment Adviser. The information provided
                  should be used solely as a resource and at one's own risk. This content does not constitute an offer
                  to sell or a solicitation to buy any securities. Neither Capital-Grow Trading Research nor its
                  promoters, employees, or affiliates will be liable for any losses incurred or investment decisions
                  made (or not made) based on the information provided. All research and reports should be considered
                  general opinions, not personalized investment advice.
                </p>
              </CardContent>
            </Card>
          </ScrollAnimation>

          {/* Professional Advice */}
          <ScrollAnimation direction="right">
            <Card className="mb-8 shadow-lg border-green-200">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <UserCheck className="h-8 w-8 text-green-600 mr-3" />
                  <h2 className="text-3xl font-bold text-green-700">Seek Professional Advice</h2>
                </div>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Before acting on any recommendations, subscribers are advised to consider their own financial
                  circumstances, risk tolerance, and investment objectives. If necessary, please seek independent
                  professional advice from a licensed Investment Adviser. Capital-Grow Trading Research's reports and
                  recommendations are intended for Indian residents only. Any access or use of this content outside of
                  India, especially in countries such as the USA, Canada, or European Union, is prohibited, as it may
                  subject Capital-Grow Trading Research to registration or licensing requirements in those countries.
                </p>
              </CardContent>
            </Card>
          </ScrollAnimation>

          {/* As Is Basis */}
          <ScrollAnimation direction="left">
            <Card className="mb-8 shadow-lg border-red-200 bg-red-50">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <FileWarning className="h-8 w-8 text-red-600 mr-3" />
                  <h2 className="text-3xl font-bold text-red-700">"As Is" Basis</h2>
                </div>
                <p className="text-lg text-gray-700 leading-relaxed">
                  All content and information provided by Capital-Grow Trading Research are on an "As Is" basis.
                  Although we believe the information to be reliable, Capital-Grow Trading Research does not guarantee
                  the completeness or accuracy of any content and expressly disclaims all warranties of any kind,
                  whether express or implied. Furthermore, Capital-Grow Trading Research, its promoters, employees, and
                  affiliates may hold positions in the companies discussed in our research.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed mt-4">
                  By accessing the content of Capital-Grow Trading Research, users agree to our Terms and Conditions of
                  Use. Past performance data presented does not guarantee future results. The user also agrees to
                  indemnify Capital-Grow Trading Research, its promoters, employees, directors, and stakeholders from
                  any legal proceedings or lawsuits.
                </p>
              </CardContent>
            </Card>
          </ScrollAnimation>

          {/* Disclaimer of Liability */}
          <ScrollAnimation direction="right">
            <Card className="mb-8 shadow-lg border-purple-200">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <Scale className="h-8 w-8 text-purple-600 mr-3" />
                  <h2 className="text-3xl font-bold text-purple-700">Disclaimer of Liability</h2>
                </div>
                <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
                  <p>
                    Capital-Grow Trading Research is not liable for any losses or gains resulting from investment
                    decisions based on our research reports or services. Users should fully understand that any decision
                    to buy, sell, or hold securities or instruments is their own responsibility. We emphasize that our
                    research should only be regarded as a resource, not a recommendation, and that no claims of
                    guaranteed accuracy or success should be inferred.
                  </p>
                  <p>
                    Furthermore, Capital-Grow Trading Research does not execute orders or provide brokerage services. If
                    anyone offers to execute trades on behalf of Capital-Grow Trading Research, please deny such offers
                    and report the incident immediately. We do not endorse any brokers or intermediary services.
                  </p>
                  <p>
                    Our research analysts are not permitted to trade in securities covered in our research reports to
                    maintain objectivity and independence. We also do not have any conflicts of interest with issuers of
                    the products or securities we analyze, ensuring unbiased and independent research.
                  </p>
                </div>
              </CardContent>
            </Card>
          </ScrollAnimation>

          {/* Important Considerations for Clients */}
          <ScrollAnimation direction="left">
            <Card className="mb-8 shadow-lg border-blue-200">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <BarChart2 className="h-8 w-8 text-blue-600 mr-3" />
                  <h2 className="text-3xl font-bold text-blue-700">Important Considerations for Clients</h2>
                </div>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mr-4 mt-1">
                      <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center">
                        <AlertTriangle className="h-4 w-4 text-white" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">Market Risk:</h3>
                      <p className="text-gray-700 leading-relaxed">
                        Investing in stocks or commodities carries inherent market risks. While we strive to provide
                        informed insights, Capital Grow Trading Research does not guarantee returns or accuracy in
                        market predictions. Clients are advised to consider our research reports as informed opinions
                        and make investment decisions independently.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 mr-4 mt-1">
                      <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center">
                        <Users className="h-4 w-4 text-white" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">Client-Specific Research:</h3>
                      <p className="text-gray-700 leading-relaxed">
                        If a client seeks research related to specific existing positions, our opinions will be provided
                        as an additional perspective, not personalized advice.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 mr-4 mt-1">
                      <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center">
                        <Shield className="h-4 w-4 text-white" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">Risk Tolerance:</h3>
                      <p className="text-gray-700 leading-relaxed">
                        Only trade if the research calls match your risk profile and financial capacity. Clients should
                        make final trading decisions at their discretion.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </ScrollAnimation>

          {/* No Litigation History */}
          <ScrollAnimation direction="right">
            <Card className="mb-8 shadow-lg border-green-200 bg-green-50">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <BookOpen className="h-8 w-8 text-green-600 mr-3" />
                  <h2 className="text-3xl font-bold text-green-700">No Litigation History</h2>
                </div>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Capital-Grow Trading Research has no litigation or legal disputes since its incorporation.
                </p>
              </CardContent>
            </Card>
          </ScrollAnimation>

          {/* Communication Policy */}
          <ScrollAnimation direction="left">
            <Card className="mb-8 shadow-lg border-teal-200">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <MessageSquare className="h-8 w-8 text-teal-600 mr-3" />
                  <h2 className="text-3xl font-bold text-teal-700">Communication Policy</h2>
                </div>
                <p className="text-lg text-gray-700 leading-relaxed">
                  All communications from our research services are provided in writing. Any verbal communications from
                  our representatives should not be considered official research services from Capital-Grow Trading
                  Research.
                </p>
              </CardContent>
            </Card>
          </ScrollAnimation>

          {/* Standard Disclaimer */}
          <ScrollAnimation direction="right">
            <Card className="mb-8 shadow-lg bg-gradient-to-br from-blue-100 to-purple-100 border-2 border-blue-300">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <FileText className="h-10 w-10 text-blue-600 mr-4" />
                  <h2 className="text-3xl font-bold text-blue-700">Standard Disclaimer</h2>
                </div>
                <div className="bg-white p-6 rounded-lg border-l-4 border-blue-500">
                  <p className="text-lg text-gray-700 leading-relaxed">
                    Capital-Grow Trading Research, its promoters, employees, directors, or stakeholders may hold or have
                    held positions in the stocks or instruments covered in our research. Any position held will be
                    disclosed where applicable.
                  </p>
                </div>
              </CardContent>
            </Card>
          </ScrollAnimation>

          {/* Geographic Limitations */}
          <ScrollAnimation direction="left">
            <Card className="mb-8 shadow-lg border-red-200">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <Globe className="h-8 w-8 text-red-600 mr-3" />
                  <h2 className="text-3xl font-bold text-red-700">Geographic Limitations</h2>
                </div>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Capital-Grow Trading Research's reports and recommendations are intended for Indian residents only.
                  Any access or use of this content outside of India, especially in countries such as the USA, Canada,
                  or European Union, is prohibited, as it may subject Capital-Grow Trading Research to registration or
                  licensing requirements in those countries.
                </p>
              </CardContent>
            </Card>
          </ScrollAnimation>

          {/* Contact Information */}
          <ScrollAnimation direction="right">
            <Card className="shadow-lg bg-gradient-to-r from-green-600 to-blue-600 text-white">
              <CardContent className="p-8 text-center">
                <div className="flex items-center justify-center mb-4">
                  <Phone className="h-8 w-8 mr-3" />
                  <h2 className="text-3xl font-bold">Questions About Our Legal Disclaimer?</h2>
                </div>
                <p className="text-xl mb-6 opacity-90">
                  Contact us if you have any questions about this legal disclaimer
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
