import {useEffect, useState} from "react";

import {iCountdown} from "@/customTypes/location";

export function useCountdown(targetDate: number | null): iCountdown {
	const [countdown, setCountdown] = useState<iCountdown>({
		days: 0,
		hours: 0,
		minutes: 0,
		seconds: 0,
		isDone: false,
	});

	useEffect(() => {
		if (!targetDate) return;

		const interval = setInterval(() => {
			const now = new Date().getTime();
			const distance = targetDate - now;

			if (distance <= 0) {
				setCountdown({days: 0, hours: 0, minutes: 0, seconds: 0, isDone: true});
				clearInterval(interval);
				return;
			}

			const days = Math.floor(distance / (1000 * 60 * 60 * 24));
			const hours = Math.floor(
				(distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
			);
			const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
			const seconds = Math.floor((distance % (1000 * 60)) / 1000);

			setCountdown({days, hours, minutes, seconds, isDone: false});
		}, 1000);

		return () => {
			return clearInterval(interval);
		};
	}, [targetDate]);

	return countdown;
}
