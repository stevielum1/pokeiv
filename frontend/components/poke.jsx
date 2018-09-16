import React from 'react';
import { Redirect } from 'react-router-dom';

class Poke extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      level1: 20,
      level2: 25
    };
    this.handleInput = this.handleInput.bind(this);
  }

  handleInput(type) {
    return e => {
      this.setState({ [type]: parseFloat(e.currentTarget.value) });
    };
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
      case 10.5:
        return 0.432926419;
      case 11:
        return 0.44310755;
      case 11.5:
        return 0.4530599578;
      case 12:
        return 0.46279839;
      case 12.5:
        return 0.472336083;
      case 13:
        return 0.48168495;
      case 13.5:
        return 0.4908558;
      case 14:
        return 0.49985844;
      case 14.5:
        return 0.508701765;
      case 15:
        return 0.51739395;
      case 15.5:
        return 0.525942511;
      case 16:
        return 0.53435433;
      case 16.5:
        return 0.542635767;
      case 17:
        return 0.55079269;
      case 17.5:
        return 0.558830576;
      case 18:
        return 0.56675452;
      case 18.5:
        return 0.574569153;
      case 19:
        return 0.58227891;
      case 19.5:
        return 0.589887917;
      case 20:
        return 0.59740001;
      case 20.5:
        return 0.604818814;
      case 21:
        return 0.61215729;
      case 21.5:
        return 0.619399365;
      case 22:
        return 0.62656713;
      case 22.5:
        return 0.633644533;
      case 23:
        return 0.64065295;
      case 23.5:
        return 0.647576426;
      case 24:
        return 0.65443563;
      case 24.5:
        return 0.661214806;
      case 25:
        return 0.667934;
      case 25.5:
        return 0.674577537;
      case 26:
        return 0.68116492;
      case 26.5:
        return 0.687680648;
      case 27:
        return 0.69414365;
      case 27.5:
        return 0.700538673;
      case 28:
        return 0.70688421;
      case 28.5:
        return 0.713164996;
      case 29:
        return 0.71939909;
      case 29.5:
        return 0.725571552;
      case 30:
        return 0.7317;
      case 30.5:
        return 0.734741009;
      case 31:
        return 0.73776948;
      case 31.5:
        return 0.740785574;
      case 32:
        return 0.74378943;
      case 32.5:
        return 0.746781211;
      case 33:
        return 0.74976104;
      case 33.5:
        return 0.752729087;
      case 34:
        return 0.75568551;
      case 34.5:
        return 0.758630378;
      case 35:
        return 0.76156384;
      case 35.5:
        return 0.764486065;
      case 36:
        return 0.76739717;
      case 36.5:
        return 0.770297266;
      case 37:
        return 0.7731865;
      case 37.5:
        return 0.776064962;
      case 38:
        return 0.77893275;
      case 38.5:
        return 0.781790055;
      case 39:
        return 0.78463697;
      case 39.5:
        return 0.787473578;
      case 40:
        return 0.79030001;
      default:
        return 0;
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
      <div className="poke-container">
        <h1>{this.props.pokemon.name}</h1>
        <div className="level-container">
          <label>Level
            <input
              className="level-input"
              type="number"
              step="0.5"
              min="1"
              max="40"
              value={this.state.level1}
              onChange={this.handleInput("level1")} />
          </label>
          <table>
            <tbody>
              <tr>
                <th>(HP-ATK-DEF)</th>
                <th>CP</th>
                <th>%</th>
              </tr>
              {ivs.map((iv, idx) => {
                const cp = this.calculateCP(iv[0], iv[1], iv[2], this.state.level1);
                const percent = ((iv[0] + iv[1] + iv[2]) / 45.0 * 100).toFixed(2);
                return (
                  <tr key={idx}>
                    <td>{iv[0]}-{iv[1]}-
                    {iv[2]}</td>
                    <td>{cp}</td>
                    <td>{percent}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        <div className="level-container">
          <label>Level
            <input
              className="level-input"
              type="number"
              step="0.5"
              min="1"
              max="40"
              value={this.state.level2}
              onChange={this.handleInput("level2")} />
          </label>
          <table>
            <tbody>
              <tr>
                <th>(HP-ATK-DEF)</th>
                <th>CP</th>
                <th>%</th>
              </tr>
              {ivs.map((iv, idx) => {
                const cp = this.calculateCP(iv[0], iv[1], iv[2], this.state.level2);
                const percent = ((iv[0] + iv[1] + iv[2]) / 45.0 * 100).toFixed(2);
                return (
                  <tr key={idx}>
                    <td>{iv[0]}-{iv[1]}-
                    {iv[2]}</td>
                    <td>{cp}</td>
                    <td>{percent}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default Poke;