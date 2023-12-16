import React, { Component } from "react";
import "./App.css";

export default class App extends Component {
  state = {
    // hour: 0,
    // minute: 0,
    // second: 0,
    // disabled: false,
    // intervalInStartHolder: '',
    // saveIntervals: [],
    hour: 0,
    minute: 0,
    second: 0,
    disabled: false,
    intervalInStartHolder: '',
    saveIntervals: [],
  };

  // startFunc = () => {
  //   this.setState({
  //     disabled: true,
  //   });
  //   let intervalInStart = setInterval(() => {
  //     const { second, minute, hour } = this.state;
  //     if (second === 59) {
  //       this.setState({
  //         second: 0,
  //         minute: minute + 1,
  //       });
  //       if (minute === 59) {
  //         this.setState({
  //           minute: 0,
  //           hour: hour + 1,
  //         });
  //       } else {
  //         this.setState({
  //           second: 0,
  //           minute: minute + 1,
  //         });
  //       }
  //     } else {
  //       this.setState({
  //         second: second + 1,
  //       });
  //     }
  //   }, 10);
  //   this.setState({
  //     intervalInStartHolder: intervalInStart
  //   })
  // };

  // stopFunc = () => {
  //   const {intervalInStartHolder,} = this.state
  //   clearInterval(intervalInStartHolder);
  //   this.setState({
  //     disabled: false,
  //   })
  // };

  // intervalFunc = () =>{
  //   const { hour, minute, second, saveIntervals} = this.state
  //   let result = saveIntervals
  //   result.push(hour + ':' + minute + ':' + second)
  //   this.setState({
  //     saveIntervals: result
  //   })
  // }

  // resetFunc = () =>{
  //   clearInterval(this.state.intervalInStartHolder)
  //   this.setState({
  //     hour: 0,
  //     minute: 0,
  //     second: 0,
  //     saveIntervals: []
  //   })
  //   this.setState({
  //     disabled: false
  //   })
  // }

  minusHour = () => {
    this.setState({
      hour: this.state.hour - 1,
    });
  };
  plusHour = () => {
    this.setState({
      hour: this.state.hour + 1,
    });
  };

  minusMinute = () => {
    this.setState({
      minute: this.state.minute - 1,
    });
  };
  plusMinute = () => {
    this.setState({
      minute: this.state.minute + 1,
    });
  };

  minusSecond = () => {
    this.setState({
      second: this.state.second - 1,
    });
  };
  plusSecond = () => {
    this.setState({
      second: this.state.second + 1,
    });
  };

  startFunc = () => {
    this.setState({
      disabled: true,
    });
    let intervalInStart = setInterval(() => {
      const { second, minute, hour, intervalInStartHolder } = this.state;
      if (hour === 0 && minute === 0 && second === 0) {
        clearInterval(intervalInStartHolder);
        this.setState({
          hour: 0,  
          minute: 0,
          second: 0
        })
      }
      if (second === 0) {
        this.setState({
          second: 59,
          minute: minute - 1,
        });
        if (minute === 0) {
          this.setState({
            minute: 59,
            hour: hour - 1,
          });
        }
      } else {
        this.setState({
          second: second - 1,
        });
      }
    }, 100);
    this.setState({
      intervalInStartHolder: intervalInStart,
    });
  };

  stopFunc = () =>{
    clearInterval(this.state.intervalInStartHolder)
    this.setState({
      disabled: false
    })
  }
  intervalFunc = () =>{
    const { hour, minute, second, saveIntervals} = this.state
    let result = saveIntervals
    result.push(hour + ':' + minute + ':' + second)
    this.setState({
      saveIntervals: result
    })
  }
  clearFunc = () =>{
    const {intervalInStartHolder} = this.state
    clearInterval(intervalInStartHolder)
    this.setState({
      hour: 0,
      minute: 0,
      second: 0,
      saveIntervals: []
    })
    this.setState({
      disabled: false
    })
  }
  render() {
    // const { hour, minute, second, disabled, saveIntervals } = this.state;
    const { hour, minute, second, saveIntervals, disabled } = this.state;
    return (
      <div className="container">
        <div className="parent">
          <div className="child">
            <p>
              <button onClick={this.minusHour}>-</button>
              {hour}
              <button onClick={this.plusHour}>+</button> :
              <button onClick={this.minusMinute}>-</button>
              {minute} <button onClick={this.plusMinute}>+</button> :
              <button onClick={this.minusSecond}>-</button> {second}{" "}
              <button onClick={this.plusSecond}>+</button>
            </p>
            <button onClick={this.startFunc} disabled={disabled}>Start</button>
            <button onClick={this.stopFunc}>Stop</button>
            <button onClick={this.intervalFunc}>Intervals</button>
            <button onClick={this.clearFunc}>Clear</button>
          </div>
          {
            saveIntervals.map((item) => <p>{item}</p>)
          }
        </div>
      </div>

      // <div className="container">
      //   <div className="parent">
      //     <div className="child">
      //       <p>
      //         {hour} : {minute} : {second}
      //       </p>
      //       <span>
      //         <button
      //           className="btn btn-success"
      //           onClick={this.startFunc}
      //           disabled={disabled}
      //         >
      //           Start
      //         </button>
      //         <button className="btn btn-danger" onClick={this.stopFunc}>
      //           Stop
      //         </button>
      //         <button className="btn btn-primary" onClick={this.intervalFunc}>
      //           Interval
      //         </button>
      //         <button className="btn btn-dark" onClick={this.resetFunc}>
      //           Reset
      //         </button>
      //       </span>
      //       {
      //         saveIntervals.map((item) => <h4>{item}</h4>)
      //       }
      //     </div>
      //   </div>
      // </div>
    );
  }
}
