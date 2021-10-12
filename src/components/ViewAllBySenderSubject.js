import SendSubj from './SendSubj'
export default function ViewAllBySenderSubject ({ st8 }) {

  return (
    <div>
      <ul>
        <SendSubj st={st8}/>
      </ul>
    </div>
  )
}