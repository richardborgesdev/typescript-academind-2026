/*
data:
    1. initial amount
    2. annual contribution
    3. expected return
    4. duration
    5. => result[]
*/
type InvestmentData = {
  initialAmount: number;
  annualContribution: number;
  expectedReturn: number;
  duration: number;
}

type InvestmentResult = {
  year: string;
  totalAmount: number;
  totalContributions: number;
  totalInterestEarned: number;
}

type CalculationResult = InvestmentResult[] | string;

function calculateInvestment(data: InvestmentData): CalculationResult {
  const { initialAmount, annualContribution, expectedReturn, duration } = data;

  if (initialAmount < 0) {
    return 'Initial investment amount must be at leat zero.';
  }

  if (duration <= 0) {
    return 'No valid amount of years provided.';
  }

  if (expectedReturn < 0) {
    return 'Expected return must be at least zero.';
  }

  let total = initialAmount;
  let totalContributions = 0;
  let totalInterestEarned = 0;

  const annualResults: InvestmentResult[] = [];

  for (let index = 0; index < duration; index++) {
    total = total * (1 + expectedReturn); // 0.08
    totalInterestEarned = total - totalContributions - initialAmount;
    totalContributions = totalContributions + annualContribution;
    total = total + annualContribution;

    annualResults.push({
      year: `Year ${index + 1}`,
      totalAmount: total,
      totalInterestEarned,
      totalContributions,
    })
  }

  return annualResults;
}

function printResults(results: CalculationResult) {
  if (typeof results === 'string') {
    console.log(results);

    return;
  }

  for (const yearEndResult of results) {
    console.log(yearEndResult.year);
    console.log(`Total: ${yearEndResult.totalAmount.toFixed(0)}`);
    console.log(`Total Contributions: ${yearEndResult.totalContributions.toFixed(0)}`);
    console.log(`Total Interest Earned: ${yearEndResult.totalInterestEarned.toFixed(0)}`);
    console.log('------------------');
  }
}

const investmentData: InvestmentData = {
  initialAmount: 5000,
  annualContribution: 500,
  expectedReturn: 0.08,
  duration: 10,
};

const results = calculateInvestment(investmentData);


printResults(results);
