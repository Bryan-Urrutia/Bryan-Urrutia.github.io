import { Tabs } from "@/components/ui/tabs";
import Sidebar from "@/components/Wiki/Sidebar";

export default function Layout({ children }) {
  return (
    <Tabs className="flex flex-row gap-x-4" defaultValue="account">
      <Sidebar />
      <section className="container mx-auto py-14">{children}</section>
    </Tabs>
  );
}
