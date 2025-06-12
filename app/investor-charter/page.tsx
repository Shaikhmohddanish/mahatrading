"use client"

import { Card, CardContent } from "@/components/ui/card"
import {
  Eye,
  Target,
  FileText,
  Users,
  Shield,
  MessageSquare,
  CheckCircle,
  XCircle,
  AlertTriangle,
  Table,
  ExternalLink,
  Phone,
} from "lucide-react"
import ScrollAnimation from "@/components/scroll-animation"

export default function InvestorCharterPage() {
  let direction = "right"
  const alternateDirection = () => {
    direction = direction === "right" ? "left" : "right"
    return direction
  }

  return (
    <div className="flex flex-col min-h-screen">
      <div className="container mx-auto px-4 md:px-6 py-12">
        <div className="max-w-6xl mx-auto">
          {/* Header Section */}
          <ScrollAnimation direction="right">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Investor Charter</h1>
              <p className="text-lg text-gray-600 leading-relaxed">Investor Charter for Research Analysts (RA)</p>
            </div>
          </ScrollAnimation>

          {/* Vision and Mission */}
          <ScrollAnimation direction={alternateDirection()}>
            <Card className="mb-8 shadow-lg border-blue-200">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <Eye className="h-8 w-8 text-blue-600 mr-3" />
                  <h2 className="text-3xl font-bold text-blue-700">A. Vision and Mission Statements for investors</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500">
                    <div className="flex items-center mb-4">
                      <Eye className="h-6 w-6 text-blue-600 mr-2" />
                      <h3 className="text-xl font-bold text-blue-700">Vision</h3>
                    </div>
                    <p className="text-gray-700 leading-relaxed">
                      Empower investors with knowledge and security for confident investment decisions.
                    </p>
                  </div>

                  <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
                    <div className="flex items-center mb-4">
                      <Target className="h-6 w-6 text-green-600 mr-2" />
                      <h3 className="text-xl font-bold text-green-700">Mission</h3>
                    </div>
                    <p className="text-gray-700 leading-relaxed">
                      Our mission is to enable every investor to make informed investment choices that align with their
                      goals, manage their investments effectively, and access comprehensive reports to ensure financial
                      wellness.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </ScrollAnimation>

          {/* Business Transactions */}
          <ScrollAnimation direction={alternateDirection()}>
            <Card className="mb-8 shadow-lg border-purple-200">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <FileText className="h-8 w-8 text-purple-600 mr-3" />
                  <h2 className="text-3xl font-bold text-purple-700">B. Business Transactions with Investors</h2>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mr-4 mt-1">
                      <div className="w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center">
                        <CheckCircle className="h-4 w-4 text-white" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold mb-1 text-purple-700">Research Reporting</h3>
                      <p className="text-gray-700 leading-relaxed">
                        Publish detailed research reports based on thorough analysis by the Research Analyst (RA).
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 mr-4 mt-1">
                      <div className="w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center">
                        <CheckCircle className="h-4 w-4 text-white" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold mb-1 text-purple-700">Unbiased Recommendations</h3>
                      <p className="text-gray-700 leading-relaxed">
                        Provide impartial recommendations on securities while disclosing any financial interests in the
                        recommended assets.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 mr-4 mt-1">
                      <div className="w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center">
                        <CheckCircle className="h-4 w-4 text-white" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold mb-1 text-purple-700">Independent Analysis</h3>
                      <p className="text-gray-700 leading-relaxed">
                        Offer research insights based solely on publicly available information and established
                        observations.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 mr-4 mt-1">
                      <div className="w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center">
                        <CheckCircle className="h-4 w-4 text-white" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold mb-1 text-purple-700">Annual Audits</h3>
                      <p className="text-gray-700 leading-relaxed">
                        Conduct regular audits to maintain transparency and accuracy.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </ScrollAnimation>

          {/* Services Provided */}
          <ScrollAnimation direction={alternateDirection()}>
            <Card className="mb-8 shadow-lg border-green-200">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <Users className="h-8 w-8 text-green-600 mr-3" />
                  <h2 className="text-3xl font-bold text-green-700">C. Services Provided to Investors</h2>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mr-4 mt-1">
                      <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                        <CheckCircle className="h-4 w-4 text-white" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold mb-1 text-green-700">Client Onboarding</h3>
                      <p className="text-gray-700 leading-relaxed">
                        Facilitate the onboarding process for new clients.
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
                      <h3 className="text-lg font-bold mb-1 text-green-700">Disclosure</h3>
                      <p className="text-gray-700 leading-relaxed">
                        Ensure full disclosure of relevant information to clients.
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
                      <h3 className="text-lg font-bold mb-1 text-green-700">Research Distribution</h3>
                      <p className="text-gray-700 leading-relaxed">
                        Distribute research reports and recommendations to clients equitably.
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
                      <h3 className="text-lg font-bold mb-1 text-green-700">Confidentiality</h3>
                      <p className="text-gray-700 leading-relaxed">
                        Maintain confidentiality of research reports until they are publicly accessible.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </ScrollAnimation>

          {/* Grievance Redressal Mechanism */}
          <ScrollAnimation direction={alternateDirection()}>
            <Card className="mb-8 shadow-lg border-orange-200">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <MessageSquare className="h-8 w-8 text-orange-600 mr-3" />
                  <h2 className="text-3xl font-bold text-orange-700">D. Grievance Redressal Mechanism</h2>
                </div>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mr-4 mt-1">
                      <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold">
                        1
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold mb-2 text-orange-700">Initial Steps</h3>
                      <p className="text-gray-700 leading-relaxed">
                        For any grievance or complaint, contact the concerned research analyst directly to seek
                        resolution within 30 days.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 mr-4 mt-1">
                      <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold">
                        2
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold mb-2 text-orange-700">SEBI Complaints</h3>
                      <p className="text-gray-700 leading-relaxed">
                        If unresolved, lodge a complaint with SEBI via the SCORES portal. SEBI will address complaints
                        and facilitate tracking.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 mr-4 mt-1">
                      <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold">
                        3
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold mb-2 text-orange-700">Physical Complaints</h3>
                      <p className="text-gray-700 leading-relaxed">
                        For physical complaints, send them to: Office of Investor Assistance and Education, Securities
                        and Exchange Board of India, SEBI Bhavan, Plot No. C4-A, 'G' Block, Bandra-Kurla Complex, Bandra
                        (E), Mumbai — 400 051.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </ScrollAnimation>

          {/* Investor Responsibilities */}
          <ScrollAnimation direction={alternateDirection()}>
            <Card className="mb-8 shadow-lg border-blue-200">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <Shield className="h-8 w-8 text-blue-600 mr-3" />
                  <h2 className="text-3xl font-bold text-blue-700">E. Investor Responsibilities</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {/* Do's */}
                  <div className="bg-green-50 p-6 rounded-lg">
                    <div className="flex items-center mb-4">
                      <CheckCircle className="h-6 w-6 text-green-600 mr-2" />
                      <h3 className="text-xl font-bold text-green-700">Do's</h3>
                    </div>
                    <div className="space-y-3">
                      <div className="flex items-start">
                        <div className="flex-shrink-0 mr-2 mt-1">
                          <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center text-white font-bold text-xs">
                            1
                          </div>
                        </div>
                        <p className="text-gray-700 leading-relaxed">
                          <span className="font-semibold">Verify Registration:</span> Engage only with SEBI-registered
                          Research Analysts.
                        </p>
                      </div>

                      <div className="flex items-start">
                        <div className="flex-shrink-0 mr-2 mt-1">
                          <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center text-white font-bold text-xs">
                            2
                          </div>
                        </div>
                        <p className="text-gray-700 leading-relaxed">
                          <span className="font-semibold">Check Credentials:</span> Confirm the Research Analyst holds a
                          valid registration certificate.
                        </p>
                      </div>

                      <div className="flex items-start">
                        <div className="flex-shrink-0 mr-2 mt-1">
                          <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center text-white font-bold text-xs">
                            3
                          </div>
                        </div>
                        <p className="text-gray-700 leading-relaxed">
                          <span className="font-semibold">Consult SEBI List:</span> Refer to the SEBI website for a list
                          of registered Research Analysts: SEBI Registered Analysts List.
                        </p>
                      </div>

                      <div className="flex items-start">
                        <div className="flex-shrink-0 mr-2 mt-1">
                          <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center text-white font-bold text-xs">
                            4
                          </div>
                        </div>
                        <p className="text-gray-700 leading-relaxed">
                          <span className="font-semibold">Review Disclosures:</span> Pay attention to disclosures in
                          research reports before making investment decisions.
                        </p>
                      </div>

                      <div className="flex items-start">
                        <div className="flex-shrink-0 mr-2 mt-1">
                          <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center text-white font-bold text-xs">
                            5
                          </div>
                        </div>
                        <p className="text-gray-700 leading-relaxed">
                          <span className="font-semibold">Secure Payments:</span> Make payments through banking channels
                          only and keep signed receipts.
                        </p>
                      </div>

                      <div className="flex items-start">
                        <div className="flex-shrink-0 mr-2 mt-1">
                          <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center text-white font-bold text-xs">
                            6
                          </div>
                        </div>
                        <p className="text-gray-700 leading-relaxed">
                          <span className="font-semibold">Validate Recommendations:</span> Verify research
                          recommendations before investing in securities or public offers.
                        </p>
                      </div>

                      <div className="flex items-start">
                        <div className="flex-shrink-0 mr-2 mt-1">
                          <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center text-white font-bold text-xs">
                            7
                          </div>
                        </div>
                        <p className="text-gray-700 leading-relaxed">
                          <span className="font-semibold">Ask Questions:</span> Clarify all doubts with your Research
                          Analyst before acting on any recommendations.
                        </p>
                      </div>

                      <div className="flex items-start">
                        <div className="flex-shrink-0 mr-2 mt-1">
                          <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center text-white font-bold text-xs">
                            8
                          </div>
                        </div>
                        <p className="text-gray-700 leading-relaxed">
                          <span className="font-semibold">Report Misconduct:</span> Inform SEBI about any Research
                          Analyst offering guaranteed returns.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Don'ts */}
                  <div className="bg-red-50 p-6 rounded-lg">
                    <div className="flex items-center mb-4">
                      <XCircle className="h-6 w-6 text-red-600 mr-2" />
                      <h3 className="text-xl font-bold text-red-700">Don'ts</h3>
                    </div>
                    <div className="space-y-3">
                      <div className="flex items-start">
                        <div className="flex-shrink-0 mr-2 mt-1">
                          <div className="w-5 h-5 bg-red-500 rounded-full flex items-center justify-center text-white font-bold text-xs">
                            1
                          </div>
                        </div>
                        <p className="text-gray-700 leading-relaxed">
                          <span className="font-semibold">Avoid Direct Funds:</span> Do not provide funds directly to
                          the Research Analyst for investment purposes.
                        </p>
                      </div>

                      <div className="flex items-start">
                        <div className="flex-shrink-0 mr-2 mt-1">
                          <div className="w-5 h-5 bg-red-500 rounded-full flex items-center justify-center text-white font-bold text-xs">
                            2
                          </div>
                        </div>
                        <p className="text-gray-700 leading-relaxed">
                          <span className="font-semibold">Beware of Advertisements:</span> Avoid being misled by
                          enticing advertisements or market rumors.
                        </p>
                      </div>

                      <div className="flex items-start">
                        <div className="flex-shrink-0 mr-2 mt-1">
                          <div className="w-5 h-5 bg-red-500 rounded-full flex items-center justify-center text-white font-bold text-xs">
                            3
                          </div>
                        </div>
                        <p className="text-gray-700 leading-relaxed">
                          <span className="font-semibold">Reject Incentives:</span> Do not be swayed by limited-time
                          offers or incentives from Research Analysts.
                        </p>
                      </div>

                      <div className="flex items-start">
                        <div className="flex-shrink-0 mr-2 mt-1">
                          <div className="w-5 h-5 bg-red-500 rounded-full flex items-center justify-center text-white font-bold text-xs">
                            4
                          </div>
                        </div>
                        <p className="text-gray-700 leading-relaxed">
                          <span className="font-semibold">Protect Credentials:</span> Never share login credentials or
                          passwords for trading or demat accounts with the Research Analyst.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </ScrollAnimation>

          {/* Complaint Data Disclosure */}
          <ScrollAnimation direction={alternateDirection()}>
            <Card className="mb-8 shadow-lg border-teal-200">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <Table className="h-8 w-8 text-teal-600 mr-3" />
                  <h2 className="text-3xl font-bold text-teal-700">Complaint Data Disclosure</h2>
                </div>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Formats for investors complaints data to be disclosed monthly by RAs on their website/mobile
                  application:
                </p>

                <div className="mb-4">
                  <h3 className="text-xl font-bold text-teal-700 mb-2">Data for the Month of June'2024</h3>
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full border-collapse border border-gray-300">
                    <thead>
                      <tr className="bg-teal-600 text-white">
                        <th className="border border-gray-300 p-3 text-center">Sr. No.</th>
                        <th className="border border-gray-300 p-3 text-center">Received from</th>
                        <th className="border border-gray-300 p-3 text-center">Pending at the end of last month</th>
                        <th className="border border-gray-300 p-3 text-center">Received</th>
                        <th className="border border-gray-300 p-3 text-center">Resolved</th>
                        <th className="border border-gray-300 p-3 text-center">Total Pending #</th>
                        <th className="border border-gray-300 p-3 text-center">Pending complaints &gt; 3months</th>
                        <th className="border border-gray-300 p-3 text-center">Average Resolution time (in days)</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-gray-300 p-3 text-center">1</td>
                        <td className="border border-gray-300 p-3">Directly from Investors</td>
                        <td className="border border-gray-300 p-3 text-center">0</td>
                        <td className="border border-gray-300 p-3 text-center">0</td>
                        <td className="border border-gray-300 p-3 text-center">0</td>
                        <td className="border border-gray-300 p-3 text-center">0</td>
                        <td className="border border-gray-300 p-3 text-center">0</td>
                        <td className="border border-gray-300 p-3 text-center">0</td>
                      </tr>
                      <tr className="bg-gray-50">
                        <td className="border border-gray-300 p-3 text-center">2</td>
                        <td className="border border-gray-300 p-3">SEBI (SCORES)</td>
                        <td className="border border-gray-300 p-3 text-center">1</td>
                        <td className="border border-gray-300 p-3 text-center">0</td>
                        <td className="border border-gray-300 p-3 text-center">0</td>
                        <td className="border border-gray-300 p-3 text-center">1</td>
                        <td className="border border-gray-300 p-3 text-center">0</td>
                        <td className="border border-gray-300 p-3 text-center">15</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 p-3 text-center">3</td>
                        <td className="border border-gray-300 p-3">Other Sources (if any)</td>
                        <td className="border border-gray-300 p-3 text-center">0</td>
                        <td className="border border-gray-300 p-3 text-center">0</td>
                        <td className="border border-gray-300 p-3 text-center">0</td>
                        <td className="border border-gray-300 p-3 text-center">0</td>
                        <td className="border border-gray-300 p-3 text-center">0</td>
                        <td className="border border-gray-300 p-3 text-center">0</td>
                      </tr>
                      <tr className="bg-gray-100 font-semibold">
                        <td className="border border-gray-300 p-3 text-center" colSpan={2}>
                          Grand Total
                        </td>
                        <td className="border border-gray-300 p-3 text-center">1</td>
                        <td className="border border-gray-300 p-3 text-center">0</td>
                        <td className="border border-gray-300 p-3 text-center">0</td>
                        <td className="border border-gray-300 p-3 text-center">1</td>
                        <td className="border border-gray-300 p-3 text-center">0</td>
                        <td className="border border-gray-300 p-3 text-center">15</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <p className="text-sm text-gray-600 mt-4 italic">
                  Average Resolution Time is calculated by summing the days taken to resolve each complaint and dividing
                  by the number of complaints resolved.
                </p>
              </CardContent>
            </Card>
          </ScrollAnimation>

          {/* SEBI Registration */}
          <ScrollAnimation direction={alternateDirection()}>
            <Card className="mb-8 shadow-lg bg-gradient-to-br from-blue-100 to-green-100 border-2 border-blue-300">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <Shield className="h-10 w-10 text-blue-600 mr-4" />
                  <h2 className="text-3xl font-bold text-blue-700">SEBI Registration</h2>
                </div>
                <div className="bg-white p-6 rounded-lg border-l-4 border-blue-500">
                  <p className="text-lg text-gray-800 leading-relaxed mb-4">
                    Capital-Grow Trading Research is a SEBI registered Research Analyst. Always verify the registration
                    status of any Research Analyst before engaging their services.
                  </p>
                  <div className="flex items-center">
                    <ExternalLink className="h-5 w-5 text-blue-600 mr-2" />
                    <a
                      href="https://www.sebi.gov.in/sebiweb/other/OtherAction.do?doRecognisedFpi=yes&intmId=13"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline font-semibold"
                    >
                      Check SEBI Registered Analysts List
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
          </ScrollAnimation>

          {/* Important Notice */}
          <ScrollAnimation direction={alternateDirection()}>
            <Card className="mb-8 shadow-lg bg-gradient-to-br from-red-100 to-orange-100 border-2 border-red-300">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <AlertTriangle className="h-10 w-10 text-red-600 mr-4" />
                  <h2 className="text-3xl font-bold text-red-700">Important Notice</h2>
                </div>
                <div className="bg-white p-6 rounded-lg border-l-4 border-red-500">
                  <p className="text-lg text-gray-800 leading-relaxed">
                    This Investor Charter is designed to protect your interests as an investor. Please read it carefully
                    and follow the guidelines to ensure a safe and informed investment experience. Remember that no
                    Research Analyst can guarantee returns on investments, and all investment decisions should be made
                    after careful consideration of your financial goals and risk tolerance.
                  </p>
                </div>
              </CardContent>
            </Card>
          </ScrollAnimation>

          {/* Contact Information */}
          <ScrollAnimation direction={alternateDirection()}>
            <Card className="shadow-lg bg-gradient-to-r from-green-600 to-blue-600 text-white">
              <CardContent className="p-8 text-center">
                <div className="flex items-center justify-center mb-4">
                  <Phone className="h-8 w-8 mr-3" />
                  <h2 className="text-3xl font-bold">Questions About Investor Charter?</h2>
                </div>
                <p className="text-xl mb-6 opacity-90">
                  Contact us if you have any questions about our Investor Charter or need assistance
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
