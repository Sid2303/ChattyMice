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
    } from "@/components/ui/sidebar";
    import { Button } from "./ui/button";
    
    type AppSidebarProps = {
        friends: { name: string; phoneNo: string; pid: string; _id: string }[]; // Adjust to match friend object structure
    };
    
    export function AppSidebar({ friends }: AppSidebarProps) {
        return (
        <Sidebar variant="sidebar">
            <SidebarContent>
            <SidebarGroup>
                <SidebarGroupLabel className="text-xl mb-4">Friends</SidebarGroupLabel>
                <SidebarGroupContent>
                <SidebarMenu>
                    {friends.map((friend, index) => (
                    <SidebarMenuItem key={index}>
                        <SidebarMenuButton asChild>
                            <h2>{friend.name}</h2>
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
                <Button variant="destructive" className="w-[80%] h-12 mx-auto">
                    Logout
                </Button>
                </SidebarMenuItem>
            </SidebarMenu>
            </SidebarFooter>
        </Sidebar>
        );
    }