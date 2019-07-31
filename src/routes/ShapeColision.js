import React from 'react';
import styled from 'styled-components';
import { page } from '../style/mixings';

const ShapeColisionPage = styled.div`
  ${page}
`;

const circles = [
  {
    id: '1',
    x: 40,
    y: 40,
    radius: 10,
    color: 'rgb(255,255,0)'
  },
  {
    id: '2',
    x: 100,
    y: 70,
    radius: 10,
    color: 'rgb(255,255,0)'
  }
];

function shapeRender(canvasRef, circles) {
  const ctx = canvasRef.getContext('2d');
  const hitCanvas = document.createElement('canvas');
  const hitCtx = hitCanvas.getContext('2d');
  const colorsHash = {};

  function getRandomColor() {
    const r = Math.round(Math.random() * 255);
    const g = Math.round(Math.random() * 255);
    const b = Math.round(Math.random() * 255);
    return `rgb(${r},${g},${b})`;
  }

  circles.forEach(circle => {
    while (true) {
      const colorKey = getRandomColor();
      if (!colorsHash[colorKey]) {
        circle.colorKey = colorKey;
        colorsHash[colorKey] = circle;
        return;
      }
    }
  });

  circles.forEach(circle => {
    ctx.beginPath();
    ctx.arc(circle.x, circle.y, circle.radius, 0, 2 * Math.PI, false);
    ctx.fillStyle = circle.color;
    ctx.fill();

    hitCtx.beginPath();
    hitCtx.arc(circle.x, circle.y, circle.radius, 0, 2 * Math.PI, false);
    hitCtx.fillStyle = circle.colorKey;
    hitCtx.fill();
  });

  function hasSameColor(color, shape) {
    return shape.color === color;
  }

  canvasRef.addEventListener('click', e => {
    const mousePos = {
      x: e.clientX - canvasRef.offsetLeft,
      y: e.clientY - canvasRef.offsetTop
    };
    const pixel = hitCtx.getImageData(mousePos.x, mousePos.y, 1, 1).data;
    const color = `rgb(${pixel[0]},${pixel[1]},${pixel[2]})`;
    const shape = colorsHash[color];
    if (shape) {
      alert('click on circle: ' + shape.id);
    }
  });
}

export default class ShapeColision extends React.Component {
  constructor(props) {
    super(props);
    this.canvas = React.createRef();
  }
  componentDidMount() {
    shapeRender(this.canvas.current, circles);
  }
  render() {
    return (
      <ShapeColisionPage>
        <h1>ShapeColision</h1>
        <canvas ref={this.canvas} />
      </ShapeColisionPage>
    );
  }
}
