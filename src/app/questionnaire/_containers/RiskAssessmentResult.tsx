import { ArrowLeft, RefreshCw } from "lucide-react";
import Link from "next/link";
import { useMemo } from "react";
import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";
import Button from "@/components/button/Button";
import type { RiskAssessResponse } from "../_hooks/useAssessRiskMutation";

export default function RiskAssessmentResult({
	data,
	onRetake,
}: {
	data: RiskAssessResponse;
	onRetake: () => void;
}) {
	const pieData = useMemo(
		() =>
			Object.entries(data.allocations).map(([key, value]) => ({
				name: key.replace(/_/g, " ").toUpperCase(),
				value,
			})),
		[data.allocations],
	);

	return (
		<div className="space-y-12">
			<h1 className="text-5xl font-bold leading-tight text-primary-400">
				Your Risk Profile: {data.profile}
			</h1>
			<p className="text-xl text-slate-300">
				Based on your answers, your risk profile is determined as
				{data.profile}. Your overall score is {data.risk_profile_score}/10 (GL
				Score: {data.gl_score}).
			</p>

			<div className="bg-white/5 p-8 rounded-xl shadow-2xl shadow-black/50">
				<h2 className="text-2xl font-semibold mb-6 text-white">
					Recommended Asset Allocation
				</h2>
				<div className="h-80 w-full mx-auto">
					<ResponsiveContainer width="100%" height="100%">
						<PieChart>
							<Tooltip
								formatter={(value: number, name: string) => [`${value}%`, name]}
								contentStyle={{
									backgroundColor: "rgba(30, 41, 59, 0.9)",
									border: "1px solid #334155",
									borderRadius: "4px",
								}}
								itemStyle={{ color: "#fff" }}
							/>
							<Pie
								data={pieData}
								cx="50%"
								cy="50%"
								innerRadius={80}
								outerRadius={120}
								dataKey="value"
								labelLine={true}
								label={({ name, percent }) =>
									`${name} (${percent ? (percent * 100).toFixed(0) : "0"}%)`
								}
							>
								{pieData.map((_entry, index) => (
									<Cell
										key={`cell-${index}`}
										fill={generateColor(index)}
										stroke="#1e293b"
										strokeWidth={1}
									/>
								))}
							</Pie>
						</PieChart>
					</ResponsiveContainer>
				</div>
			</div>

			<div className="flex flex-col sm:flex-row gap-4 pt-4">
				<Link href="/" className="flex-1">
					<Button
						size="lg"
						variant="blue"
						className="w-full rounded-xl flex items-center justify-center gap-2"
					>
						<ArrowLeft size={20} /> Back to Home
					</Button>
				</Link>
				<Button
					onClick={onRetake}
					size="lg"
					variant="primary"
					className="flex-1 w-full rounded-xl flex items-center justify-center gap-2"
				>
					<RefreshCw size={20} /> Retake Test
				</Button>
			</div>
		</div>
	);
}

const COLORS = ["#00C49F", "#FFBB28", "#FF8042", "#0088FE", "#AF19FF"];

const generateColor = (index: number) => COLORS[index % COLORS.length];
