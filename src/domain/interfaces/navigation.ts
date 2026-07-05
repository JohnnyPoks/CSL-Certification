export interface INavigationItem {
  label: string;
  link: string;
  icon?: React.ReactNode;
  children?: {
    label: string;
    description?: string;
    link: string;
    items?: Array<{
      title: string;
      href: string;
      description?: string;
    }>;
  }[];
}

export interface INavbarProps {
  user?: {
    name: string;
    email: string;
    avatar?: string;
  };
  onLogout?: () => void;
} 