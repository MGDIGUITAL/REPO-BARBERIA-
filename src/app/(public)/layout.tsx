import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gold Barber Studio",
  description: "Cortes premium y sistema de reservas online.",
};

export default function PublicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="bg-gb-bg text-gb-text min-h-screen font-sans selection:bg-gb-gold selection:text-gb-bg">
      {/* Navigation will go here */}
      <main className="flex-1 flex flex-col">{children}</main>
      {/* Footer will go here */}
    </div>
  );
}
