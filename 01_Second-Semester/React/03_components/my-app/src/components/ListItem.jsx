// Working With Lists
export const ListItem = ()=>{
  const listItems = ['Ford', 'Toyota', 'Mercedes', 'Ferrari']
  
  return listItems.map(item => {
    return <li key={item}>{item}</li>
  })
}

export let newListItems

export const NewListItems = ()=>{
  const listItems = ['Ford', 'Monkey', 'Mercedes', 'Monkey']

  return listItems.map((item, index) => {
    return <li key={`${item}-${index}`}>{item}</li>
  })
}

newListItems = NewListItems()
console.log(newListItems)





