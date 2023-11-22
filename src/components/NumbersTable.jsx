export default function NumbersTable({ limit }) {
  const tdArray = [];
  // const trArr = [];
  for (let index = limit; index > 0; index--) {
    if (index > 5) {
      const tr = (
        <tr>
          <td>{index - 1}</td>
          <td>{index - 2}</td>
          <td>{index - 3}</td>
          <td>{index - 4}</td>
          <td>{index - 5}</td>
        </tr>
        
      )
      tdArray.unshift(tr)
      index -= 4
    }

    index === 5 && tdArray;
    const td = <td>{index + 1}</td>;
    tdArray.push(td);
  }

  // const tdArray = []

  return (
    <div className="tabla">
      {tdArray}
      
    </div>
  );
}
