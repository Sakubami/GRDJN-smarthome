export function convertIcon(icon: React.ElementType) {
    const name = (icon as any).displayName ?? (icon as any).name;
    return name;
}