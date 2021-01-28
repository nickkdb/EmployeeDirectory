import React from 'react';
import Table from './components/table';
import Header from './components/header';


class App extends React.Component {

  render() {
    return (
      <div>
        <Header />
        <Table />
      </div>
    );
  }
}

export default App;
