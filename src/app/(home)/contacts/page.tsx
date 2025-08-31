import ContactDetails from "@/features/home-contacts/components/ContactDetails";
import ContactList from "@/features/home-contacts/components/ContactList";

export default function ContactsPage() {
  return (
    <section className="flex-1 flex relative">
      <ContactList />
      <ContactDetails />
    </section>
  );
}
