import Footer from "@/components/footer";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col justify-between">
      <section className="flex-1 flex flex-col items-center justify-center py-20">
        <h1 className="text-4xl font-bold mb-4">Welcome to Next.js + Tailwind CSS!</h1>
      </section>
      <Footer />
    </main>
  );
}
