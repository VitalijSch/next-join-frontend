import { useEffect, useRef } from "react";
import { useContactStore } from "../stores/useContactStore";

export default function useScrollToCreatedContact() {
  const contactRefs = useRef<Record<string, HTMLDivElement | null>>({});
  const selectedContact = useContactStore((state) => state.selectedContact);
  const scrollToContact = useContactStore((state) => state.scrollToContact);
  const setScrollToContact = useContactStore(
    (state) => state.setScrollToContact
  );

  useEffect(() => {
    if (scrollToContact && selectedContact && selectedContact.id) {
      const el = contactRefs.current[selectedContact.id.toString()];
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "center" });
        setScrollToContact(false);
      }
    }
  }, [scrollToContact, selectedContact]);
  

  return {
    contactRefs,
  };
}
