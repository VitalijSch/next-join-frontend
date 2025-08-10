export default function getToken() {
  if (typeof document === "undefined") return null;
  const cookies = document.cookie.split("; ").reduce((acc, cur) => {
    const [key, val] = cur.split("=");
    acc[key] = val;
    return acc;
  }, {} as Record<string, string>);
  const token = cookies["access_token"];
  return token;
}
