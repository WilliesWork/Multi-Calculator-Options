export interface SampleSizeI {
  z_score: string;
  population_size: string;
  margin_of_error: string;
  standard_deviation: string;
  method: string;
}

export interface MarginErrorI {
  z_score: string;
  sample_size: string;
  standard_deviation: string;
  method: string;
}

export interface ProbablityOfTwoEventsI {
  event_a: string;
  event_b: string;
}

export interface ProbablitySolverForTwoEventsI {
  probability_of_a: string;
  probability_of_b: string;
  probability_of_a_not_occuring: string;
  probability_of_b_not_occuring: string;
  probability_of_a_and_b_both_occuring: string;
  probability_that_a_or_b_or_both_occur: string;
  probability_that_a_or_b_occurs_but_not_both: string;
  probability_of_neither_a_nor_b_occuring: string;
}

//end 11/04/2021
