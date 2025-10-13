export function getAbbreviation(name: string) {
  const nameParts = name.trim().split(" ");
  const abbreviation =
    nameParts.length > 1
      ? `${nameParts[0][0]}${nameParts[1][0]}`.toUpperCase()
      : nameParts[0][0].toUpperCase();
  return abbreviation;
}
