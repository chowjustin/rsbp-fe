"use client";

import { X } from "lucide-react";
import { type FormEvent, useMemo, useState } from "react";
import Button from "../button/Button";

type ChatbotWidgetProps = {
	isOpen: boolean;
	onOpen: () => void;
	onClose: () => void;
};

type Message = {
	id: string;
	role: "user" | "assistant";
	content: string;
};

const initialMessages: Message[] = [
	{
		id: "intro",
		role: "assistant",
		content:
			"Hi! I am your Robo Advisor. Tell me about your financial goals, liquidity needs, or anything investing related.",
	},
	{
		id: "user-1",
		role: "user",
		content: "What should I do with a bonus I just received?",
	},
	{
		id: "assistant-1",
		role: "assistant",
		content:
			"Congrats! Based on your Balanced profile, consider adding 60% to your core ETF stack, 20% to income sleeve, and keep 20% in cash for upcoming expenses.",
	},
];

export default function ChatbotWidget({
	isOpen,
	onOpen,
	onClose,
}: ChatbotWidgetProps) {
	const [messages, setMessages] = useState<Message[]>(initialMessages);
	const [input, setInput] = useState("");
	const [isThinking, setIsThinking] = useState(false);

	const placeholder = useMemo(
		() =>
			"Ask for rebalancing advice, portfolio explanations, or savings tips...",
		[],
	);

	const handleLauncherClick = () => {
		if (isOpen) {
			onClose();
			return;
		}
		onOpen();
	};

	const handleSend = (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		if (!input.trim()) return;

		const newMessage: Message = {
			id: `${Date.now()}`,
			role: "user",
			content: input.trim(),
		};

		setMessages((prev) => [...prev, newMessage]);
		setInput("");
		setIsThinking(true);

		setTimeout(() => {
			setMessages((prev) => [
				...prev,
				{
					id: `${Date.now()}-assistant`,
					role: "assistant",
					content:
						"Here's a diversified idea: maintain your emergency fund, direct the remainder into the recommended allocation, and set an automation so we can monitor drift for you.",
				},
			]);
			setIsThinking(false);
		}, 900);
	};

	return (
		<>
			<Button
				onClick={handleLauncherClick}
				className="fixed bottom-6 right-6 z-30 inline-flex items-center gap-2 rounded-full bg-primary-500 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-primary-500/40 transition hover:bg-primary-400"
			>
				<span className="h-2 w-2 animate-pulse rounded-full bg-white" />
				Robo advisor chat
			</Button>
			{isOpen && (
				<div className="fixed inset-0 z-40 flex items-end justify-end bg-black/40 px-4 pb-6 pt-10 sm:items-center sm:justify-center">
					<div className="w-full max-w-md rounded-3xl bg-white text-slate-900 shadow-2xl">
						<header className="flex items-center justify-between border-b border-slate-100 px-6 py-4">
							<div>
								<p className="text-xs uppercase tracking-[0.3em] text-primary-500">
									Smart guidance
								</p>
								<h3 className="text-lg font-semibold text-slate-900">
									Financial Copilot
								</h3>
								<p className="text-xs text-slate-500">
									Ask anything about investing.
								</p>
							</div>
							<Button
								onClick={onClose}
								className="rounded-full border border-slate-200 p-2 text-slate-500 transition bg-white hover:bg-gray-100 active:bg-gray-100 hover:text-slate-900"
								aria-label="Close chatbot"
							>
								<X className="w-4 h-4" />
							</Button>
						</header>
						<div className="max-h-[420px] space-y-4 overflow-y-auto px-6 py-4">
							{messages.map((message) => (
								<div key={message.id} className="flex gap-3">
									<div
										className={`rounded-2xl px-4 py-3 text-sm leading-relaxed ${
											message.role === "assistant"
												? "bg-slate-100 text-slate-900"
												: "ml-auto bg-primary-500 text-white"
										}`}
									>
										{message.content}
									</div>
								</div>
							))}
							{isThinking && (
								<div className="flex items-center gap-2 rounded-2xl bg-slate-100 px-4 py-3 text-sm text-slate-500">
									<span className="h-2 w-2 animate-bounce rounded-full bg-slate-400" />
									Thinking
								</div>
							)}
						</div>
						<form
							onSubmit={handleSend}
							className="border-t border-slate-100 px-6 py-4"
						>
							<label className="sr-only" htmlFor="chatbot-input">
								Message
							</label>
							<div className="flex gap-3">
								<input
									id="chatbot-input"
									type="text"
									value={input}
									onChange={(event) => setInput(event.target.value)}
									placeholder={placeholder}
									className="flex-1 rounded-2xl border border-slate-200 px-4 py-3 text-sm text-slate-900 focus:border-primary-500 focus:outline-none"
								/>
								<button
									type="submit"
									className="rounded-2xl bg-primary-500 px-5 py-3 text-sm font-semibold text-white transition hover:bg-primary-400"
								>
									Send
								</button>
							</div>
						</form>
					</div>
				</div>
			)}
		</>
	);
}
