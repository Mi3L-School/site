"use client";

import React, { useState, useEffect, useCallback, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { User, Shield, Phone, Mail, MapPin, Calendar as CalendarIcon, ChevronRight, ChevronLeft, CheckCircle2, CreditCard, Cpu, Award, Zap } from "lucide-react";
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
    grade: string;
    shirtSize: string;
    schoolName: string;
    experience: string;
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
    vexTeam: boolean;
    vexTeamDiv: "middleschool" | "highschool" | "";
    vexRole: string[];
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
    grade: "",
    shirtSize: "",
    schoolName: "",
    experience: "beginner",
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
    vexTeam: true,
    vexTeamDiv: "highschool", // Default selection
    vexRole: [],
  },
};

function VexRegistrationInner() {
  const searchParams = useSearchParams();
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
        firstName: "Leo",
        middleName: "Newton",
        lastName: "Tesla",
        dob: "07-10-2011",
        gender: "M",
        address: "456 Robot Way",
        address2: "Lab 3",
        city: "Oakville",
        province: "Ontario",
        postalCode: "L6H 5T7",
        grade: "8",
        shirtSize: "M",
        schoolName: "Oakville Science Academy",
        experience: "intermediate",
      },
      guardian1: {
        firstName: "Sarah",
        lastName: "Tesla",
        relationship: "Mother",
        homePhone: "(905) 555-9876",
        cellPhone: "(905) 555-1234",
        email: "sarah.tesla@example.com",
      },
      guardian2: {
        firstName: "Nikola",
        lastName: "Tesla",
        relationship: "Father",
        homePhone: "",
        cellPhone: "(905) 555-5678",
        email: "nikola.tesla@example.com",
      },
      emergency: {
        firstName: "Uncle",
        lastName: "Albert",
        homePhone: "",
        cellPhone: "(905) 555-9999",
        email: "albert.e@example.com",
      },
      programs: {
        vexTeam: true,
        vexTeamDiv: "middleschool",
        vexRole: ["Programmer", "Builder"],
      },
    });
  };

  const nextStep = () => {
    setFormData(prev => ({ ...prev, step: prev.step + 1 }));
  };

  const calculateTotal = (data?: FormState) => {
    const programs = data ? data.programs : formData.programs;
    if (programs.vexTeam) {
      return programs.vexTeamDiv === "highschool" ? 650 : 550;
    }
    return 0;
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
      localStorage.setItem('mi3l_vex_registration_draft', JSON.stringify(formData));
      const res = await fetch('/api/create-checkout-session', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          programs: formData.programs,
          origin: window.location.origin,
          metadata: { 
            studentName: `${formData.student.firstName} ${formData.student.lastName}`,
            registrationType: 'VEX Competition Team',
            division: formData.programs.vexTeamDiv
          },
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
  }, [formData.step, formData.programs.vexTeamDiv, fetchCheckoutSession]);

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
          const draft = localStorage.getItem('mi3l_vex_registration_draft');
          if (draft) {
            const savedForm = JSON.parse(draft);
            await handleSaveRegistration(data.paymentIntentId as string, savedForm, data.amountTotal);
            localStorage.removeItem('mi3l_vex_registration_draft');
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

  const handleProgramChange = (field: string, value: any) => {
    setFormData(prev => ({
      ...prev,
      programs: {
        ...prev.programs,
        [field]: value
      }
    }));
  };

  const toggleRolePreference = (role: string) => {
    setFormData(prev => {
      const exists = prev.programs.vexRole.includes(role);
      const nextRoles = exists 
        ? prev.programs.vexRole.filter(r => r !== role) 
        : [...prev.programs.vexRole, role];
      return {
        ...prev,
        programs: {
          ...prev.programs,
          vexRole: nextRoles
        }
      };
    });
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
            className={`w-10 h-10 rounded-full flex items-center justify-center font-bold transition-all duration-300 ${formData.step >= s ? "bg-orange-500 text-white ring-4 ring-orange-950/20" : "bg-gray-800 text-gray-500"
              }`}
          >
            {formData.step > s ? <CheckCircle2 className="w-6 h-6" /> : s}
          </div>
          {s < 4 && (
            <div
              className={`w-12 h-1 mx-2 transition-all duration-500 ${formData.step > s ? "bg-orange-500" : "bg-gray-800"
                }`}
            />
          )}
        </React.Fragment>
      ))}
    </div>
  );

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gray-950 flex items-center justify-center p-4">
        <div className="max-w-md w-full text-center space-y-6 bg-gray-900 border border-orange-500/20 rounded-3xl p-8 shadow-2xl animate-in fade-in zoom-in duration-500">
          <div className="w-20 h-20 bg-orange-500/10 border border-orange-500/30 text-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
            <CheckCircle2 className="w-12 h-12" />
          </div>
          <h2 className="text-3xl font-bold text-white">Application Received!</h2>
          <p className="text-gray-400">
            Thank you for applying. Your VEX Robotics Competition Team season payment was successful and we have secured your slot.
          </p>
          <button
            onClick={() => { setFormData(initialState); setIsSubmitted(false); }}
            className="w-full py-4 bg-orange-500 text-white rounded-xl font-bold hover:bg-orange-600 transition-all hover:scale-[1.02] duration-200"
          >
            Register Another Student
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-950 text-gray-100 flex flex-col font-sans selection:bg-orange-500/30 selection:text-white">
      {/* VEX Robotics Hero Section */}
      <section className="relative bg-gradient-to-b from-gray-900 via-gray-950 to-gray-950 pt-32 pb-48 overflow-hidden border-b border-orange-500/10">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(249,115,22,0.15),transparent)]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 mb-4 text-xs font-bold uppercase tracking-wider text-orange-400 bg-orange-500/10 border border-orange-500/20 rounded-full">
            <Cpu className="w-3.5 h-3.5" /> VEX V5RC Season 2025-2026
          </span>
          <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-4 tracking-tight">
            Join the VEX Team
          </h1>
          <p className="text-gray-400 text-xl max-w-xl mx-auto">
            Secure your spot in our championship-winning robotics program.
          </p>
        </div>

        {/* Diagonal Wave shape */}
        <div className="absolute bottom-0 left-0 w-full leading-[0] transform rotate-180" aria-hidden="true">
          <svg viewBox="0 0 1000 100" preserveAspectRatio="none" className="relative block w-[calc(100%+1.3px)] h-[100px] fill-gray-950">
            <path opacity="0.33" d="M473,67.3c-203.9,88.3-263.1-34-320.3,0C66,119.1,0,59.7,0,59.7V0h1000v59.7 c0,0-62.1,26.1-94.9,29.3c-32.8,3.3-62.8-12.3-75.8-22.1C806,49.6,745.3,8.7,694.9,4.7S492.4,59,473,67.3z"></path>
            <path opacity="0.66" d="M734,67.3c-45.5,0-77.2-23.2-129.1-39.1c-28.6-8.7-150.3-10.1-254,39.1 s-91.7-34.4-149.2,0C115.7,118.3,0,39.8,0,39.8V0h1000v36.5c0,0-28.2-18.5-92.1-18.5C810.2,18.1,775.7,67.3,734,67.3z"></path>
            <path d="M766.1,28.9c-200-57.5-266,65.5-395.1,19.5C242,1.8,242,5.4,184.8,20.6C128,35.8,132.3,44.9,89.9,52.5C28.6,63.7,0,0,0,0 h1000c0,0-9.9,40.9-83.6,48.1S829.6,47,766.1,28.9z"></path>
          </svg>
        </div>
      </section>

      {/* Form Area */}
      <section className="py-20 -mt-24 px-4 relative z-20">
        <div className="max-w-4xl mx-auto bg-gray-900/90 border border-gray-800 rounded-3xl shadow-2xl backdrop-blur-md overflow-hidden">
          <div className="p-8 md:p-12">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold text-white mb-2">
                Team Application & Payment Portal
              </h2>
              <div className="w-16 h-1 bg-orange-500 mx-auto rounded-full"></div>
              {isDev && (
                <button
                  type="button"
                  onClick={devFill}
                  className="mt-4 px-4 py-2 bg-orange-500/10 text-orange-400 text-xs font-bold rounded-full hover:bg-orange-500/20 transition-all border border-orange-500/20"
                >
                  🛠️ DEV: FILL & GO TO STEP 4
                </button>
              )}
            </div>

            {renderStepIndicator()}

            <form onSubmit={handleSubmit} className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
              
              {/* STEP 1: Student Information */}
              {formData.step === 1 && (
                <div className="space-y-6">
                  <div className="flex items-center gap-3 text-orange-500 mb-6">
                    <User className="w-6 h-6" />
                    <h3 className="text-xl font-bold uppercase tracking-wider">Student Information</h3>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <InputField label="First Name" value={formData.student.firstName} onChange={(v) => handleChange('student', 'firstName', v)} required />
                    <InputField label="Middle Name" value={formData.student.middleName} onChange={(v) => handleChange('student', 'middleName', v)} />
                    <InputField label="Last Name" value={formData.student.lastName} onChange={(v) => handleChange('student', 'lastName', v)} required />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-gray-300 flex items-center gap-2">
                        <CalendarIcon className="w-4 h-4 text-orange-500" /> Date of Birth *
                      </label>
                      <input
                        type="text"
                        inputMode="numeric"
                        placeholder="MM-DD-YYYY"
                        required
                        className="w-full px-4 py-3 bg-gray-950 border border-gray-800 focus:border-orange-500 focus:ring-2 focus:ring-orange-950/40 rounded-xl transition-all outline-none text-white"
                        value={formData.student.dob}
                        onChange={(e) => handleChange('student', 'dob', e.target.value)}
                        maxLength={10}
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-gray-300">Gender *</label>
                      <select
                        required
                        className="w-full px-4 py-3 bg-gray-950 border border-gray-800 focus:border-orange-500 focus:ring-2 focus:ring-orange-950/40 rounded-xl transition-all outline-none text-white"
                        value={formData.student.gender}
                        onChange={(e) => handleChange('student', 'gender', e.target.value)}
                      >
                        <option value="">Please Select</option>
                        <option value="F">Female</option>
                        <option value="M">Male</option>
                        <option value="O">Other</option>
                      </select>
                    </div>
                    <InputField label="School Name" value={formData.student.schoolName} onChange={(v) => handleChange('student', 'schoolName', v)} required />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-gray-300">Current Grade *</label>
                      <select
                        required
                        className="w-full px-4 py-3 bg-gray-950 border border-gray-800 focus:border-orange-500 focus:ring-2 focus:ring-orange-950/40 rounded-xl transition-all outline-none text-white"
                        value={formData.student.grade}
                        onChange={(e) => handleChange('student', 'grade', e.target.value)}
                      >
                        <option value="">Please Select</option>
                        {["4", "5", "6", "7", "8", "9", "10", "11", "12"].map((g) => (
                          <option key={g} value={g}>Grade {g}</option>
                        ))}
                      </select>
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-gray-300">Uniform Shirt Size *</label>
                      <select
                        required
                        className="w-full px-4 py-3 bg-gray-950 border border-gray-800 focus:border-orange-500 focus:ring-2 focus:ring-orange-950/40 rounded-xl transition-all outline-none text-white"
                        value={formData.student.shirtSize}
                        onChange={(e) => handleChange('student', 'shirtSize', e.target.value)}
                      >
                        <option value="">Please Select</option>
                        {["Youth S", "Youth M", "Youth L", "Adult S", "Adult M", "Adult L", "Adult XL"].map((size) => (
                          <option key={size} value={size}>{size}</option>
                        ))}
                      </select>
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-gray-300">Robotics Experience *</label>
                      <select
                        required
                        className="w-full px-4 py-3 bg-gray-950 border border-gray-800 focus:border-orange-500 focus:ring-2 focus:ring-orange-950/40 rounded-xl transition-all outline-none text-white"
                        value={formData.student.experience}
                        onChange={(e) => handleChange('student', 'experience', e.target.value)}
                      >
                        <option value="beginner">Beginner (No experience)</option>
                        <option value="intermediate">Intermediate (IQ or FLL)</option>
                        <option value="advanced">Advanced (VRC or FRC)</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-center gap-3 text-gray-300 mt-8 mb-4">
                      <MapPin className="w-5 h-5 text-orange-500" />
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

              {/* STEP 2: Parents/Guardians */}
              {formData.step === 2 && (
                <div className="space-y-12">
                  <div className="space-y-6">
                    <div className="flex items-center gap-3 text-orange-500 mb-6">
                      <Shield className="w-6 h-6" />
                      <h3 className="text-xl font-bold uppercase tracking-wider">Guardian 1 Information</h3>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <InputField label="First Name" value={formData.guardian1.firstName} onChange={(v) => handleChange('guardian1', 'firstName', v)} required />
                      <InputField label="Last Name" value={formData.guardian1.lastName} onChange={(v) => handleChange('guardian1', 'lastName', v)} required />
                    </div>
                    <InputField label="Relationship to Student" value={formData.guardian1.relationship} onChange={(v) => handleChange('guardian1', 'relationship', v)} required full />
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <InputField label="Home Phone" type="tel" value={formData.guardian1.homePhone} onChange={(v) => handleChange('guardian1', 'homePhone', v)} icon={<Phone className="w-4 h-4 text-orange-500" />} placeholder="(000) 000-0000" />
                      <InputField label="Cell Phone" type="tel" value={formData.guardian1.cellPhone} onChange={(v) => handleChange('guardian1', 'cellPhone', v)} required icon={<Phone className="w-4 h-4 text-orange-500" />} placeholder="(000) 000-0000" />
                    </div>
                    <InputField label="Email" type="email" value={formData.guardian1.email} onChange={(v) => handleChange('guardian1', 'email', v)} required full icon={<Mail className="w-4 h-4 text-orange-500" />} placeholder="example@example.com" />
                  </div>

                  <div className="pt-8 border-t border-gray-800">
                    <div className="flex items-center gap-3 text-orange-500 mb-6">
                      <Shield className="w-6 h-6 opacity-50" />
                      <h3 className="text-xl font-bold uppercase tracking-wider">Guardian 2 Information (Optional)</h3>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <InputField label="First Name" value={formData.guardian2.firstName} onChange={(v) => handleChange('guardian2', 'firstName', v)} />
                      <InputField label="Last Name" value={formData.guardian2.lastName} onChange={(v) => handleChange('guardian2', 'lastName', v)} />
                    </div>
                    <InputField label="Relationship to Student" value={formData.guardian2.relationship} onChange={(v) => handleChange('guardian2', 'relationship', v)} full />
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <InputField label="Home Phone" type="tel" value={formData.guardian2.homePhone} onChange={(v) => handleChange('guardian2', 'homePhone', v)} icon={<Phone className="w-4 h-4 text-orange-500" />} placeholder="(000) 000-0000" />
                      <InputField label="Cell Phone" type="tel" value={formData.guardian2.cellPhone} onChange={(v) => handleChange('guardian2', 'cellPhone', v)} icon={<Phone className="w-4 h-4 text-orange-500" />} placeholder="(000) 000-0000" />
                    </div>
                    <InputField label="Email" type="email" value={formData.guardian2.email} onChange={(v) => handleChange('guardian2', 'email', v)} full icon={<Mail className="w-4 h-4 text-orange-500" />} placeholder="example@example.com" />
                  </div>
                </div>
              )}

              {/* STEP 3: Emergency Contacts */}
              {formData.step === 3 && (
                <div className="space-y-6">
                  <div className="flex items-center gap-3 text-orange-500 mb-6">
                    <Phone className="w-6 h-6" />
                    <h3 className="text-xl font-bold uppercase tracking-wider">Emergency Contact</h3>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <InputField label="First Name" value={formData.emergency.firstName} onChange={(v) => handleChange('emergency', 'firstName', v)} required />
                    <InputField label="Last Name" value={formData.emergency.lastName} onChange={(v) => handleChange('emergency', 'lastName', v)} required />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <InputField label="Home Phone" type="tel" value={formData.emergency.homePhone} onChange={(v) => handleChange('emergency', 'homePhone', v)} icon={<Phone className="w-4 h-4 text-orange-500" />} placeholder="(000) 000-0000" />
                    <InputField label="Cell Phone" type="tel" value={formData.emergency.cellPhone} onChange={(v) => handleChange('emergency', 'cellPhone', v)} required icon={<Phone className="w-4 h-4 text-orange-500" />} placeholder="(000) 000-0000" />
                  </div>
                  <InputField label="Email" type="email" value={formData.emergency.email} onChange={(v) => handleChange('emergency', 'email', v)} required full icon={<Mail className="w-4 h-4 text-orange-500" />} placeholder="example@example.com" />
                </div>
              )}

              {/* STEP 4: Division, Roles & Payment */}
              {formData.step === 4 && (
                <div className="space-y-10 animate-in fade-in slide-in-from-right-4 duration-500">
                  
                  {/* Package & Role Options */}
                  <div className="space-y-6">
                    <div className="flex items-center gap-3 text-orange-500 mb-6">
                      <CreditCard className="w-6 h-6" />
                      <h3 className="text-xl font-bold uppercase tracking-wider">VEX Season Options &amp; Payment</h3>
                    </div>

                    <div className="bg-gray-950 border border-gray-800 rounded-2xl p-6 space-y-6">
                      <div>
                        <label className="block text-sm font-bold text-gray-300 mb-3">1. Select VEX Division Team</label>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <button
                            type="button"
                            onClick={() => handleProgramChange("vexTeamDiv", "middleschool")}
                            className={`flex flex-col text-left p-5 rounded-2xl border transition-all ${
                              formData.programs.vexTeamDiv === "middleschool"
                                ? "border-orange-500 bg-orange-500/5 shadow-lg shadow-orange-500/5 text-white"
                                : "border-gray-800 bg-gray-900/50 text-gray-400 hover:border-gray-700"
                            }`}
                          >
                            <span className="font-extrabold text-lg text-white">V5RC Middle School Team</span>
                            <span className="text-xs text-gray-500 mt-1 mb-4">Grades 5 to 8 • Oakville Campus</span>
                            <span className="text-2xl font-black text-orange-400 mt-auto">$550.00 <span className="text-xs font-semibold text-gray-400">CAD</span></span>
                          </button>

                          <button
                            type="button"
                            onClick={() => handleProgramChange("vexTeamDiv", "highschool")}
                            className={`flex flex-col text-left p-5 rounded-2xl border transition-all ${
                              formData.programs.vexTeamDiv === "highschool"
                                ? "border-orange-500 bg-orange-500/5 shadow-lg shadow-orange-500/5 text-white"
                                : "border-gray-800 bg-gray-900/50 text-gray-400 hover:border-gray-700"
                            }`}
                          >
                            <span className="font-extrabold text-lg text-white">V5RC High School Team</span>
                            <span className="text-xs text-gray-500 mt-1 mb-4">Grades 9 to 12 • Oakville Campus</span>
                            <span className="text-2xl font-black text-orange-400 mt-auto">$650.00 <span className="text-xs font-semibold text-gray-400">CAD</span></span>
                          </button>
                        </div>
                      </div>

                      <div className="pt-4 border-t border-gray-800">
                        <label className="block text-sm font-bold text-gray-300 mb-2">2. Preferred Team Roles (Select all that apply)</label>
                        <p className="text-xs text-gray-500 mb-4">These preferences help coaches balance builders, drivers, and programmers in team units.</p>
                        
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                          {["Builder", "Programmer", "Driver", "Notebook / Design"].map((role) => {
                            const isChecked = formData.programs.vexRole.includes(role);
                            return (
                              <button
                                key={role}
                                type="button"
                                onClick={() => toggleRolePreference(role)}
                                className={`py-3 px-4 rounded-xl border text-sm font-bold text-center transition-all ${
                                  isChecked
                                    ? "bg-orange-500/10 border-orange-500 text-orange-400 shadow-sm"
                                    : "bg-gray-900 border-gray-800 text-gray-400 hover:border-gray-700"
                                }`}
                              >
                                {role}
                              </button>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Pricing Details Panel */}
                  <div className="bg-orange-500/5 border border-orange-500/20 rounded-2xl p-6 flex items-start gap-4">
                    <div className="p-3 bg-orange-500/10 rounded-xl text-orange-400 shrink-0 border border-orange-500/20">
                      <Zap className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-white mb-1">Discounts &amp; Season Inclusions</h4>
                      <p className="text-sm text-gray-400 leading-relaxed">
                        Fee covers tournament entry fees, high-performance VEX V5 hardware access, customized jerseys, weekly workspace lab hours, and engineering guidance by award-winning Waterloo Mechatronics alumni. 
                      </p>
                      <ul className="mt-3 space-y-1 text-xs text-gray-500">
                        <li>• 5% discount applied for girls/same-family registrants.</li>
                        <li>• 10% discount for existing recreational/re-joining members.</li>
                      </ul>
                    </div>
                  </div>

                  {/* Summary */}
                  <div className="bg-gray-950 rounded-2xl p-6 border border-gray-800 space-y-3">
                    <div className="flex justify-between items-center text-gray-400 text-sm">
                      <span>VEX V5RC Competition Team Season Registration</span>
                      <span>${calculateTotal().toFixed(2)} CAD</span>
                    </div>
                    <div className="flex justify-between items-center text-gray-500 text-xs pb-3 border-b border-gray-800">
                      <span>Division: {formData.programs.vexTeamDiv === "highschool" ? "High School (Grades 9-12)" : "Middle School (Grades 5-8)"}</span>
                      <span>Tax-inclusive</span>
                    </div>
                    <div className="flex justify-between items-center text-2xl font-black text-white pt-2">
                      <span>Total Season Fee</span>
                      <span className="text-orange-500">${calculateTotal().toFixed(2)} CAD</span>
                    </div>
                  </div>

                  {/* Stripe Checkout Portal */}
                  {isPaymentLoading && (
                    <div className="text-center py-8 text-gray-400 text-sm flex items-center justify-center gap-2">
                      <span className="w-5 h-5 border-2 border-orange-500 border-t-transparent rounded-full animate-spin"></span>
                      Initializing secure payment portal...
                    </div>
                  )}
                  {checkoutError && (
                    <div className="rounded-2xl border border-red-500/20 bg-red-950/20 px-4 py-3 text-red-400 text-sm border-l-4 border-l-red-500">
                      {checkoutError}
                    </div>
                  )}
                  {checkoutClientSecret && !isPaymentLoading && (
                    <div className="mt-6 border border-orange-500/10 rounded-2xl p-4 bg-gray-950/30">
                      <p className="text-xs text-gray-500 text-center uppercase tracking-widest font-black mb-4">Secure Payment Secured by Stripe</p>
                      <EmbeddedCheckoutProvider
                        stripe={stripePromise}
                        options={{ clientSecret: checkoutClientSecret }}
                      >
                        <EmbeddedCheckout />
                      </EmbeddedCheckoutProvider>
                    </div>
                  )}
                </div>
              )}

              {/* Navigation buttons */}
              <div className="flex flex-col md:flex-row justify-between pt-10 border-t border-gray-800/50 gap-4">
                {formData.step > 1 ? (
                  <button
                    type="button"
                    onClick={prevStep}
                    className="flex items-center justify-center gap-2 px-8 py-4 text-gray-300 font-bold bg-gray-800 rounded-2xl hover:bg-gray-700 transition-all duration-200 group hover:scale-[1.02]"
                  >
                    <ChevronLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
                    Back
                  </button>
                ) : <div />}

                {formData.step < 4 && (
                  <button
                    type="submit"
                    className="flex items-center justify-center gap-2 px-12 py-4 bg-orange-500 text-white font-bold rounded-2xl hover:bg-orange-600 shadow-lg shadow-orange-500/15 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 group ml-auto"
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

      {/* Footer */}
      <div className="py-12 text-center text-gray-500 text-sm border-t border-gray-900 bg-gray-950 mt-auto">
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
      <label className="text-sm font-semibold text-gray-300 flex items-center gap-2">
        {icon} {label} {required && "*"}
      </label>
      <input
        type={type}
        required={required}
        placeholder={placeholder}
        className="w-full px-4 py-3 bg-gray-950 border border-gray-800 focus:border-orange-500 focus:ring-2 focus:ring-orange-950/40 rounded-xl transition-all outline-none text-white placeholder-gray-600"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
}

export default function VexRegistrationPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-gray-950 flex items-center justify-center text-gray-400">
        <span className="w-6 h-6 border-2 border-orange-500 border-t-transparent rounded-full animate-spin mr-2"></span>
        Loading Application Portal...
      </div>
    }>
      <VexRegistrationInner />
    </Suspense>
  );
}
