export default function Search({ st }) {
  let objKeyVs = Object.entries(st[0]);
  return (
    <>
      {objKeyVs.map((attr, index) => (
        <>
          <li key={2000 + index}>{`${attr[0]} : ${attr[1]}`}</li>
        </>
      ))}
    </>
  )
}