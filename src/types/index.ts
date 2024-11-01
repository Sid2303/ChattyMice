interface User {
  userName: string;
  userId: string;
  email: string;
  iat: number;
  exp: number;
}

interface Profile {
  userName: string;
  id: string;
}

interface SidebarProps {
  profiles: Profile[];
  setSelectedProfile: (profile: Profile) => void;
}
