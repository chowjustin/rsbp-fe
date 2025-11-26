"use client";

import { useState } from "react";

import ChatbotWidget from "@/components/chat/ChatbotWidget";
import BenefitsSection from "@/components/landing/BenefitsSection";
import CTASection from "@/components/landing/CTASection";
import HeroSection from "@/components/landing/HeroSection";
import HowItWorksSection from "@/components/landing/HowItWorksSection";
import RiskProfileSection from "@/components/landing/RiskProfileSection";

export default function LandingPage() {
	const [isChatOpen, setIsChatOpen] = useState(false);
	const questionnaireHref = "/sandbox/form";

	return (
		<>
			<main className="bg-slate-950 text-white">
				<HeroSection
					questionnaireHref={questionnaireHref}
					onOpenChat={() => setIsChatOpen(true)}
				/>
				<HowItWorksSection />
				<BenefitsSection />
				<RiskProfileSection />
				<CTASection questionnaireHref={questionnaireHref} />
			</main>
			<ChatbotWidget
				isOpen={isChatOpen}
				onOpen={() => setIsChatOpen(true)}
				onClose={() => setIsChatOpen(false)}
			/>
		</>
	);
}
