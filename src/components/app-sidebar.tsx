import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
    } from "@/components/ui/sidebar"
import { Button } from "./ui/button"

    // Menu items.
    const items = [
    {
        title: "Name",
        url: "#",
    }
]

export function AppSidebar() {
    return (
        <Sidebar variant="sidebar">
        <SidebarContent>
            <SidebarGroup>
            <SidebarGroupLabel>Friends</SidebarGroupLabel>
            <SidebarGroupContent>
                <SidebarMenu>
                {items.map((item) => (
                    <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton asChild>
                        <a href={item.url}>
                        <span>{item.title}</span>
                        </a>
                    </SidebarMenuButton>
                    </SidebarMenuItem>
                ))}
                </SidebarMenu>
            </SidebarGroupContent>
            </SidebarGroup>
        </SidebarContent>
            <SidebarFooter>
            <SidebarMenu>
                <SidebarMenuItem className="flex content-center">
                    <Button className="w-[80%] h-12 mx-auto" >Logout</Button> {/* Add function */}
                </SidebarMenuItem>
            </SidebarMenu>
            </SidebarFooter>
        </Sidebar>
    )
}
