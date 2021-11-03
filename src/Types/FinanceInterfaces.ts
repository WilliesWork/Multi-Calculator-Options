// STATISTICS INTERFACES
// export interface SampleSizeI {
//   confience_level: string;
//   margin_of_error: string;
//   population_proportion: string;
//   method: string;
// }
export interface PaybackWithinTimeframeI {
  interest_rate: string;
  credit_card_balance: string;
  months: string;
  year: string;
}


export interface MortagePayoffWithLoanTermI {
  interest_rate: string;
  total_payments_years: string;
  payments_made_years: string;
  loan_amount: string;
}


export interface MortagePayOffWithoutLoanTermI {
  interest_rate: string;
  monthly_payment: string;
  principal_balance: string;
}

export interface AmortizedLoanFixedAmountI {
  interest_rate: string;
  present_value: string;
  number_of_months: string;
  number_of_years: string;
}

export interface DefearedPaymentsLumpsumAtMaturityI {
  interest_rate: string;
  loan_amount: string;
  number_of_years: string;
  number_of_months: string;
}

export interface BondPayBackPredeterminedI {
  interest_rate: string;
  predetermined_amount: string;
  number_of_years: string;
  number_of_months: string;
}


export interface  PresentValueI{
  interest_rate: string;
  predetermined_amount: string;
  number_of_years: string;
  number_of_months: string;
}

export interface PresentValueOfPeriodicalDepositI {
  interest_rate: string;
  period_deposit: string;
  number_of_years: string;
  number_of_months: string;
}


export interface ProfitMarginCalculatorI {
  sales_revenue: string;
  cost: string;

}

export interface StockTradingMarginI {
  margin_requirement: string;
  stock_price: string;
  shares: string;
}

export interface InflationCalculatorCpiDataI {
  current_price: string;
  price_in_base: string;
}

export interface PayBackACertainAmount {
  interest_rate: string;
  credit_card_balance: string;
  monthly_payment: string;
}








