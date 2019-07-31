import React from 'react';
import styled from 'styled-components';
import { page } from '../style/mixings';

const RectanglesPage = styled.div`
  ${page}
`;

const FancyButton = styled.div`
  background-color: black;
  color: white;
  width: fit-content;
  padding: 1em 2em;
  text-transform: uppercase;
  &:hover {
    background-color: #1f1f14;
    cursor: pointer;
  }
`;

const ColumnRight = styled.div`
  position: absolute;
  right: 10%;
  top: 20%;
  display: flex;
  flex-direction: column;

  > input[type='text'] {
    border: 0;
    border-bottom: black solid 2px;
    padding: 1em;
    display: block;
    margin: 1em 0;
  }
`;

function getRandomColor() {
  const r = Math.round(Math.random() * 255);
  const g = Math.round(Math.random() * 255);
  const b = Math.round(Math.random() * 255);
  return `rgb(${r},${g},${b})`;
}

function updateCavas(canvas, listRectangles) {
  console.log(canvas);
  console.log(listRectangles);
  const context = canvas.getContext('2d');

  listRectangles.forEach(rectangle => {
    context.fillStyle = rectangle.Color;

    if (rectangle.type === 'clear') {
      context.clearRect(
        rectangle.X,
        rectangle.Y,
        rectangle.Width,
        rectangle.Height
      );
    } else if (rectangle.type === 'stroke') {
      context.strokeRect(
        rectangle.x,
        rectangle.y,
        rectangle.width,
        rectangle.height
      );
    } else {
      context.fillRect(
        rectangle.X,
        rectangle.Y,
        rectangle.Width,
        rectangle.Height
      );
    }
  });
}

export default class Rectangles extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      X: '',
      Y: '',
      Width: '',
      Height: '',
      Type: '',
      list: []
    };
    this.canvas = React.createRef();
  }

  handleButtonClick() {
    const { X, Y, Width, Height, Type } = this.state;
    const newList = this.state.list;
    const Color = getRandomColor();
    newList.push({ X, Y, Width, Height, Type, Color });
    this.setState({
      X: '',
      Y: '',
      Width: '',
      Height: '',
      list: newList
    });
    updateCavas(this.canvas.current, this.state.list);
  }

  handleInputChange(e) {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  }

  componentDidMount() {
    updateCavas(this.canvas.current, this.state.list);
  }

  render() {
    const { X, Y, Width, Height, Type } = this.state;
    return (
      <RectanglesPage>
        <h1>Rectangles</h1>
        <canvas
          style={{ border: 'solid black 2px' }}
          ref={this.canvas}
          width="620"
          height="340"
        >
          No canvas suported D^: Sorry bro
        </canvas>
        <ColumnRight>
          <input
            type="text"
            placeholder="X"
            name="X"
            value={X}
            onChange={e => this.handleInputChange(e)}
          />
          <input
            type="text"
            placeholder="Y"
            name="Y"
            value={Y}
            onChange={e => this.handleInputChange(e)}
          />
          <input
            type="text"
            placeholder="Width"
            name="Width"
            value={Width}
            onChange={e => this.handleInputChange(e)}
          />
          <input
            type="text"
            placeholder="Height"
            name="Height"
            value={Height}
            onChange={e => this.handleInputChange(e)}
          />
          <input
            type="text"
            placeholder="Type: (Fill, Stroke, Clear)"
            name="Type"
            value={Type}
            onChange={e => this.handleInputChange(e)}
          />
          <FancyButton onClick={() => this.handleButtonClick()}>
            Add Square
          </FancyButton>
        </ColumnRight>
      </RectanglesPage>
    );
  }
}
