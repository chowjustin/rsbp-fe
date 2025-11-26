const benefits = [
	{
		title: "Personalized insights",
		description:
			"Adaptive questioning calibrates recommendations to your own personalization.",
	},
	{
		title: "Risk assessment",
		description:
			"Transparent reasoning is provided based on the risk profile you received.",
	},
	{
		title: "Always-on partner",
		description:
			"The chatbot is always ready to answers investing questions in natural language, 24/7.",
	},
	{
		title: "Portfolio allocation",
		description:
			"We provide portfolio allocation to help you build a diversified model portfolio based on modern portfolio theory.",
	},
];

export default function BenefitsSection() {
	return (
		<section id="benefits" className="bg-slate-950 py-20">
			<div className="container space-y-8">
				<div className="max-w-2xl">
					<p className="text-sm uppercase tracking-[0.3em] text-primary-200">
						Why investors choose us
					</p>
					<h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">
						Benefits engineered for modern wealth builders.
					</h2>
				</div>
				<div className="grid gap-6 md:grid-cols-2">
					{benefits.map((benefit) => (
						<article
							key={benefit.title}
							className="rounded-3xl border border-white/5 bg-white/5 p-6"
						>
							<h3 className="text-xl font-semibold text-white">
								{benefit.title}
							</h3>
							<p className="mt-3 text-sm text-slate-300">
								{benefit.description}
							</p>
						</article>
					))}
				</div>
			</div>
		</section>
	);
}
