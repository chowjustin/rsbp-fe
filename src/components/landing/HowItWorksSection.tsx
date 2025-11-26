const steps = [
	{
		title: "01. Answer the questionnaire",
		description:
			"The questionnaire reveal your tolerance for risk, risk profile, and investment horizon under 5 minutes",
	},
	{
		title: "02. Receive your risk profile",
		description:
			"We map your answers into personas such as Conservative, Balanced, or Aggresive with reasoning.",
	},
	{
		title: "03. Receive your portfolio allocation",
		description:
			"Based on your risk profile, we provide portfolio allocation recommendation based on modern portfolio theory.",
	},
	{
		title: "04. Ask our AI copilot",
		description:
			"Learn more about investment using our AI copilot, powered by NtepAI and ChowAI.",
	},
];

export default function HowItWorksSection() {
	return (
		<section id="how-it-works" className="bg-slate-950 py-20">
			<div className="container space-y-8">
				<div className="max-w-2xl">
					<p className="text-sm uppercase tracking-[0.3em] text-primary-200">
						How it works
					</p>
					<h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">
						Four steps to move from uncertainty to confident investing.
					</h2>
					<p className="mt-4 text-base text-slate-300">
						Each section is wrapped into modular components so your team can
						reorder, reuse, or A/B test experiences without touching the core
						logic.
					</p>
				</div>
				<div className="grid gap-6 lg:grid-cols-2">
					{steps.map((step) => (
						<div
							key={step.title}
							className="rounded-3xl border border-white/5 bg-white/5 p-6 shadow-xl shadow-black/30"
						>
							<h3 className="text-xl font-semibold text-white">{step.title}</h3>
							<p className="mt-3 text-sm text-slate-300">{step.description}</p>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
