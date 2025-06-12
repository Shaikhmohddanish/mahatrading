"use client"

import { Card, CardContent } from "@/components/ui/card"
import {
  Users,
  Shield,
  Clock,
  CheckCircle,
  Phone,
  Mail,
  FileText,
  AlertCircle,
  ExternalLink,
  MessageSquare,
  Scale,
  Globe,
  ArrowRight,
} from "lucide-react"
import ScrollAnimation from "@/components/scroll-animation"

export default function GrievanceRedressalPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="container mx-auto px-4 md:px-6 py-12">
        <div className="max-w-6xl mx-auto">
          {/* Header Section */}
          <ScrollAnimation animateOnce={false} direction="right">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Grievance Redressal Process</h1>
              <p className="text-lg text-gray-600 leading-relaxed max-w-4xl mx-auto">
                At Capital-Grow Trading Research, we prioritize exceptional investor service and strive to maintain high
                standards across all touchpoints. Effective and prompt service is crucial for maintaining investor
                relationships and satisfaction, especially within our Direct-to-Investor model.
              </p>
            </div>
          </ScrollAnimation>

          {/* Introduction */}
          <ScrollAnimation animateOnce={false} direction="left">
            <Card className="mb-8 shadow-lg border-blue-200 bg-blue-50">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <Users className="h-8 w-8 text-blue-600 mr-3" />
                  <h2 className="text-3xl font-bold text-blue-700">Our Commitment to Investor Service</h2>
                </div>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Our grievance redressal process is designed to address and resolve investor complaints efficiently,
                  ensuring ongoing service improvement through a structured framework. We believe in maintaining
                  transparency and accountability in all our interactions with investors.
                </p>
              </CardContent>
            </Card>
          </ScrollAnimation>

          {/* Principles Section */}
          <ScrollAnimation animateOnce={false} direction="right">
            <Card className="mb-8 shadow-lg border-green-200">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <Shield className="h-8 w-8 text-green-600 mr-3" />
                  <h2 className="text-3xl font-bold text-green-700">Principles of Our Grievance Redressal Policy</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mr-4 mt-1">
                      <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                        <CheckCircle className="h-5 w-5 text-white" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2 text-green-700">Fair Treatment</h3>
                      <p className="text-gray-700 leading-relaxed">
                        Investors will always be treated with fairness and respect throughout the grievance process.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 mr-4 mt-1">
                      <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                        <Clock className="h-5 w-5 text-white" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2 text-blue-700">Timely Resolution</h3>
                      <p className="text-gray-700 leading-relaxed">
                        Complaints and queries will be handled promptly and courteously within specified timeframes.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 mr-4 mt-1">
                      <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center">
                        <Users className="h-5 w-5 text-white" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2 text-purple-700">Efficient Handling</h3>
                      <p className="text-gray-700 leading-relaxed">
                        All issues will be addressed with efficiency and fairness to ensure quick resolution.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 mr-4 mt-1">
                      <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center">
                        <Shield className="h-5 w-5 text-white" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2 text-orange-700">Good Faith</h3>
                      <p className="text-gray-700 leading-relaxed">
                        Our investment advisors and staff will act in good faith and with the best interests of the
                        investors in mind.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </ScrollAnimation>

          {/* Grievance Redressal Mechanism */}
          <ScrollAnimation animateOnce={false} direction="left">
            <Card className="mb-8 shadow-lg border-purple-200">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <MessageSquare className="h-8 w-8 text-purple-600 mr-3" />
                  <h2 className="text-3xl font-bold text-purple-700">Grievance Redressal Mechanism</h2>
                </div>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  If you have a query or experience a deficiency in service, which may include inadequate explanations
                  or staff attitude, you are entitled to seek clarification or lodge a complaint.
                </p>

                {/* Step-by-Step Process */}
                <div className="space-y-6">
                  {/* Step 1 */}
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mr-4">
                      <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold">
                        1
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold mb-3 text-blue-700">Initial Contact</h3>
                      <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
                        <p className="text-gray-700 leading-relaxed mb-3">
                          Clients can seek clarification to their query and are further entitled to make a complaint in
                          writing, orally or telephonically. An email may be sent to the Research Analyst.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                          <div className="flex items-center">
                            <Phone className="h-5 w-5 text-blue-600 mr-2" />
                            <a href="tel:+918879392530" className="text-blue-600 hover:underline font-semibold">
                              +91 8879392530
                            </a>
                          </div>
                          <div className="flex items-center">
                            <Mail className="h-5 w-5 text-blue-600 mr-2" />
                            <a
                              href="mailto:compliance@capital-grow.com"
                              className="text-blue-600 hover:underline font-semibold"
                            >
                              compliance@capital-grow.com
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-center">
                    <ArrowRight className="h-6 w-6 text-gray-400" />
                  </div>

                  {/* Step 2 */}
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mr-4">
                      <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center text-white font-bold">
                        2
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold mb-3 text-green-700">Escalation to Research Analyst</h3>
                      <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                        <p className="text-gray-700 leading-relaxed mb-3">
                          Clients can write to the Research Analyst at{" "}
                          <a
                            href="mailto:compliance@capital-grow.com"
                            className="text-green-600 hover:underline font-semibold"
                          >
                            compliance@capital-grow.com
                          </a>{" "}
                          if the Investor does not receive a response within{" "}
                          <span className="font-semibold">10 business days</span> of writing to the Client Servicing
                          Team.
                        </p>
                        <p className="text-gray-700 leading-relaxed">
                          The client can expect a reply within <span className="font-semibold">10 business days</span>{" "}
                          of approaching the Research Analyst.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-center">
                    <ArrowRight className="h-6 w-6 text-gray-400" />
                  </div>

                  {/* Step 3 */}
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mr-4">
                      <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold">
                        3
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold mb-3 text-orange-700">SEBI SCORES Portal</h3>
                      <div className="bg-orange-50 p-4 rounded-lg border-l-4 border-orange-500">
                        <p className="text-gray-700 leading-relaxed">
                          In case you are not satisfied with our response, you can lodge your grievance with SEBI at
                          SCORES portal or you may also write to any of the offices of SEBI.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-center">
                    <ArrowRight className="h-6 w-6 text-gray-400" />
                  </div>

                  {/* Step 4 */}
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mr-4">
                      <div className="w-10 h-10 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold">
                        4
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold mb-3 text-purple-700">ODR Portal</h3>
                      <div className="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-500">
                        <p className="text-gray-700 leading-relaxed">
                          ODR Portal could be accessed, if unsatisfied with the response. This portal harnesses
                          conciliation and online arbitration for resolution of disputes arising in the Indian
                          Securities Market.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </ScrollAnimation>

          {/* SEBI SCORES Information */}
          <ScrollAnimation animateOnce={false} direction="right">
            <Card className="mb-8 shadow-lg border-orange-200 bg-orange-50">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <Scale className="h-8 w-8 text-orange-600 mr-3" />
                  <h2 className="text-3xl font-bold text-orange-700">SEBI SCORES Portal</h2>
                </div>
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  If you are not satisfied with our response, you can lodge your grievance with SEBI at the SCORES
                  portal or write to any of the offices of SEBI. SCORES (SEBI Complaints Redress System) is a web-based
                  centralized grievance redress system of SEBI.
                </p>
                <div className="flex items-center">
                  <ExternalLink className="h-5 w-5 text-orange-600 mr-2" />
                  <a
                    href="https://scores.sebi.gov.in/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-orange-600 hover:underline font-semibold"
                  >
                    Visit SEBI SCORES Portal
                  </a>
                </div>
              </CardContent>
            </Card>
          </ScrollAnimation>

          {/* ODR Portal Information */}
          <ScrollAnimation animateOnce={false} direction="left">
            <Card className="mb-8 shadow-lg border-blue-200">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <Globe className="h-8 w-8 text-blue-600 mr-3" />
                  <h2 className="text-3xl font-bold text-blue-700">Online Dispute Resolution (ODR) Portal</h2>
                </div>
                <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
                  <p>
                    Your attention is drawn to the SEBI circular no.{" "}
                    <span className="font-semibold">SEBI/HO/OIAE/OIAE_IAD-1/P/CIR/2023/131</span> dated{" "}
                    <span className="font-semibold">July 31, 2023</span>, on "Online Resolution of Disputes in the
                    Indian Securities Market".
                  </p>
                  <p>
                    A common Online Dispute Resolution Portal ("ODR Portal") which harnesses conciliation and online
                    arbitration for resolution of disputes arising in the Indian Securities Market has been established.
                  </p>
                  <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
                    <div className="flex items-center">
                      <ExternalLink className="h-5 w-5 text-blue-600 mr-2" />
                      <a
                        href="https://smartodr.in/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:underline font-semibold text-lg"
                      >
                        Access ODR Portal: https://smartodr.in/
                      </a>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </ScrollAnimation>

          {/* Contact Information Card */}
          <ScrollAnimation animateOnce={false} direction="right">
            <Card className="mb-8 shadow-lg border-green-200 bg-green-50">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <Phone className="h-8 w-8 text-green-600 mr-3" />
                  <h2 className="text-3xl font-bold text-green-700">Contact Information</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <Phone className="h-6 w-6 text-green-600 mr-3" />
                      <div>
                        <p className="font-semibold text-gray-800">Phone Support</p>
                        <a href="tel:+918879392530" className="text-green-600 hover:underline font-semibold">
                          +91 8879392530
                        </a>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <Mail className="h-6 w-6 text-green-600 mr-3" />
                      <div>
                        <p className="font-semibold text-gray-800">Email Support</p>
                        <a
                          href="mailto:compliance@capital-grow.com"
                          className="text-green-600 hover:underline font-semibold"
                        >
                          compliance@capital-grow.com
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <Clock className="h-6 w-6 text-green-600 mr-3" />
                      <div>
                        <p className="font-semibold text-gray-800">Response Time</p>
                        <p className="text-gray-700">Within 10 business days</p>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <FileText className="h-6 w-6 text-green-600 mr-3" />
                      <div>
                        <p className="font-semibold text-gray-800">Complaint Methods</p>
                        <p className="text-gray-700">Written, Oral, or Telephonic</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </ScrollAnimation>

          {/* Important Notice */}
          <ScrollAnimation animateOnce={false} direction="left">
            <Card className="mb-8 shadow-lg bg-gradient-to-br from-red-100 to-orange-100 border-2 border-red-300">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <AlertCircle className="h-10 w-10 text-red-600 mr-4" />
                  <h2 className="text-3xl font-bold text-red-700">Important Notice</h2>
                </div>
                <div className="bg-white p-6 rounded-lg border-l-4 border-red-500">
                  <p className="text-lg text-gray-800 leading-relaxed">
                    We are committed to resolving your grievances promptly and fairly. Please provide complete details
                    when submitting your complaint to help us serve you better. All complaints will be handled with
                    confidentiality and in accordance with regulatory guidelines.
                  </p>
                </div>
              </CardContent>
            </Card>
          </ScrollAnimation>

          {/* Call to Action */}
          <ScrollAnimation animateOnce={false} direction="right">
            <Card className="shadow-lg bg-gradient-to-r from-green-600 to-blue-600 text-white">
              <CardContent className="p-8 text-center">
                <div className="flex items-center justify-center mb-4">
                  <MessageSquare className="h-8 w-8 mr-3" />
                  <h2 className="text-3xl font-bold">Need to File a Grievance?</h2>
                </div>
                <p className="text-xl mb-6 opacity-90">We're here to help resolve your concerns quickly and fairly</p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="mailto:compliance@capital-grow.com"
                    className="bg-white text-green-600 hover:bg-gray-100 py-3 px-8 text-lg font-semibold rounded-xl transition-all duration-300 inline-block"
                  >
                    Email Your Complaint
                  </a>
                  <a
                    href="tel:+918879392530"
                    className="border-2 border-white text-white hover:bg-white hover:text-green-600 py-3 px-8 text-lg font-semibold rounded-xl transition-all duration-300 inline-block"
                  >
                    Call: +91 8879392530
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
