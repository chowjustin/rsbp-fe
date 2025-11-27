import Link from "next/link";
import Button from "../button/Button";

const stats = [
	{ label: "Assessment Duration", value: "2-5 min" },
	{ label: "Always available", value: "24/7" },
];

const insights = [
	"Cash flow is resilient against a 20% drawdown.",
	"Use dollar-cost averaging consistently every month.",
	"Rebalance portfolio after 30 days",
];

type HeroSectionProps = {
	questionnaireHref: string;
	onOpenChat: () => void;
};

export default function HeroSection({
	questionnaireHref,
	onOpenChat,
}: HeroSectionProps) {
	return (
		<section className="relative isolate overflow-hidden bg-gradient-to-b from-slate-900 via-slate-950 to-black">
			<div className="pointer-events-none absolute inset-0 -z-10 opacity-40">
				<div className="absolute -left-16 top-10 h-64 w-64 rounded-full bg-primary-500 blur-3xl" />
				<div className="absolute bottom-16 right-0 h-64 w-64 rounded-full bg-secondary-400 blur-3xl" />
			</div>
			<div className="container grid gap-12 px-4 py-24 sm:px-6 lg:grid-cols-2 lg:items-center lg:py-28">
				<div>
					<p className="text-sm uppercase tracking-[0.3em] text-primary-200">
						ROBO ADVISOR
					</p>
					<h1 className="mt-4 text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-6xl">
						Find out your risk profile and recommendation by the experts.
					</h1>
					<p className="mt-6 text-lg text-slate-200">
						Answer a questionnaire consisting of 13 questions, then get a risk
						profile and recommended mutual fund allocation based on experts. Our
						AI chatbot can also help you better understand investing and your
						risk profile.
					</p>
					<div className="mt-8 flex flex-wrap gap-4">
						<Link
							href={questionnaireHref}
							className="inline-flex items-center justify-center rounded-full bg-primary-500 px-6 py-3 text-base font-semibold text-white shadow-lg shadow-primary-500/40 transition hover:bg-primary-400"
						>
							Start Questionnaire
						</Link>
						<Button
							onClick={onOpenChat}
							className="inline-flex items-center justify-center rounded-full border border-white/30 px-6 py-3 text-base font-semibold text-white transition hover:border-white hover:bg-white/10"
						>
							AI Chatbot
						</Button>
					</div>
					<div className="mt-10 grid gap-6 sm:grid-cols-2">
						{stats.map((stat) => (
							<div
								key={stat.label}
								className="rounded-2xl border border-white/10 bg-white/5 p-4 text-center"
							>
								<p className="text-3xl font-semibold text-white">
									{stat.value}
								</p>
								<p className="mt-1 text-sm uppercase tracking-wide text-slate-300">
									{stat.label}
								</p>
							</div>
						))}
					</div>
				</div>
				<div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur">
					<div className="rounded-2xl bg-slate-900 p-6 shadow-2xl">
						<p className="text-sm uppercase tracking-[0.2em] text-primary-200">
							Live insights
						</p>
						<ul className="mt-4 space-y-4 text-sm text-slate-100">
							{insights.map((insight) => (
								<li key={insight} className="flex items-start gap-3">
									<span className="mt-1 h-2 w-2 rounded-full bg-secondary-400" />
									{insight}
								</li>
							))}
						</ul>
						<div className="mt-8 rounded-2xl bg-white/5 p-4 text-sm text-slate-200">
							<p className="font-semibold text-white">Questionnaire preview</p>
							<p className="mt-2 text-slate-300">
								"How do you react when the market drops 15% in a week?"
							</p>
							<div className="mt-3 grid gap-2 text-xs text-slate-200">
								<p className="rounded-xl bg-white/10 px-3 py-2">
									I stay invested, it is part of the plan.
								</p>
								<p className="rounded-xl bg-white/10 px-3 py-2">
									I rebalance to capture opportunities.
								</p>
								<p className="rounded-xl bg-white/10 px-3 py-2">
									I reduce exposure until volatility eases.
								</p>
							</div>
						</div>
						<div className="mt-6 rounded-2xl bg-white/90 p-5 text-slate-900">
							<p className="text-sm font-medium text-slate-600">
								Your projected allocation
							</p>
							<div className="mt-3 flex items-end justify-between">
								<div>
									<p className="text-3xl font-semibold text-slate-900">
										65% growth
									</p>
									<p className="text-sm text-slate-600">
										Aligned with Balanced risk profile
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
