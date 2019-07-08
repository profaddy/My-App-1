//-----------  Inputs  -----------//

export const loadingSelector = state => state.signUp.isLoading;
export const signupStatusSelector = state => state.signUp;
export const registrationCheckSelector = state =>
  state.signUp.registrationCheck;
export const licensingBoardsSelector = state => state.signUp.licensingBoards;
export const practiceAreasSelector = state => state.signUp.practiceAreas;
export const institutionsSelector = state => state.signUp.institutions;
