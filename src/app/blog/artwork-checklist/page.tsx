import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "The Artwork Checklist Every Independent Artist Needs Before Releasing Music | DistroDad",
  description: "One of the easiest ways to delay a release is submitting artwork that doesn't meet spec. Here's the checklist we use at DistroDad before every submission.",
};

export default function ArtworkChecklist() {
  return (
    <>
      {/* Header */}
      <section className="bg-[#1a2744] text-[#f5f0e8] py-16">
        <div className="max-w-3xl mx-auto px-4">
          <div className="flex items-center gap-3 mb-6">
            <span className="text-xs px-2.5 py-1 rounded-full font-[family-name:var(--font-inter)] font-semibold bg-[#c9a84c]/20 text-[#c9a84c]">
              Release Guides
            </span>
            <span className="text-xs text-[#f5f0e8]/50 font-[family-name:var(--font-inter)]">July 7, 2026</span>
            <span className="text-xs text-[#f5f0e8]/50 font-[family-name:var(--font-inter)]">· DistroDad Team</span>
          </div>
          <h1 className="font-[family-name:var(--font-playfair)] text-3xl md:text-5xl font-bold leading-tight mb-6">
            The Artwork Checklist Every Independent Artist Needs Before Releasing Music
          </h1>
          <p className="text-[#f5f0e8]/75 font-[family-name:var(--font-inter)] text-lg leading-relaxed">
            One of the easiest ways to delay a release is submitting artwork that doesn&apos;t meet your
            distributor&apos;s specifications. Fortunately, it&apos;s also one of the easiest problems to avoid.
          </p>
        </div>
      </section>

      {/* Body */}
      <section className="py-16 bg-[#f5f0e8]">
        <div className="max-w-3xl mx-auto px-4">
          <div className="prose prose-lg max-w-none font-[family-name:var(--font-inter)] text-[#1a2744]
            prose-headings:font-[family-name:var(--font-playfair)] prose-headings:text-[#1a2744] prose-headings:font-bold
            prose-h2:text-2xl prose-h2:mt-10 prose-h2:mb-4
            prose-h3:text-lg prose-h3:mt-6 prose-h3:mb-3
            prose-p:leading-relaxed prose-p:mb-5 prose-p:text-[#1a2744]/85
            prose-li:text-[#1a2744]/85 prose-li:leading-relaxed
            prose-strong:text-[#1a2744] prose-strong:font-semibold
            prose-a:text-[#3d6b9e] prose-a:no-underline hover:prose-a:underline">

            <p>Here&apos;s a simple checklist we use at DistroDad before submitting a release.</p>

            <br />

            <h2>Album (or Single) Cover Artwork</h2>
            <p>
              This is the artwork that appears on Spotify, Apple Music, Amazon Music, YouTube Music, and most other
              streaming platforms.
            </p>

            <p><strong>Recommended Specifications:</strong></p>
            <div className="pl-8 space-y-1 mb-5 text-[#1a2744]/85">
              <p className="!mb-1">Minimum Size: 3000 × 3000 pixels</p>
              <p className="!mb-1">Aspect Ratio: Square (1:1)</p>
              <p className="!mb-1">File Type: JPG or PNG</p>
              <p className="!mb-1">Color Mode: RGB</p>
              <p className="!mb-1">Resolution: 72 dpi or higher</p>
              <p className="!mb-1">Artwork should be clear and high quality — no blurry or pixelated images</p>
            </div>

            <p>
              Avoid web addresses, social media handles, pricing or promo text, excessive logos, and copyrighted
              material you don&apos;t own.
            </p>

            <br />

            <p>Remember: your album cover is often the very first impression listeners have of your music.</p>

            <hr className="border-[#1a2744]/10 my-8" />

            <h2>Artist Profile Image</h2>
            <p>
              Once your music is live, you&apos;ll want to claim your artist profiles on streaming platforms. Most
              platforms allow you to upload an artist photo that appears alongside your biography and releases.
            </p>

            <p><strong>Recommended Specifications:</strong></p>
            <div className="pl-8 space-y-1 mb-5 text-[#1a2744]/85">
              <p className="!mb-1">Minimum Size: 3000 × 3000 pixels</p>
              <p className="!mb-1">Aspect Ratio: Square</p>
              <p className="!mb-1">File Type: JPG or PNG</p>
              <p className="!mb-1">Professional, well-lit photo</p>
              <p className="!mb-1">Consistent with your branding</p>
            </div>

            <br />

            <p>
              This doesn&apos;t have to be an expensive professional photo. A clean, high-quality image with good
              lighting is often all you need.
            </p>

            <hr className="border-[#1a2744]/10 my-8" />

            <h2>Artist Banner Images</h2>
            <p>Many digital streaming platforms also allow banner or header images.</p>
            <p>
              While requirements vary by platform, it&apos;s a good idea to create a wide-format version of your
              branding that can be reused.
            </p>

            <p><strong>Recommended Starting Point:</strong></p>
            <div className="pl-8 space-y-1 mb-5 text-[#1a2744]/85">
              <p className="!mb-1">2048 × 1152 pixels (16:9)</p>
              <p className="!mb-1">JPG or PNG</p>
              <p className="!mb-1">Under 6 MB</p>
            </div>

            <br />

            <p>This size works well for YouTube and can often be adapted for other platforms.</p>

            <hr className="border-[#1a2744]/10 my-8" />

            <h2>Keep Your Branding Consistent</h2>
            <p>Your artwork should feel like it belongs together. Try to use the same fonts, a similar color palette, consistent logos, and a similar photographic style across all of your releases.</p>

            <br />

            <p>Consistency helps listeners recognize your music wherever they find it.</p>

            <hr className="border-[#1a2744]/10 my-8" />

            <h2>Before You Submit Your Release</h2>
            <p>Here&apos;s the checklist we recommend:</p>

            <div className="not-prose space-y-3 my-6">
              {[
                "Album artwork (3000 × 3000)",
                "Artist profile image (3000 × 3000)",
                "Banner image (2048 × 1152)",
                "Logo (transparent PNG recommended)",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3 bg-white border border-[#1a2744]/10 rounded-lg px-4 py-3">
                  <span className="text-lg">✅</span>
                  <span className="font-[family-name:var(--font-inter)] text-[#1a2744]/85">{item}</span>
                </div>
              ))}
            </div>

            <br />

            <p>
              Having these assets prepared before you upload your music will make distribution smoother and save time
              when it&apos;s time to claim your artist profiles.
            </p>

            <hr className="border-[#1a2744]/10 my-8" />

            <h2>Coming Next</h2>
            <p>In a future guide we&apos;ll walk through how to claim your Spotify for Artists profile, how to claim Apple Music for Artists, how to claim your Official Artist Channel on YouTube, and when and how to merge your personal YouTube channel with your YouTube Music artist profile.</p>

            <br />

            <p>
              Taking a little extra time to prepare your artwork before release can make your music look every bit as
              professional as it sounds.
            </p>
          </div>

          {/* CTA */}
          <div className="mt-12 pt-10 border-t border-[#1a2744]/10">
            <p className="text-[#1a2744]/70 font-[family-name:var(--font-inter)] text-base italic mb-6">
              Want help making sure your release is ready to go?{" "}
              <Link href="/get-started" className="text-[#3d6b9e] hover:underline not-italic font-semibold">
                Tell us about your project
              </Link>{" "}
              and we&apos;ll walk you through it.
            </p>
          </div>

          {/* Back link */}
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
