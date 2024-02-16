// local storage
export const fetchData = (key) => {
  const data = localStorage.getItem(key);
  return JSON.parse(data);
};

//create budget
export const createBudget=({
  name , amount
})=>{
  const newItem={
    id:crypto.randomUUID(),
    name:name,
    createAt: Date.now(),
    amount : +amount,
  }
  const existingBudgets=fetchData("budgets")??[];
  return localStorage.setItem("budgets",
  JSON.stringify([...existingBudgets, newItem])
  )
}

//delete item
export const deleteData = ({key}) => {
  return localStorage.removeItem(key);
}