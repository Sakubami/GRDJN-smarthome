import * as Icons from "lucide-react-native";

export function iconToString(icon: React.ElementType) {   
    const name = (icon as any).displayName ?? (icon as any).name ?? "home";
    return name;
}

export function iconFromString(icon: string) {
  const key = Object.keys(Icons).find(
    (k) => k.toLowerCase() === icon.toLowerCase()
  );
  return key ? (Icons as any)[key] : Icons.HelpCircle;
}