export default function Email({ st }) {
  let objKeyVs = Object.entries(st.results[0]);
  return (
    <>
      {objKeyVs.map((attr, index) => (
        <>
          <li key={100 + index}>{`${attr[0]} : ${attr[1]}`}</li>
        </>
      ))}
    </>
  )
}
// format style 3 col wide & 9 col wide for display. right align and left align respectively
//remove ul bullets/markers