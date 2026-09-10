import './styles.css'

const attachedImage = '/uploads/0620b48a-6cc4-4e7e-ac9e-c6397a9ce9f4.png'

export default function App() {
  return (
    <main className="min-h-screen bg-background px-4 py-8 text-foreground sm:px-8 lg:px-12">
      <section className="mx-auto flex min-h-[calc(100vh-4rem)] max-w-7xl items-center justify-center">
        <div className="w-full overflow-hidden rounded-2xl border border-border bg-card shadow-xl">
          <img
            src={attachedImage}
            alt="Comparação entre a imagem da prima durante a gravidez e depois"
            className="block h-auto w-full"
          />
        </div>
      </section>
    </main>
  )
}
