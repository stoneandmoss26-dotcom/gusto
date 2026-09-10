import './styles.css'

const productUrl =
  'https://tryerbora.com/products/erbora-18-in-1-elimina-parassiti-e-larve-nascosti'
const attachedImage = '/uploads/0620b48a-6cc4-4e7e-ac9e-c6397a9ce9f4.png'

const symptoms = [
  'Inchaço, gases ou desconforto depois das refeições',
  'Cansaço persistente mesmo após uma noite de sono',
  'Vontade frequente de comer doces e sensação de fome',
  'Sono inquieto ou dificuldade para manter a concentração',
]

const reviews = [
  {
    name: 'Marina R.',
    text: 'Depois de algumas semanas, comecei a me sentir mais leve e com muito mais disposição durante o dia.',
  },
  {
    name: 'Cláudia M.',
    text: 'Gostei da praticidade e da fórmula. Minha rotina ficou mais simples e meu bem-estar melhorou bastante.',
  },
  {
    name: 'Patrícia A.',
    text: 'O que mais gostei foi conseguir manter o uso todos os dias sem complicar a alimentação.',
  },
]

function Cta({ children }: { children: React.ReactNode }) {
  return (
    <a
      href={productUrl}
      className="inline-flex w-full items-center justify-center rounded-full bg-emerald-600 px-6 py-4 text-center text-base font-extrabold text-white shadow-lg transition hover:bg-emerald-700 sm:w-auto"
    >
      {children}
    </a>
  )
}

export default function App() {
  return (
    <main className="min-h-screen bg-[#fbfaf6] text-stone-800">
      <div className="border-b border-amber-200 bg-amber-100 px-4 py-3 text-center text-sm font-bold text-amber-950">
        Oferta especial disponível enquanto durarem os estoques de Erbora 18-IN-1
      </div>

      <header className="border-b border-stone-200 bg-white px-4 py-4 sm:px-8">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4">
          <div className="text-xl font-black tracking-tight text-emerald-800 sm:text-2xl">
            Health & Wellness Today
          </div>
          <a href={productUrl} className="hidden rounded-full bg-emerald-700 px-5 py-2 text-sm font-bold text-white sm:inline-flex">
            Ver oferta
          </a>
        </div>
      </header>

      <article className="mx-auto max-w-6xl px-4 py-8 sm:px-8 sm:py-12">
        <section className="mx-auto max-w-4xl text-center">
          <p className="mb-4 text-sm font-bold uppercase tracking-[0.18em] text-emerald-700">
            Conteúdo editorial • Saúde e bem-estar
          </p>
          <h1 className="text-3xl font-black leading-tight text-stone-900 sm:text-5xl">
            O que Lisa Caldwell descobriu sobre os sinais que o corpo dá — e como o Erbora 18-IN-1 entrou na sua rotina
          </h1>
          <p className="mx-auto mt-5 max-w-3xl text-lg leading-relaxed text-stone-600 sm:text-xl">
            Uma história real sobre desconfortos silenciosos, uma nova forma de apoiar o equilíbrio do organismo e uma fórmula inspirada no poder do óleo de orégano.
          </p>
          <p className="mt-4 text-sm text-stone-500">Por Health & Wellness Today | Atualizado hoje</p>
        </section>

        <section className="mx-auto mt-10 max-w-4xl overflow-hidden rounded-2xl bg-white shadow-xl ring-1 ring-stone-200">
          <img src={attachedImage} alt="Imagem Before e After da história apresentada no advertorial" className="block h-auto w-full" />
          <p className="px-5 py-3 text-center text-xs text-stone-500">
            Imagem ilustrativa da transformação apresentada nesta história.
          </p>
        </section>

        <section className="mx-auto mt-10 max-w-3xl space-y-5 text-lg leading-relaxed text-stone-700">
          <p>
            Durante muito tempo, Lisa Caldwell achou que o cansaço, o desconforto após as refeições e aquela sensação de não estar no seu melhor eram apenas parte da rotina. Ela tentou fazer pequenas mudanças, mas nada parecia se encaixar de forma consistente.
          </p>
          <p>
            Foi quando começou a pesquisar mais sobre o equilíbrio intestinal e sobre compostos naturais tradicionalmente usados em rotinas de bem-estar que encontrou uma abordagem diferente: apoiar o organismo de maneira diária, sem complicar a vida.
          </p>
          <p>
            A partir daí, Lisa conheceu o Erbora 18-IN-1, uma fórmula criada para reunir 18 ingredientes em uma rotina prática, com destaque para o óleo de orégano e o carvacrol.
          </p>
        </section>

        <section className="mx-auto mt-12 max-w-4xl rounded-3xl bg-emerald-900 px-6 py-10 text-white sm:px-12">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-emerald-200">O mecanismo por trás da fórmula</p>
          <h2 className="mt-3 text-3xl font-black sm:text-4xl">Uma abordagem completa para a sua rotina de bem-estar</h2>
          <p className="mt-5 text-lg leading-relaxed text-emerald-50">
            O Erbora 18-IN-1 combina uma seleção de ingredientes em uma fórmula desenvolvida para apoiar o equilíbrio digestivo e o bem-estar geral. O óleo de orégano, naturalmente associado ao carvacrol, é o destaque da composição, enquanto os demais componentes complementam a proposta de cuidado diário.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            <div className="rounded-2xl bg-white/10 p-5"><strong className="block text-xl">18 em 1</strong><span className="mt-2 block text-sm text-emerald-100">Ingredientes reunidos em uma única rotina.</span></div>
            <div className="rounded-2xl bg-white/10 p-5"><strong className="block text-xl">Óleo de orégano</strong><span className="mt-2 block text-sm text-emerald-100">Ingrediente central da proposta Erbora.</span></div>
            <div className="rounded-2xl bg-white/10 p-5"><strong className="block text-xl">Uso simples</strong><span className="mt-2 block text-sm text-emerald-100">Uma alternativa prática para o dia a dia.</span></div>
          </div>
        </section>

        <section className="mx-auto mt-12 max-w-4xl">
          <div className="grid gap-8 md:grid-cols-2 md:items-center">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-emerald-700">Você reconhece estes sinais?</p>
              <h2 className="mt-3 text-3xl font-black text-stone-900">O corpo pode estar pedindo mais atenção</h2>
              <p className="mt-4 leading-relaxed text-stone-600">Esses sinais podem ter diferentes causas e não substituem uma avaliação profissional. Ainda assim, eles são um lembrete para observar melhor a sua rotina e o seu bem-estar.</p>
            </div>
            <ul className="space-y-3 rounded-2xl bg-white p-6 shadow-md ring-1 ring-stone-200">
              {symptoms.map((symptom) => (
                <li key={symptom} className="flex gap-3 leading-relaxed"><span className="text-xl text-emerald-600">✓</span><span>{symptom}</span></li>
              ))}
            </ul>
          </div>
        </section>

        <section className="mx-auto mt-12 max-w-4xl rounded-3xl border border-amber-200 bg-amber-50 p-6 text-center sm:p-10">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-amber-800">A diferença Erbora</p>
          <h2 className="mt-3 text-3xl font-black text-stone-900">Mais do que um ingrediente isolado</h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-stone-700">
            Em vez de depender de uma única substância, o Erbora 18-IN-1 foi pensado como uma fórmula combinada para acompanhar uma rotina de cuidado consistente. A proposta é tornar o autocuidado mais simples, claro e fácil de manter.
          </p>
          <div className="mt-7"><Cta>Conhecer o Erbora 18-IN-1</Cta></div>
        </section>

        <section className="mx-auto mt-12 max-w-4xl">
          <h2 className="text-center text-3xl font-black text-stone-900">O que outras leitoras estão dizendo</h2>
          <div className="mt-7 grid gap-4 md:grid-cols-3">
            {reviews.map((review) => (
              <blockquote key={review.name} className="rounded-2xl bg-white p-6 shadow-md ring-1 ring-stone-200">
                <div className="text-amber-500" aria-label="5 estrelas">★★★★★</div>
                <p className="mt-3 text-sm leading-relaxed text-stone-600">“{review.text}”</p>
                <footer className="mt-4 font-bold text-stone-900">{review.name}</footer>
              </blockquote>
            ))}
          </div>
        </section>

        <p className="mx-auto mt-10 max-w-3xl text-center text-xs leading-relaxed text-stone-500">
          Aviso: este conteúdo tem finalidade informativa e publicitária. Erbora 18-IN-1 não se destina a diagnosticar, tratar, curar ou prevenir qualquer doença. Os resultados podem variar. Consulte um profissional de saúde antes de iniciar qualquer suplemento, especialmente se estiver grávida, amamentando ou usando medicamentos.
        </p>
      </article>

      <a href={productUrl} className="fixed bottom-4 right-4 z-20 hidden max-w-xs rounded-2xl bg-emerald-700 px-5 py-4 text-center text-sm font-extrabold text-white shadow-2xl transition hover:bg-emerald-800 sm:block">
        Conheça o Erbora 18-IN-1
      </a>
    </main>
  )
}
