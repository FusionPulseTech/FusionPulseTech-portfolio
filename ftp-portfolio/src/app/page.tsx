import Footer from "@/components/Footer";
import Header from "@/components/Header";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow p-4">
        <h1 className="text-2xl font-bold">
          Welcome to FusionPulseTech IT solutions
        </h1>
        <p>This is the home page.</p>
      </main>
      <Footer />
    </div>
  );
}
