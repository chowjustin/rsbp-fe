import Link from "next/link";

type CTASectionProps = {
	questionnaireHref: string;
};

export default function CTASection({ questionnaireHref }: CTASectionProps) {
	return (
		<section id="cta" className="bg-black py-20">
			<div className="container">
				<div className="relative overflow-hidden rounded-3xl border border-primary-500/40 bg-gradient-to-r from-primary-600 to-secondary-500 px-8 py-12 text-white shadow-2xl">
					<div className="absolute inset-y-0 right-0 hidden w-1/2 rounded-l-[48px] bg-white/10 lg:block" />
					<div className="relative z-10 grid gap-8 lg:grid-cols-[3fr,2fr]">
						<div>
							<p className="text-sm uppercase tracking-[0.3em] text-white/70">
								Ready to invest smarter?
							</p>
							<h2 className="mt-3 text-3xl font-semibold sm:text-4xl">
								Start your questionnaire and receive a risk profile in minutes.
							</h2>
							<p className="mt-4 text-base text-white/80">
								No hassle. Just few minutes away, actionable allocations, and an
								AI teammate who never sleeps.
							</p>
						</div>
						<div className="flex flex-col justify-center gap-4">
							<Link
								href={questionnaireHref}
								className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-base font-semibold text-primary-600 transition hover:bg-slate-100"
							>
								Start questionnaire
							</Link>
							<p className="text-sm text-white/80">
								Need guidance first? Click the chat bubble to talk with the robo
								advisor.
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
