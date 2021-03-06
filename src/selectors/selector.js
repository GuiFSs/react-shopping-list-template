import { groceristar } from "@groceristar/groceristar-fetch";

const getGroceryById = (id) => {
  return groceristar.getGroceryById(id);
}

//by department name, but i don't want to make this name long
// @TODO change it later.
// "Fresh vegetables" we used
const getIngredients = (departmentName) => {
  return groceristar.getAllIngredientsByOneDepartment(departmentName);
}


const getAllIngredients = () => {
  return groceristar.getIngredients();
}

const getGroceryLists = () => {
  return groceristar.getGrocery();
}

const getUsers = () => {
  return groceristar.getUsers();
}

const getDepartments = (all = true) => {

  if( all ){
    return groceristar.getAllDepartments();
  }

  return groceristar.getDepartments();
}

export { getGroceryById, getIngredients, getAllIngredients, getGroceryLists, getUsers, getDepartments }
