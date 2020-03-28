export default (
  ...actionTypes
) =>
  reducer =>
    (state, action) => reducer(
      actionTypes.includes(action.type) ? undefined : state,
      action
    );
