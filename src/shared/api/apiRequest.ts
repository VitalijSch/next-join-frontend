export async function apiRequest<T>(
  input: RequestInfo,
  init?: RequestInit
): Promise<{ ok: true; data?: T } | { ok: false; message: string }> {
  try {
    const res = await fetch(input, init);

    if (!res.ok) {
      const message = await parseErrorResponse(res);
      return { ok: false, message };
    }

    const hasContent =
      res.headers.get("content-length") !== "0" &&
      res.status !== 204 &&
      res.headers.get("content-type")?.includes("application/json");

    const data = hasContent ? await res.json() : undefined;

    return { ok: true, data };
  } catch (error) {
    console.error("API request failed:", error);
    return { ok: false, message: "Network error" };
  }
}

async function parseErrorResponse(res: Response): Promise<string> {
  const err = await res.json().catch(() => ({}));
  if (typeof err === "string") return err;
  if (err?.non_field_errors?.[0]) return err.non_field_errors[0];
  if (err?.detail) return err.detail;
  if (err?.message) return err.message;
  return res.statusText || "Unbekannter Fehler";
}
