import { Card } from "@/components/Card";
import { Header } from "@/components/Header";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between bg-white">
      <Header></Header>

      <section className="mt-44 mb-8 flex flex-wrap gap-3 justify-center">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </section>
    </main>
  );
}
