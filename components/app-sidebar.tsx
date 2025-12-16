'use client'
import * as React from "react"

import { SearchForm } from "@/components/search-form"
import { VersionSwitcher } from "@/components/version-switcher"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from "@/components/ui/sidebar"
import { usePathname } from "next/navigation"
import ThemeToggler from "./ThemeToggler"
import Link from "next/link"

// This is sample data.
const data = {
  versions: ["1.0.1", "1.1.0-alpha", "2.0.0-beta1"],
  navMain: [
    {
      title: "Menú",
      url: "#",
      items: [
        {
          title: "Inicio",
          url: "/",
        },
        {
          title: "Cartitas",
          url: "/cartitas",
        },
        {
          title: "Cuentitos",
          url: "/cuentitos",
        },
        {
          title: "Recuerditos",
          url: "/recuerditos",
        },
        {
          title: "Cancioncitas",
          url: "/cancioncitas",
        },
        {
          title: "Dibujitos",
          url: "/dibujitos",
        },
        {
          title: "Poemas",
          url: "/poema",
        },
      ],
    }
  ],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const pathname = usePathname();
  return (
    <Sidebar {...props} className="z-50">
      {/* <SidebarHeader>
        <VersionSwitcher
          versions={data.versions}
          defaultVersion={data.versions[0]}
        />
        <SearchForm />
      </SidebarHeader> */}
      <SidebarContent>
        {/* We create a SidebarGroup for each parent. */}
        {data.navMain.map((item) => (
          <SidebarGroup key={item.title}>
            <SidebarGroupLabel>{item.title}</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {item.items.map((subItem) => {
                const isActive = pathname === subItem.url

                return (
                  <SidebarMenuItem key={subItem.title}>
                    <SidebarMenuButton asChild isActive={isActive}>
                      <Link href={subItem.url}>{subItem.title}</Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                )
              })}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        ))}
      </SidebarContent>
      <SidebarRail />
      <SidebarFooter>
        <ThemeToggler />
      </SidebarFooter>
    </Sidebar>
  )
}
