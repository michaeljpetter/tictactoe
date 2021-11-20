export default (player, ai) =>
  ({ type: 'CHANGE_AI', payload: { player, ai } });
