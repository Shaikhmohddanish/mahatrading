"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Shield, Eye, Phone, Mail, FileText, Users, AlertCircle, CheckCircle } from "lucide-react"
import ScrollAnimation from "@/components/scroll-animation"

export default function PrivacyPolicyPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="container mx-auto px-4 md:px-6 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Header Section */}
          <ScrollAnimation direction="right">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Privacy Policy</h1>
              <p className="text-lg text-gray-600 leading-relaxed">
                Capital Grow respects and values the Right to privacy of each and every individual. We are esteemed by
                the relationship and by becoming our clients you have a promise from our side that we shall remain loyal
                to all our clients and non-clients whose information resides with us.
              </p>
            </div>
          </ScrollAnimation>

          {/* Regulatory Disclosure */}
          <ScrollAnimation direction="left">
            <Card className="mb-8 shadow-lg border-orange-200 bg-orange-50">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <AlertCircle className="h-8 w-8 text-orange-600 mr-3" />
                  <h2 className="text-3xl font-bold text-orange-700">Regulatory Disclosure</h2>
                </div>
                <p className="text-lg text-gray-700 leading-relaxed">
                  We may, if required by applicable law or regulations, disclose the identity of the client to the
                  issuer of Securities held as part of the Assets or to the agents of such issuer upon request of such
                  issuer, or to any Government or Regulatory body, without further consent from the client.
                </p>
              </CardContent>
            </Card>
          </ScrollAnimation>

          {/* Our Commitment */}
          <ScrollAnimation direction="right">
            <Card className="mb-8 shadow-lg border-green-200 bg-green-50">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <Shield className="h-8 w-8 text-green-600 mr-3" />
                  <h2 className="text-3xl font-bold text-green-700">Our Commitment to Privacy</h2>
                </div>
                <p className="text-lg text-gray-700 leading-relaxed">
                  This Privacy Policy of Capital Grow applies to the current clients as well as former clients. Below
                  are the word-by-word credentials of our Privacy Policy:
                </p>
              </CardContent>
            </Card>
          </ScrollAnimation>

          {/* Privacy Policy Details */}
          <ScrollAnimation direction="left">
            <Card className="mb-8 shadow-lg border-blue-200">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <FileText className="h-8 w-8 text-blue-600 mr-3" />
                  <h2 className="text-3xl font-bold text-blue-700">Privacy Policy Details</h2>
                </div>

                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mr-4 mt-1">
                      <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center">
                        <Phone className="h-4 w-4 text-white" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">Registration and Contact Consent</h3>
                      <p className="text-gray-700 leading-relaxed">
                        By registering your mobile number on Capital Grow website – you agree to be contacted by our
                        personnel or to receive SMS and it shall be treated as 'opt in' in case the contact number you
                        have registered with us is subscribed in the DND registry (Do Not Disturb). By registering for
                        our services, you also agree to comply with our Private Policy and Terms & Conditions.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 mr-4 mt-1">
                      <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center">
                        <Mail className="h-4 w-4 text-white" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">Promotional Communications</h3>
                      <p className="text-gray-700 leading-relaxed">
                        Please be aware that you may receive calls related to services promotions and any sort of
                        contests and polls organized by us.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 mr-4 mt-1">
                      <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center">
                        <FileText className="h-4 w-4 text-white" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">Information Updates</h3>
                      <p className="text-gray-700 leading-relaxed">
                        In case there are any changes in your contact information that we retain, please bring this to
                        our knowledge either by call or email.
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
                      <h3 className="text-xl font-bold mb-2">Information Protection</h3>
                      <p className="text-gray-700 leading-relaxed">
                        Your information whether public or private will not be sold, rented, exchanged, transferred, or
                        given to any company or individual for any reason without your consent for the same.
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
                      <h3 className="text-xl font-bold mb-2">Service Provision</h3>
                      <p className="text-gray-700 leading-relaxed">
                        The only use we will be bringing to your information will be for providing the services to you
                        for which you have subscribed to us for which you gave us your information.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 mr-4 mt-1">
                      <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center">
                        <Eye className="h-4 w-4 text-white" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">Identity Management</h3>
                      <p className="text-gray-700 leading-relaxed">
                        Your information given to us represents your identity with us. If any changes are brought in any
                        of the fields in which you have provided us the information, you shall bring it to our notice by
                        either calling us or dropping a mail to us.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 mr-4 mt-1">
                      <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center">
                        <Mail className="h-4 w-4 text-white" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">Additional Communications</h3>
                      <p className="text-gray-700 leading-relaxed">
                        In addition to the service provided to you your information (Mobile Number, E-Mail ID, etc.) can
                        be brought into use for sending you newsletters, surveys, contest information, or information
                        about any new services of the Company which will be for your own good and while subscribing for
                        our services you agree that Capital Grow has the right to do so.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </ScrollAnimation>

          {/* Consent Agreement */}
          <ScrollAnimation direction="right">
            <Card className="mb-8 shadow-lg border-green-200 bg-green-50">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <CheckCircle className="h-8 w-8 text-green-600 mr-3" />
                  <h2 className="text-3xl font-bold text-green-700">Your Consent</h2>
                </div>
                <p className="text-lg text-gray-700 leading-relaxed">
                  By subscribing to our services, you consent to our Privacy Policy and Terms of Use.
                </p>
              </CardContent>
            </Card>
          </ScrollAnimation>

          {/* Key Points Summary */}
          <ScrollAnimation direction="left">
            <Card className="mb-8 shadow-lg bg-gradient-to-br from-blue-100 to-green-100 border-2 border-blue-300">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <Shield className="h-10 w-10 text-blue-600 mr-4" />
                  <h2 className="text-3xl font-bold text-blue-700">Key Privacy Points</h2>
                </div>
                <div className="bg-white p-6 rounded-lg border-l-4 border-blue-500">
                  <p className="text-lg font-semibold text-gray-800 mb-4">Summary of our privacy commitments:</p>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2">✓</span>
                      Your information will not be sold or shared without consent
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2">✓</span>
                      Information used only for subscribed services
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2">✓</span>
                      You may receive promotional communications
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2">✓</span>
                      Update us about any changes in your information
                    </li>
                    <li className="flex items-start">
                      <span className="text-orange-500 mr-2">!</span>
                      Regulatory bodies may request information as per law
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
                  <h2 className="text-3xl font-bold">Questions About Privacy?</h2>
                </div>
                <p className="text-xl mb-6 opacity-90">
                  Contact us if you have any questions about our privacy practices or need to update your information
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
