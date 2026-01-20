'use client'

import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  // useSidebar,
} from '@/components/ui/sidebar'
import { NavPrimaryProps } from '@/lib/types'
import { Link } from '@tanstack/react-router'
export function NavPrimary({ items }: NavPrimaryProps) {
  // const { isMobile } = useSidebar()
  return (
    <SidebarGroup>
      <SidebarGroupContent>
        <SidebarMenu>
          {items.map((item, index) => {
            return (
              <SidebarMenuItem key={index}>
                <SidebarMenuButton asChild>
                  <Link to={item.to}>
                    <item.icon />
                    <span>{item.title}</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            )
          })}
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
  )
}
