import React, { useState } from 'react';
import { X, Send, CheckCircle2 } from 'lucide-react';
import { DESIGNER_INFO } from '../data/portfolioData';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: 'Brand Identity',
    timeline: 'Q3 2026',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div
      id="contact-modal-backdrop"
      className="fixed inset-0 z-50 bg-[#111111]/85 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 overflow-y-auto animate-in fade-in duration-200"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div
        id="contact-modal-content"
        className="w-full max-w-2xl bg-[#F5F1EA] bg-dots border-2 border-[#111111] p-6 sm:p-10 shadow-[8px_8px_0px_#111111] relative animate-in zoom-in-95 duration-200"
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 w-9 h-9 border border-[#111111] bg-[#F5F1EA] hover:bg-[#FF4D2E] hover:text-[#F5F1EA] text-[#111111] shadow-[2px_2px_0px_#111111] transition-all flex items-center justify-center"
          aria-label="Close form"
        >
          <X size={18} />
        </button>

        {submitted ? (
          <div className="py-12 text-center space-y-6">
            <div className="w-16 h-16 bg-[#111111] text-[#D8FF00] border-2 border-[#111111] shadow-[4px_4px_0px_#111111] flex items-center justify-center mx-auto">
              <CheckCircle2 size={32} />
            </div>
            <div>
              <h3 className="font-display text-4xl uppercase tracking-tight text-[#111111]">
                TRANSMISSION RECEIVED
              </h3>
              <p className="font-body text-base text-[#111111] max-w-md mx-auto mt-2 font-medium">
                Thank you, {formData.name || 'there'}. I have received your project inquiry and will review your requirements within 24 business hours.
              </p>
            </div>
            <div className="pt-4">
              <button
                onClick={() => {
                  setSubmitted(false);
                  onClose();
                }}
                className="px-8 py-3 bg-[#111111] text-[#F5F1EA] hover:bg-[#FF4D2E] border border-[#111111] shadow-[4px_4px_0px_#111111] transition-all font-grotesk text-xs font-bold uppercase tracking-widest"
              >
                RETURN TO PORTFOLIO
              </button>
            </div>
          </div>
        ) : (
          <div className="space-y-6">
            <div>
              <span className="font-mono text-xs text-[#FF4D2E] font-bold uppercase">
                [PROJECT INQUIRY // 2026]
              </span>
              <h3 className="font-display text-4xl sm:text-5xl uppercase tracking-tight text-[#111111] mt-1 leading-[0.9]">
                START A COMMISSION
              </h3>
              <p className="font-body text-xs sm:text-sm text-[#111111]/80 mt-2">
                Fill out the project scope below, or email directly at{' '}
                <a
                  href={`mailto:${DESIGNER_INFO.email}`}
                  className="font-bold text-[#FF4D2E] underline hover:text-[#111111]"
                >
                  {DESIGNER_INFO.email}
                </a>
                .
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="block font-grotesk text-xs font-bold uppercase text-[#111111]">
                    YOUR NAME *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Maya Lin"
                    className="w-full px-4 py-3 bg-[#F5F1EA] border border-[#111111] shadow-[2px_2px_0px_#111111] focus:bg-white outline-none font-grotesk text-sm text-[#111111]"
                  />
                </div>

                <div className="space-y-1">
                  <label className="block font-grotesk text-xs font-bold uppercase text-[#111111]">
                    EMAIL ADDRESS *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="maya@company.com"
                    className="w-full px-4 py-3 bg-[#F5F1EA] border border-[#111111] shadow-[2px_2px_0px_#111111] focus:bg-white outline-none font-grotesk text-sm text-[#111111]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="block font-grotesk text-xs font-bold uppercase text-[#111111]">
                    PRIMARY DISCIPLINE
                  </label>
                  <select
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full px-4 py-3 bg-[#F5F1EA] border border-[#111111] shadow-[2px_2px_0px_#111111] focus:bg-white outline-none font-grotesk text-sm text-[#111111]"
                  >
                    <option value="Brand Identity">01 // Brand Identity System</option>
                    <option value="Logofolio / Custom Mark">02 // Logofolio / Custom Mark</option>
                    <option value="Social Media Campaign">03 // Social Media Campaign</option>
                    <option value="Packaging Design">04 // Packaging Design</option>
                    <option value="Print Media & Editorial">05 // Print Media & Editorial</option>
                    <option value="Multiple Disciplines">Multiple / Full Retainer</option>
                  </select>
                </div>

                <div className="space-y-1">
                  <label className="block font-grotesk text-xs font-bold uppercase text-[#111111]">
                    TIMELINE / TARGET
                  </label>
                  <select
                    value={formData.timeline}
                    onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                    className="w-full px-4 py-3 bg-[#F5F1EA] border border-[#111111] shadow-[2px_2px_0px_#111111] focus:bg-white outline-none font-grotesk text-sm text-[#111111]"
                  >
                    <option value="Immediate (1-2 weeks)">Immediate (1-2 weeks)</option>
                    <option value="Q3 2026">Q3 2026</option>
                    <option value="Q4 2026">Q4 2026</option>
                    <option value="Flexible / 2027">Flexible / 2027</option>
                  </select>
                </div>
              </div>

              <div className="space-y-1">
                <label className="block font-grotesk text-xs font-bold uppercase text-[#111111]">
                  PROJECT BRIEF & OBJECTIVES
                </label>
                <textarea
                  rows={4}
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Describe your brand, deliverables, goals, and any reference aesthetic..."
                  className="w-full px-4 py-3 bg-[#F5F1EA] border border-[#111111] shadow-[2px_2px_0px_#111111] focus:bg-white outline-none font-grotesk text-sm text-[#111111]"
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 bg-[#FF4D2E] hover:bg-[#D8FF00] hover:text-[#111111] text-[#F5F1EA] transition-all border border-[#111111] shadow-[4px_4px_0px_#111111] font-grotesk text-xs font-bold uppercase tracking-widest flex items-center justify-center gap-2"
              >
                <Send size={16} />
                <span>SEND PROJECT BRIEF</span>
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
