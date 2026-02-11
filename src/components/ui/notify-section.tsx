import React, {useState} from "react";

import {toast} from "sonner";

import {SlidingNumber} from "@/components/ui/sliding-number";
import {iCountdown} from "@/customTypes/location";

interface iNotifySectionProps {
	location: string;
	countdown: iCountdown;
	slug: string;
}

export function NotifySection({countdown, slug}: iNotifySectionProps) {
	const [email, setEmail] = useState("");
	const [isLooading, setLoading] = useState(false);

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		setLoading(true);
		try {
			const res = await fetch("http://23.95.15.187:3231/api/interest-list", {
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
		<div className="text-white font-manrope ">
			<div className="relative md:absolute md:top-0 md:right-0 shadow-lg z-10 mb-6 md:mb-0 md:translate-x-0">
				<div className="text-center">
					{countdown.isDone ? (
						<></>
					) : (
						<div className="flex items-center justify-center rounded-xl md:rounded-bl-xl bg-neutral-900/80 py-2 px-4 shadow gap-2 md:gap-3">
							<div className="flex flex-col items-center min-w-[35px] md:min-w-[40px]">
								<SlidingNumber value={countdown.days} padStart />
								<span className="text-xs text-white/60 mt-0.5">Days</span>
							</div>
							<div className="h-6 w-px bg-white/10 mx-0.5 md:mx-1" />
							<div className="flex flex-col items-center min-w-[35px] md:min-w-[40px]">
								<SlidingNumber value={countdown.hours} padStart />
								<span className="text-xs text-white/60 mt-0.5">Hours</span>
							</div>
							<div className="h-6 w-px bg-white/10 mx-0.5 md:mx-1" />
							<div className="flex flex-col items-center min-w-[35px] md:min-w-[40px]">
								<SlidingNumber value={countdown.minutes} padStart />
								<span className="text-xs text-white/60 mt-0.5">Minutes</span>
							</div>
							<div className="h-6 w-px bg-white/10 mx-0.5 md:mx-1" />
							<div className="flex flex-col items-center min-w-[35px] md:min-w-[40px]">
								<SlidingNumber value={countdown.seconds} padStart />
								<span className="text-xs text-white/60 mt-0.5">Seconds</span>
							</div>
						</div>
					)}
				</div>
			</div>

			<div className="space-y-4">
				<p className="text-lg text-white/80">
					Leave your email and we&apos;ll notify you when we launch!
				</p>

				<form
					className="flex flex-col md:flex-row items-center gap-3 pt-2"
					onSubmit={handleSubmit}
				>
					<input
						type="email"
						placeholder="me@email.com"
						className="px-4 py-2 w-full rounded-full text-white bg-white/10 border border-white/20 placeholder-white/60 backdrop-blur-sm focus:outline-none"
						value={email}
						onChange={(e) => {
							return setEmail(e.target.value);
						}}
						required
					/>
					<button
						type="submit"
						className="px-4 py-2 bg-white text-black text-base font-medium rounded-full whitespace-nowrap hover:bg-gray-200 transition font-manrope w-full md:w-auto"
						disabled={isLooading}
					>
						{isLooading ? "Submitting..." : "Notify Me"}
					</button>
				</form>
			</div>
		</div>
	);
}
