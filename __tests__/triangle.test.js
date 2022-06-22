import Triangle from './../src/triangle.js';

const triangle = new Triangle(2, 4, 5);

describe('Triangle',() => {
  test('should correctly coreate aa triangle object with three lengths', () => {
    const triangle = new Triangle(2,4,5);
    expect(triangle.side1).toEqual(2);
    expect(triangle.side2).toEqual(4);
    expect(triangle.side3).toEqual(5);
  });
});

