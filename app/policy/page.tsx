import React from 'react'

export const metadata = {
  title: 'Mi3L School — Membership Agreement & Policy',
}

export default function PolicyPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <div className="flex justify-center mb-6"> </div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Membership Agreement & Policy
              </h1>
              <div className="w-24 h-1 bg-orange-500 mx-auto"></div>
            </div>
          </div>
            <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden border border-gray-200 p-8">
                <p className="text-2xl font-bold text-gray-900 mb-4">Season: 2026-2027</p>
                <p className="text-2xl font-bold text-gray-900 mb-4">Teams: VRC 2055A, 2055X, 2055C</p>
            </div>
            <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden border border-gray-200 p-8 mt-8">
                <div className="text-gray-700 mb-4">
                    <p className="text-lg font-semibold text-gray-900 mb-2">By enrolling your student in our robotics club, you agree to the following legally binding financial and behavioral terms:</p>
                    <p className="text-lg font-semibold text-gray-900 mb-2">1. Non-Refundable Onboarding & Fixed Setup Costs</p>
                    <p className="text-gray-700">Upon registration, a portion of your membership fee is immediately spent on external fees, equipment, and structural costs required to secure your student's spot. The following fees are strictly non-refundable from day one, regardless of early withdrawal or termination:</p>
                    <ul className="list-disc pl-6 space-y-2 mt-2 text-gray-700">
                        <li> Team Registration Fees (paid directly to the league)</li>
                        <li> Game Set & Robot Field Equipment Shares</li>
                        <li> Facility Insurance Allocations</li>
                        <li> Specialized Robot Parts and Accessories ordered for the team</li>
                    </ul>
                </div>
                <div className="text-gray-700 mb-4">
                    <p className="text-lg font-semibold text-gray-900 mb-2">2. Early Withdrawal & Refund Policy</p>
                    <ul className="list-disc pl-6 space-y-2 mt-2 text-gray-700">
                        <li> Written Notice Required: To withdraw a student, a parent must submit a written request via Email or WeChat or WhatsApp</li>
                        <li> Refund Calculation: Any approved refund will be calculated strictly by taking the Total Membership Paid and subtracting the Non-Refundable Onboarding Costs (listed in Section 1) and the cost of any sessions/months already attended</li>
                        <li>Finality: Once a refund is processed and accepted, the membership is permanently closed, and no further claims or financial adjustments will be entertained</li>
                    </ul>
                </div>
                <div className="text-gray-700 mb-4">
                    <p className="text-lg font-semibold text-gray-900 mb-2">3. Tournament Cost-Sharing & Absence Policy</p>
                    <p className="text-gray-700">Robotics is a team sport. Club operating budgets and tournament registrations are calculated based on full team participation.</p>
                    <ul className="list-disc pl-6 space-y-2 mt-2 text-gray-700">
                        <li> Shared Financial Responsibility: Tournament registration fees, game set expenses, and operational overhead are divided equally among all registered team members.</li>
                        <li> Absence Clause: If a student is absent from a scheduled tournament for any reason (including vacation, illness, or quitting the team mid-season), the family remains strictly responsible for their share of the following costs:
                            <ul className="list-disc pl-6 mt-1 text-gray-700">
                                <li> Tournament Registration Fees</li>
                                <li> Team Engineering Notebook Printing and Submission Costs</li>
                                <li> Pro-rated Coach Travel, Accommodation, and Logistics Expenses</li>
                            </ul>
                        </li>
                        <li> Unpaid Balances: Failure to pay a tournament cost-share within [14] days of invoicing will result in the immediate suspension of the student's participation in club sessions.</li>
                    </ul>
                </div>
                <div className="text-gray-700 mb-4">
                    <p className="text-lg font-semibold text-gray-900 mb-2">4. Parent & Student Code of Conduct</p>
                    <p className="text-gray-700">We maintain a safe, respectful, and educational environment for students, coaches, and volunteers.</p>
                    <ul className="list-disc pl-6 space-y-2 mt-2 text-gray-700">
                        <li> Zero Tolerance for Harassment: Harsh tones, hostile language, personal insults, or threats directed at coaches, staff, or other club families via phone, text, WeChat, or in person will not be tolerated</li>
                        <li> Immediate Termination: Any violation of this conduct policy by a parent or student will result in the immediate termination of membership without a refund. The club reserves the right to trespass individuals who disrupt our facility</li>
                    </ul>
                </div>

                <div className="text-gray-700 mb-4">
                    <p className="text-lg font-semibold text-gray-900 mb-2">5. Internal Records & Governance</p>
                    <p className="text-gray-700">Proprietary Financials: The club provides itemized final breakdown totals for membership accounts. We do not distribute internal vendor invoices, private store receipts, or proprietary club financial logs to individual past or current members.
ivities. Open communication between the team and families is essential for the success of each member.</p>
                </div>
            </div>
    </div>
  )
}
