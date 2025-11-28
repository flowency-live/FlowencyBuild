import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Jason Jones - Digital Business Card | Flowency Build",
  description: "Contact Jason Jones, Founder of Flowency Build. Fast, Practical Digital Capability for SMEs - CTO Services and Delivery Team.",
  robots: "noindex, nofollow", // Don't index personal contact cards
};

export default function CardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
