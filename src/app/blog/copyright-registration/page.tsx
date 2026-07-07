import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Copyright Registration: Do You Actually Need It? | DistroDad",
  description: "Your music is automatically copyrighted the moment you create it. So why register? Because automatic protection and enforceable protection are very different things.",
};

export default function CopyrightRegistration() {
  return (
    <>
      <section className="bg-[#1a2744] text-[#f5f0e8] py-16">
        <div className="max-w-3xl mx-auto px-4">
          <div className="flex items-center gap-3 mb-6">
            <span className="text-xs px-2.5 py-1 rounded-full font-[family-name:var(--font-inter)] font-semibold bg-[#b84040]/15 text-[#d47070]">
              Copyright
            </span>
            <span className="text-xs text-[#f5f0e8]/50 font-[family-name:var(--font-inter)]">July 28, 2026</span>
            <span className="text-xs text-[#f5f0e8]/50 font-[family-name:var(--font-inter)]">· DistroDad Team</span>
          </div>
          <h1 className="font-[family-name:var(--font-playfair)] text-3xl md:text-5xl font-bold leading-tight mb-6">
            Copyright Registration: Do You Actually Need It?
          </h1>
          <p className="text-[#f5f0e8]/75 font-[family-name:var(--font-inter)] text-lg leading-relaxed">
            Your music is automatically copyrighted the moment it&apos;s created. So why does registration matter?
            Because automatic protection and enforceable protection are very different things.
          </p>
        </div>
      </section>

      <section className="py-16 bg-[#f5f0e8]">
        <div className="max-w-3xl mx-auto px-4">
          <div className="prose prose-lg max-w-none font-[family-name:var(--font-inter)] text-[#1a2744]
            prose-headings:font-[family-name:var(--font-playfair)] prose-headings:text-[#1a2744] prose-headings:font-bold
            prose-h2:text-2xl prose-h2:mt-10 prose-h2:mb-4
            prose-p:leading-relaxed prose-p:mb-5 prose-p:text-[#1a2744]/85
            prose-strong:text-[#1a2744] prose-strong:font-semibold
            prose-a:text-[#3d6b9e] prose-a:no-underline hover:prose-a:underline">

            <h2>Automatic Copyright: What You Already Have</h2>
            <p>
              Under U.S. copyright law, a work is protected by copyright from the moment it is &ldquo;fixed in a
              tangible medium of expression.&rdquo; For music, that means the moment you record a song to a file,
              commit lyrics to paper, or capture a melody in any permanent form, copyright exists automatically.
              You don&apos;t need to register. You don&apos;t need to mail yourself a copy. You don&apos;t need to
              put &ldquo;© All Rights Reserved&rdquo; on anything.
            </p>

            <br />

            <p>That automatic protection is real — but it has meaningful limitations the moment someone infringes on your work.</p>

            <hr className="border-[#1a2744]/10 my-8" />

            <h2>What Registration Gives You That Automatic Copyright Doesn&apos;t</h2>

            <p><strong>The ability to sue for infringement:</strong></p>
            <div className="pl-8 space-y-1 mb-5 text-[#1a2744]/85">
              <p className="!mb-1">You cannot file a federal copyright infringement lawsuit in the United States without a registration. If someone steals your song and you don&apos;t have a registration, you can&apos;t take them to court — full stop.</p>
            </div>

            <p><strong>Statutory damages:</strong></p>
            <div className="pl-8 space-y-1 mb-5 text-[#1a2744]/85">
              <p className="!mb-1">If your work is registered before infringement occurs (or within three months of first publication), you&apos;re eligible for statutory damages — up to $150,000 per willful infringement — without having to prove actual financial harm.</p>
              <p className="!mb-1">Without registration, you can only pursue actual damages, which are notoriously difficult and expensive to prove.</p>
            </div>

            <p><strong>Attorney&apos;s fees:</strong></p>
            <div className="pl-8 space-y-1 mb-5 text-[#1a2744]/85">
              <p className="!mb-1">Registered works also allow the court to award attorney&apos;s fees to the winning party. This matters because it makes infringement cases viable for individual artists — attorneys are more willing to take cases on contingency when fee awards are possible.</p>
            </div>

            <p><strong>Public record:</strong></p>
            <div className="pl-8 space-y-1 mb-5 text-[#1a2744]/85">
              <p className="!mb-1">Registration creates a searchable public record of your ownership, which is valuable for licensing, sync opportunities, and disputes over who wrote what and when.</p>
            </div>

            <br />

            <p>Unregistered copyright is like owning a car without a title. You may actually own it — but proving it and enforcing that ownership against someone who disputes it is a different problem entirely.</p>

            <hr className="border-[#1a2744]/10 my-8" />

            <h2>How to Register with the U.S. Copyright Office</h2>
            <p>Registration is done through the U.S. Copyright Office at copyright.gov. The process is straightforward but requires patience — the Copyright Office processes registrations slowly, and wait times can stretch from several months to over a year.</p>

            <p><strong>What you&apos;ll need:</strong></p>
            <div className="pl-8 space-y-1 mb-5 text-[#1a2744]/85">
              <p className="!mb-1">A copyright.gov account</p>
              <p className="!mb-1">The title of the work</p>
              <p className="!mb-1">The year of creation and first publication</p>
              <p className="!mb-1">Author information (you, as the songwriter and/or recording artist)</p>
              <p className="!mb-1">A deposit copy of the work — for music, this is typically your audio file and/or lead sheet</p>
              <p className="!mb-1">The filing fee (currently $45–$65 per registration for online submissions, depending on the form used)</p>
            </div>

            <p><strong>What to register:</strong></p>
            <div className="pl-8 space-y-1 mb-5 text-[#1a2744]/85">
              <p className="!mb-1">The composition (the song itself — melody and lyrics) — filed as a &ldquo;PA&rdquo; (Performing Arts) work</p>
              <p className="!mb-1">The sound recording (the master) — filed as an &ldquo;SR&rdquo; (Sound Recording) work</p>
              <p className="!mb-1">Both can sometimes be registered together on a single SR form if you own both copyrights, which saves on filing fees</p>
            </div>

            <br />

            <p>Register as close to your release date as possible — ideally before or within three months of publication to preserve your eligibility for statutory damages.</p>

            <hr className="border-[#1a2744]/10 my-8" />

            <h2>The Filing Fee: Why DistroDad Lists Copyright as &ldquo;Available&rdquo;</h2>
            <p>
              The Copyright Office filing fee is a government fee that goes directly to the U.S. Copyright Office —
              not to DistroDad. It&apos;s not something we can absorb or include in a flat service rate. That&apos;s
              why our copyright registration service is listed as &ldquo;available&rdquo; rather than
              &ldquo;included&rdquo; — we handle the process for you, but the government filing fee is passed through
              at cost.
            </p>

            <br />

            <p>
              For most independent artists releasing a steady stream of music, the decision to register isn&apos;t
              really a question of &ldquo;do I need this?&rdquo; — it&apos;s a question of &ldquo;how much is my
              work worth to me?&rdquo; If the answer is anything more than zero, register it.
            </p>

          </div>

          <div className="mt-12 pt-10 border-t border-[#1a2744]/10">
            <p className="text-[#1a2744]/70 font-[family-name:var(--font-inter)] text-base italic mb-6">
              Want help navigating copyright registration for your catalog?{" "}
              <Link href="/services/copyright" className="text-[#3d6b9e] hover:underline not-italic font-semibold">
                Learn about DistroDad&apos;s copyright services
              </Link>.
            </p>
          </div>

          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm font-[family-name:var(--font-inter)] font-semibold text-[#1a2744]/50 hover:text-[#1a2744] transition-colors"
          >
            ← Back to Blog
          </Link>
        </div>
      </section>
    </>
  );
}
