export const createElement = ({ tagName, className = [], value = '' }) => {
  const element = document.createElement(tagName);
  element.classList.add(...className);
  element.innerHTML = value;
  return element;
};

//2차원 배열 딥 클론
export const deepCloneArray = (arr) => [...arr.map((v) => [...v])];
