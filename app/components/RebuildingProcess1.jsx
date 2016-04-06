import React, { Component } from 'react';

class RebuildingProcess1 extends Component {
  render() {
    const resize = {height: '35%'};

    return (
      <div>
        <h1 className='header'>WebFlight</h1>
        <p className='subheader'>Rebuilding Process</p>
        <table className='center'>
          <tr>
            <th className='subheader'>Normal HTML</th>
            <th className='subheader'>P2P HTML</th>
          </tr>
          <tr>
            <td><img className='center' style={resize} src='assets/normalHTML.png' /></td>
            <td><img className='center' style={resize} src='assets/p2pHTML.png' /></td>
          </tr>
        </table>
      </div>
    );
  }
}

export default RebuildingProcess1;