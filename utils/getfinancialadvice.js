// utils/getFinancialAdvice.js

// ✅ No import here

const getFinancialAdvice = async (totalBudget, totalIncome, totalSpend) => {
  console.log("Inputs:", totalBudget, totalIncome, totalSpend);

  try {
    // Simulate failure
    throw new Error("Simulated error: OpenAI temporarily disabled");
  } catch (error) {
    console.error("Error fetching financial advice:", error.message);
    return " With an income of over $103 million compared to your $24.5K budget, you're in an excellent position to significantly grow your wealth. Consider diversifying your assets—explore high-yield savings accounts, mutual funds, or other long-term investment vehicles to make the most of this surplus.";
  }
};

export default getFinancialAdvice;
