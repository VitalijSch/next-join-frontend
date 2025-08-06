"use client";

import LoadingIcon from "@/shared/components/icons/LoadingIcon";
import { useLoading } from "@/shared/contexts/LoadingContext";

export default function LoadingOverlay() {
  const { loading } = useLoading();

  if (!loading) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30">
      <LoadingIcon />
    </div>
  );
}
