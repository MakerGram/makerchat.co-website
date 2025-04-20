// The root layout is a Server Component
// by default and can not be set to a Client Component.
"use client";

import React from "react";

import TransitionComponent from "@/components/ui/transition";

export default function RootLayout({children}: {children: React.ReactNode}) {
	return (
		<>
			<TransitionComponent>{children}</TransitionComponent>
		</>
	);
}
