import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "How DistroDad's Artist Audit Works | DistroDad",
  description: "We review your existing catalog, identify missing registrations, and tell you exactly what royalties you may be leaving uncollected. Free, no obligation.",
};

export default function ArtistAudit() {
  return (
    <>
      <section className="bg-[#1a2744] text-[#f5f0e8] py-16">
        <div className="max-w-3xl mx-auto px-4">
          <div className="flex items-center gap-3 mb-6">
            <span className="text-xs px-2.5 py-1 rounded-full font-[family-name:var(--font-inter)] font-semibold bg-[#1a2744]/40 border border-[#f5f0e8]/20 text-[#f5f0e8]/80">
              DistroDad
            </span>
            <span className="text-xs text-[#f5f0e8]/50 font-[family-name:var(--font-inter)]">August 1, 2026</span>
            <span className="text-xs text-[#f5f0e8]/50 font-[family-name:var(--font-inter)]">· DistroDad Team</span>
          </div>
          <h1 className="font-[family-name:var(--font-playfair)] text-3xl md:text-5xl font-bold leading-tight mb-6">
            How DistroDad&apos;s Artist Audit Works
          </h1>
          <p className="text-[#f5f0e8]/75 font-[family-name:var(--font-inter)] text-lg leading-relaxed">
            Most independent artists have at least one song out in the world with a registration gap, a metadata
            error, or an unclaimed royalty stream. The audit exists to find those gaps before they turn into
            permanent losses.
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

            <h2>Why an Audit Matters</h2>
            <p>
              Independent artists release music, get it onto streaming platforms, and then assume the royalty systems
              handle the rest automatically. They mostly don&apos;t. Mechanical royalties require separate MLC
              registration. Performance royalties require PRO registration of each individual work. International
              royalties require territorial registrations most artists have never heard of. Metadata errors — a
              misspelled name, a missing ISRC — can silently break the matching process that connects your music to
              its royalty streams.
            </p>
            <p>
              By the time an artist realizes money has been slipping through, some of it is gone for good. Unclaimed
              royalties have holding periods that vary by organization, and after those windows close, the money gets
              redistributed.
            </p>

            <br />

            <p>The audit catches these problems while there&apos;s still time to fix them.</p>

            <hr className="border-[#1a2744]/10 my-8" />

            <h2>What We Review</h2>

            <p><strong>Distribution and metadata:</strong></p>
            <div className="pl-8 space-y-1 mb-5 text-[#1a2744]/85">
              <p className="!mb-1">Are your releases live on all major DSPs and appearing correctly?</p>
              <p className="!mb-1">Are ISRCs and UPCs assigned to every release?</p>
              <p className="!mb-1">Is songwriter and producer metadata embedded in the release — not just listed somewhere, but actually entered into the distribution system?</p>
              <p className="!mb-1">Are ℗ and © lines accurate?</p>
            </div>

            <p><strong>PRO registrations:</strong></p>
            <div className="pl-8 space-y-1 mb-5 text-[#1a2744]/85">
              <p className="!mb-1">Are you a registered member of a PRO?</p>
              <p className="!mb-1">Is each song individually registered with your PRO — not just your membership, but each work?</p>
              <p className="!mb-1">Are splits documented and do they match what was agreed upon with co-writers?</p>
              <p className="!mb-1">Is the publishing share registered — either to a publisher or to your own publishing entity?</p>
            </div>

            <p><strong>MLC registration:</strong></p>
            <div className="pl-8 space-y-1 mb-5 text-[#1a2744]/85">
              <p className="!mb-1">Are your songs registered at themlc.com?</p>
              <p className="!mb-1">Are ISRCs correctly linked in the MLC system?</p>
              <p className="!mb-1">Are there unmatched royalties in your MLC account waiting to be claimed?</p>
            </div>

            <p><strong>SoundExchange:</strong></p>
            <div className="pl-8 space-y-1 mb-5 text-[#1a2744]/85">
              <p className="!mb-1">Are you registered with SoundExchange to collect digital performance royalties from non-interactive streaming (Pandora, SiriusXM, etc.)?</p>
              <p className="!mb-1">Are your releases registered in the SoundExchange system?</p>
            </div>

            <p><strong>Copyright registration:</strong></p>
            <div className="pl-8 space-y-1 mb-5 text-[#1a2744]/85">
              <p className="!mb-1">Have your songs been registered with the U.S. Copyright Office?</p>
              <p className="!mb-1">Were they registered within three months of publication (which preserves eligibility for statutory damages)?</p>
            </div>

            <br />

            <p>We also note anything that looks like a risk — a co-writer situation without a signed split sheet, a release on an old distributor that may not be correctly transferring royalties, or a publishing deal that may be limiting your rights in ways you&apos;re not aware of.</p>

            <hr className="border-[#1a2744]/10 my-8" />

            <h2>What You Get</h2>
            <p>
              At the end of the audit, you receive a plain-English summary of what we found. Not a legal document —
              a clear breakdown of what&apos;s in order, what&apos;s missing, and what steps would address each gap.
              You&apos;re under no obligation to work with DistroDad after the audit. If your registrations are all
              in good shape, we&apos;ll tell you that too.
            </p>

            <br />

            <p>The audit is free. It takes us a few business days to complete once we have your release information.</p>

            <hr className="border-[#1a2744]/10 my-8" />

            <h2>Who It&apos;s For</h2>
            <p>
              The audit is most valuable for artists who have already released music and are wondering whether
              everything is set up correctly — especially artists who self-distributed through a major platform like
              DistroKid or TuneCore without a lot of guidance on the publishing and registration side.
            </p>
            <p>
              It&apos;s also useful for artists who are about to sign with DistroDad and want to start fresh with a
              clear picture of where their catalog stands. We treat the audit as the first step of the onboarding
              process — understanding what exists before we build on top of it.
            </p>

            <br />

            <p>
              If you&apos;ve got music out in the world and you&apos;re not completely sure every royalty stream is
              connected, the audit is worth doing. The worst outcome is we confirm everything is fine. The more common
              outcome is we find something worth fixing.
            </p>

          </div>

          <div className="mt-12 pt-10 border-t border-[#1a2744]/10">
            <p className="text-[#1a2744]/70 font-[family-name:var(--font-inter)] text-base italic mb-6">
              Ready to find out where your catalog stands?{" "}
              <Link href="/contact?type=audit" className="text-[#3d6b9e] hover:underline not-italic font-semibold">
                Request your free audit here
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
