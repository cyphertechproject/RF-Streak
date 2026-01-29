import { 
  Zap, 
  Shield, 
  Swords, 
  Coins, 
  Crosshair, 
  Cpu, 
  Users, 
  Server, 
  Trophy,
  BookOpen,
  Target,
  Hammer
} from "lucide-react";
import { ServerRate, GuideItem, FeatureItem } from "./types";

export const LOGO_URL = "";

export const SERVER_RATES: ServerRate[] = [
  { label: "Max Level", value: "50", icon: Trophy, color: "text-streak-400" },
  { label: "EXP Rate", value: "x9999", icon: Zap, color: "text-blue-400" },
  { label: "Drop Rate", value: "x50", icon: Coins, color: "text-green-400" },
  { label: "Animus XP", value: "x10000", icon: Crosshair, color: "text-purple-400" },
  { label: "PT Rate", value: "GM", icon: Target, color: "text-red-400" },
  { label: "Mining", value: "x20", icon: Hammer, color: "text-slate-300" },
];

export const FEATURES: FeatureItem[] = [
  {
    title: "Balanced PvP",
    description: "Meticulously tuned class skills ensuring fair fights between Accretia, Bellato, and Cora.",
    icon: Swords
  },
  {
    title: "Active Chip Wars",
    description: "Daily scheduled wars with massive rewards for the winning race. Dominate the Crag Mine.",
    icon: Crosshair
  },
  {
    title: "Anti-Cheat Protection",
    description: "Powered by Cerberus anti-cheat to ensure a clean, bot-free gaming environment.",
    icon: Shield
  },
  {
    title: "High Performance",
    description: "Hosted on dedicated enterprise servers guaranteeing 99.9% uptime and low latency.",
    icon: Server
  }
];

export const GUIDES: GuideItem[] = [
  {
    title: "Getting Started",
    description: "Everything you need to know about creating an account and installing the client.",
    image: "https://picsum.photos/id/203/600/400",
    category: "Beginner"
  },
  {
    title: "Leveling Roadmap",
    description: "The fastest route to reach level 65. Best spots for solo and party grinding.",
    image: "https://picsum.photos/id/237/600/400",
    category: "Beginner"
  },
  {
    title: "Equipment Upgrade",
    description: "Master the art of upgrading. Talic combinations and success rates explained.",
    image: "https://picsum.photos/id/201/600/400",
    category: "Advanced"
  },
  {
    title: "Class Masteries",
    description: "Detailed breakdown of cross-class skills for Bellato, Cora, and Accretia.",
    image: "https://picsum.photos/id/223/600/400",
    category: "Classes"
  }
];
