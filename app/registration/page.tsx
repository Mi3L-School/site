"use client";

import React, { useState, useEffect, useCallback, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { User, Shield, Phone, Mail, MapPin, Calendar as CalendarIcon, ChevronRight, ChevronLeft, CheckCircle2, CreditCard } from "lucide-react";
import { loadStripe } from "@stripe/stripe-js";
import { EmbeddedCheckout, EmbeddedCheckoutProvider } from "@stripe/react-stripe-js";

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY || "");

type FormState = {
  step: number;
  student: {
    firstName: string;
    middleName: string;
    lastName: string;
    dob: string;
    gender: string;
    address: string;
    address2: string;
    city: string;
    province: string;
    postalCode: string;
  };
  guardian1: {
    firstName: string;
    lastName: string;
    relationship: string;
    homePhone: string;
    cellPhone: string;
    email: string;
  };
  guardian2: {
    firstName: string;
    lastName: string;
    relationship: string;
    homePhone: string;
    cellPhone: string;
    email: string;
  };
  emergency: {
    firstName: string;
    lastName: string;
    homePhone: string;
    cellPhone: string;
    email: string;
  };
  programs: {
    summerCamp: {
      selected: boolean;
      weeks: {
        id: string;
        label: string;
        type: 'fullday' | 'halfday';
      }[];
    };
  };
};

const initialState: FormState = {
  step: 1,
  student: {
    firstName: "",
    middleName: "",
    lastName: "",
    dob: "",
    gender: "",
    address: "",
    address2: "",
    city: "",
    province: "",
    postalCode: "",
  },
  guardian1: {
    firstName: "",
    lastName: "",
    relationship: "",
    homePhone: "",
    cellPhone: "",
    email: "",
  },
  guardian2: {
    firstName: "",
    lastName: "",
    relationship: "",
    homePhone: "",
    cellPhone: "",
    email: "",
  },
  emergency: {
    firstName: "",
    lastName: "",
    homePhone: "",
    cellPhone: "",
    email: "",
  },
  programs: {
    summerCamp: {
      selected: true, // Summer camp is the default selected program
      weeks: [],
    },
  },
};

function RegistrationInner() {
  const searchParams = useSearchParams();
  const registrationType = searchParams.get('type') || 'general';
  const [formData, setFormData] = useState<FormState>(initialState);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [checkoutClientSecret, setCheckoutClientSecret] = useState<string | null>(null);
  const [isPaymentLoading, setIsPaymentLoading] = useState(false);
  const [checkoutError, setCheckoutError] = useState<string | null>(null);
  const [isDev, setIsDev] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined' && (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1')) {
      setIsDev(true);
    }
  }, []);

  const devFill = () => {
    setFormData({
      step: 4,
      student: {
        firstName: "John",
        middleName: "Quincy",
        lastName: "Doe",
        dob: "01-01-2010",
        gender: "M",
        address: "123 Main St",
        address2: "Apt 4B",
        city: "Toronto",
        province: "Ontario",
        postalCode: "M5V 2N2",
      },
      guardian1: {
        firstName: "Jane",
        lastName: "Doe",
        relationship: "Mother",
        homePhone: "(416) 555-1234",
        cellPhone: "(416) 555-5678",
        email: "test@example.com",
      },
      guardian2: {
        firstName: "James",
        lastName: "Doe",
        relationship: "Father",
        homePhone: "(416) 555-9876",
        cellPhone: "(416) 555-4321",
        email: "james.doe@example.com",
      },
      emergency: {
        firstName: "Uncle",
        lastName: "Bob",
        homePhone: "(416) 555-1111",
        cellPhone: "(416) 555-2222",
        email: "bob@example.com",
      },
      programs: {
        summerCamp: {
          selected: true,
          weeks: [
            { id: 'week1', label: 'Week 1 (July 7-11)', type: 'fullday' },
            { id: 'week2', label: 'Week 2 (July 14-18)', type: 'halfday' },
          ],
        },
      },
    });
  };

  const nextStep = () => {
    setFormData(prev => ({ ...prev, step: prev.step + 1 }));
  };

  const calculateTotal = (data?: FormState) => {
    const programs = data ? data.programs : formData.programs;
    let total = 0;
    if (programs.summerCamp.selected) {
      total += programs.summerCamp.weeks.reduce((sum, week) => {
        const rate = week.type === 'halfday' ? 200 : 350;
        return sum + rate;
      }, 0);
    }
    return total;
  };

  const parseJsonResponse = async (res: Response) => {
    const contentType = res.headers.get('content-type') || '';
    const text = await res.text();
    if (!contentType.includes('application/json')) {
      console.error('Invalid API response: expected JSON but received:', text);
      throw new Error('Invalid JSON response');
    }
    return JSON.parse(text);
  };

  const fetchCheckoutSession = useCallback(async () => {
    if (calculateTotal(formData) <= 0) return;
    setCheckoutError(null);
    setIsPaymentLoading(true);
    try {
      localStorage.setItem('mi3l_registration_draft', JSON.stringify(formData));
      const res = await fetch('/api/create-checkout-session', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          programs: formData.programs,
          origin: window.location.origin,
          metadata: { studentName: `${formData.student.firstName} ${formData.student.lastName}` },
        }),
      });
      if (!res.ok) {
        const text = await res.text();
        const message = `Failed to create checkout session: ${res.status} ${text}`;
        setCheckoutError(message);
        console.error('Error creating checkout session:', message);
        return;
      }
      const data = await parseJsonResponse(res);
      if (data.clientSecret) {
        setCheckoutClientSecret(data.clientSecret);
      } else {
        const message = data.error || 'Unable to create checkout session';
        setCheckoutError(message);
        console.error('Error creating checkout session:', message);
      }
    } catch (err) {
      const message = err instanceof Error ? err.message : String(err);
      setCheckoutError(message);
      console.error('Error creating checkout session:', message);
    } finally {
      setIsPaymentLoading(false);
    }
  }, [formData]);

  useEffect(() => {
    if (formData.step === 4) {
      if (calculateTotal(formData) > 0) {
        setCheckoutClientSecret(null);
        fetchCheckoutSession();
      } else {
        setCheckoutClientSecret(null);
      }
    }
  }, [formData.step, formData.programs.summerCamp.weeks, fetchCheckoutSession]);

  useEffect(() => {
    const sessionId = searchParams.get('session_id');
    if (!sessionId) return;

    const handleReturn = async () => {
      try {
        const res = await fetch(`/api/checkout-session-status?session_id=${sessionId}`);
        if (!res.ok) {
          const text = await res.text();
          console.error('Error fetching checkout session status:', res.status, text);
          return;
        }
        const data = await parseJsonResponse(res);
        if (data.paymentStatus === 'paid') {
          const draft = localStorage.getItem('mi3l_registration_draft');
          if (draft) {
            const savedForm = JSON.parse(draft);
            await handleSaveRegistration(data.paymentIntentId as string, savedForm, data.amountTotal);
            localStorage.removeItem('mi3l_registration_draft');
          }
          setIsSubmitted(true);
        }
      } catch (err) {
        console.error('Error handling return:', err);
      }
    };
    handleReturn();
  }, [searchParams]);

  const handleSaveRegistration = async (paymentIntentId: string, data?: FormState, finalAmountCents?: number) => {
    try {
      const payload = data || formData;
      const finalAmount = finalAmountCents !== undefined 
        ? finalAmountCents / 100 
        : calculateTotal(payload);

      const res = await fetch("/api/save-registration", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...payload,
          paymentIntentId,
          amount: finalAmount
        }),
      });
      if (!res.ok) {
        const text = await res.text();
        console.error("Error saving registration:", res.status, text);
      } else {
        await parseJsonResponse(res);
      }
    } catch (error) {
      console.error("Error saving registration:", error);
    }
  };

  const prevStep = () => setFormData(prev => ({ ...prev, step: Math.max(1, prev.step - 1) }));

  const formatPhoneNumber = (value: string) => {
    const digits = value.replace(/\D/g, "").slice(0, 10);
    if (digits.length === 0) return "";
    if (digits.length <= 3) return digits;
    if (digits.length <= 6) return `(${digits.slice(0, 3)}) ${digits.slice(3)}`;
    return `(${digits.slice(0, 3)}) ${digits.slice(3, 6)}-${digits.slice(6)}`;
  };

  const formatDOB = (value: string) => {
    const digits = value.replace(/\D/g, "").slice(0, 8);
    if (digits.length === 0) return "";

    let mm = digits.slice(0, 2);
    if (mm.length === 2) {
      const month = parseInt(mm);
      if (month > 12) mm = "12";
      if (month === 0) mm = "01";
    } else if (mm.length === 1 && parseInt(mm) > 1 && mm !== "0") {
      mm = "0" + mm;
    }

    let dd = digits.slice(2, 4);
    if (dd.length === 2) {
      const day = parseInt(dd);
      if (day > 31) dd = "31";
      if (day === 0) dd = "01";
    } else if (dd.length === 1 && parseInt(dd) > 3 && dd !== "0") {
      dd = "0" + dd;
    }

    const yyyy = digits.slice(4, 8);

    if (digits.length <= 2) return mm;
    if (digits.length <= 4) return `${mm}-${dd}`;
    return `${mm}-${dd}-${yyyy}`;
  };

  const handleChange = (section: keyof FormState, field: string, value: any) => {
    let finalValue = value;
    if (typeof value === 'string') {
      if (field.toLowerCase().includes("phone")) {
        finalValue = formatPhoneNumber(value);
      } else if (field === "dob") {
        finalValue = formatDOB(value);
      }
    }

    setFormData(prev => ({
      ...prev,
      [section]: {
        ...(prev[section] as any),
        [field]: finalValue,
      },
    }));
  };

  const summerCampWeekOptions = [
    { id: 'week1', label: 'Week 1 (July 7-11)' },
    { id: 'week2', label: 'Week 2 (July 14-18)' },
    { id: 'week3', label: 'Week 3 (July 21-25)' },
    { id: 'week4', label: 'Week 4 (July 28 - Aug 1)' },
    { id: 'week5', label: 'Week 5 (Aug 4-8)' },
    { id: 'week6', label: 'Week 6 (Aug 11-15)' },
    { id: 'week7', label: 'Week 7 (Aug 18-22)' },
    { id: 'week8', label: 'Week 8 (Aug 25-29)' },
  ];

  const handleSummerCampChange = (updates: Partial<FormState["programs"]["summerCamp"]>) => {
    setFormData((prev) => ({
      ...prev,
      programs: {
        ...prev.programs,
        summerCamp: {
          ...prev.programs.summerCamp,
          ...updates,
        }
      },
    }));
  };

  const toggleSummerCampWeek = (weekId: string, weekLabel: string, checked: boolean) => {
    setFormData((prev) => {
      const existingWeeks = prev.programs.summerCamp.weeks;
      const nextWeeks: FormState['programs']['summerCamp']['weeks'] = checked
        ? [...existingWeeks, { id: weekId, label: weekLabel, type: 'halfday' }]
        : existingWeeks.filter((week) => week.id !== weekId);
      return {
        ...prev,
        programs: {
          ...prev.programs,
          summerCamp: {
            ...prev.programs.summerCamp,
            weeks: nextWeeks,
          },
        },
      };
    });
  };

  const setSummerCampWeekType = (weekId: string, type: 'fullday' | 'halfday') => {
    setFormData((prev) => ({
      ...prev,
      programs: {
        ...prev.programs,
        summerCamp: {
          ...prev.programs.summerCamp,
          weeks: prev.programs.summerCamp.weeks.map((week) =>
            week.id === weekId ? { ...week, type } : week
          ),
        },
      },
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.step < 4) {
      nextStep();
    }
  };

  const renderStepIndicator = () => (
    <div className="flex justify-center items-center mb-12">
      {[1, 2, 3, 4].map((s) => (
        <React.Fragment key={s}>
          <div
            className={`w-10 h-10 rounded-full flex items-center justify-center font-bold transition-all duration-300 ${formData.step >= s ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-500"
              }`}
          >
            {formData.step > s ? <CheckCircle2 className="w-6 h-6" /> : s}
          </div>
          {s < 4 && (
            <div
              className={`w-12 h-1 mx-2 transition-all duration-500 ${formData.step > s ? "bg-blue-600" : "bg-gray-200"
                }`}
            />
          )}
        </React.Fragment>
      ))}
    </div>
  );

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center p-4">
        <div className="max-w-md w-full text-center space-y-6 animate-in fade-in zoom-in duration-500">
          <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
            <CheckCircle2 className="w-12 h-12" />
          </div>
          <h2 className="text-3xl font-bold text-gray-900">Registration Received!</h2>
          <p className="text-gray-600">
            Thank you for registering. Your payment was successful and we have received your information.
          </p>
          <button
            onClick={() => { setFormData(initialState); setIsSubmitted(false); }}
            className="px-8 py-3 bg-blue-600 text-white rounded-xl font-bold hover:bg-blue-700 transition-all"
          >
            Register Another Student
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <section className="relative bg-gray-900 pt-32 pb-48 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-4">
            Sign Up for Summer Camp
          </h1>
        </div>
        <div className="absolute bottom-0 left-0 w-full leading-[0] transform rotate-180" aria-hidden="true">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100" preserveAspectRatio="none" className="relative block w-[calc(100%+1.3px)] h-[100px] fill-gray-50">
            <path opacity="0.33" d="M473,67.3c-203.9,88.3-263.1-34-320.3,0C66,119.1,0,59.7,0,59.7V0h1000v59.7 c0,0-62.1,26.1-94.9,29.3c-32.8,3.3-62.8-12.3-75.8-22.1C806,49.6,745.3,8.7,694.9,4.7S492.4,59,473,67.3z"></path>
            <path opacity="0.66" d="M734,67.3c-45.5,0-77.2-23.2-129.1-39.1c-28.6-8.7-150.3-10.1-254,39.1 s-91.7-34.4-149.2,0C115.7,118.3,0,39.8,0,39.8V0h1000v36.5c0,0-28.2-18.5-92.1-18.5C810.2,18.1,775.7,67.3,734,67.3z"></path>
            <path d="M766.1,28.9c-200-57.5-266,65.5-395.1,19.5C242,1.8,242,5.4,184.8,20.6C128,35.8,132.3,44.9,89.9,52.5C28.6,63.7,0,0,0,0 h1000c0,0-9.9,40.9-83.6,48.1S829.6,47,766.1,28.9z"></path>
          </svg>
        </div>
      </section>

      <section className="py-20 -mt-24 px-4 relative z-20">
        <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-2xl overflow-hidden">
          <div className="p-8 md:p-12">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold text-gray-900 mb-2">
                Summer Camp Registration Form
              </h2>
              <div className="w-16 h-1 bg-blue-600 mx-auto rounded-full"></div>
              {isDev && (
                <button
                  type="button"
                  onClick={devFill}
                  className="mt-4 px-4 py-2 bg-amber-100 text-amber-700 text-xs font-bold rounded-full hover:bg-amber-200 transition-all border border-amber-200"
                >
                  🛠️ DEV: FILL & SKIP TO STEP 4
                </button>
              )}
            </div>

            {renderStepIndicator()}

            <form onSubmit={handleSubmit} className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
              {formData.step === 1 && (
                <div className="space-y-6">
                  <div className="flex items-center gap-3 text-blue-600 mb-6">
                    <User className="w-6 h-6" />
                    <h3 className="text-xl font-bold uppercase tracking-wider">Student Information</h3>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <InputField label="First Name" value={formData.student.firstName} onChange={(v) => handleChange('student', 'firstName', v)} required />
                    <InputField label="Middle Name" value={formData.student.middleName} onChange={(v) => handleChange('student', 'middleName', v)} />
                    <InputField label="Last Name" value={formData.student.lastName} onChange={(v) => handleChange('student', 'lastName', v)} required />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-gray-700 flex items-center gap-2">
                        <CalendarIcon className="w-4 h-4" /> Date of Birth *
                      </label>
                      <input
                        type="text"
                        inputMode="numeric"
                        placeholder="MM-DD-YYYY"
                        required
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all outline-none text-black"
                        value={formData.student.dob}
                        onChange={(e) => handleChange('student', 'dob', e.target.value)}
                        maxLength={10}
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-gray-700">Gender *</label>
                      <select
                        required
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all outline-none bg-white text-black"
                        value={formData.student.gender}
                        onChange={(e) => handleChange('student', 'gender', e.target.value)}
                      >
                        <option value="">Please Select</option>
                        <option value="F">Female</option>
                        <option value="M">Male</option>
                        <option value="O">Other</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-center gap-3 text-gray-700 mt-8 mb-4">
                      <MapPin className="w-5 h-5 text-blue-600" />
                      <h4 className="font-bold">Home Address</h4>
                    </div>
                    <InputField label="Street Address" value={formData.student.address} onChange={(v) => handleChange('student', 'address', v)} required full />
                    <InputField label="Street Address Line 2" value={formData.student.address2} onChange={(v) => handleChange('student', 'address2', v)} full />
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      <InputField label="City" value={formData.student.city} onChange={(v) => handleChange('student', 'city', v)} required />
                      <InputField label="Province" value={formData.student.province} onChange={(v) => handleChange('student', 'province', v)} required />
                      <InputField label="Postal Code" value={formData.student.postalCode} onChange={(v) => handleChange('student', 'postalCode', v)} required />
                    </div>
                  </div>
                </div>
              )}

              {formData.step === 2 && (
                <div className="space-y-12">
                  <div className="space-y-6">
                    <div className="flex items-center gap-3 text-blue-600 mb-6">
                      <Shield className="w-6 h-6" />
                      <h3 className="text-xl font-bold uppercase tracking-wider">Guardian 1 Information</h3>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <InputField label="First Name" value={formData.guardian1.firstName} onChange={(v) => handleChange('guardian1', 'firstName', v)} required />
                      <InputField label="Last Name" value={formData.guardian1.lastName} onChange={(v) => handleChange('guardian1', 'lastName', v)} required />
                    </div>
                    <InputField label="Relationship to Student" value={formData.guardian1.relationship} onChange={(v) => handleChange('guardian1', 'relationship', v)} required full />
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <InputField label="Home Phone" type="tel" value={formData.guardian1.homePhone} onChange={(v) => handleChange('guardian1', 'homePhone', v)} icon={<Phone className="w-4 h-4" />} placeholder="(000) 000-0000" />
                      <InputField label="Cell Phone" type="tel" value={formData.guardian1.cellPhone} onChange={(v) => handleChange('guardian1', 'cellPhone', v)} required icon={<Phone className="w-4 h-4" />} placeholder="(000) 000-0000" />
                    </div>
                    <InputField label="Email" type="email" value={formData.guardian1.email} onChange={(v) => handleChange('guardian1', 'email', v)} required full icon={<Mail className="w-4 h-4" />} placeholder="example@example.com" />
                  </div>

                  <div className="pt-8 border-t border-gray-100">
                    <div className="flex items-center gap-3 text-blue-600 mb-6">
                      <Shield className="w-6 h-6 opacity-50" />
                      <h3 className="text-xl font-bold uppercase tracking-wider">Guardian 2 Information (Optional)</h3>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <InputField label="First Name" value={formData.guardian2.firstName} onChange={(v) => handleChange('guardian2', 'firstName', v)} />
                      <InputField label="Last Name" value={formData.guardian2.lastName} onChange={(v) => handleChange('guardian2', 'lastName', v)} />
                    </div>
                    <InputField label="Relationship to Student" value={formData.guardian2.relationship} onChange={(v) => handleChange('guardian2', 'relationship', v)} full />
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <InputField label="Home Phone" type="tel" value={formData.guardian2.homePhone} onChange={(v) => handleChange('guardian2', 'homePhone', v)} icon={<Phone className="w-4 h-4" />} placeholder="(000) 000-0000" />
                      <InputField label="Cell Phone" type="tel" value={formData.guardian2.cellPhone} onChange={(v) => handleChange('guardian2', 'cellPhone', v)} icon={<Phone className="w-4 h-4" />} placeholder="(000) 000-0000" />
                    </div>
                    <InputField label="Email" type="email" value={formData.guardian2.email} onChange={(v) => handleChange('guardian2', 'email', v)} full icon={<Mail className="w-4 h-4" />} placeholder="example@example.com" />
                  </div>
                </div>
              )}

              {formData.step === 3 && (
                <div className="space-y-6">
                  <div className="flex items-center gap-3 text-blue-600 mb-6">
                    <Phone className="w-6 h-6" />
                    <h3 className="text-xl font-bold uppercase tracking-wider">Emergency Contact</h3>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <InputField label="First Name" value={formData.emergency.firstName} onChange={(v) => handleChange('emergency', 'firstName', v)} required />
                    <InputField label="Last Name" value={formData.emergency.lastName} onChange={(v) => handleChange('emergency', 'lastName', v)} required />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <InputField label="Home Phone" type="tel" value={formData.emergency.homePhone} onChange={(v) => handleChange('emergency', 'homePhone', v)} icon={<Phone className="w-4 h-4" />} placeholder="(000) 000-0000" />
                    <InputField label="Cell Phone" type="tel" value={formData.emergency.cellPhone} onChange={(v) => handleChange('emergency', 'cellPhone', v)} required icon={<Phone className="w-4 h-4" />} placeholder="(000) 000-0000" />
                  </div>
                  <InputField label="Email" type="email" value={formData.emergency.email} onChange={(v) => handleChange('emergency', 'email', v)} required full icon={<Mail className="w-4 h-4" />} placeholder="example@example.com" />
                </div>
              )}

              {formData.step === 4 && (
                <div className="space-y-10 animate-in fade-in slide-in-from-right-4 duration-500">
                  {/* Pricing Configuration Setup */}
                  <div>
                    <div className="flex items-center gap-3 text-blue-600 mb-6">
                      <CreditCard className="w-6 h-6" />
                      <h3 className="text-xl font-bold uppercase tracking-wider">Program Customization &amp; Payment</h3>
                    </div>

                    <div className="grid grid-cols-1 gap-4">
                      <div className="bg-white border border-gray-200 rounded-xl p-5">
                        <p className="font-bold text-gray-900 text-base mb-1">BJJ &amp; Robotics Summer Camp Options</p>
                        <p className="text-xs text-gray-500 mb-3">Select your weeks first, then decide if each selected week is full day or half day.</p>
                        <p className="text-xs text-gray-500 mb-4">Full Day is <span className="font-semibold text-gray-900">$350/week</span>, Half Day is <span className="font-semibold text-gray-900">$200/week</span>.</p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-4">
                          {summerCampWeekOptions.map((weekOption) => {
                            const selectedWeek = formData.programs.summerCamp.weeks.find((week) => week.id === weekOption.id);
                            return (
                              <div key={weekOption.id} className="rounded-2xl border border-gray-200 p-4 hover:border-blue-300 transition-all">
                                <label className="flex items-center gap-3 cursor-pointer">
                                  <input
                                    type="checkbox"
                                    className="w-4 h-4 text-blue-600 border-gray-300 rounded"
                                    checked={Boolean(selectedWeek)}
                                    onChange={(e) => toggleSummerCampWeek(weekOption.id, weekOption.label, e.target.checked)}
                                  />
                                  <span className="text-gray-900 text-sm">{weekOption.label}</span>
                                </label>

                                {selectedWeek && (
                                  <div className="mt-3 flex flex-wrap items-center gap-2 text-sm">
                                    <span className="text-gray-600">Pace:</span>
                                    <button
                                      type="button"
                                      onClick={() => setSummerCampWeekType(weekOption.id, 'fullday')}
                                      className={`px-3 py-2 rounded-full border text-sm font-semibold transition ${selectedWeek.type === 'fullday' ? 'border-blue-600 bg-blue-50 text-blue-700' : 'border-gray-300 bg-white text-gray-700 hover:border-blue-400'}`}
                                    >
                                      Full Day
                                    </button>
                                    <button
                                      type="button"
                                      onClick={() => setSummerCampWeekType(weekOption.id, 'halfday')}
                                      className={`px-3 py-2 rounded-full border text-sm font-semibold transition ${selectedWeek.type === 'halfday' ? 'border-purple-600 bg-purple-50 text-purple-700' : 'border-gray-300 bg-white text-gray-700 hover:border-purple-400'}`}
                                    >
                                      Half Day
                                    </button>
                                  </div>
                                )}
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                    <p className="text-xs text-gray-400 mt-3">* All calculated configurations are tax-included.</p>
                  </div>

                  {/* Discounts Info Panel */}
                  <div className="bg-green-50 border border-green-200 rounded-2xl p-6">
                    <h4 className="text-lg font-bold text-green-800 mb-3">Discounts &amp; Notes</h4>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li className="flex items-start gap-2"><span className="text-green-600 font-bold shrink-0">5%</span> off tuition for girls or same-family members</li>
                      <li className="flex items-start gap-2"><span className="text-green-600 font-bold shrink-0">10%</span> off for 2055 family &amp; friends and Mi3L School Recreational members</li>
                      <li className="flex items-start gap-2"><span className="text-green-600 font-bold shrink-0">25%</span> off tuition for former members/students</li>
                    </ul>
                  </div>

                  {/* Clean Order Summary Breakdown */}
                  <div className="bg-gray-50 rounded-2xl p-6 space-y-3">
                    {formData.programs.summerCamp.weeks.length > 0 ? (
                      <div className="space-y-3">
                        {formData.programs.summerCamp.weeks.map((week) => {
                          const cost = week.type === 'halfday' ? 200 : 350;
                          return (
                            <div key={week.id} className="flex justify-between items-center text-gray-600 text-sm">
                              <span>
                                {week.label} ({week.type === 'halfday' ? 'Half Day' : 'Full Day'})
                              </span>
                              <span>${cost}.00 CAD</span>
                            </div>
                          );
                        })}
                      </div>
                    ) : (
                      <div className="text-sm text-gray-500 italic">No weeks checked yet.</div>
                    )}
                    
                    <div className="flex justify-between items-center text-xl font-bold text-gray-900 pt-3 border-t border-gray-200">
                      <span>Total Invoice</span>
                      <span className="text-blue-600">${calculateTotal().toFixed(2)} CAD</span>
                    </div>
                  </div>

                  {/* Stripe Engine Render Hooks */}
                  {isPaymentLoading && (
                    <div className="text-center py-8 text-gray-400 text-sm">Loading secure payment portal...</div>
                  )}
                  {checkoutError && (
                    <div className="rounded-2xl border border-red-200 bg-red-50 px-4 py-3 text-red-800 text-sm mb-4">
                      {checkoutError}
                    </div>
                  )}
                  {checkoutClientSecret && !isPaymentLoading && calculateTotal() > 0 && (
                    <div className="mt-6">
                      <p className="text-sm text-gray-500 text-center uppercase tracking-widest font-bold mb-4">Secure Checkout Powered by Stripe</p>
                      <EmbeddedCheckoutProvider
                        stripe={stripePromise}
                        options={{ clientSecret: checkoutClientSecret }}
                      >
                        <EmbeddedCheckout />
                      </EmbeddedCheckoutProvider>
                    </div>
                  )}
                  {!checkoutClientSecret && !isPaymentLoading && calculateTotal() === 0 && (
                    <p className="text-sm text-amber-600 text-center font-medium">Please select a camp format and at least one week to initialize payment.</p>
                  )}
                </div>
              )}

              {/* Form Navigation Controls */}
              <div className="flex flex-col md:flex-row justify-between pt-10 gap-4">
                {formData.step > 1 ? (
                  <button
                    type="button"
                    onClick={prevStep}
                    className="flex items-center justify-center gap-2 px-8 py-4 text-gray-600 font-bold bg-gray-100 rounded-2xl hover:bg-gray-200 transition-all group"
                  >
                    <ChevronLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
                    Back
                  </button>
                ) : <div />}

                {formData.step < 4 && (
                  <button
                    type="submit"
                    className="flex items-center justify-center gap-2 px-12 py-4 bg-blue-600 text-white font-bold rounded-2xl hover:bg-blue-700 shadow-xl hover:shadow-blue-200 transition-all group"
                  >
                    Next Step
                    <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </button>
                )}
              </div>
            </form>
          </div>
        </div>
      </section>

      <div className="py-12 text-center text-gray-400 text-sm">
        &copy; {new Date().getFullYear()} Mi3L School. All rights reserved.
      </div>
    </div>
  );
}

function InputField({ label, value, onChange, type = "text", required = false, full = false, icon, placeholder }: {
  label: string,
  value: string,
  onChange: (v: string) => void,
  type?: string,
  required?: boolean,
  full?: boolean,
  icon?: React.ReactNode,
  placeholder?: string
}) {
  return (
    <div className={`space-y-2 ${full ? 'w-full' : ''}`}>
      <label className="text-sm font-semibold text-gray-700 flex items-center gap-2">
        {icon} {label} {required && "*"}
      </label>
      <input
        type={type}
        required={required}
        placeholder={placeholder}
        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all outline-none text-black"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
}

export default function RegistrationPage() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center"><div className="text-gray-400">Loading...</div></div>}>
      <RegistrationInner />
    </Suspense>
  );
}