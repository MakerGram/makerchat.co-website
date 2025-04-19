// The root layout is a Server Component
// by default and can not be set to a Client Component.
"use client";

import React from "react";

import {Icons} from "@/components/ui/icons";

export default function Loading() {
	return (
		<>
			<div className="text-center h-full w-full m-auto mt-40">
				<Icons.spinner className="h-16 w-16 animate-spin m-auto" />
			</div>
		</>
	);
}
