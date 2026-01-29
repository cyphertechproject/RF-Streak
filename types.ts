import { LucideIcon } from "lucide-react";

export interface ServerRate {
  label: string;
  value: string;
  icon: LucideIcon;
  color: string;
}

export interface GuideItem {
  title: string;
  description: string;
  image: string;
  category: 'Beginner' | 'Advanced' | 'PvP' | 'Classes';
}

export interface FeatureItem {
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface NavItem {
  label: string;
  href: string;
  isExternal?: boolean;
}
