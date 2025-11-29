import api from "./api";

export type ChatbotRequest = {
	query: string;
};

export type ChatbotResponse = {
	query: string;
	answer: string;
	sources: string[];
};

export const chatWithBot = async (
	payload: ChatbotRequest,
): Promise<ChatbotResponse> => {
	const response = await api.post("/chatbot", payload);
	return response.data;
};
