import './styles.css'

const productUrl =
  'https://tryerbora.com/products/erbora-18-in-1-elimina-parassiti-e-larve-nascosti'

export default function App() {
  return (
    <div className="min-h-screen bg-white font-sans text-stone-800 pt-16 pb-20">
      {/* Fixed Topbar */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#1a3a5c] text-white shadow-md">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-8">
          <div className="text-xl font-bold uppercase tracking-wider font-serif">Health Daily Report</div>
          <nav className="text-sm font-medium hidden sm:block text-slate-200">
            <span className="cursor-pointer hover:text-white transition-colors">Trending Today</span>
          </nav>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="mx-auto max-w-6xl px-4 py-8 sm:px-8 md:flex md:gap-12">
        
        {/* Left Column / Main Article */}
        <article className="md:w-2/3">
          <h1 className="font-serif text-3xl font-extrabold leading-tight text-[#1a3a5c] sm:text-4xl md:text-5xl">
            Special Report: The Secret to Finding Daily Balance and Vitality
          </h1>
          
          <div className="my-5 flex items-center justify-between border-b border-t border-stone-200 py-3 text-xs sm:text-sm text-stone-500 uppercase tracking-widest font-bold">
            <span>Published Today</span>
            <span>Health Editorial Team</span>
          </div>

          <div className="my-8 aspect-video w-full bg-slate-100 flex flex-col items-center justify-center border-2 border-dashed border-slate-300 text-slate-500 rounded-xl overflow-hidden">
            <span className="text-lg font-bold">[Main Image / GIF Placeholder]</span>
            <span className="text-sm mt-1">Insert compelling visual here</span>
          </div>

          <div className="space-y-6 font-serif text-lg text-stone-700 leading-relaxed">
            <p>
              Millions of people wake up every day feeling tired, bloated, and less than their best. 
              Despite eating right and trying various routines, the discomfort persists. Sound familiar?
            </p>
            <p>
              According to recent lifestyle studies, the secret to daily wellness might not be hidden in drastic diets, 
              but in providing gentle, consistent support for your body's natural balance.
            </p>

            <h2 className="text-2xl font-bold text-[#1a3a5c] font-sans mt-10 mb-4 tracking-tight">The Breakthrough Discovery</h2>
            
            <p>
              Researchers are increasingly pointing towards specific natural compounds. Among them, 
              ingredients like oregano oil and carvacrol have shown remarkable potential. 
              This is where Erbora 18-IN-1 comes into the picture.
            </p>
            
            <div className="my-8 aspect-square sm:aspect-video w-full bg-slate-100 flex flex-col items-center justify-center border-2 border-dashed border-slate-300 text-slate-500 rounded-xl overflow-hidden">
              <span className="text-lg font-bold">[Testimonial Image Placeholder]</span>
              <span className="text-sm mt-1">Insert before/after or product shot here</span>
            </div>

            <p>
              Instead of relying on a single ingredient, this formula combines 18 carefully selected 
              components designed to work synergistically. Users report feeling lighter, more energetic, 
              and finally back in control of their daily lives.
            </p>

            <div className="my-8 rounded-xl bg-stone-50 p-6 sm:p-8 border-l-4 border-[#c0392b] shadow-sm">
              <h3 className="text-xl font-bold text-[#c0392b] mb-3 font-sans">Why It Matters</h3>
              <p className="text-stone-700 font-sans text-base">
                Ignoring your body's signals can lead to prolonged discomfort. Taking action with a 
                comprehensive, simple daily habit can make a significant difference in your overall well-being.
              </p>
            </div>
            
            <p>
              Don't wait until the symptoms hold you back. An effective daily approach is practical, manageable, and highly beneficial for your inner balance.
            </p>
          </div>

          {/* Special CTA Block */}
          <div className="mt-12 text-center rounded-2xl bg-[#1a3a5c] p-8 sm:p-12 text-white shadow-xl">
             <h2 className="text-2xl sm:text-3xl font-bold mb-4 font-serif">Ready to Experience the Difference?</h2>
             <p className="mb-8 text-slate-200 font-sans text-lg">
               Take advantage of our exclusive reader opportunity and start your journey today.
             </p>
            <a 
              href={productUrl}
              className="inline-block w-full sm:w-auto rounded-lg bg-[#c0392b] px-10 py-5 text-xl font-bold text-white shadow-lg transition-transform hover:-translate-y-1 hover:bg-red-800 uppercase tracking-wide font-sans"
            >
              Check Availability Now
            </a>
          </div>
        </article>

        {/* Right Sidebar */}
        <aside className="mt-16 md:mt-0 md:w-1/3">
          <div className="sticky top-24 space-y-8">
            {/* Sidebar Widget 1 */}
            <div className="rounded-xl border border-stone-200 bg-white p-6 shadow-sm">
              <h3 className="font-sans text-lg font-bold text-[#1a3a5c] border-b border-stone-200 pb-3 mb-5 uppercase tracking-wide">
                Trending Articles
              </h3>
              <ul className="space-y-6">
                {[1, 2, 3].map((item) => (
                  <li key={item} className="flex gap-4 items-start group">
                    <div className="h-20 w-20 bg-slate-100 flex-shrink-0 flex items-center justify-center text-xs text-slate-400 rounded-lg group-hover:opacity-80 transition-opacity border border-slate-200">
                      [Img]
                    </div>
                    <a href={productUrl} className="text-sm font-semibold text-stone-800 leading-snug group-hover:text-[#c0392b] transition-colors font-sans block">
                      Could Your Routine Be Making You Tired? Find Out The Missing Link.
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Sidebar CTA Widget */}
            <div className="rounded-xl bg-stone-50 p-6 text-center border border-stone-200 shadow-md">
              <div className="aspect-square w-2/3 mx-auto bg-slate-100 flex flex-col items-center justify-center border-2 border-dashed border-slate-300 text-slate-500 rounded-full mb-6 overflow-hidden">
                <span className="font-bold text-sm">[Product]</span>
              </div>
              <h3 className="text-xl font-bold mb-2 text-[#1a3a5c] font-serif">Special Reader Discount</h3>
              <p className="text-sm mb-6 text-stone-600 font-sans">
                For a limited time, get exclusive access to Erbora 18-IN-1.
              </p>
              <a 
                href={productUrl}
                className="block w-full rounded-lg bg-[#c0392b] px-4 py-4 font-bold uppercase tracking-wider text-white transition hover:bg-red-800 shadow-sm font-sans"
              >
                View Offer
              </a>
            </div>
          </div>
        </aside>
      </main>

      <div className="h-12 w-full"></div>

      {/* Fixed Footer */}
      <footer className="fixed bottom-0 left-0 right-0 z-50 bg-[#1a3a5c] text-white shadow-[0_-4px_10px_rgba(0,0,0,0.2)]">
        <div className="mx-auto flex h-20 max-w-6xl items-center justify-between px-4 sm:px-8">
          <p className="text-xs text-slate-300 hidden md:block w-3/5 leading-relaxed opacity-80">
            * This is an advertorial. Results may vary. Consult a physician before starting any new wellness routine. Term and conditions apply.
          </p>
          <a
            href={productUrl}
            className="flex-1 md:flex-none text-center rounded-md bg-[#c0392b] px-8 py-4 text-base font-bold uppercase tracking-widest text-white transition-colors hover:bg-red-800 shadow-lg font-sans"
          >
            Claim Offer Now
          </a>
        </div>
      </footer>
    </div>
  )
}
