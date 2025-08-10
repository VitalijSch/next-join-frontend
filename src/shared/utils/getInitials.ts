export function getInitials(name: string): string {
  if (!name) return "";
  const parts = name.trim().split(/\s+/);
  const firstInitial = parts[0]?.[0] || "";
  const lastInitial = parts.length > 1 ? parts[parts.length - 1][0] : "";
  return (firstInitial + lastInitial).toUpperCase();
}
