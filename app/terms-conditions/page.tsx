"use client"

import { Card, CardContent } from "@/components/ui/card"
import {
  AlertTriangle,
  Shield,
  FileText,
  Gavel,
  Globe,
  Users,
  Lock,
  Eye,
  Phone,
  Copyright,
  UserCheck,
  Clock,
  Package,
  LinkIcon,
  Scale,
  FileCheck,
} from "lucide-react"
import ScrollAnimation from "@/components/scroll-animation"

export default function TermsConditionsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="container mx-auto px-4 md:px-6 py-12">
        <div className="max-w-6xl mx-auto">
          {/* Header Section */}
          <ScrollAnimation direction="right">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Terms & Conditions</h1>
              <p className="text-lg text-gray-600 leading-relaxed">
                Please read these terms and conditions carefully before using our services. By visiting our website or
                mobile application, you agree to be bound by these terms and conditions.
              </p>
            </div>
          </ScrollAnimation>

          {/* Company Information */}
          <ScrollAnimation direction="left">
            <Card className="mb-8 shadow-lg border-blue-200">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <FileText className="h-8 w-8 text-blue-600 mr-3" />
                  <h2 className="text-3xl font-bold text-blue-700">Company Information</h2>
                </div>
                <p className="text-lg text-gray-700 leading-relaxed">
                  The term <span className="font-semibold">Capital Grow</span> (or "us" or "we") refers to the owners,
                  managers of the website Capital Grow and/or Capital Grow whose office is located at{" "}
                  <span className="font-semibold">
                    Office No. 815, Rupa Solitaire, MBP, Koparkhairane, Thane, Maharashtra – 400710, Maharashtra, India
                  </span>
                  . and owns and manages the website Capital Grow.
                </p>
              </CardContent>
            </Card>
          </ScrollAnimation>

          {/* SEBI Disclosures */}
          <ScrollAnimation direction="right">
            <Card className="mb-8 shadow-lg border-orange-200 bg-orange-50">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <Shield className="h-8 w-8 text-orange-600 mr-3" />
                  <h2 className="text-3xl font-bold text-orange-700">SEBI Disclosures</h2>
                </div>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Disclosures under the provisions of SEBI (Research Analysts) Regulations 2014 (Regulations): registered
                  Research Analyst ("Capital Grow") is regulated by the Securities and Exchange Board of India ("SEBI")
                  and is licensed to carry on the business of share trading research providing service and related
                  activities. The term "you" refers to the user or viewer of our website. By visiting our website/mobile
                  application you are agreeing to be bound by the following terms and conditions and all other terms and
                  conditions of Capital Grow.
                </p>
              </CardContent>
            </Card>
          </ScrollAnimation>

          {/* Agreement Terms */}
          <ScrollAnimation direction="left">
            <Card className="mb-8 shadow-lg border-green-200">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <Gavel className="h-8 w-8 text-green-600 mr-3" />
                  <h2 className="text-3xl font-bold text-green-700">Agreement Terms</h2>
                </div>
                <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
                  <p>
                    We may change these terms and conditions at any time. Your continued use of our website and/or our
                    mobile application means that you accept any new or modified terms and conditions that we come up
                    with. Please re-visit the Terms and Conditions link at our site from time to time to stay abreast of
                    any changes that we may introduce.
                  </p>
                  <p>
                    The term Capital Grow is used through this entire Terms and Conditions document to refer to the
                    website and/or our mobile application, its owners/proprietor, and the employees and associates of the
                    owner.
                  </p>
                </div>
              </CardContent>
            </Card>
          </ScrollAnimation>

          {/* No Warranties */}
          <ScrollAnimation direction="right">
            <Card className="mb-8 shadow-lg border-red-200 bg-red-50">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <AlertTriangle className="h-8 w-8 text-red-600 mr-3" />
                  <h2 className="text-3xl font-bold text-red-700">No Warranties</h2>
                </div>
                <p className="text-lg text-gray-700 leading-relaxed">
                  This Website is provided "as is" without any representations or warranties, express or implied. Capital
                  Grow Trading Research firm and its owner, director, employees, affiliates, and associates make no
                  representations or warranties about the Website or the information and materials provided on the
                  Website. This Website will be constantly available, or available at all; or the information on this
                  Website is believed to be complete, true, accurate, or non-misleading.
                </p>
              </CardContent>
            </Card>
          </ScrollAnimation>

          {/* Other Disclaimers */}
          <ScrollAnimation direction="left">
            <Card className="mb-8 shadow-lg border-purple-200">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <FileCheck className="h-8 w-8 text-purple-600 mr-3" />
                  <h2 className="text-3xl font-bold text-purple-700">Other Disclaimers</h2>
                </div>
                <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
                  <p>
                    Without prejudice to the generality of the foregoing paragraph, Capital Grow and its owner, directors,
                    employees, affiliates, and associates state that:
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>
                      The information analysis given in the research reports is purely an interpretation/View of the
                      author/research analyst
                    </li>
                    <li>
                      Any comparative indices that are made available on the Website are mere indicators and are in no
                      manner meant to reflect or influence the buying decision of the customers
                    </li>
                    <li>
                      Capital Grow does not in any manner whatsoever verify or vouch for the accuracy or authenticity of
                      the results
                    </li>
                    <li>
                      While doing fund transfer, the respective bank shall be responsible for the transfer of funds during
                      payment for research services
                    </li>
                    <li>Nothing on this website constitutes or is meant to constitute, advice of any kind</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </ScrollAnimation>

          {/* Disclaimer for Reports */}
          <ScrollAnimation direction="right">
            <Card className="mb-8 shadow-lg border-indigo-200">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <FileText className="h-8 w-8 text-indigo-600 mr-3" />
                  <h2 className="text-3xl font-bold text-indigo-700">Disclaimer for Reports</h2>
                </div>
                <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
                  <p>
                    The documents/reports/research analysis available on the Website or published/produced by Capital Grow
                    does not constitute an offer or solicitation for the purchase or sale of any Security/financial
                    instrument or as an official confirmation of any transaction.
                  </p>
                  <p>
                    The documents/reports/research analyses are provided for assistance only and are not intended to be
                    and must not alone be taken as the basis for any decision. The user assumes the entire risk of any use
                    made of this information.
                  </p>
                  <p>
                    This information is strictly confidential and is being furnished to you solely for your information.
                    This information should not be reproduced or redistributed or passed on directly or indirectly in any
                    form to any other person.
                  </p>
                </div>
              </CardContent>
            </Card>
          </ScrollAnimation>

          {/* Registration/Enrollment and Termination */}
          <ScrollAnimation direction="left">
            <Card className="mb-8 shadow-lg border-teal-200">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <UserCheck className="h-8 w-8 text-teal-600 mr-3" />
                  <h2 className="text-3xl font-bold text-teal-700">Registration/Enrollment and Termination</h2>
                </div>
                <p className="text-lg text-gray-700 leading-relaxed">
                  By registering for this facility you understand that Capital Grow reserves the right, in its sole
                  discretion, to deny you access to this Website or any portion thereof without notice for the following
                  reasons: (a) any unauthorized access or use by you (b) if you assign or transfer any rights granted to
                  you (c) if you violate any of the other terms and conditions. Upon termination, all rights granted to
                  you will terminate and revert to Capital Grow Trading Research.
                </p>
              </CardContent>
            </Card>
          </ScrollAnimation>

          {/* License */}
          <ScrollAnimation direction="right">
            <Card className="mb-8 shadow-lg border-cyan-200">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <Copyright className="h-8 w-8 text-cyan-600 mr-3" />
                  <h2 className="text-3xl font-bold text-cyan-700">License</h2>
                </div>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Capital Grow hereby grants you a limited, non-exclusive, non-assignable, and non-transferable license to
                  access the Website provided and expressly conditioned upon your agreement that all such access and use
                  shall be governed by all of the terms and conditions outlined in this User Consent.
                </p>
              </CardContent>
            </Card>
          </ScrollAnimation>

          {/* Security */}
          <ScrollAnimation direction="left">
            <Card className="mb-8 shadow-lg border-red-200">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <Lock className="h-8 w-8 text-red-600 mr-3" />
                  <h2 className="text-3xl font-bold text-red-700">Security</h2>
                </div>
                <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
                  <p>
                    Unauthorized use of this Website and systems, including unauthorized entry into Capital Grow systems,
                    online accounts, misuse of passwords, or misuse of any other information, is strictly prohibited.
                  </p>
                  <p>
                    You agree that you will not engage in any activities related to this website that are contrary to the
                    applicable laws or regulations in force. The users have the primary responsibility to keep their
                    log-in ids and passwords secure.
                  </p>
                  <p>
                    Capital Grow may use certain technology on its websites to collect information from visitors and may
                    compile aggregate statistical information about how visitors use its websites. No individually
                    identifiable information is collected for this purpose.
                  </p>
                </div>
              </CardContent>
            </Card>
          </ScrollAnimation>

          {/* Service Delays */}
          <ScrollAnimation direction="right">
            <Card className="mb-8 shadow-lg border-yellow-200">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <Clock className="h-8 w-8 text-yellow-600 mr-3" />
                  <h2 className="text-3xl font-bold text-yellow-700">Service Delays</h2>
                </div>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Capital Grow reserves its right, in its sole discretion, without any obligation, and without any notice
                  requirement, to change, improve or correct the information, materials, and descriptions on this website
                  and to suspend and/or deny access to this website for scheduled or unscheduled maintenance, upgrades,
                  improvements or corrections. Capital Grow shall not be liable for any loss or liability resulting from
                  delays or interruptions due to electronic or mechanical equipment failures, weather, strikes, pandemic
                  situations or other like causes.
                </p>
              </CardContent>
            </Card>
          </ScrollAnimation>

          {/* Products Offered */}
          <ScrollAnimation direction="left">
            <Card className="mb-8 shadow-lg border-green-200">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <Package className="h-8 w-8 text-green-600 mr-3" />
                  <h2 className="text-3xl font-bold text-green-700">Products Offered on the Website</h2>
                </div>
                <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
                  <p>
                    Concerning the data from Capital Markets and the products made available on the Website by Capital
                    Grow, YOU HEREBY AGREE THAT:
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>You confirm that the details provided by you are true</li>
                    <li>You declare that the amount being transferred is derived through legitimate sources</li>
                    <li>
                      Capital Grow sources data from Capital Markets and is not responsible for correctness or accuracy
                    </li>
                    <li>NSE data is delayed by 5 minutes and BSE data is delayed by 15 minutes</li>
                    <li>The authenticity of data received from Capital Markets is not guaranteed by Capital Grow</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </ScrollAnimation>

          {/* Liability */}
          <ScrollAnimation direction="right">
            <Card className="mb-8 shadow-lg border-red-200">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <Scale className="h-8 w-8 text-red-600 mr-3" />
                  <h2 className="text-3xl font-bold text-red-700">Liability</h2>
                </div>
                <p className="text-lg text-gray-700 leading-relaxed">
                  You agree that Capital Grow shall not be liable, whether in contract or tort, for any direct, special,
                  indirect, consequential or incidental damages arising out of the use or inability to use the Website.
                  This limitation includes transmission of viruses, failure of equipment, unauthorized access, theft,
                  operator errors, strikes or any force majeure. Capital Grow cannot guarantee continuous, uninterrupted,
                  or secure access to this website.
                </p>
              </CardContent>
            </Card>
          </ScrollAnimation>

          {/* Links to Third Party Sites */}
          <ScrollAnimation direction="left">
            <Card className="mb-8 shadow-lg border-blue-200">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <LinkIcon className="h-8 w-8 text-blue-600 mr-3" />
                  <h2 className="text-3xl font-bold text-blue-700">Links to Third Party Sites</h2>
                </div>
                <p className="text-lg text-gray-700 leading-relaxed">
                  The links on this site will allow you to leave the Website. The linked sites are not under the control
                  of the Website. Capital Grow has not reviewed, nor approved these sites and is not responsible for the
                  contents or omissions of any linked site. The inclusion of any linked site does not imply endorsement by
                  Capital Grow.
                </p>
              </CardContent>
            </Card>
          </ScrollAnimation>

          {/* Indemnification */}
          <ScrollAnimation direction="right">
            <Card className="mb-8 shadow-lg border-purple-200">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <Shield className="h-8 w-8 text-purple-600 mr-3" />
                  <h2 className="text-3xl font-bold text-purple-700">Indemnification</h2>
                </div>
                <p className="text-lg text-gray-700 leading-relaxed">
                  You shall indemnify, defend and hold harmless Capital Grow from any claims and losses imposed on,
                  incurred by, or asserted as a result of or related to: (a) your access and use of Capital Grow (b) any
                  non-compliance by user with the terms and conditions hereof; or (c) any third party actions related to
                  users receipt and use of the information, whether authorized or unauthorized.
                </p>
              </CardContent>
            </Card>
          </ScrollAnimation>

          {/* Code of Ethics and Conduct */}
          <ScrollAnimation direction="left">
            <Card className="mb-8 shadow-lg border-indigo-200">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <Copyright className="h-8 w-8 text-indigo-600 mr-3" />
                  <h2 className="text-3xl font-bold text-indigo-700">Code of Ethics and Conduct</h2>
                </div>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-bold mb-3">Ownership of Copyright</h3>
                    <p className="text-gray-700 leading-relaxed">
                      The copyright in this website and the material on this website (including text, artwork,
                      photographs, images, music, audio material, video material, and audio-visual material) is owned by
                      Capital Grow and its licensors.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-3">Copyright License</h3>
                    <p className="text-gray-700 leading-relaxed mb-3">
                      Capital Grow grants you a non-exclusive royalty-free revocable license to:
                    </p>
                    <ul className="list-disc list-inside space-y-1 ml-4 text-gray-700">
                      <li>View this website and the material on a computer or mobile device via a web browser</li>
                      <li>Copy and store this website and the material in your web browser cache memory</li>
                      <li>Print pages from this website for your personal non-commercial use</li>
                    </ul>
                    <p className="text-gray-700 leading-relaxed mt-3">
                      You must not adapt, edit, change, transform, republish, redistribute, broadcast, or show or play in
                      public this website without Capital Grow's prior written permission.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-3">Data Mining</h3>
                    <p className="text-gray-700 leading-relaxed">
                      The automated and/or systematic collection of data from this website is prohibited.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </ScrollAnimation>

          {/* Trading Guidelines Tables */}
          <ScrollAnimation direction="right">
            <Card className="mb-8 shadow-lg border-purple-200">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <Users className="h-8 w-8 text-purple-600 mr-3" />
                  <h2 className="text-3xl font-bold text-purple-700">Trading Guidelines</h2>
                </div>

                {/* Before You Start Trading Table */}
                <div className="mb-8">
                  <h3 className="text-2xl font-bold mb-4 text-center">Before you start trading</h3>
                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse border border-gray-300">
                      <thead>
                        <tr className="bg-blue-600 text-white">
                          <th className="border border-gray-300 p-4 text-center font-bold">DO</th>
                          <th className="border border-gray-300 p-4 text-center font-bold">DON'T</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="border border-gray-300 p-4 text-center">
                            Assess the risk-return profile of the investment as well as the liquidity and safety aspects
                            before making and/or acting upon your investment decision
                          </td>
                          <td className="border border-gray-300 p-4 text-center">
                            Don't trade in any product without knowing and/or understanding the associated risks and
                            rewards
                          </td>
                        </tr>
                        <tr className="bg-gray-50">
                          <td className="border border-gray-300 p-4 text-center">
                            Make investments based on sound reasoning, after taking into account all publicly available
                            information. You may access the websites of Companies and Regulators for this information
                          </td>
                          <td className="border border-gray-300 p-4 text-center">
                            Don't get influenced by information that does not originate from an appropriate source
                          </td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 p-4 text-center">
                            Make all payments in the form of cheque/online transfer in the name Capital Grow only
                          </td>
                          <td className="border border-gray-300 p-4 text-center">
                            Don't get influenced into buying fundamentally unsound companies (penny stocks) based on
                            sudden spurts in trading volumes or prices or non-authentic favorable looking articles/stories
                          </td>
                        </tr>
                        <tr className="bg-gray-50">
                          <td className="border border-gray-300 p-4 text-center"></td>
                          <td className="border border-gray-300 p-4 text-center">
                            Don't match/synchronize trades with any other person for any thinly traded shares
                          </td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 p-4 text-center"></td>
                          <td className="border border-gray-300 p-4 text-center">
                            Don't indulge in any trading activity which results in the disturbance of market equilibrium
                            in any manner including manipulation of the price of any scrips
                          </td>
                        </tr>
                        <tr className="bg-gray-50">
                          <td className="border border-gray-300 p-4 text-center"></td>
                          <td className="border border-gray-300 p-4 text-center">
                            Don't get carried away by luring advertisements, if any
                          </td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 p-4 text-center"></td>
                          <td className="border border-gray-300 p-4 text-center">
                            Don't make a cash payment or issue a cheque in the name of any employee of Capital Grow or any
                            other person in respect of the transactions
                          </td>
                        </tr>
                        <tr className="bg-gray-50">
                          <td className="border border-gray-300 p-4 text-center"></td>
                          <td className="border border-gray-300 p-4 text-center">
                            Don't issue blank/bearer cheques to anyone
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* General Practice While You Trade Table */}
                <div className="mb-8">
                  <h3 className="text-2xl font-bold mb-4 text-center">GENERAL PRACTICE WHILE YOU TRADE</h3>
                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse border border-gray-300">
                      <thead>
                        <tr className="bg-blue-600 text-white">
                          <th className="border border-gray-300 p-4 text-center font-bold">DO</th>
                          <th className="border border-gray-300 p-4 text-center font-bold">DON'T</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="border border-gray-300 p-4 text-center">
                            Give unambiguous instructions to your broker while placing orders over the phone with your
                            broker.
                          </td>
                          <td className="border border-gray-300 p-4 text-center">
                            In any circumstance, do not reveal your login credentials to any other person, not even a
                            Capital Grow representative
                          </td>
                        </tr>
                        <tr className="bg-gray-50">
                          <td className="border border-gray-300 p-4 text-center">
                            You will be solely responsible for all transactions effected by internet trading. Therefore,
                            change your password every fortnight
                          </td>
                          <td className="border border-gray-300 p-4 text-center"></td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 p-4 text-center">
                            Be aware of the risk associated with the asset classes you are trading in the market and
                            margin calls on them. In case of inadequate margin or non-payment of margin in your account,
                            your positions will be squared off by the Risk Management team of your broker.
                          </td>
                          <td className="border border-gray-300 p-4 text-center"></td>
                        </tr>
                        <tr className="bg-gray-50">
                          <td className="border border-gray-300 p-4 text-center">
                            Maintain adequate margins at all points of time. In case of margin shortfall or delay in
                            payments, your outstanding position will be squared up by your broker.
                          </td>
                          <td className="border border-gray-300 p-4 text-center"></td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* How Can You Stay Protected Table */}
                <div className="mb-8">
                  <h3 className="text-2xl font-bold mb-4 text-center">HOW CAN YOU STAY PROTECTED AT ALL TIMES?</h3>
                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse border border-gray-300">
                      <thead>
                        <tr className="bg-blue-600 text-white">
                          <th className="border border-gray-300 p-4 text-center font-bold">DO</th>
                          <th className="border border-gray-300 p-4 text-center font-bold">DON'T</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="border border-gray-300 p-4 text-center">
                            Forward suspicious emails asking for sensitive information to{" "}
                            <span className="text-blue-600">sales@capital-grow.com</span>
                          </td>
                          <td className="border border-gray-300 p-4 text-center">
                            Do not reveal your personal information Customer IDs, Passwords, and One Time Passwords (OTP)
                            to anybody over the phone, on the internet, or via email
                          </td>
                        </tr>
                        <tr className="bg-gray-50">
                          <td className="border border-gray-300 p-4 text-center">
                            Write to us at <span className="text-blue-600">sales@capital-grow.com</span>, if you notice a
                            duplicate Capital Grow or webpage
                          </td>
                          <td className="border border-gray-300 p-4 text-center">
                            Do not open or click on attachments included in emails from organizations or people you don't
                            know
                          </td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 p-4 text-center">
                            Call us on 02269437400 right away, if you've provided sensitive account information to an
                            unauthorized person, or to report a fraud
                          </td>
                          <td className="border border-gray-300 p-4 text-center">
                            Do not enable the 'Auto Run' feature in Windows systems
                          </td>
                        </tr>
                        <tr className="bg-gray-50">
                          <td className="border border-gray-300 p-4 text-center">
                            Install and update good-quality antivirus software
                          </td>
                          <td className="border border-gray-300 p-4 text-center">
                            Use an unlicensed operating system or one that hasn't been updated regularly
                          </td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 p-4 text-center">
                            Use only devices (like USBs, external hard drives, and smartphones) that you completely trust.
                          </td>
                          <td className="border border-gray-300 p-4 text-center">
                            Use an outdated web browser or one that isn't up to date
                          </td>
                        </tr>
                        <tr className="bg-gray-50">
                          <td className="border border-gray-300 p-4 text-center">
                            Exercise caution when using the internet in public places such as internet cafes and airport
                            lounges
                          </td>
                          <td className="border border-gray-300 p-4 text-center">
                            Do not divulge personal information on social
                          </td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 p-4 text-center">
                            Type the entire Capital Grow address (<span className="text-blue-600">Capital Grow</span>)
                            into your browser to avoid being misdirected to a bogus site when you use the search option.
                          </td>
                          <td className="border border-gray-300 p-4 text-center">
                            Do not disclose personal or business information via a website link attached to an email
                          </td>
                        </tr>
                        <tr className="bg-gray-50">
                          <td className="border border-gray-300 p-4 text-center"></td>
                          <td className="border border-gray-300 p-4 text-center">
                            Do not trust a site appearing to belong to Capital Grow if it doesn't start with the 'HTTPS'
                            prefix and doesn't have a padlock symbol
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </CardContent>
            </Card>
          </ScrollAnimation>

          {/* Secure Fund Transfer */}
          <ScrollAnimation direction="left">
            <Card className="mb-8 shadow-lg border-green-200 bg-green-50">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <Lock className="h-8 w-8 text-green-600 mr-3" />
                  <h2 className="text-3xl font-bold text-green-700">Secure Fund Transfer</h2>
                </div>
                <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
                  <div>
                    <h3 className="font-bold mb-2">1. Payment Guidelines:</h3>
                    <p>
                      Payment for all research services should be made in the current account of Capital Grow only. No
                      payment should be made in any account of an employee/associate of Capital Grow Trading Research or
                      any other individual in any condition.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-bold mb-2">2. Payment Proof Requirements:</h3>
                    <p>In case of payment through Pay Order, Demand Draft, Banker's cheque, NEFT or RTGS; provide:</p>
                    <ul className="list-disc list-inside ml-4 space-y-1">
                      <li>
                        Certificate from the issuing bank on its letterhead or a plain paper with the seal of the issuing
                        bank
                      </li>
                      <li>
                        Certified copy of the requisition slip (portion which is retained by the bank) to issue the
                        instrument
                      </li>
                      <li>
                        Certified copy of the passbook/bank statement for the account debited to issue the instrument
                      </li>
                      <li>
                        Authentication of the bank account number debited and name of the account holder by the issuing
                        bank on the reverse of the instrument
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-bold mb-2">3. Ledger Tracking:</h3>
                    <p>Track your ledger regularly to check the credit for payment of funds.</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </ScrollAnimation>

          {/* Customer Awareness of Security */}
          <ScrollAnimation direction="right">
            <Card className="mb-8 shadow-lg border-red-200">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <Eye className="h-8 w-8 text-red-600 mr-3" />
                  <h2 className="text-3xl font-bold text-red-700">Customer Awareness of Security</h2>
                </div>
                <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
                  <p className="font-semibold">
                    Let's face it, hackers are smart, and they're only getting better by the minute. So, while we work
                    hard to keep the bad guys at bay, here's what you can do to stay protected at all times.
                  </p>

                  <div>
                    <h3 className="text-xl font-bold mb-3">Beware of fraud</h3>
                    <ul className="list-disc list-inside space-y-2">
                      <li>
                        Don't provide personal information such as Customer IDs, Passwords, and One Time Passwords (OTP)
                      to anybody over the phone, on the internet, or via email
                    </li>
                    <li>
                      Don't open or click on attachments included in emails from organizations or people you don't know
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-bold mb-3">How to detect a fake email or website</h3>
                  <ul className="list-disc list-inside space-y-2">
                    <li>
                      A message stating that your account may have been compromised, and asking for personal information
                    </li>
                    <li>
                      An email promising prize money for completing a survey or answering questions that compel you to
                      reveal personal information
                    </li>
                    <li>An email directing you to a fake website designed to look like the real thing</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-bold mb-3">How fraudsters may try to trick you</h3>
                  <ul className="list-disc list-inside space-y-2">
                    <li>
                      <span className="font-semibold">Phishing:</span> These are fake emails that appear to be sent by a
                      credible source to compel you to reveal personal information, which can then be used to commit
                      fraud
                    </li>
                    <li>
                      <span className="font-semibold">Vishing:</span> These are phone calls by people pretending to work
                      for Capital Grow or another legitimate business, asking you to reveal personal information
                    </li>
                    <li>
                      <span className="font-semibold">Trojan/Virus:</span> These are programs inadvertently installed on
                      your computer to steal your sensitive information, spy on you, or cause a security breach
                    </li>
                    <li>
                      <span className="font-semibold">Ransomware:</span> This refers to malware that infects your
                      computer, blocks access to your files, and demands money from you to access your files once again
                    </li>
                    <li>
                      <span className="font-semibold">Spyware:</span> This is a type of software that secretly monitors
                      activity on your computer and reports back to the fraudster, who then uses the information to
                      access your accounts
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-bold mb-3">How you can secure your passwords</h3>
                  <p className="mb-3">Here's how you can keep your passwords from falling into the wrong hands:</p>
                  <ul className="list-disc list-inside space-y-2">
                    <li>
                      Ignore requests from organizations or individuals requesting you to verify your passwords or PINs,
                      as no reputable financial organization does that
                    </li>
                    <li>Memorize your passwords instead of writing them down, and don't share them with anybody</li>
                    <li>Remember to change your passwords every 90 days or less</li>
                    <li>
                      Use a combination of letters, numbers, and special characters, with a mix of upper- and lower-case
                      letters to make your passwords more secure
                    </li>
                    <li>Avoid using family names, names of pets, and important dates</li>
                    <li>Avoid using common names or words in foreign languages to create your passwords</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-bold mb-3">How we're working to keep you safe</h3>
                  <ul className="list-disc list-inside space-y-2">
                    <li>
                      <span className="font-semibold">Security Implementations:</span> All our systems are secured using
                      effective security solutions like firewalls, intrusion detection systems, intrusion prevention
                      systems, and anti-malware systems.
                    </li>
                    <li>
                      <span className="font-semibold">Website Certificate:</span> The SSL Certificate provides clear
                      visual indicators of a green address bar. The green address bar/padlock verifies that the website
                      belongs to the organization it claims to be from. Do not log in to the website whose Padlock or
                      address bar turns red or appears broken.
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
            </Card>
          </ScrollAnimation>

          {/* Privacy Policy Section */}
          <ScrollAnimation direction="left">
            <Card className="mb-8 shadow-lg border-blue-200">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <Shield className="h-8 w-8 text-blue-600 mr-3" />
                  <h2 className="text-3xl font-bold text-blue-700">Privacy Policy</h2>
                </div>
                <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
                  <p>
                    Your privacy is important to Capital Grow. This privacy statement provides information about the
                    personal information that Capital Grow Trading Research collect and how Capital Grow use that personal
                    information.
                  </p>

                  <div>
                    <h3 className="text-xl font-bold mb-3">
                      Capital Grow may collect and use the following kinds of personal information:
                    </h3>
                    <ul className="list-disc list-inside space-y-2">
                      <li>Information about your use of this website</li>
                      <li>Information that you provide using to register with Capital Grow</li>
                      <li>Information about transactions carried out over this Website</li>
                      <li>Information that you provide to subscribe to the Website services</li>
                      <li>Any other information that you send to Capital Grow</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold mb-3">Using personal information</h3>
                    <p className="mb-3">Capital Grow may use your personal information to:</p>
                    <ul className="list-disc list-inside space-y-2">
                      <li>Administer this website</li>
                      <li>Personalize the Website for you</li>
                      <li>Enable your access to and use of the Website</li>
                      <li>Send you products that you purchase</li>
                      <li>Supply the services that you purchase</li>
                      <li>Send you statements and invoices</li>
                      <li>Collect payments from you</li>
                      <li>Send you marketing communications</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold mb-3">Securing Your Data</h3>
                    <ul className="list-disc list-inside space-y-2">
                      <li>
                        Capital Grow will take reasonable technical and organizational precautions to prevent the loss,
                        misuse, or alteration of your personal information
                      </li>
                      <li>Capital Grow will store all the personal information you provide on its secure servers</li>
                      <li>
                        Information relating to electronic transactions entered via this Website will be protected by
                        encryption technology
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold mb-3">Cross-border data transfers</h3>
                    <p>
                      Information that Capital Grow collect may be stored and processed and transferred between any of the
                      countries in which Capital Grow Trading Research operate to enable the use of the information by
                      this privacy policy.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </ScrollAnimation>

          {/* Entire Agreement */}
          <ScrollAnimation direction="right">
            <Card className="mb-8 shadow-lg border-gray-200">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <FileCheck className="h-8 w-8 text-gray-600 mr-3" />
                  <h2 className="text-3xl font-bold text-gray-700">Entire Agreement</h2>
                </div>
                <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
                  <p>
                    This User Consent constitutes the entire agreement between the parties and is inclusive of any other
                    written agreement existing between you and Capital Grow. By using the information on Capital Grow, you
                    assume full responsibility for any gains and losses, financial, emotional, or otherwise, experienced,
                    suffered, or incurred by you.
                  </p>
                  <p>
                    Capital Grow does not guarantee the accuracy, completeness or timeliness of, or otherwise endorse in
                    any way, the views, opinions, or recommendations expressed in the Information, does not give
                    investment advice and does not advocate the purchase or sale of any security or investment.
                  </p>
                  <p>
                    Further, you agree and understand that all services provided are non-refundable and that you should
                    carefully consider whether our services can meet your needs. Any litigation regarding this agreement
                    shall be filed only in the Competent Courts of Thane, Maharashtra.
                  </p>
                </div>
              </CardContent>
            </Card>
          </ScrollAnimation>

          {/* Jurisdiction */}
          <ScrollAnimation direction="left">
            <Card className="mb-8 shadow-lg border-purple-200">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <Globe className="h-8 w-8 text-purple-600 mr-3" />
                  <h2 className="text-3xl font-bold text-purple-700">Jurisdiction</h2>
                </div>
                <p className="text-lg text-gray-700 leading-relaxed">
                  The terms of this agreement are exclusively based on and subject to Indian law. You hereby consent to
                  the exclusive jurisdiction and venue of courts in{" "}
                  <span className="font-semibold">Thane, Maharashtra, India</span>
                  in all disputes arising out of or relating to the use of this website. Use of this website is
                  unauthorized in any jurisdiction that does not give effect to all provisions of these terms and
                  conditions.
                </p>
              </CardContent>
            </Card>
          </ScrollAnimation>

          {/* International Disclaimers */}
          <ScrollAnimation direction="right">
            <Card className="mb-8 shadow-lg bg-gradient-to-br from-blue-100 to-purple-100 border-2 border-blue-300">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <Globe className="h-10 w-10 text-blue-600 mr-4" />
                  <h2 className="text-3xl font-bold text-blue-700">International Disclaimers</h2>
                </div>

                <div className="space-y-6">
                  <div className="bg-white p-6 rounded-lg border-l-4 border-blue-500">
                    <h3 className="text-xl font-bold mb-3 text-blue-700">Additional Disclaimer for U.S. Persons:</h3>
                    <p className="text-gray-700 leading-relaxed mb-3">
                      Capital Grow is not a registered broker-dealer under the U.S. Securities Exchange Act of 1934, as
                      amended (the "1934 act") and under applicable state laws in the United States. In addition, Capital
                      Grow is not a registered investment adviser under the U.S. Investment Advisers Act of 1940, as
                      amended (the "Advisers Act" and together with the 1934 Act, the "Acts), and under applicable state
                      laws in the United States.
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                      Accordingly, in the absence of specific exemption under the Acts, any brokerage and investment
                      services provided by Capital Grow, including the products and services described herein are not
                      available to or intended for U.S. persons. "U.S. Persons" are generally defined as a natural person,
                      residing in the United States or any entity organized or incorporated under the laws of the United
                      States.
                    </p>
                  </div>

                  <div className="bg-white p-6 rounded-lg border-l-4 border-red-500">
                    <h3 className="text-xl font-bold mb-3 text-red-700">Disclaimer for U.K. Persons:</h3>
                    <p className="text-gray-700 leading-relaxed mb-3">
                      The contents of this website have not been approved by an authorized person within the meaning of
                      the Financial Services and Markets Act 2000 ("FSMA"). In the United Kingdom, this website and its
                      respective content are being distributed only to and is directed only at (a) persons who have
                      professional experience in matters relating to investments falling within Article 19(5) of the FSMA
                      (Financial Promotion) Order 2005.
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                      This website and its respective content must not be acted on or relied on by persons who are not
                      relevant persons. Any person who is not relevant should not act or rely on this mailer or any of its
                      contents.
                    </p>
                  </div>

                  <div className="bg-white p-6 rounded-lg border-l-4 border-green-500">
                    <h3 className="text-xl font-bold mb-3 text-green-700">Disclaimer for Canadian Persons:</h3>
                    <p className="text-gray-700 leading-relaxed">
                      Capital Grow is not a registered adviser or dealer under applicable Canadian securities laws nor has
                      it obtained an exemption from the adviser and/or dealer registration requirements under such law.
                      Accordingly, any services provided by Capital Grow, including the products and services described
                      herein, are not available to or intended for Canadian persons.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </ScrollAnimation>

          {/* Final Disclaimer */}
          <ScrollAnimation direction="left">
            <Card className="mb-8 shadow-lg bg-gradient-to-br from-red-100 to-orange-100 border-2 border-red-300">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <AlertTriangle className="h-10 w-10 text-red-600 mr-4" />
                  <h2 className="text-3xl font-bold text-red-700">Important Final Disclaimer</h2>
                </div>
                <div className="bg-white p-6 rounded-lg border-l-4 border-red-500">
                  <p className="text-lg text-gray-800 leading-relaxed">
                    "This website/mobile application and its respective contents (including all research reports and
                    research alerts published by Capital Grow) do not constitute an offer or invitation to purchase or
                    subscribe for any securities or solicitation of any investments or investment services. Capital Grow
                    and its owner/proprietor, directors, employees, affiliates, and associates do not take any
                    responsibility for any type of losses for its clients in any manner whatsoever. The research services
                    fees once paid will not be refunded under any circumstances and Capital Grow and its owner/proprietor
                    will not be responsible for any losses incurred to its clients in any condition. The clients are at
                    their own risk for trading based on Capital Grow's research reports and/or research alerts and they
                    cannot file any type of legal case or complaint against the Capital Grow or owner/proprietor of
                    Capital Grow in any part of the country."
                  </p>
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
                  <h2 className="text-3xl font-bold">Questions About Terms & Conditions?</h2>
                </div>
                <p className="text-xl mb-6 opacity-90">
                  Contact us if you have any questions about these terms and conditions
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="mailto:sales@capital-grow.com"
                    className="bg-white text-green-600 hover:bg-gray-100 py-3 px-8 text-lg font-semibold rounded-xl transition-all duration-300 inline-block"
                  >
                    Email: sales@capital-grow.com
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
