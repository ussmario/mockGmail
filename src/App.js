import React from 'react';
import './App.css';
import ViewAllBySenderSubject from './components/ViewAllBySenderSubject';
import View1EntireEmail from "./components/View1EntireEmail";
import SendEmail from "./components/SendEmail"
import SearchSubj from "./components/SearchSubj"
const url = 'http://localhost:3001/';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      results: [],
      post: [],
      btnz: {
        btn1: false,
        btn2: false,
        btn3: false,
        btn4: false
      },
      letter: {
        "sender": 'update',
        "recipient": 'this',
        "subject": 'later',
        "message": 'to be dynamic',
        "date": Date,
        "id": 6977
      }
    };
    this.handleClick = this.handleClick.bind(this);
  }

  async componentDidMount() {
    let urlEmails = url.concat('emails');
    let urlSend = url.concat('send');
    let urlSearch = url.concat('search');
    let response = await fetch(urlEmails);
    let sent = await fetch(urlSend, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        referrerPolicy: 'no-referrer',
        body: JSON.stringify(this.state.letter)
      });
    let sought = await fetch(urlSearch);
    let data = await response.json();
    let sata = await sent.json();
    let sot = await sought.json();
    this.setState({ results: data, post: sata, found: sot });
  }

  handleClick(e) {
    let btn = e.target.id;
    let cp = this.state.btnz;
    cp[btn] = !cp[btn];
    this.setState({ btnz: cp });
  }

  render() {
    const input = document.querySelector('input');
    if (input) {
      input.addEventListener('change', (e) => {
        let userInput = e.target.value;
        this.setState({ search4: userInput });
      });
    }

    return (
      <div className="App flexContainer">
        <form>
          <button type="button" id='btn1' onClick={this.handleClick}>
            View all of my email messages (subject line + sender)
          </button>
          {this.state.btnz.btn1 && (
            <>
              <ViewAllBySenderSubject st8={this.state} />
            </>
          )}
          <br />
          <button type="button" id='btn2' onClick={this.handleClick}>
            View one of my email messages with all of its details
          </button>
          {this.state.btnz.btn2 && (
            <>
              <View1EntireEmail st8={this.state} />
            </>
          )}
          <br />
          <button type="button" id='btn3' onClick={this.handleClick}>
            Send an email
          </button>
          {this.state.btnz.btn3 && (
            <>
              <SendEmail st8={this.state} />
            </>
          )}
          <br />
          <label htmlFor="search">
            Search for a specific email by subject:
          </label>
          <input type="search" id='search'placeholder="Enter a subject" name="q" />
          <br />
          <button type="button" id='btn4' onClick={this.handleClick}>
            Search for a specific email by subject
          </button>
          {this.state.btnz.btn4 && (
            <>
              <SearchSubj st8={this.state.found} />
            </>
          )}
        </form>
      </div>
    )
  }
}

//curl -d '{"sender": "string","recipient": "string","subject":"string","message": "string","date": "04/11/1982","id": 4001}' -H 'Content-Type: application/json' localhost:3001/send