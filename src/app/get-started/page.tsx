"use client";

import { useState } from "react";

const pros = ["ASCAP", "BMI", "SESAC", "SOCAN", "None yet", "Not sure"];
const dsps = ["Spotify", "Apple Music", "Amazon Music", "YouTube Music", "Tidal", "Deezer", "Other", "Not distributed yet"];
const services = [
  { id: "distribution", label: "Music Distribution" },
  { id: "publishing", label: "Publishing Administration" },
  { id: "copyright", label: "Copyright Registration" },
  { id: "audit", label: "Artist Catalog Audit" },
];
const timelines = ["ASAP", "Within 1 month", "1–3 months", "Just exploring for now"];

export default function GetStarted() {
  const [submitted, setSubmitted] = useState(false);
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [selectedDSPs, setSelectedDSPs] = useState<string[]>([]);
  const [form, setForm] = useState({
    artistName: "",
    realName: "",
    email: "",
    phone: "",
    country: "",
    genre: "",
    instagram: "",
    spotify: "",
    youtube: "",
    releases: "",
    pro: "",
    timeline: "",
    about: "",
    heardFrom: "",
  });

  function toggleService(id: string) {
    setSelectedServices((prev) => prev.includes(id) ? prev.filter((s) => s !== id) : [...prev, id]);
  }

  function toggleDSP(dsp: string) {
    setSelectedDSPs((prev) => prev.includes(dsp) ? prev.filter((d) => d !== dsp) : [...prev, dsp]);
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const data = {
      ...form,
      services: selectedServices.join(", "),
      currentDSPs: selectedDSPs.join(", "),
      pro: form.pro,
      timeline: form.timeline,
    };
    await fetch("https://formspree.io/f/xgojzrqk", {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify(data),
    });
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <section className="min-h-[70vh] flex items-center justify-center bg-[#f5f0e8]">
        <div className="text-center py-16 px-4">
          <div className="text-6xl mb-6">🎵</div>
          <h2 className="font-[family-name:var(--font-playfair)] text-3xl font-bold text-[#1a2744] mb-4">You&apos;re in the queue!</h2>
          <p className="text-[#1a2744]/70 font-[family-name:var(--font-inter)] max-w-md mx-auto leading-relaxed">
            Thanks for reaching out. We&apos;ll review your info and get back to you within 1–2 business days. Talk soon.
          </p>
        </div>
      </section>
    );
  }

  return (
    <>
      <section className="bg-[#1a2744] text-[#f5f0e8] py-16">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h1 className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl font-bold mb-4">Tell Us About Your Music</h1>
          <p className="text-[#f5f0e8]/80 font-[family-name:var(--font-inter)] text-lg leading-relaxed">
            This takes about 3 minutes. The more you share, the better we can help.
          </p>
        </div>
      </section>

      <section className="py-16 bg-[#f5f0e8]">
        <div className="max-w-2xl mx-auto px-4">
          <form onSubmit={handleSubmit} className="space-y-10">

            {/* Artist info */}
            <div>
              <h2 className="font-[family-name:var(--font-playfair)] text-xl font-bold text-[#1a2744] mb-5 pb-2 border-b border-[#1a2744]/10">About You</h2>
              <div className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-semibold text-[#1a2744] font-[family-name:var(--font-inter)] mb-1.5">Artist / Band Name *</label>
                    <input name="artistName" required value={form.artistName} onChange={handleChange} placeholder="Stage name or band name" className="w-full border border-[#1a2744]/20 rounded px-4 py-2.5 text-sm font-[family-name:var(--font-inter)] text-[#1a2744] bg-white focus:outline-none focus:border-[#1a2744] focus:ring-1 focus:ring-[#1a2744]" />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-[#1a2744] font-[family-name:var(--font-inter)] mb-1.5">Your Name *</label>
                    <input name="realName" required value={form.realName} onChange={handleChange} placeholder="First and last name" className="w-full border border-[#1a2744]/20 rounded px-4 py-2.5 text-sm font-[family-name:var(--font-inter)] text-[#1a2744] bg-white focus:outline-none focus:border-[#1a2744] focus:ring-1 focus:ring-[#1a2744]" />
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-semibold text-[#1a2744] font-[family-name:var(--font-inter)] mb-1.5">Email *</label>
                    <input name="email" type="email" required value={form.email} onChange={handleChange} placeholder="your@email.com" className="w-full border border-[#1a2744]/20 rounded px-4 py-2.5 text-sm font-[family-name:var(--font-inter)] text-[#1a2744] bg-white focus:outline-none focus:border-[#1a2744] focus:ring-1 focus:ring-[#1a2744]" />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-[#1a2744] font-[family-name:var(--font-inter)] mb-1.5">Phone Number *</label>
                    <input name="phone" type="tel" required value={form.phone} onChange={handleChange} placeholder="(555) 555-5555" className="w-full border border-[#1a2744]/20 rounded px-4 py-2.5 text-sm font-[family-name:var(--font-inter)] text-[#1a2744] bg-white focus:outline-none focus:border-[#1a2744] focus:ring-1 focus:ring-[#1a2744]" />
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-semibold text-[#1a2744] font-[family-name:var(--font-inter)] mb-1.5">Country *</label>
                    <select name="country" required value={form.country} onChange={handleChange} className="w-full border border-[#1a2744]/20 rounded px-4 py-2.5 text-sm font-[family-name:var(--font-inter)] text-[#1a2744] bg-white focus:outline-none focus:border-[#1a2744] focus:ring-1 focus:ring-[#1a2744]">
                      <option value="">Select country...</option>
                      <option value="US">United States</option>
                      <option value="CA">Canada</option>
                      <option value="GB">United Kingdom</option>
                      <option value="AU">Australia</option>
                      <option value="DE">Germany</option>
                      <option value="FR">France</option>
                      <option value="MX">Mexico</option>
                      <option value="BR">Brazil</option>
                      <option value="NG">Nigeria</option>
                      <option value="OTHER">Other</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-[#1a2744] font-[family-name:var(--font-inter)] mb-1.5">Genre</label>
                    <input name="genre" value={form.genre} onChange={handleChange} placeholder="e.g. Folk, R&B, Indie Rock" className="w-full border border-[#1a2744]/20 rounded px-4 py-2.5 text-sm font-[family-name:var(--font-inter)] text-[#1a2744] bg-white focus:outline-none focus:border-[#1a2744] focus:ring-1 focus:ring-[#1a2744]" />
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-semibold text-[#1a2744] font-[family-name:var(--font-inter)] mb-1.5">Instagram</label>
                    <input name="instagram" value={form.instagram} onChange={handleChange} placeholder="@yourhandle" className="w-full border border-[#1a2744]/20 rounded px-4 py-2.5 text-sm font-[family-name:var(--font-inter)] text-[#1a2744] bg-white focus:outline-none focus:border-[#1a2744] focus:ring-1 focus:ring-[#1a2744]" />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-[#1a2744] font-[family-name:var(--font-inter)] mb-1.5">Spotify Artist Link</label>
                    <input name="spotify" value={form.spotify} onChange={handleChange} placeholder="open.spotify.com/artist/..." className="w-full border border-[#1a2744]/20 rounded px-4 py-2.5 text-sm font-[family-name:var(--font-inter)] text-[#1a2744] bg-white focus:outline-none focus:border-[#1a2744] focus:ring-1 focus:ring-[#1a2744]" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-[#1a2744] font-[family-name:var(--font-inter)] mb-1.5">YouTube Channel</label>
                  <input name="youtube" value={form.youtube} onChange={handleChange} placeholder="youtube.com/@yourchannel" className="w-full border border-[#1a2744]/20 rounded px-4 py-2.5 text-sm font-[family-name:var(--font-inter)] text-[#1a2744] bg-white focus:outline-none focus:border-[#1a2744] focus:ring-1 focus:ring-[#1a2744]" />
                </div>
              </div>
            </div>

            {/* Services */}
            <div>
              <h2 className="font-[family-name:var(--font-playfair)] text-xl font-bold text-[#1a2744] mb-5 pb-2 border-b border-[#1a2744]/10">What Do You Need?</h2>
              <p className="text-sm text-[#1a2744]/60 font-[family-name:var(--font-inter)] mb-4">Select all that apply — we&apos;ll walk you through the details.</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {services.map((s) => (
                  <button
                    key={s.id}
                    type="button"
                    onClick={() => toggleService(s.id)}
                    className={`text-left px-4 py-3 rounded border text-sm font-[family-name:var(--font-inter)] font-medium transition-all ${
                      selectedServices.includes(s.id)
                        ? "bg-[#1a2744] text-[#f5f0e8] border-[#1a2744]"
                        : "bg-white text-[#1a2744] border-[#1a2744]/20 hover:border-[#1a2744]/50"
                    }`}
                  >
                    {selectedServices.includes(s.id) ? "✓ " : ""}{s.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Music history */}
            <div>
              <h2 className="font-[family-name:var(--font-playfair)] text-xl font-bold text-[#1a2744] mb-5 pb-2 border-b border-[#1a2744]/10">Your Catalog</h2>
              <div className="space-y-5">
                <div>
                  <label className="block text-sm font-semibold text-[#1a2744] font-[family-name:var(--font-inter)] mb-1.5">How many releases do you have? (singles, EPs, albums)</label>
                  <input name="releases" value={form.releases} onChange={handleChange} placeholder="e.g. 3 singles, 1 EP" className="w-full border border-[#1a2744]/20 rounded px-4 py-2.5 text-sm font-[family-name:var(--font-inter)] text-[#1a2744] bg-white focus:outline-none focus:border-[#1a2744] focus:ring-1 focus:ring-[#1a2744]" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-[#1a2744] font-[family-name:var(--font-inter)] mb-3">Where is your music currently?</label>
                  <div className="flex flex-wrap gap-2">
                    {dsps.map((dsp) => (
                      <button
                        key={dsp}
                        type="button"
                        onClick={() => toggleDSP(dsp)}
                        className={`px-3 py-1.5 rounded-full text-xs font-[family-name:var(--font-inter)] font-medium border transition-all ${
                          selectedDSPs.includes(dsp)
                            ? "bg-[#1a2744] text-[#f5f0e8] border-[#1a2744]"
                            : "bg-white text-[#1a2744] border-[#1a2744]/20 hover:border-[#1a2744]/50"
                        }`}
                      >
                        {dsp}
                      </button>
                    ))}
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-[#1a2744] font-[family-name:var(--font-inter)] mb-1.5">Are you registered with a PRO?</label>
                  <div className="flex flex-wrap gap-2">
                    {pros.map((pro) => (
                      <button
                        key={pro}
                        type="button"
                        onClick={() => setForm((prev) => ({ ...prev, pro }))}
                        className={`px-3 py-1.5 rounded-full text-xs font-[family-name:var(--font-inter)] font-medium border transition-all ${
                          form.pro === pro
                            ? "bg-[#1a2744] text-[#f5f0e8] border-[#1a2744]"
                            : "bg-white text-[#1a2744] border-[#1a2744]/20 hover:border-[#1a2744]/50"
                        }`}
                      >
                        {pro}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Timeline + about */}
            <div>
              <h2 className="font-[family-name:var(--font-playfair)] text-xl font-bold text-[#1a2744] mb-5 pb-2 border-b border-[#1a2744]/10">A Little More</h2>
              <div className="space-y-5">
                <div>
                  <label className="block text-sm font-semibold text-[#1a2744] font-[family-name:var(--font-inter)] mb-1.5">When are you looking to get started?</label>
                  <div className="flex flex-wrap gap-2">
                    {timelines.map((t) => (
                      <button
                        key={t}
                        type="button"
                        onClick={() => setForm((prev) => ({ ...prev, timeline: t }))}
                        className={`px-3 py-1.5 rounded-full text-xs font-[family-name:var(--font-inter)] font-medium border transition-all ${
                          form.timeline === t
                            ? "bg-[#1a2744] text-[#f5f0e8] border-[#1a2744]"
                            : "bg-white text-[#1a2744] border-[#1a2744]/20 hover:border-[#1a2744]/50"
                        }`}
                      >
                        {t}
                      </button>
                    ))}
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-[#1a2744] font-[family-name:var(--font-inter)] mb-1.5">Tell us about your music and what you&apos;re working on</label>
                  <textarea
                    name="about"
                    value={form.about}
                    onChange={handleChange}
                    rows={5}
                    placeholder="Upcoming releases, goals, anything you want us to know..."
                    className="w-full border border-[#1a2744]/20 rounded px-4 py-2.5 text-sm font-[family-name:var(--font-inter)] text-[#1a2744] bg-white focus:outline-none focus:border-[#1a2744] focus:ring-1 focus:ring-[#1a2744] resize-none"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-[#1a2744] font-[family-name:var(--font-inter)] mb-1.5">How did you hear about DistroDad?</label>
                  <input name="heardFrom" value={form.heardFrom} onChange={handleChange} placeholder="Social media, friend, search, etc." className="w-full border border-[#1a2744]/20 rounded px-4 py-2.5 text-sm font-[family-name:var(--font-inter)] text-[#1a2744] bg-white focus:outline-none focus:border-[#1a2744] focus:ring-1 focus:ring-[#1a2744]" />
                </div>
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-[#1a2744] text-[#f5f0e8] px-8 py-4 rounded font-[family-name:var(--font-inter)] font-bold text-base hover:bg-[#0f1a30] transition-colors"
            >
              Submit — Let&apos;s Get to Work
            </button>

            <p className="text-xs text-center text-[#1a2744]/50 font-[family-name:var(--font-inter)]">
              Prefer email?{" "}
              <a href="mailto:distro.dad.music@gmail.com" className="text-[#3d6b9e] hover:underline">distro.dad.music@gmail.com</a>
            </p>
          </form>
        </div>
      </section>
    </>
  );
}
