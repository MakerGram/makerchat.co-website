import React from "react";

import {Eye, Lightbulb, Users} from "lucide-react";

interface iFeature {
	icon: React.ReactNode;
	title: string;
	description: string;
	color: string;
}

const features: iFeature[] = [
	{
		icon: <Eye className="w-8 h-8" />,
		title: "Brand Visibility",
		description: "Boost your brand among an engaged, innovative audience",
		color: "#0071e3",
	},
	{
		icon: <Lightbulb className="w-8 h-8" />,
		title: "Support Innovation",
		description: "Support grassroots innovation and the maker ecosystem",
		color: "#a259ec",
	},
	{
		icon: <Users className="w-8 h-8" />,
		title: "Build Relationships",
		description: "Create meaningful relationships with future tech leaders",
		color: "#1db954",
	},
];

export function FeaturesGrid() {
	return (
		<div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10 mx-auto md:max-w-5xl">
			{features.map((feature, index) => {
				return (
					<div
						key={index}
						className="flex flex-col justify-between h-full rounded-2xl bg-white p-6 shadow-[0_2px_8px_rgba(0,0,0,0.06)] border border-neutral-100 transition-all duration-200"
					>
						<div className="mb-4">
							<div className="mb-4">
								<div
									className="inline-block align-top p-3 rounded-xl"
									style={{
										background: `linear-gradient(135deg, ${feature.color}20, ${feature.color}40)`,
										color: feature.color,
									}}
								>
									{feature.icon}
								</div>
							</div>
							<div
								className="text-xl font-semibold mb-1"
								style={{color: feature.color}}
							>
								{feature.title}
							</div>
							<div className="text-lg text-black font-normal">
								{feature.description}
							</div>
						</div>
					</div>
				);
			})}
		</div>
	);
}
