import React, { Component } from 'react';
import './../App.css';  
import Notifier from './Notifier';

class Monitor extends Component {
      constructor() {
        super();
        this.state = {
          offline: false
        }
      }

      componentDidMount() {
        window.addEventListener('online', () => {
          this.setState({ offline: false });
        });

        window.addEventListener('offline', () => {
          this.setState({ offline: true });
        });
      }

      componentDidUpdate() {
        let offlineStatus = !navigator.onLine;
        if (this.state.offline !== offlineStatus) {
          this.setState({ offline: offlineStatus });
        }
      }

      render() {
        return (
          <div className="App">
            <Notifier offline={this.state.offline} />
           
          </div>
        );
      }
    }

    export default Monitor;