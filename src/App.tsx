import './styles.css'

const AFFILIATE_LINK = '#'

export default function App() {
  return (
    <div className="min-h-screen bg-white font-serif text-stone-800">
      {/* BARRA DE ANÚNCIO (topo fixo) */}
      <div className="fixed top-0 left-0 right-0 z-50">
        <div className="bg-[#1a3a5c] text-white py-2 text-center text-xs font-sans tracking-wide sm:text-sm">
          ⚠ Limited Supply — Cardio Clear Blood Pressure Support | While Stocks Last
        </div>
        
        {/* HEADER */}
        <header className="bg-white border-b border-stone-200 shadow-sm">
          <div className="mx-auto max-w-6xl px-4 py-4 md:py-6 flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-center md:text-left">
              <div className="text-3xl font-serif font-black tracking-tight text-[#1a3a5c]">
                Health<span className="text-[#c0392b]">Daily</span>Report
              </div>
              <div className="text-xs text-stone-500 font-sans mt-1">
                Independent Health Journalism · Trusted by 2.4M readers
              </div>
            </div>
            <nav className="hidden md:flex gap-6 text-sm font-bold uppercase tracking-wider text-stone-600 font-sans">
              <span className="cursor-pointer hover:text-[#1a3a5c]">Health</span>
              <span className="cursor-pointer hover:text-[#1a3a5c]">Nutrition</span>
              <span className="cursor-pointer hover:text-[#1a3a5c]">Wellness</span>
              <span className="cursor-pointer hover:text-[#1a3a5c]">Research</span>
              <span className="cursor-pointer hover:text-[#1a3a5c]">Reviews</span>
            </nav>
          </div>
        </header>
      </div>

      {/* LAYOUT DA PÁGINA (main wrapper com padding para fixed headers/footers) */}
      <main className="mx-auto max-w-6xl px-4 pt-40 pb-32 sm:px-8 lg:flex lg:gap-12">
        
        {/* Coluna esquerda: artigo */}
        <article className="lg:w-[calc(100%-340px)]">
          
          {/* BREADCRUMB */}
          <div className="text-xs font-bold font-sans text-stone-400 uppercase tracking-widest mb-6">
            Home <span className="mx-1">›</span> Health <span className="mx-1">›</span> Cardiovascular
          </div>

          {/* CABEÇALHO DO ARTIGO */}
          <div className="mb-6 inline-block bg-[#1a3a5c] text-white text-xs font-bold uppercase font-sans tracking-widest px-3 py-1 rounded">
            [SPONSORED] HEALTH · 8 MIN READ
          </div>

          <h1 className="font-serif text-3xl font-extrabold leading-tight text-stone-900 sm:text-4xl md:text-5xl lg:leading-[1.1] mb-8">
            She watched her patient die of a heart attack while her chart said 'stable.' 
            What this nurse discovered changed how she thinks about blood pressure medication forever.
          </h1>

          <div className="border-l-4 border-[#c0392b] pl-5 py-2 my-8">
            <p className="font-serif text-xl sm:text-2xl font-medium italic text-stone-600 leading-snug">
              "After 30 years as a nurse, Sandra M. refused to accept that managing symptoms 
              was the answer. What she found in published research — and what happened week by 
              week — is something most doctors have never read."
            </p>
          </div>

          {/* Byline e Disclaimer */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 py-6 border-b border-stone-200 mb-8">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-[#1a3a5c] text-white flex items-center justify-center font-bold font-sans text-lg shrink-0">
                SM
              </div>
              <div className="font-sans text-sm">
                <div className="font-bold text-stone-800">Sandra M., RN</div>
                <div className="text-stone-500">September 2026 · Medical review: Dr. James Whitfield</div>
              </div>
            </div>
            <div className="flex gap-3 text-stone-400">
              <span className="cursor-pointer hover:text-[#1a3a5c] font-sans text-sm font-bold">[Facebook]</span>
              <span className="cursor-pointer hover:text-[#1a3a5c] font-sans text-sm font-bold">[Twitter]</span>
              <span className="cursor-pointer hover:text-[#1a3a5c] font-sans text-sm font-bold">[Email]</span>
              <span className="cursor-pointer hover:text-[#1a3a5c] font-sans text-sm font-bold">[Link]</span>
            </div>
          </div>

          <div className="text-xs text-stone-400 font-sans mb-10 italic">
            This article contains affiliate links. Sponsored content.
          </div>

          {/* CORPO DO ARTIGO */}
          <div className="prose prose-lg max-w-none text-stone-800 font-serif leading-relaxed">
            <p>I need to tell you about Evelyn first.</p>
            <p>
              Evelyn was 67 years old. She had been my patient for four years. Arthritis, 
              managed with anti-inflammatories. Blood pressure, managed with medication. 
              Everything in her chart said stable.
            </p>
            <p>She died in the cereal aisle of a supermarket on a Tuesday morning.</p>
            <p>Sudden cardiac arrest. No warning. Her heart just stopped.</p>
            <p>I was the one who had to call her daughter.</p>
            <p>
              I sat in my car afterward and stared at my hands for a long time. I had 
              followed every protocol. Done everything right. Her chart said stable.
            </p>
            <p>But Evelyn was dead at 67.</p>
            <p>That day changed something in me.</p>

            {/* IMAGEM 1 */}
            <div className="my-10 bg-slate-100 border-2 border-dashed border-slate-300 rounded-xl p-8 text-center text-slate-500 font-sans flex flex-col items-center justify-center">
              <span className="font-bold text-lg mb-2">[IMAGEM 1]</span>
              <p className="text-sm max-w-md mx-auto">
                Nurse in hospital corridor, back to camera, contemplative. 800x400px.<br/>
                <em>Caption: Thirty years in nursing. And she still wasn't prepared for what happened to Evelyn.</em>
              </p>
            </div>

            <h2 className="font-sans text-3xl font-extrabold text-[#1a3a5c] mt-12 mb-6 tracking-tight">
              What your doctor measures. And what he doesn't.
            </h2>

            <p>
              After 30 years as a nurse, I had watched medicine become very good at managing numbers. 
              Blood pressure readings. Inflammatory markers. Cholesterol levels.
            </p>
            <p>But I started asking a question I had never really asked before.</p>
            <p><strong>Were we managing the numbers — or were we actually helping people get better?</strong></p>
            <p>
              When you take medication for blood pressure or inflammation, your doctor watches the numbers. 
              And the numbers often improve.
            </p>
            <p>But managing the symptom is not the same as addressing the cause.</p>
            <p>
              Every class of blood pressure medication works by interfering with a specific mechanism 
              in your body. Some reduce fluid volume. Some relax blood vessel walls. Some slow your 
              heart rate. Some block hormonal signals.
            </p>
            <p>And they work. The numbers come down.</p>
            <p>
              But the underlying inflammation that caused those blood vessels to stiffen in the first 
              place? That keeps going. Silently. While your chart says stable.
            </p>

            {/* GIF 1 */}
            <div className="my-10 bg-slate-100 border-2 border-dashed border-slate-300 rounded-xl p-8 text-center text-slate-500 font-sans">
              <span className="font-bold text-lg mb-2 block">[GIF 1]</span>
              <p className="text-sm">
                Animated diagram: blood pressure monitor drops 146→124 while artery inflammation continues.<br/>
                <em>Text: The number improves. The inflammation continues.</em>
              </p>
            </div>

            <h2 className="font-sans text-3xl font-extrabold text-[#1a3a5c] mt-12 mb-6 tracking-tight">
              The side effects nobody talks about honestly.
            </h2>

            <p>I am not going to tell you to stop taking your medication. I am a nurse, not your doctor.</p>
            <p>But I am going to tell you what I see in patients every single day.</p>
            <p>If you take blood pressure medication and experience any of these:</p>

            {/* IMAGEM 2 */}
            <div className="my-8 bg-slate-100 border-2 border-dashed border-slate-300 rounded-xl p-8 text-center text-slate-500 font-sans">
              <span className="font-bold text-lg mb-4 block">[IMAGEM 2 — Grid 2x3]</span>
              <div className="grid grid-cols-2 gap-4 text-sm text-left max-w-lg mx-auto">
                <div className="bg-white p-3 rounded shadow-sm">• Dry cough that won't go away</div>
                <div className="bg-white p-3 rounded shadow-sm">• Sexual dysfunction after starting meds</div>
                <div className="bg-white p-3 rounded shadow-sm">• Ankle swelling by evening</div>
                <div className="bg-white p-3 rounded shadow-sm">• Frequent urination</div>
                <div className="bg-white p-3 rounded shadow-sm">• Constant unexplained fatigue</div>
                <div className="bg-white p-3 rounded shadow-sm">• Dizziness when standing up</div>
              </div>
            </div>

            <p>Your doctor probably told you: <em>"The benefits outweigh the risks."</em></p>
            <p>Which may be true. But it is also a conversation-ender.</p>
            <p>
              What if there was something that could support cardiovascular health at the inflammatory 
              level — complementary to what your doctor prescribes — that addressed some of what 
              the medication doesn't touch?
            </p>
            <p>That is what I started looking for after Evelyn.</p>

            <h2 className="font-sans text-3xl font-extrabold text-[#1a3a5c] mt-12 mb-6 tracking-tight">
              What I found in the research.
            </h2>

            <p>
              Three years after Evelyn died, I was dealing with my own knee pain and elevated blood pressure.
            </p>
            <p>
              My doctor offered anti-inflammatories and stronger blood pressure medication. I asked 
              about alternatives. He said there weren't any that were clinically proven.
            </p>
            <p>
              So I started reading. Not patient forums. Actual published research. PubMed. 
              University studies. Clinical trials.
            </p>
            <p>And I found something that genuinely surprised me.</p>
            <p>
              Tart cherry — specifically the concentrated extract of Montmorency tart cherries — 
              had been studied at major research institutions including the University of Michigan, 
              Oregon Health and Science University, and the London South Bank University for its 
              effects on inflammatory markers and blood pressure.
            </p>
            <p>
              The compound responsible is <strong>anthocyanins</strong> — the pigment that gives 
              tart cherries their deep red color.
            </p>
            <p>
              Anthocyanins have been shown in multiple peer-reviewed studies to inhibit the same 
              inflammatory enzymes that anti-inflammatory medications target. COX-1 and COX-2. 
              But unlike synthetic anti-inflammatories, they do this without the cardiovascular strain.
            </p>
            <p>
              A study published in the American Journal of Clinical Nutrition found that tart 
              cherry consumption significantly reduced markers of inflammation including C-reactive 
              protein and uric acid.
            </p>
            <p>
              A separate study found meaningful reductions in systolic blood pressure in participants 
              who consumed tart cherry extract consistently over eight weeks.
            </p>

            {/* CALLOUT BOX */}
            <div className="bg-blue-50/80 border-l-4 border-[#1a3a5c] p-6 rounded-r-xl my-10">
              <p className="font-sans text-xl font-medium text-[#1a3a5c] m-0">
                "This was not fringe research. This was published, peer-reviewed science. 
                And almost none of my colleagues knew about it."
              </p>
            </div>

            <h2 className="font-sans text-3xl font-extrabold text-[#1a3a5c] mt-12 mb-6 tracking-tight">
              Why most tart cherry products don't work.
            </h2>

            <p>
              When I came home and searched for tart cherry supplements, I found hundreds of options. 
              I bought three of them and took them for six weeks. Nothing happened.
            </p>
            <p>
              Then I went back to the research. And I found the answer buried in a footnote.
            </p>
            <p className="font-bold text-xl">
              Anthocyanins are extraordinarily heat-sensitive.
            </p>
            <p>
              When tart cherries are processed at high temperatures — which is how nearly every 
              commercial supplement and juice is made — the anthocyanins are destroyed. The bottle 
              says tart cherry. But the active compound is gone.
            </p>

            {/* GIF 2 */}
            <div className="my-10 bg-slate-100 border-2 border-dashed border-slate-300 rounded-xl p-8 text-center text-slate-500 font-sans">
              <span className="font-bold text-lg mb-4 block">[GIF 2]</span>
              <p className="text-sm">
                Two panels: LEFT: cherry → heat → compound disappears → empty capsule ✗<br/>
                RIGHT: cherry → cold-press → compound preserved → full capsule ✓<br/><br/>
                <em>Text: Heat destroys it. Cold-press preserves it.</em>
              </p>
            </div>

            <p>
              The only way to preserve the therapeutic concentration of anthocyanins is 
              <strong> cold-press extraction</strong>. A process that is significantly more 
              expensive and that most manufacturers don't bother with.
            </p>
            <p>
              I started looking for a product that used cold-press extraction and standardized 
              their anthocyanin content.
            </p>
            <p>I found one.</p>

            <h2 className="font-sans text-3xl font-extrabold text-[#1a3a5c] mt-12 mb-6 tracking-tight">
              What happened when I found the right product.
            </h2>

            <p>
              I received Cardio Clear on a Wednesday afternoon. No expectations. I had been 
              disappointed before.
            </p>

            <h3 className="font-sans text-xl font-bold uppercase tracking-widest text-[#c0392b] mt-8 mb-4">Week 1</h3>
            <p>Honestly? Nothing different in the first three days.</p>
            <p>
              On the fourth day, I woke up and noticed something small. The morning stiffness 
              in my knee felt slightly less intense. It could have been coincidence. I just kept taking it.
            </p>
            <p>
              On day seven I walked to the end of the block without stopping to rest. Small. 
              But I hadn't done that in months.
            </p>

            <h3 className="font-sans text-xl font-bold uppercase tracking-widest text-[#c0392b] mt-8 mb-4">Week 2</h3>
            <p>The dry cough that woke me up at night started appearing less.</p>
            <p>
              The swelling in my legs at end of day was visibly less. I was able to put my 
              shoes on at 7pm for the first time in weeks without feeling like they were too tight.
            </p>
            <p>Pain in the knee: from an 8 to something I'd describe as a 5.</p>
            <p>
              I stopped taking anti-inflammatories that week. Not because I was told to. 
              Because I simply didn't feel like I needed them.
            </p>

            <h3 className="font-sans text-xl font-bold uppercase tracking-widest text-[#c0392b] mt-8 mb-4">Week 3</h3>
            <p>I slept through the night four nights in a row. For the first time in over a year.</p>
            <p>
              The pressure I felt in my knee going up stairs had changed enough to notice. 
              I went up a full floor at the hospital without holding the railing.
            </p>
            <p>Pain: 3 out of 10.</p>

            {/* IMAGEM 3 */}
            <div className="my-10 bg-slate-100 border-2 border-dashed border-slate-300 rounded-xl p-8 text-center text-slate-500 font-sans">
              <span className="font-bold text-lg block mb-4">[IMAGEM 3 — Timeline visual]</span>
              <div className="text-sm font-mono text-left max-w-sm mx-auto space-y-2">
                <div>Week 1 (pain 8→7)</div>
                <div>Week 2 (5, shoes fitting at 7pm)</div>
                <div>Week 3 (3, sleeping full nights)</div>
                <div>Week 4 (BP 124/80)</div>
                <div>Month 2 (40min walks, ring fits again)</div>
                <div>Month 3 (CRP 1.1)</div>
              </div>
            </div>

            <h3 className="font-sans text-xl font-bold uppercase tracking-widest text-[#c0392b] mt-8 mb-4">Week 4</h3>
            <p>I went to my routine appointment.</p>
            <p>My doctor measured my blood pressure: <strong>124/80</strong>.</p>
            <p>At the previous appointment it had been 146/92.</p>
            <p>He looked at the monitor. Then at me. Then at the monitor again.</p>

            <blockquote className="border-l-4 border-[#1a3a5c] pl-5 my-6 text-[#1a3a5c] font-medium font-sans">
              "What did you change?"
            </blockquote>

            <p>
              I told him about the tart cherry. About cold-press extraction. About the anthocyanins. 
              He was quiet for a moment. Then he said:
            </p>

            <blockquote className="border-l-4 border-[#1a3a5c] pl-5 my-6 text-[#1a3a5c] font-medium font-sans">
              "Keep doing whatever you're doing."
            </blockquote>

            <h3 className="font-sans text-xl font-bold uppercase tracking-widest text-[#c0392b] mt-8 mb-4">Month 2</h3>
            <p>
              Knee pain reached 2 out of 10. I went back to walking 40 minutes in the morning — 
              something I had abandoned 18 months earlier.
            </p>
            <p>The wedding ring that no longer fit because of the swelling fit again.</p>
            <p>My daughter noticed I was moving differently.</p>

            <blockquote className="border-l-4 border-[#1a3a5c] pl-5 my-6 text-[#1a3a5c] font-medium font-sans">
              "Mom, you look lighter."
            </blockquote>

            <h3 className="font-sans text-xl font-bold uppercase tracking-widest text-[#c0392b] mt-8 mb-4">Month 3</h3>
            <p>Blood test results: C-reactive protein at 1.1. It had been at 3.8 a year earlier.</p>
            <p>My doctor said:</p>

            <blockquote className="border-l-4 border-[#1a3a5c] pl-5 my-6 text-[#1a3a5c] font-medium font-sans">
              "If this continues, we can talk about gradually reducing one of your blood 
              pressure medications."
            </blockquote>

            {/* IMAGEM 4 */}
            <div className="my-10 bg-slate-100 border-2 border-dashed border-slate-300 rounded-xl p-8 text-center text-slate-500 font-sans">
              <span className="font-bold text-lg block mb-4">[IMAGEM 4 — Lab results]</span>
              <p className="text-sm">
                hs-CRP: 1.1 mg/L ✓<br/>
                Blood Pressure: 124/80 ✓<br/>
                Uric Acid: 5.2 mg/dL ✓<br/>
                <em>Caption: "Month 3 results."</em>
              </p>
            </div>

            <h2 className="font-sans text-3xl font-extrabold text-[#1a3a5c] mt-12 mb-6 tracking-tight">
              For the people reading this who recognize themselves.
            </h2>

            <p>I am not telling you this cures anything. That is not a claim I will make.</p>
            <p>
              But the research on anthocyanins and cardiovascular inflammatory support is real, 
              it is published, and most people taking medication long-term have never heard of it.
            </p>
            <p>
              And Evelyn? I still think about her. Especially when I see a patient with a 
              chart that says "stable."
            </p>
            <p><strong>Stable is not the same as well.</strong></p>
            <p>She deserved to know what I know now. I'm telling you.</p>

            {/* IMAGEM PRODUTO */}
            <div className="my-12 text-center">
              <img 
                src="/uploads/cardio-clear.png"
                alt="Cardio Clear Product"
                className="w-full max-w-sm mx-auto object-cover rounded-xl shadow-lg border border-stone-200 block bg-slate-50 min-h-[300px]"
              />
              <a 
                href={AFFILIATE_LINK}
                className="mt-8 inline-block w-full sm:w-auto bg-[#166534] hover:bg-green-900 text-white font-sans font-bold text-xl sm:text-2xl py-5 px-10 rounded-full shadow-lg transition-transform hover:scale-[1.02]"
              >
                👉 Check Cardio Clear Availability →
              </a>
            </div>

            {/* BLOCO CTA PRINCIPAL */}
            <div className="mt-16 bg-[#1a3a5c] p-8 sm:p-12 rounded-2xl shadow-xl text-white font-sans relative">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#c0392b] text-white px-6 py-2 rounded-full font-bold uppercase tracking-widest text-sm shadow-md whitespace-nowrap">
                Limited Availability
              </div>
              
              <h2 className="text-3xl font-extrabold text-center mb-10 text-white mt-4">
                Cardio Clear — Blood Pressure Support†
              </h2>
              
              <div className="max-w-md mx-auto space-y-4 text-lg font-medium mb-10">
                <div className="flex items-start gap-3">
                  <span className="text-yellow-500 font-bold text-xl">✓</span>
                  <span>Cold-press extracted Montmorency tart cherry</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-yellow-500 font-bold text-xl">✓</span>
                  <span>Standardized for maximum anthocyanin content</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-yellow-500 font-bold text-xl">✓</span>
                  <span>Third-party lab tested for purity</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-yellow-500 font-bold text-xl">✓</span>
                  <span>No fillers, no artificial ingredients</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-yellow-500 font-bold text-xl">✓</span>
                  <span>60 capsules — 30-day supply</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-yellow-500 font-bold text-xl">✓</span>
                  <span>Full 90-day money-back guarantee</span>
                </div>
              </div>

              <div className="text-center">
                <a 
                  href={AFFILIATE_LINK}
                  className="inline-block w-full sm:w-auto bg-amber-400 hover:bg-amber-500 text-stone-900 font-black text-xl py-5 px-10 rounded-xl shadow-lg transition-transform hover:-translate-y-1"
                >
                  Verify Availability & Current Price →
                </a>
                <p className="text-slate-300 text-sm mt-6 font-medium">
                  Free US Shipping · 90-Day Guarantee · While Stocks Last
                </p>
              </div>
            </div>

            {/* CTA FINAL */}
            <div className="mt-12 p-8 border-2 border-[#1a3a5c] rounded-xl text-center font-sans">
              <p className="font-bold text-lg text-[#1a3a5c] mb-6">
                Stock is limited — Cardio Clear sources from small-batch cold-press facilities 
                and production runs sell through faster than expected.
              </p>
              <a 
                href={AFFILIATE_LINK}
                className="inline-block w-full sm:w-auto bg-[#1a3a5c] hover:bg-blue-950 text-white font-bold text-lg py-4 px-8 rounded-lg transition-colors shadow-md"
              >
                Check Availability Now →
              </a>
            </div>

            {/* DISCLAIMER */}
            <div className="mt-16 bg-stone-100 p-6 rounded-lg text-xs leading-relaxed text-stone-500 font-sans">
              † These statements have not been evaluated by the Food and Drug Administration. 
              This product is not intended to diagnose, treat, cure, or prevent any disease. 
              This article is for informational purposes only and does not constitute medical advice. 
              Do not discontinue prescribed medication without consulting your physician. 
              Individual results may vary. The author may receive compensation for purchases 
              made through links in this article.
            </div>

          </div>
        </article>

        {/* SIDEBAR (apenas desktop) */}
        <aside className="hidden lg:block w-[300px] shrink-0 font-sans">
          <div className="sticky top-40 space-y-8">
            
            {/* Widget 1 — Produto */}
            <div className="border border-stone-200 rounded-xl overflow-hidden shadow-sm bg-white">
              <div className="bg-[#1a3a5c] text-white font-bold text-center py-3 uppercase tracking-widest text-sm">
                Featured Product
              </div>
              <div className="p-6 flex flex-col items-center text-center">
                <img 
                  src="/uploads/cardio-clear.png" 
                  alt="Cardio Clear"
                  className="w-48 h-48 object-cover mb-4 rounded-xl bg-slate-50"
                />
                <h3 className="font-extrabold text-[#1a3a5c] text-xl mb-4 leading-tight">
                  Cardio Clear — Blood Pressure Support†
                </h3>
                
                <ul className="text-sm text-stone-600 text-left w-full space-y-2 mb-6">
                  <li className="flex gap-2">✓ Cold-press extracted</li>
                  <li className="flex gap-2">✓ Max anthocyanin content</li>
                  <li className="flex gap-2">✓ 3rd-party lab tested</li>
                  <li className="flex gap-2">✓ 90-day money back</li>
                </ul>

                <div className="mb-6 flex flex-col items-center">
                  <div className="text-yellow-400 text-xl tracking-tight mb-1">★★★★★</div>
                  <div className="text-xs font-bold text-stone-500">
                    4.8/5 (3,247 verified reviews)
                  </div>
                </div>

                <a 
                  href={AFFILIATE_LINK}
                  className="w-full bg-[#1a3a5c] hover:bg-blue-950 text-white font-bold text-center py-3 rounded-lg transition-colors"
                >
                  Verify Availability →
                </a>
              </div>
            </div>

            {/* Widget 2 — Research */}
            <div className="border border-stone-200 rounded-xl overflow-hidden shadow-sm bg-white">
              <div className="bg-[#1a3a5c] text-white font-bold text-center py-3 uppercase tracking-widest text-sm">
                Published Research
              </div>
              <div className="p-6">
                <p className="text-sm text-stone-700 leading-relaxed">
                  Research referenced in this article includes clinical evaluations of anthocyanins 
                  from Montmorency tart cherries published in the <em>American Journal of Clinical Nutrition</em>, 
                  alongside peer-reviewed studies conducted at the University of Michigan and 
                  London South Bank University.
                </p>
              </div>
            </div>

          </div>
        </aside>
      </main>

      {/* STICKY FOOTER */}
      <footer className="fixed bottom-0 left-0 right-0 z-50 bg-[#1a3a5c] border-t border-blue-900 shadow-[0_-8px_20px_rgba(0,0,0,0.15)]">
        <div className="mx-auto flex h-20 sm:h-24 max-w-6xl items-center justify-between px-4 sm:px-8 font-sans">
          <div className="hidden md:block text-slate-200 text-sm leading-relaxed max-w-lg">
            <strong>Cardio Clear Blood Pressure Support†</strong><br/>
            <span className="opacity-80">Cold-press extracted · 90-day guarantee</span>
          </div>
          <a
            href={AFFILIATE_LINK}
            className="flex-1 md:flex-none text-center bg-[#2980b9] hover:bg-[#3498db] text-white px-8 py-4 sm:py-5 rounded-lg text-lg sm:text-xl font-bold transition-colors shadow-lg"
          >
            Verify Availability →
          </a>
        </div>
      </footer>
    </div>
  )
}
