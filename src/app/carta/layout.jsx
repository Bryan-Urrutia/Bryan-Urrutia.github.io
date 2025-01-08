import { Tabs } from "@/components/ui/tabs";
import Sidebar from "@/app/carta/Sidebar";

export default function Layout({ children }) {
  return (
    <Tabs
      className="flex flex-row gap-x-4 bg-light dark:bg-dark min-h-screen bg-no-repeat bg-center bg-cover bg-fixed w-full"
      defaultValue="account"
    >
      <section className="container mx-auto py-14">{children}</section>
    </Tabs>
  );
}
