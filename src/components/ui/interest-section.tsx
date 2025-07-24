"use client";
import React, {useState} from "react";

import {toast} from "sonner";

interface iInterestSectionProps {
	slug: string;
}

export function InterestSection({slug}: iInterestSectionProps) {
	const [email, setEmail] = useState("");
	const [isLoading, setLoading] = useState(false);

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		setLoading(true);
		try {
			const res = await fetch("https://quasar.xistart.com/api/interest-list", {
				method: "POST",
				headers: {"Content-Type": "application/json"},
				body: JSON.stringify({email, tag: {[slug]: ""}, name: email}),
			});
			if (res.ok) {
				toast.success("Thank you! We'll notify you soon.");
				setEmail("");
			} else {
				toast.error("Something went wrong. Please try again.");
			}
		} catch {
			toast.error("Network error. Please try again.");
		} finally {
			setLoading(false);
		}
	};

	return (
		<div className="text-white font-manrope space-y-4">
			<p className="text-lg text-white/80 text-center">
				Leave your email and we&apos;ll notify you when we launch!
			</p>
			<form
				className="flex flex-col md:flex-row items-center gap-3 pt-2"
				onSubmit={handleSubmit}
			>
				<input
					type="email"
					placeholder="me@email.com"
					className="px-4 py-2 w-full md:w-[300px] rounded-full text-white bg-white/10 border border-white/20 placeholder-white/60 backdrop-blur-sm focus:outline-none"
					value={email}
					onChange={(e) => {
						return setEmail(e.target.value);
					}}
					required
				/>
				<button
					type="submit"
					className="px-4 py-2 bg-white md:w-[200px] w-full text-black text-base font-medium rounded-full whitespace-nowrap hover:bg-gray-200 transition font-manrope"
					disabled={isLoading}
				>
					{isLoading ? "Submitting..." : "Show Interest"}
				</button>
			</form>
		</div>
	);
}
