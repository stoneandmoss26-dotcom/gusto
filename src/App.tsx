import './index.css';

const productUrl =
  'https://tryerbora.com/products/erbora-18-in-1-elimina-parassiti-e-larve-nascosti';

export default function App() {
  return (
    <div className="min-h-screen bg-white font-serif text-stone-800 pt-[104px] pb-[100px]">
      {/* Fixed Topbar & Header Wrapper */}
      <div className="fixed top-0 left-0 right-0 z-50 flex flex-col">
        {/* Announcement Bar */}
        <div className="bg-[#1a3a5c] text-white text-xs sm:text-sm text-center py-2 px-4 shadow-md font-sans font-medium tracking-wide">
          <span className="text-[#c0392b] font-bold mr-2 text-base">⚠</span>
          Limited Supply — Special Reader Offer Available Today
        </div>
        {/* Main Header */}
        <header className="bg-white border-b border-stone-200 shadow-sm">
          <div className="mx-auto flex h-16 sm:h-20 max-w-6xl items-center justify-between px-4 sm:px-8">
            <div className="text-2xl sm:text-3xl font-bold uppercase tracking-tight text-[#1a3a5c]">
              Health Daily Report
            </div>
            <nav className="font-sans text-xs sm:text-sm font-bold hidden sm:flex gap-6 text-stone-500 uppercase tracking-wider">
              <span className="cursor-pointer hover:text-[#c0392b] transition-colors">Trending</span>
              <span className="cursor-pointer hover:text-[#c0392b] transition-colors">Health News</span>
              <span className="cursor-pointer hover:text-[#c0392b] transition-colors">Special Reports</span>
            </nav>
          </div>
        </header>
      </div>

      {/* Main Content Area */}
      <main className="mx-auto max-w-6xl px-4 py-8 sm:px-8 md:flex md:gap-12">
        
        {/* Left Column / Main Article */}
        <article className="md:w-2/3">
          {/* Breadcrumb */}
          <nav className="mb-6 font-sans text-xs sm:text-sm text-stone-500 uppercase tracking-wider font-semibold">
            <a href="#" className="hover:text-[#c0392b] transition-colors">Home</a>
            <span className="mx-3">/</span>
            <a href="#" className="hover:text-[#c0392b] transition-colors">Health News</a>
            <span className="mx-3">/</span>
            <span className="text-[#1a3a5c]">Special Report</span>
          </nav>

          <h1 className="font-serif text-3xl font-extrabold leading-tight text-[#1a3a5c] sm:text-4xl md:text-5xl">
            Special Report: The Secret to Finding Daily Balance and Vitality
          </h1>
          
          <div className="my-6 flex flex-wrap items-center justify-between border-b border-t border-stone-200 py-3 font-sans text-xs sm:text-sm text-stone-500 uppercase tracking-widest font-bold">
            <span>Published Today</span>
            <span className="text-[#1a3a5c]">By Health Editorial Team</span>
          </div>

          <div className="my-8 aspect-video w-full bg-slate-100 flex flex-col items-center justify-center border border-dashed border-slate-300 text-slate-500 font-sans rounded-none overflow-hidden">
            <span className="text-lg font-bold">[Main Image / GIF Placeholder]</span>
            <span className="text-sm mt-1">Insert compelling visual here</span>
          </div>

          <div className="space-y-6 font-serif text-lg sm:text-xl text-stone-800 leading-relaxed">
            <p>
              Millions of people wake up every day feeling tired, bloated, and less than their best. 
              Despite eating right and trying various routines, the discomfort persists. Sound familiar?
            </p>
            <p>
              According to recent lifestyle studies, the secret to daily wellness might not be hidden in drastic diets, 
              but in providing gentle, consistent support for your body's natural balance.
            </p>

            <h2 className="text-2xl sm:text-3xl font-bold text-[#1a3a5c] font-serif mt-10 mb-4">
              The Breakthrough Discovery
            </h2>
            
            <p>
              Researchers are increasingly pointing towards specific natural compounds. Among them, 
              ingredients like oregano oil and carvacrol have shown remarkable potential. 
              This is where Erbora 18-IN-1 comes into the picture.
            </p>

            {/* Blockquote feature */}
            <blockquote className="my-10 border-l-4 border-[#c0392b] bg-stone-50 p-6 sm:p-8 italic text-stone-700 text-xl sm:text-2xl">
              "Finding the right natural balance completely transformed my daily routine. I finally feel like myself again, without relying on harsh alternatives. It was like a fog lifted from my mind."
              <footer className="mt-6 font-sans text-sm font-bold not-italic text-[#1a3a5c] uppercase tracking-wider">
                — Lisa Caldwell, Health & Wellness Advocate
              </footer>
            </blockquote>
            
            <div className="my-8 aspect-square w-full sm:w-3/4 mx-auto bg-slate-100 flex flex-col items-center justify-center border border-dashed border-slate-300 text-slate-500 font-sans rounded-none overflow-hidden">
              <span className="text-lg font-bold">[Testimonial Image Placeholder]</span>
              <span className="text-sm mt-1">Insert before/after photo here</span>
            </div>

            <p>
              Instead of relying on a single ingredient, this formula combines 18 carefully selected 
              components designed to work synergistically. Users report feeling lighter, more energetic, 
              and finally back in control of their daily lives.
            </p>

            <div className="my-10 bg-stone-100 p-6 sm:p-10 border-t-4 border-[#1a3a5c]">
              <h3 className="text-xl sm:text-2xl font-bold text-[#1a3a5c] mb-4 font-serif">
                Why It Matters Today
              </h3>
              <p className="text-stone-700 text-base sm:text-lg">
                Ignoring your body's signals can lead to prolonged discomfort. Taking action with a 
                comprehensive, simple daily habit can make a significant difference in your overall well-being.
              </p>
            </div>
            
            <p>
              Don't wait until the symptoms hold you back. An effective daily approach is practical, manageable, and highly beneficial for your inner balance.
            </p>
          </div>

          {/* Main Article CTA Block */}
          <div className="mt-14 text-center border-4 border-[#1a3a5c] bg-white p-8 sm:p-12 shadow-lg">
             <h2 className="text-2xl sm:text-3xl font-bold text-[#1a3a5c] mb-4 font-serif">
               Ready to Experience the Difference?
             </h2>
             <p className="mb-8 text-stone-600 font-sans text-lg">
               Take advantage of our exclusive reader opportunity and start your journey today.
             </p>
            <a 
              href={productUrl}
              className="inline-block w-full sm:w-auto bg-[#c0392b] px-12 py-5 text-lg sm:text-xl font-bold text-white transition-all hover:-translate-y-1 hover:bg-[#a02c20] hover:shadow-xl uppercase tracking-widest font-sans"
            >
              Check Availability Now
            </a>
          </div>
        </article>

        {/* Right Sidebar */}
        <aside className="mt-16 md:mt-0 md:w-1/3">
          <div className="sticky top-28 space-y-8 font-sans">
            {/* Sidebar Widget 1: Trending */}
            <div className="border-t-4 border-[#1a3a5c] bg-stone-50 p-6">
              <h3 className="text-lg font-bold text-[#1a3a5c] border-b border-stone-200 pb-4 mb-6 uppercase tracking-widest">
                Trending Articles
              </h3>
              <ul className="space-y-6">
                {[1, 2, 3].map((item) => (
                  <li key={item} className="flex gap-4 items-start group">
                    <div className="h-16 w-16 bg-slate-200 flex-shrink-0 flex items-center justify-center text-xs text-slate-400 group-hover:opacity-80 transition-opacity">
                      [Img]
                    </div>
                    <a href={productUrl} className="text-sm font-semibold text-stone-800 leading-snug group-hover:text-[#c0392b] transition-colors">
                      Could Your Routine Be Making You Tired? Find Out The Missing Link.
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Sidebar Widget 2: CTA */}
            <div className="bg-white p-6 text-center border border-stone-200 shadow-sm">
              <div className="aspect-square w-3/4 mx-auto bg-slate-100 flex flex-col items-center justify-center border border-dashed border-slate-300 text-slate-500 mb-6">
                <span className="font-bold text-sm">[Product GIF]</span>
              </div>
              <h3 className="text-xl font-bold mb-3 text-[#1a3a5c] font-serif">
                Special Reader Discount
              </h3>
              <p className="text-sm mb-6 text-stone-600 leading-relaxed">
                For a limited time, get exclusive access to our top recommended formula.
              </p>
              <a 
                href={productUrl}
                className="block w-full bg-[#c0392b] px-4 py-4 text-sm font-bold uppercase tracking-widest text-white transition hover:bg-[#a02c20]"
              >
                View Offer
              </a>
            </div>
          </div>
        </aside>
      </main>

      {/* Fixed Sticky Footer */}
      <footer className="fixed bottom-0 left-0 right-0 z-50 bg-[#1a3a5c] text-white shadow-[0_-10px_20px_rgba(0,0,0,0.15)] font-sans">
        <div className="mx-auto flex h-20 max-w-6xl items-center justify-between px-4 sm:px-8">
          <p className="text-xs text-slate-300 hidden md:block w-3/5 leading-relaxed opacity-70">
            Advertorial. Results may vary. Consult a physician before starting any new routine. Terms apply.
          </p>
          <a
            href={productUrl}
            className="flex-1 md:flex-none text-center bg-[#c0392b] px-6 py-4 text-sm sm:text-base font-bold uppercase tracking-widest text-white transition-opacity hover:opacity-90"
          >
            Claim Offer Now
          </a>
        </div>
      </footer>
    </div>
  );
}
