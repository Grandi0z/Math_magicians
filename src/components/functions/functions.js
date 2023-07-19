const displayOnScreen = (data) => {
  // it's not good practice to change the value of a function's parameter
  // Reason why we decide to put them in a tempo variable
  const tempo = {};
  tempo.next = data.next;
  tempo.total = data.total;
  tempo.operation = data.operation;
  // the 'x' is causing bug on Screen, so we replace it by '*'
  // Eg '4 X 3' displays 'x 4 3'
  if (tempo.operation === 'x') {
    tempo.operation = '*';
  }
  // Negative numbers cause bug on screen, so we replace them by a string
  // Eg '-4' displays '4-'
  if (tempo.total < 0) {
    tempo.total = `(ꞏ${Math.abs(data.total)})`;
  }
  if (tempo.next < 0) {
    tempo.next = `(ꞏ${Math.abs(data.next)})`;
  }
  if (tempo.total) {
    if (tempo.operation && tempo.next) {
      const resp = `${tempo.next} ${tempo.operation} ${tempo.total}`;
      return resp;
    } if (tempo.operation) {
      const resp = `${tempo.operation} ${tempo.total}`;
      return resp;
    }

    const resp = `${tempo.total}`;
    return resp;
  }
  if (tempo.next) {
    if (tempo.operation) {
      const resp = `${tempo.operation} ${tempo.next}`;
      return resp;
    }
    const resp = `${tempo.next}`;
    return resp;
  }
  const resp = '0';
  return resp;
};

export default displayOnScreen;
