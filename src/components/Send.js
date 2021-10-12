export default function Send({ st }) {
  // let sendThis = Object.entries(st.letter);
  return (
    <li key='1000'>{`${st.post.status} : ${st.post.message}`}</li>
  )
}