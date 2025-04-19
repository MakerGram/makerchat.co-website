/* eslint-disable react/react-in-jsx-scope */

export default function ResponsiveGrid() {
	return (
		<div className="bg-[#f5f5f7] py-16 px-4 md:px-16 font-manrope">
			<h2 className="text-center text-sm md:text-base text-gray-400 uppercase tracking-widest mb-2">
				Our impact so far
			</h2>
			<p className="text-center text-3xl md:text-4xl font-bold text-[#1e1916] mb-12 leading-snug">
				Real moments. Real impact.
			</p>

			<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
				{/* Card 1 */}
				<div
					className="relative rounded-2xl overflow-hidden group hover:shadow-xl transition-all duration-300 shadow-md h-64 bg-cover bg-center"
					style={{backgroundImage: "url('/uploads/photos/rafi.webp')"}}
				>
					<div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition duration-300 z-0" />
					<div className="relative z-10 p-4 h-full flex flex-col justify-end">
						<p className="text-white">
							<span className="text-3xl md:text-6xl font-extrabold">28+</span>{" "}
							<span className="text-2xl font-medium text-gray-200">
								Offline Events
							</span>
						</p>
						<p className="text-gray-300 text-lg leading-snug mt-1">
							City-based meetups where ideas spark and makers connect.
						</p>
					</div>
				</div>

				{/* Card 2 */}
				<div
					className="relative rounded-2xl overflow-hidden group hover:shadow-xl transition-all duration-300 shadow-md h-64 bg-cover bg-center"
					style={{backgroundImage: "url('/uploads/photos/3d.png')"}}
				>
					<div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition duration-300 z-0" />
					<div className="relative z-10 p-4 h-full flex flex-col justify-end">
						<p className="text-white">
							<span className="text-3xl md:text-6xl font-extrabold">41+</span>{" "}
							<span className="text-2xl font-medium text-gray-200">
								MakerChats
							</span>
						</p>
						<p className="text-gray-300 text-lg leading-snug mt-1">
							Real-world tech sessions by the community.
						</p>
					</div>
				</div>

				{/* Card 3 */}
				<div
					className="relative rounded-2xl overflow-hidden group hover:shadow-xl transition-all duration-300 shadow-md h-64 bg-cover bg-center"
					style={{
						backgroundImage:
							"url('/uploads/photos/makerchat-group-photo.webp')",
					}}
				>
					<div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition duration-300 z-0" />
					<div className="relative z-10 p-4 h-full flex flex-col justify-end">
						<p className="text-white">
							<span className="text-3xl md:text-6xl font-extrabold">520+</span>{" "}
							<span className="text-2xl font-medium text-gray-200">
								Attendee
							</span>
						</p>
						<p className="text-gray-300 text-lg leading-snug mt-1">
							Together for a future shaped from the ground up.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}
