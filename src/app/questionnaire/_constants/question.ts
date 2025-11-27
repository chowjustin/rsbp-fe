export const questionsData = [
	{
		question: 1,
		name: "question1" as const,
		label:
			"1. In general, how would your best friend describe you as a risk taker?",
		options: [
			{ value: "A", label: "A real gambler" },
			{
				value: "B",
				label: "Willing to take risks after completing adequate research",
			},
			{ value: "C", label: "Cautious" },
			{ value: "D", label: "A real risk avoider" },
		],
	},
	{
		question: 2,
		name: "question2" as const,
		label:
			"2. You are on a TV game show and can choose one of the following; which would you take?",
		options: [
			{ value: "A", label: "$1,000 in cash" },
			{ value: "B", label: "A 50% chance at winning $5,000" },
			{ value: "C", label: "A 25% chance at winning $10,000" },
			{ value: "D", label: "A 5% chance at winning $100,000" },
		],
	},
	{
		question: 3,
		name: "question3" as const,
		label:
			'3. You have just finished saving for a "once-in-a-lifetime" vacation. Three weeks before you plan to leave, you lose your job. You would:',
		options: [
			{ value: "A", label: "Cancel the vacation" },
			{ value: "B", label: "Take a much more modest vacation" },
			{
				value: "C",
				label:
					"Go as scheduled, reasoning that you need the time to prepare for a job search",
			},
			{
				value: "D",
				label:
					"Extend your vacation, because this might be your last chance to go first-class",
			},
		],
	},
	{
		question: 4,
		name: "question4" as const,
		label:
			"4. If you unexpectedly received $20,000 to invest, what would you do?",
		options: [
			{
				value: "A",
				label:
					"Deposit it in a bank account, money market account, or insured CD",
			},
			{
				value: "B",
				label: "Invest it in safe high-quality bonds or bond mutual funds",
			},
			{ value: "C", label: "Invest it in stocks or stock mutual funds" },
		],
	},
	{
		question: 5,
		name: "question5" as const,
		label:
			"5. In terms of experience, how comfortable are you investing in stocks or stock mutual funds?",
		options: [
			{ value: "A", label: "Not at all comfortable" },
			{ value: "B", label: "Somewhat comfortable" },
			{ value: "C", label: "Very Comfortable" },
		],
	},
	{
		question: 6,
		name: "question6" as const,
		label:
			'6. When you think of the word "risk," which of the following words comes to mind first?',
		options: [
			{ value: "A", label: "Loss" },
			{ value: "B", label: "Uncertainty" },
			{ value: "C", label: "Opportunity" },
			{ value: "D", label: "Thrill" },
		],
	},
	{
		question: 7,
		name: "question7" as const,
		label:
			"7. Some experts are predicting prices of assets such as gold, jewels, collectibles, and real estate (hard assets) to increase in value. Most of your investment assets are now in high-interest government bonds. What would you do?",
		options: [
			{ value: "A", label: "Hold the bonds" },
			{
				value: "B",
				label:
					"Sell the bonds, put half the proceeds into money market accounts, and the other half into hard assets",
			},
			{
				value: "C",
				label: "Sell the bonds and put the total proceeds into hard assets",
			},
			{
				value: "D",
				label:
					"Sell the bonds, put all the money into hard assets, and borrow additional money to buy more",
			},
		],
	},
	{
		question: 8,
		name: "question8" as const,
		label:
			"8. Given the best and worst case returns of the four investment choices below, which would you prefer?",
		options: [
			{ value: "A", label: "$200 gain best case; $0 gain/loss worst case" },
			{ value: "B", label: "$800 gain best case, $200 loss worst case" },
			{ value: "C", label: "$2,600 gain best case, $800 loss worst case" },
			{ value: "D", label: "$4,800 gain best case, $2,400 loss worst case" },
		],
	},
	{
		question: 9,
		name: "question9" as const,
		label:
			"9. In addition to whatever you own, you have been given $1,000. You are now asked to choose between:",
		options: [
			{ value: "A", label: "A sure gain of $500" },
			{
				value: "B",
				label: "A 50% chance to gain $1,000 and a 50% chance to gain nothing.",
			},
		],
	},
	{
		question: 10,
		name: "question10" as const,
		label:
			"10. In addition to whatever you own, you have been given $2,000. You are now asked to choose between:",
		options: [
			{ value: "A", label: "A sure loss of $500" },
			{
				value: "B",
				label: "A 50% chance to lose $1,000 and a 50% chance to lose nothing.",
			},
		],
	},
	{
		question: 11,
		name: "question11" as const,
		label:
			"11. Suppose a relative left you an inheritance of $100,000, stipulating in the will that you invest ALL the money in ONE of the following choices. Which one would you select?",
		options: [
			{
				value: "A",
				label: "A savings account or money market mutual fund",
			},
			{ value: "B", label: "A mutual fund that owns stocks and bonds" },
			{ value: "C", label: "A portfolio of 15 common stocks" },
			{ value: "D", label: "Commodities like gold, silver, and oil" },
		],
	},
	{
		question: 12,
		name: "question12" as const,
		label:
			"12. If you had to invest $20,000, which of the following investment choices would you find most appealing?",
		options: [
			{
				value: "A",
				label:
					"60% in low-risk investments, 30% in medium-risk investments, 10% in high-risk investments",
			},
			{
				value: "B",
				label:
					"30% in low-risk investments, 40% in medium-risk investments, 30% in high-risk investments",
			},
			{
				value: "C",
				label:
					"10% in low-risk investments, 40% in medium-risk investments, 50% in high-risk investments",
			},
		],
	},
	{
		question: 13,
		name: "question13" as const,
		label:
			"13. Your friend and neighbor, an experienced geologist, is putting together a group of investors to fund an exploratory gold mining venture. If successful, the venture could pay back 50 to 100 times the investment. Your friend estimates the chance of success is only 20%. If you had the money, how much would you invest?",
		options: [
			{ value: "A", label: "Nothing" },
			{ value: "B", label: "One month's salary" },
			{ value: "C", label: "Three month's salary" },
			{ value: "D", label: "Six month's salary" },
		],
	},
];
