function task11() {
  const obj = {js: 'test', jq: 'hello', css: 'world'};
  const keys = Object.keys(obj);
  alert(keys);
}
function task12() {
  const text = 'aaa@bbb@ccc';
  const replacer = text.replace(/@/g, '!');
  alert(replacer);
}
function task13() {
  const date = '2025-12-31';
  const parts = date.split('-');
  const formattedDate = `${parts[2]} / ${parts[1]} / ${parts[0]}`;
  alert(formattedDate);
}
function task14() {
  const str = 'я вчу javascript!';
  const charactersArray = str.split('');
  alert(charactersArray);
}
function task15() {
  const n = 7;
  const resultArray = [];
  for (let i = 1; i <= n; i++) {
    resultArray.push('x'.repeat(i));
  }
  alert(resultArray);
}
function task16() {
  function arrayFill(count) {
    const resultArray = [];
    const value = prompt('Введіть значення, яким ви хочете заповнити масив:');
    for (let i = 0; i < count; i++) {
      resultArray.push(value);
    }
    return resultArray;
  }
  const count = prompt('Введіть кількість елементів масиву:');
  const filledArray = arrayFill(count);
  alert(filledArray);
}
function task17() {
  function sumOfArrayElements(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
      const element = arr[i];
      if (Array.isArray(element)) {
        sum += sumOfArrayElements(element);
      } else {
        sum += parseFloat(element); // Перетворення введених значень на числа
      }
    }
    return sum;
  }
  const input = prompt('Введіть тривимірний масив чисел у форматі [[[a, b], [c, d]], [[e, f], [g, h]]]:');
  const parsedArray = JSON.parse(input); // Розпарсити введений рядок у масив
  const totalSum = sumOfArrayElements(parsedArray);
  alert(totalSum);
}