import { useMutation } from "@tanstack/react-query";
import type { AxiosError } from "axios";
import { toast } from "react-hot-toast";
import { api } from "@/lib/api";
import type { RiskAssessRequest } from "../page";

export interface RiskAssessResponse {
	gl_score: number;
	risk_profile_score: number;
	profile: string;
	allocations: {
		money_market: number;
		obligation: number;
		stocks: number;
	};
}

export function useAssessRiskMutation({
	onSuccess,
}: {
	onSuccess: (data: RiskAssessResponse) => void;
}) {
	const { mutate, isPending, isError } = useMutation({
		mutationFn: async (data: RiskAssessRequest) => {
			const response = await api.post(`/assess-risk`, data);
			return response.data;
		},
		onSuccess: (data) => {
			if (onSuccess) {
				onSuccess(data);
			}
		},
		onError: (err: AxiosError) => {
			toast.error(`Gagal mendapatkan profil risiko: ${err?.response?.data}`);
		},
	});

	return { mutate, isPending, isError };
}
