import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Why I (a Music Distributor) Released My Own Song | DistroDad",
  description: "I became my own client. Here's what I learned recording and releasing Punk Pledge from start to finish — and why every DistroDad artist benefits from it.",
};

export default function PunkPledge() {
  return (
    <>
      {/* Header */}
      <section className="bg-[#1a2744] text-[#f5f0e8] py-16">
        <div className="max-w-3xl mx-auto px-4">
          <div className="flex items-center gap-3 mb-6">
            <span className="text-xs px-2.5 py-1 rounded-full font-[family-name:var(--font-inter)] font-semibold bg-[#1a2744]/40 border border-[#f5f0e8]/20 text-[#f5f0e8]/80">
              DistroDad
            </span>
            <span className="text-xs text-[#f5f0e8]/50 font-[family-name:var(--font-inter)]">July 7, 2026</span>
            <span className="text-xs text-[#f5f0e8]/50 font-[family-name:var(--font-inter)]">· DistroDad Team</span>
          </div>
          <h1 className="font-[family-name:var(--font-playfair)] text-3xl md:text-5xl font-bold leading-tight mb-6">
            Why I (a Music Distributor) Released My Own Song
          </h1>
          <p className="text-[#f5f0e8]/75 font-[family-name:var(--font-inter)] text-lg leading-relaxed">
            I became my own client. Here&apos;s what I learned — and why every DistroDad artist benefits from it.
          </p>
        </div>
      </section>

      {/* Body */}
      <section className="py-16 bg-[#f5f0e8]">
        <div className="max-w-3xl mx-auto px-4">
          <div className="prose prose-lg max-w-none font-[family-name:var(--font-inter)] text-[#1a2744]
            prose-headings:font-[family-name:var(--font-playfair)] prose-headings:text-[#1a2744] prose-headings:font-bold
            prose-h2:text-2xl prose-h2:mt-10 prose-h2:mb-4
            prose-p:leading-relaxed prose-p:mb-5 prose-p:text-[#1a2744]/85
            prose-li:text-[#1a2744]/85 prose-li:leading-relaxed
            prose-strong:text-[#1a2744] prose-strong:font-semibold
            prose-a:text-[#3d6b9e] prose-a:no-underline hover:prose-a:underline">

            <p>When we launched DistroDad, I realized something.</p>
            <p>
              I had spent months researching music distribution, metadata, publishing administration, copyright
              registration, royalty collection, DSPs, and release strategies. I understood the business inside and out.
            </p>
            <p>But there was a bridge I hadn&apos;t crossed.</p>
            <p>I&apos;d never actually released a song from start to finish.</p>
            <p>So I decided to become my own client.</p>
            <p>
              I wrote and recorded a simple, fun little song called <em>Punk Pledge</em>. It wasn&apos;t meant to top
              the charts. It wasn&apos;t even meant to showcase my abilities as a musician (or sound engineer, which I
              certainly am not!). In fact, it&apos;s a little rough around the edges — and that&apos;s okay.
            </p>
            <p>The goal wasn&apos;t to become a rock star.</p>
            <p>The goal was to experience every step artists experience.</p>
            <p>
              I wanted to feel the excitement, the frustration, the uncertainty, and all the little details that can
              only be learned by doing.
            </p>
            <p>Here&apos;s what I learned.</p>

            <h2>Lesson #1: Recording Is Cheap. Great Mixing Takes Time.</h2>
            <p>Looking back, the biggest thing I&apos;d do differently is spend more time mixing.</p>
            <p>I was excited to get the song finished, but I underestimated how important it is to slow down and really listen.</p>
            <p>Every vocal level. Every bass note. Every snare and hi-hat hit. Every harmony.</p>
            <p>
              It&apos;s amazing how a one-decibel adjustment can completely change how a song feels. It&apos;s amazing
              how flubbing one note in a guitar solo instantly makes a recording sound amateur.
            </p>
            <p>
              Recording the parts is important. Re-recording parts and balancing everything together is equally important.
            </p>
            <p>
              If I had one piece of advice for a first-time artist, it would be this:{" "}
              <strong>Don&apos;t rush the mix.</strong>
            </p>
            <p>
              Walk away for a day. Listen in your car. Listen on headphones. Listen through cheap speakers. Then make
              small adjustments. Take the time to re-record a part if you need to. Repeat.
            </p>

            <h2>Lesson #2: Professional Mastering Is Worth Considering</h2>
            <p>
              I mastered <em>Punk Pledge</em> using BandLab&apos;s built-in mastering tools. Honestly, I was
              pleasantly surprised. For independent artists working with limited budgets, free automated mastering has
              come a long way.
            </p>
            <p>
              But now that I&apos;ve gone through the process, I also understand why professional mastering engineers
              exist. They&apos;re listening with fresh ears. They&apos;re catching problems you&apos;ve stopped hearing
              after listening to your own song hundreds of times.
            </p>
            <p>
              If you&apos;re investing real time and money into promoting a release, professional mastering is money
              well spent.
            </p>

            <h2>Lesson #3: Don&apos;t Ignore the Business Side</h2>
            <p>Writing the song was the fun part. Preparing it for release was the part many artists overlook.</p>
            <p>Before releasing music, make sure you&apos;ve taken care of the business:</p>
            <ul>
              <li>Register with a Performing Rights Organization (PRO) and obtain your IPI number.</li>
              <li>If you&apos;re acting as your own publisher, register your publishing entity and obtain a separate publisher IPI.</li>
              <li>Register your songs with The MLC so you&apos;re eligible to receive mechanical royalties.</li>
              <li>Register your copyright with the U.S. Copyright Office.</li>
            </ul>
            <p>These aren&apos;t glamorous steps. But they&apos;re the steps that make sure your music is protected and your royalties actually have somewhere to go.</p>

            <h2>Lesson #4: Leave Yourself More Time Than You Think</h2>
            <p>
              You&apos;ve spent weeks (possibly months) getting your recording absolutely perfected. But the wait
              isn&apos;t over.
            </p>
            <p>
              Your distributor still needs time to review your release — double and triple checking and inputting all
              the metadata to ensure that you will receive all the revenue the recording generates on the DSPs and
              elsewhere. Have you created album and artist artwork (logo/headshot) in the proper file formats? Then the
              streaming platforms need time to ingest it.
            </p>
            <p>
              If you want your release to go live smoothly — and have time for <strong>marketing</strong> such as
              playlist pitching and pre-saves — you should plan on submitting your release{" "}
              <strong>at least three to four weeks before your desired release date.</strong>
            </p>
            <p>
              The mindset can&apos;t be &ldquo;song recording done — hit release now.&rdquo; I&apos;ve learned this
              lesson the hard way. Fortunately, my artists won&apos;t have to.
            </p>

            <h2>Lesson #5: The Work Isn&apos;t Finished on Release Day</h2>
            <p>After your song is distributed, there are still important things to do.</p>
            <p>
              Claim your artist profiles. Update your biography. Upload artist photos. Customize your pages. Verify
              your social media accounts.
            </p>
            <p>
              These small details make you look established from day one. They&apos;re also much easier to accomplish
              if you&apos;ve planned ahead.
            </p>

            <h2>Why I Did This</h2>
            <p>
              Some people might wonder why the founder of a music distribution company would spend time writing and
              recording a song instead of simply helping artists.
            </p>
            <p>For me, the answer is simple.</p>
            <p>I wanted to walk the same path.</p>
            <p>
              I wanted to understand every click, every form, every mistake, and every moment of uncertainty that an
              artist experiences.
            </p>
            <p>Because that&apos;s how you build better systems. That&apos;s how you write better guides. That&apos;s how you answer questions before they&apos;re even asked. And ultimately, that&apos;s how you become a better partner.</p>
            <p>
              <em>Punk Pledge</em> will probably never be my biggest accomplishment. But it may become one of the most
              valuable things I&apos;ve ever done for DistroDad.
            </p>
            <p>Because now, when an artist asks me what it&apos;s like to release a song&hellip;</p>
            <p>I won&apos;t answer from a manual.</p>
            <p>I&apos;ll answer from experience.</p>
          </div>

          {/* CTA */}
          <div className="mt-12 pt-10 border-t border-[#1a2744]/10">
            <p className="text-[#1a2744]/70 font-[family-name:var(--font-inter)] text-base italic mb-6">
              Ready to release your music with a team that&apos;s been through it themselves?{" "}
              <Link href="/get-started" className="text-[#3d6b9e] hover:underline not-italic font-semibold">
                Let&apos;s get started
              </Link>.
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
