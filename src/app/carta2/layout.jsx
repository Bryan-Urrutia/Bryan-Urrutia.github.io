import { Tabs } from "@/components/ui/tabs";

export default function Layout({ children }) {
  return (
    <div className="flex flex-row gap-x-4 bg-light dark:bg-dark min-h-screen bg-no-repeat bg-center bg-cover bg-fixed w-full">
      <section className="container mx-auto py-14">{children}</section>
    </div>
  );
}
