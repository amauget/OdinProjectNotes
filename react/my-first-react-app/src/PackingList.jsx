export default function PackingList(){
  return <section>
    <h1>Sally's Packing List</h1>
    <ul>
      <Item
      isPacked = {true}
      name = "Space Suit"
      />
      <Item
      isPacked={false}
      name = 'Helmet'
      />
      <Item
      isPacked={true}
      name = 'Photo'
      />
    </ul>
  </section>
  
}

function Item({ name, isPacked }){ /* if is packed === true, <del> lines out item */
  return (
    <li className="item">
      {isPacked ? 
      <del>{name + ' ✅'}</del>
       : name }
    </li>
  )}

