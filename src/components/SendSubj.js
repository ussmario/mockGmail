export default function SendSubj({ st }) {
  return (
    <>
      {st.results.map((email, index) => <li key={index}>{`${email.sender} - ${email.subject}`}</li>
      )}
    </>
  )
}