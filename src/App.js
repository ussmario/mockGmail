import { Component } from 'react';
import './App.css';
import { GetAllSendersAndSubjects } from './components/GetAllSendersAndSubjects';
const url = 'http://localhost:3001/';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      results: ['here', 'you', 'go']
    };
  }

  async componentDidMount() {
    let urlEmails = url.concat('emails');
    let response = await fetch(urlEmails);
    let dataObj = await response.json();
    var data = Object.keys(dataObj).map((key) => [key, dataObj[key]]);
    this.setState({ results: data });
    this.setState({ katie: data[0][1].sender });
  }

  render() {
    const input = document.querySelector('input');
    if (input) {
      input.addEventListener('change', (e) => {
        let searchVal = e.target.value;
        this.setState({ userInput: searchVal });
      });
    }

    return (
      <div className="App">
        <GetAllSendersAndSubjects props={this.state.katie} />
        <form>
          <button type="button" onClick={GetAllSendersAndSubjects}>View all of my email messages (subject line + sender)</button>
          <button type="button" onClick={GetAllSendersAndSubjects}>View one of my email messages with all of its details</button>
          <button type="button" onClick={GetAllSendersAndSubjects}>Send an email</button>
          <label htmlFor="search">Search for a specific email by subject:</label>
          <input type="text" placeholder="Enter a subject" name="search" />
          <button type="button" onClick={GetAllSendersAndSubjects}>Search for a specific email by subject</button>
        </form>
      </div>
    )
  }
}