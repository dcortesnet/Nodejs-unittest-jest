describe('Examples test matchers', () => {
  test('toBe', () => {
    expect(3).toBe(3);
  });

  test('toEqual', () => {
    const obj1 = { name: 'Alice', age: 25 };
    const obj2 = { name: 'Alice', age: 25 };
    expect(obj1).toEqual(obj2);
  });

  test('toBeNull', () => {
    const value = null;
    expect(value).toBeNull();
  });

  test('toBeDefined', () => {
    const value = 42;
    expect(value).toBeDefined();
  });
  
  test('toBeTruthy', () => {
    const value = 'Hello';
    expect(value).toBeTruthy();
  });

  test('toBeFalsy', () => {
    const value = 0;
    expect(value).toBeFalsy();
  });

  test('toBeGreaterThan', () => {
    expect(10).toBeGreaterThan(5);
  });

  test('toBeLessThan', () => {
    expect(3).toBeLessThan(7);
  });

  test('toContain', () => {
    const array = [1, 2, 3];
    expect(array).toContain(2);
  });

  test('toHaveLength', () => {
    const string = 'Hello';
    expect(string).toHaveLength(5);
  });

  test('toMatch', () => {
    const regex = /hello/i;
    expect('Hello World').toMatch(regex);
  });

  test('toThrow', () => {
    const throwError = () => {
      throw new Error('Error de prueba');
    };
    expect(throwError).toThrow('Error de prueba');
  });

  test('toBeInstanceOf', () => {
    class Person {
        constructor(name){
            this.name = name;
        }
    }
    const person = new Person('Alice');
    expect(person).toBeInstanceOf(Person);
  });
});
