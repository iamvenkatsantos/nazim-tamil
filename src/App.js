import React, { Component } from "react";
import axios from "axios";

export default class App extends Component {
  state = {
    email: "",
    password: "",
  };

  apiCall = async () => {
    const credential = {
      userName: this.state.email,
      password: this.state.password,
    };

    // response = {
    //   data: "USER IRUKAN",
    //   status: 200 / 400 / 401,
    //   statusText: "success/error",
    // };
    //NODE CODE
    app.use("/login", (req, res) => {
      let userName = req.body.userName;
      let password = req.body.password;
      //1.step: 
      // mongoose conditions
      //2.step:
      let docs = "";
      //3.step:
      res.send(docs);
    });

    // let response = await axios.post("http://localhoat:3001/register", credential);

    // if (response.status === 200) {
    //   alert("LOGGED IN");
    // } else {
    //   alert("INCRROECT PASSWORD");
    // }
  };

  render() {
    return (
      <div>
        <br />
        <br />
        <input
          value={this.state.email}
          placeholder="Enter Email"
          onChange={(event) =>
            this.setState({ ...this.state, email: event.target.value })
          }
        />
        <br />
        <br />
        <input
          value={this.state.password}
          placeholder="Enter Password"
          onChange={(event) =>
            this.setState({ ...this.state, inputB: event.target.value })
          }
        />
        <br />
        <br />
        <button onClick={this.apiCall}>Sign In</button>
      </div>
    );
  }
}
