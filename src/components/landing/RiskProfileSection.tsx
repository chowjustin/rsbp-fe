const profiles = [
	{
		name: "Conservative",
		description:
			"Prefers minimal volatility and prioritizes income stability over growth. Ideal for short-term goals and retirement withdrawals.",
		riskScore: "Risk score: 2 / 10",
		allocation: [
			{ label: "Bonds", value: 60, color: "bg-emerald-400" },
			{ label: "Global equities", value: 25, color: "bg-blue-400" },
			{ label: "Cash", value: 15, color: "bg-slate-300" },
		],
	},
	{
		name: "Balanced",
		description:
			"Comfortable with moderate swings, balancing capital preservation and compounding. Perfect for multi-decade wealth plans.",
		riskScore: "Risk score: 5 / 10",
		allocation: [
			{ label: "Global equities", value: 55, color: "bg-blue-400" },
			{ label: "Multi-asset income", value: 25, color: "bg-indigo-400" },
			{ label: "Cash & bonds", value: 20, color: "bg-emerald-400" },
		],
	},
	{
		name: "Growth",
		description:
			"Seeks aggressive appreciation, remains calm through drawdowns, and has a 10+ year horizon.",
		riskScore: "Risk score: 8 / 10",
		allocation: [
			{ label: "Equities", value: 70, color: "bg-blue-500" },
			{ label: "Alternatives", value: 20, color: "bg-purple-400" },
			{ label: "Stability sleeve", value: 10, color: "bg-emerald-400" },
		],
	},
];

export default function RiskProfileSection() {
	return (
		<section id="risk-profile" className="bg-slate-950 py-20">
			<div className="container space-y-8">
				<div className="max-w-2xl">
					<p className="text-sm uppercase tracking-[0.3em] text-primary-200">
						Risk/return playbook
					</p>
					<h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">
						See what clients receive after the questionnaire.
					</h2>
					<p className="mt-4 text-base text-slate-300">
						We benchmark your answers based on our expert system to build a
						profile along the spectrum from capital preservation to aggressive
						growth.
					</p>
				</div>
				<div className="grid gap-6 lg:grid-cols-3">
					{profiles.map((profile) => (
						<article
							key={profile.name}
							className="rounded-3xl border border-white/5 bg-white/5 p-6"
						>
							<div className="flex items-start justify-between">
								<div>
									<h3 className="text-2xl font-semibold text-white">
										{profile.name}
									</h3>
									<p className="text-xs uppercase tracking-wide text-slate-400">
										{profile.riskScore}
									</p>
								</div>
								<span className="rounded-full bg-white/10 px-3 py-1 text-xs text-slate-200">
									Personalized
								</span>
							</div>
							<p className="mt-4 text-sm text-slate-300">
								{profile.description}
							</p>
							<div className="mt-6 space-y-3 text-sm text-white">
								{profile.allocation.map((asset) => (
									<div key={asset.label}>
										<div className="flex justify-between text-xs text-slate-300">
											<span>{asset.label}</span>
											<span>{asset.value}%</span>
										</div>
										<div className="mt-1 h-2 rounded-full bg-white/10">
											<div
												className={`${asset.color} h-2 rounded-full`}
												style={{ width: `${asset.value}%` }}
											/>
										</div>
									</div>
								))}
							</div>
						</article>
					))}
				</div>
			</div>
		</section>
	);
}
