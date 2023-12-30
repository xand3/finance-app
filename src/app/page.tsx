import PageHeader from "@/components/PageHeader";
import PageFooter from "@/components/PageFooter";
import Features from "@/components/Features";

export default function Example() {
  return (
    <main className="flex flex-col justify-between">
      <PageHeader />
      <Features />
      <PageFooter />
    </main>
  );
}
