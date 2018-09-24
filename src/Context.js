import React, { Component } from "react";

const Context = React.createContext();

export class Provider extends Component {
  state = {
    contacts: [
      {
        id: 1,
        name: "Agus Lukito",
        email: "alukito@gmail.com",
        phone: "081-123-4567"
      },
      {
        id: 2,
        name: "Bambang Sulistiyo",
        email: "bsulistiyo@gmail.com",
        phone: "081-678-9100"
      },
      {
        id: 3,
        name: "Cecep Rais",
        email: "crais@gmail.com",
        phone: "081-867-8910"
      },
      {
        id: 4,
        name: "Doni Legit",
        email: "dlegit@gmail.com",
        phone: "081-222-3333"
      }
    ]
  };

  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

export const Consumer = Context.Consumer;