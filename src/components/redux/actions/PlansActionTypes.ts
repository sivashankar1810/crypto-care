export const ALL_PLANS = "ALL_PLANS";
export const ALL_PLANS_LOADING = "ALL_PLANS_LOADING";
export const ALL_PLANS_FAIL = "ALL_PLANS_FAIL";

export interface AllPlansLoading {
  type: typeof ALL_PLANS_LOADING;
}

export interface AllPlans {
  type: typeof ALL_PLANS;
  payload: {
    data: any;
  };
}
export interface AllPlansFail {
  type: typeof ALL_PLANS_FAIL;
}

export type PlansActionTypes = AllPlans | AllPlansLoading | AllPlansFail;
