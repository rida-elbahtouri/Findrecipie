const GetRecipe = data => ({
  type: 'GETRECIPE',
  payload: data,
});

export const getDetails = det => (
  {
    type: 'GETDETAILS',
    payload: det,
  });

export default GetRecipe;
