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
    title: "Play to Win",
    description: "Meticulously tuned class skills ensuring fair fights between Accretia, Bellato, and Cora.",
    icon: Zap
  },
  {
    title: "Active Staffs & GMs",
    description: "Weekly Events scheduled. Participate and get rewards.",
    icon: Users
   }
];

export const GUIDES: GuideItem[] = [
  {
    title: "Getting Started",
    description: "Everything you need to know about creating an account and installing the client.",
    image: "https://rfwrath.com/rfstreak/streakbanner.png",
    category: "Beginner"
  },
  {
    title: "Leveling Roadmap",
    description: "The fastest route to reach level 50. Best spots for solo and party grinding.",
    image: "https://rfwrath.com/rfstreak/streakbanner.png",
    category: "Beginner"
  },
  {
    title: "Drops Guide",
    description: "List drops of monster. Best Spot for farming",
    image: "https://rfwrath.com/rfstreak/streakbanner.png",
    category: "Advanced"
  },
  {
    title: "Real Money Trading",
    description: "To Avoid being blocked. Follow our guidelines",
    image: "https://rfwrath.com/rfstreak/streakbanner.png",
    category: "RMT"
  }
];
