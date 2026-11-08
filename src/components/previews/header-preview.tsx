"use client";

import { Header } from "higgyui";
import { House, Layers } from "lucide-react";

export function HeaderPreview() {
  return (
    <div className="relative min-h-40 rounded-xl border">
      <Header
        logo={Layers}
        title="HiggyUI"
        items={[
          {
            title: "Home",
            icon: House,
            href: "/",
          },
        ]}
      />
    </div>
  );
}
