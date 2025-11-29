"use client";

import useChatStore from "@/app/stores/useChatStore";
import ChatbotWidget from "@/components/chat/ChatbotWidget";
import CTASection from "@/components/landing/CTASection";
import HeroSection from "@/components/landing/HeroSection";
import HowItWorksSection from "@/components/landing/HowItWorksSection";
import RiskProfileSection from "@/components/landing/RiskProfileSection";

export default function LandingPage() {
	const questionnaireHref = "/questionnaire";

	const setIsOpen = useChatStore.useSetIsOpen();

	return (
		<>
			<main className="bg-slate-950 text-white">
				<HeroSection
					questionnaireHref={questionnaireHref}
					onOpenChat={() => setIsOpen(true)}
				/>
				<HowItWorksSection />
				<RiskProfileSection />
				<CTASection questionnaireHref={questionnaireHref} />
			</main>
			<ChatbotWidget />
		</>
	);
}
