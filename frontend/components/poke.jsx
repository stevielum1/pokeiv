import React from 'react';
import { Redirect } from 'react-router-dom';

class Poke extends React.Component {
  constructor(props) {
    super(props);
  }

  getCPMultiplier(level) {
    switch(level) {
      case 1:
        return 0.094;
      case 1.5:
        return 0.135137432;
      case 2:
        return 0.16639787;
      case 2.5:
        return 0.192650919;
      case 3:
        return 0.21573247;
      case 3.5:
        return 0.236572661;
      case 4:
        return 0.25572005;
      case 4.5:
        return 0.273530381;
      case 5:
        return 0.29024988;
      case 5.5:
        return 0.306057377;
      case 6:
        return 0.3210876;
      case 6.5:
        return 0.335445036;
      case 7:
        return 0.34921268;
      case 7.5:
        return 0.362457751;
      case 8:
        return 0.37523559;
      case 8.5:
        return 0.387592406;
      case 9:
        return 0.39956728;
      case 9.5:
        return 0.411193551;
      case 10:
        return 0.42250001;
      case 20:
        return 0.59740001;
    }
  }

  calculateCP(stam, atk, def, level) {
    const cpMultiplier = this.getCPMultiplier(level);

    const stamina = (this.props.pokemon.stamina + stam);
    const attack = (this.props.pokemon.attack + atk);
    const defense = (this.props.pokemon.defense + def);

    const cp = Math.floor(Math.pow(stamina, 0.5) * attack * Math.pow(defense, 0.5) * cpMultiplier * cpMultiplier / 10);

    return Math.max(10, cp);
  }

  render() {
    if (this.props.pokemon === undefined) return <Redirect to="/" />;

    const ivs = [];

    // for (let stam = 15; stam >= 10; stam--) {
    //   for (let atk = 15; atk >= 10; atk--) {
    //     for (let def = 15; def >= 10; def--) {
    //       ivs.push([stam, atk, def]);
    //     }
    //   }
    // }

    ivs.push([15,15,15], [10,10,10]);

    return (
      <div>
        {this.props.pokemon.name}
        <table>
          <tr>
            <th>IVs (HP-ATK-DEF)</th>
            <th>CP</th>
            <th>%</th>
          </tr>
          {ivs.map((iv, idx) => {
            const cp = this.calculateCP(iv[0], iv[1], iv[2], 20);
            const percent = ((iv[0] + iv[1] + iv[2]) / 45.0 * 100).toFixed(2);
            return (
              <tr>
                <td>{iv[0]}-{iv[1]}-
                {iv[2]}</td>
                <td>{cp}</td>
                <td>{percent}</td>
              </tr>
            );
          })}
        </table>
      </div>
    );
  }
}

export default Poke;