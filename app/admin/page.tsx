"use client";

import React, { useEffect, useState } from 'react';
import { Search, Loader2, Download, ChevronDown, ChevronUp } from 'lucide-react';

export default function AdminDashboard() {
    const [registrations, setRegistrations] = useState<any[]>([]);
    const [loading, setLoading] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');
    const [expandedId, setExpandedId] = useState<string | null>(null);
    const [password, setPassword] = useState('');
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [error, setError] = useState('');

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError('');
        try {
            const res = await fetch('/api/admin/registrations', {
                headers: { 'x-admin-password': password }
            });
            if (res.ok) {
                const data = await res.json();
                setRegistrations(data);
                setIsAuthenticated(true);
                localStorage.setItem('admin_password', password);
            } else {
                setError('Invalid password');
            }
        } catch (err) {
            setError('Auth failed');
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        const savedPassword = localStorage.getItem('admin_password');
        if (savedPassword) {
            setPassword(savedPassword);
            const autoLogin = async () => {
                setLoading(true);
                try {
                    const res = await fetch('/api/admin/registrations', {
                        headers: { 'x-admin-password': savedPassword }
                    });
                    if (res.ok) {
                        const data = await res.json();
                        setRegistrations(data);
                        setIsAuthenticated(true);
                    } else {
                        localStorage.removeItem('admin_password');
                    }
                } catch (err) {
                    console.error('Auto-login failed');
                } finally {
                    setLoading(false);
                }
            };
            autoLogin();
        }
    }, []);

    const filtered = registrations.filter(r =>
        `${r.student_first_name} ${r.student_last_name}`.toLowerCase().includes(searchTerm.toLowerCase()) ||
        r.guardian1_email.toLowerCase().includes(searchTerm.toLowerCase())
    );

    if (!isAuthenticated) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
                <div className="max-w-md w-full bg-white rounded-3xl shadow-xl p-8 md:p-12 text-center animate-in fade-in zoom-in duration-500">
                    <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                        <Loader2 className={loading ? "w-8 h-8 animate-spin" : "w-8 h-8"} />
                    </div>
                    <h1 className="text-2xl font-bold text-gray-900 mb-2">Admin Login</h1>
                    <p className="text-gray-500 mb-8">Enter the administration password to continue.</p>
                    <form onSubmit={handleLogin} className="space-y-4">
                        <input
                            type="password"
                            placeholder="Password"
                            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all outline-none text-black"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                        {error && <p className="text-red-500 text-sm font-medium">{error}</p>}
                        <button
                            type="submit"
                            disabled={loading}
                            className="w-full py-4 bg-blue-600 text-white font-bold rounded-2xl hover:bg-blue-700 shadow-xl transition-all disabled:opacity-50"
                        >
                            {loading ? "Authenticating..." : "Login"}
                        </button>
                    </form>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-50 p-6 md:p-12">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
                    <div>
                        <h1 className="text-3xl font-bold text-gray-900">Admin Console</h1>
                        <p className="text-gray-500">Manage student registrations and applications</p>
                    </div>
                    <div className="flex gap-4 w-full md:w-auto">
                        <div className="relative w-full md:w-96">
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                            <input
                                type="text"
                                placeholder="Search students or emails..."
                                className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none text-black"
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                            />
                        </div>
                        <button
                            onClick={() => {
                                localStorage.removeItem('admin_password');
                                setIsAuthenticated(false);
                                setRegistrations([]);
                            }}
                            className="px-4 py-2 text-sm font-medium text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                        >
                            Logout
                        </button>
                    </div>
                </div>

                <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="bg-gray-50 border-b border-gray-100">
                                <th className="px-6 py-4 font-semibold text-gray-700">Student Name</th>
                                <th className="px-6 py-4 font-semibold text-gray-700">Programs</th>
                                <th className="px-6 py-4 font-semibold text-gray-700">Amount</th>
                                <th className="px-6 py-4 font-semibold text-gray-700">Date</th>
                                <th className="px-6 py-4 font-semibold text-gray-700 text-right">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filtered.map((r) => (
                                <React.Fragment key={r.id}>
                                    <tr className="border-b border-gray-50 hover:bg-gray-50/50 transition-colors">
                                        <td className="px-6 py-4">
                                            <div className="font-medium text-gray-900">{r.student_first_name} {r.student_last_name}</div>
                                            <div className="text-sm text-gray-500">{r.guardian1_email}</div>
                                        </td>
                                        <td className="px-6 py-4">
                                            <div className="flex flex-wrap gap-1">
                                                {r.program_aerial_drone && <span className="px-2 py-0.5 bg-blue-100 text-blue-700 text-xs rounded-full">Drones</span>}
                                                {r.program_v5rc && <span className="px-2 py-0.5 bg-purple-100 text-purple-700 text-xs rounded-full">V5RC</span>}
                                                {r.program_vex_v5_robotics && <span className="px-2 py-0.5 bg-green-100 text-green-700 text-xs rounded-full">Vex V5</span>}
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 font-medium text-gray-900">${r.amount_paid}</td>
                                        <td className="px-6 py-4 text-sm text-gray-500">{new Date(r.created_at).toLocaleDateString()}</td>
                                        <td className="px-6 py-4 text-right">
                                            <button
                                                onClick={() => setExpandedId(expandedId === r.id ? null : r.id)}
                                                className="text-blue-600 hover:text-blue-800 font-medium inline-flex items-center gap-1"
                                            >
                                                {expandedId === r.id ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                                                Details
                                            </button>
                                        </td>
                                    </tr>
                                    {expandedId === r.id && (
                                        <tr>
                                            <td colSpan={5} className="px-6 py-8 bg-blue-50/30">
                                                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-sm">
                                                    <div className="space-y-2">
                                                        <h4 className="font-bold text-gray-900 uppercase tracking-wider text-xs">Student Info</h4>
                                                        <p className="text-gray-900"><span className="text-gray-500">DOB:</span> {r.student_dob}</p>
                                                        <p className="text-gray-900"><span className="text-gray-500">Gender:</span> {r.student_gender}</p>
                                                        <p className="text-gray-900"><span className="text-gray-500">Address:</span> {r.student_address}, {r.student_city}, {r.student_province}</p>
                                                    </div>
                                                    <div className="space-y-2">
                                                        <h4 className="font-bold text-gray-900 uppercase tracking-wider text-xs">Guardian Details</h4>
                                                        <p className="text-gray-900"><span className="text-gray-500">G1:</span> {r.guardian1_first_name} {r.guardian1_last_name} ({r.guardian1_relationship})</p>
                                                        <p className="text-gray-900"><span className="text-gray-500">Phone:</span> {r.guardian1_cell_phone}</p>
                                                        <p className="text-gray-900"><span className="text-gray-500">Email:</span> {r.guardian1_email}</p>
                                                        {r.guardian2_first_name && (
                                                            <>
                                                                <p className="text-gray-900 mt-2"><span className="text-gray-500">G2:</span> {r.guardian2_first_name} {r.guardian2_last_name} {r.guardian2_relationship ? `(${r.guardian2_relationship})` : ''}</p>
                                                                {r.guardian2_cell_phone && <p className="text-gray-900"><span className="text-gray-500">Phone:</span> {r.guardian2_cell_phone}</p>}
                                                                {r.guardian2_email && <p className="text-gray-900"><span className="text-gray-500">Email:</span> {r.guardian2_email}</p>}
                                                            </>
                                                        )}
                                                    </div>
                                                    <div className="space-y-2">
                                                        <h4 className="font-bold text-gray-900 uppercase tracking-wider text-xs">Emergency & Payment</h4>
                                                        <p className="text-gray-900"><span className="text-gray-500">Emergency:</span> {r.emergency1_first_name} {r.emergency1_last_name}{r.emergency1_relationship ? ` (${r.emergency1_relationship})` : ''}</p>
                                                        <p className="text-gray-900"><span className="text-gray-500">Phone:</span> {r.emergency1_cell_phone}</p>
                                                        {r.emergency1_email && <p className="text-gray-900"><span className="text-gray-500">Email:</span> {r.emergency1_email}</p>}
                                                        <p className="text-gray-900"><span className="text-gray-500">Stripe ID:</span> <span className="font-mono text-[10px] bg-gray-100 px-1 py-0.5 rounded text-gray-900">{r.payment_intent_id}</span></p>
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>
                                    )}
                                </React.Fragment>
                            ))}
                        </tbody>
                    </table>
                    {filtered.length === 0 && (
                        <div className="p-12 text-center text-gray-500">
                            No registrations found.
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
