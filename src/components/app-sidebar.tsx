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
import { useRouter } from "next/navigation";

type AppSidebarProps = {
  friends: { name: string; phoneNo: string; pid: string; _id: string }[]; // Adjust to match friend object structure
};

export function AppSidebar({ friends }: AppSidebarProps) {
  const router = useRouter();
  const handleLogout = async () => {
    try {
      const response = await fetch("/api/user/login", {
        method: "DELETE",
      });

      if (response.ok) {
        router.push("/");
        router.refresh();
        console.log("Cookie deleted successfully");
      } else {
        console.log("Error deleting cookie");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <Sidebar variant="sidebar">
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel className="text-xl mb-4">
            Friends
          </SidebarGroupLabel>
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
            <Button
              variant="destructive"
              className="w-[80%] h-12 mx-auto"
              onClick={handleLogout}
            >
              Logout
            </Button>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
}
