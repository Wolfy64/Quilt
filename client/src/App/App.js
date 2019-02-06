import React from "react";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { connect } from "react-redux";
import * as actions from "../actions";
import GlobalStyle from "../styles/globalStyle";
import theme from "../styles/theme";
import Layout from "../layout/Layout";

class App extends React.Component {
  componentDidMount() {
    this.props.fetchUser();
  }
  render() {
    return (
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <>
            <Layout />
            <GlobalStyle />
          </>
        </ThemeProvider>
      </BrowserRouter>
    );
  }
}

//Connects Data From Fetch User to The Entire App
export default connect(
  null,
  actions
)(App);
