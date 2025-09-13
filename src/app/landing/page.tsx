import Link from "next/link";
import Footer from "../../components/footer";
import GenerateSection from "@/components/generate";

export default function LandingPage() {
  return (
    <main className="min-h-screen flex flex-col justify-between">
      <section className="flex-1 flex flex-col items-center justify-center py-20">
        <h1 className="text-5xl font-bold mb-6 text-center">Welcome to the Landing Page</h1>
        <p className="text-lg text-gray-600 mb-8 text-center max-w-xl">
          This is the landing page for your Next.js + Tailwind CSS project. Customize this section to introduce your product, service, or anything you want!
        </p>
        <Link
          href="/"
          className="inline-block px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold shadow hover:bg-primary/90 transition"
        >
          Go to Home
        </Link>
      </section>
      <GenerateSection />
      <Footer />
    </main>
  );
}
