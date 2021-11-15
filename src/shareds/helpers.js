export function handleFormatBoxes(allElements, quantityElementsPerBox) {
  const boxes = [];

  const quantityBox = allElements.length / quantityElementsPerBox;

  for (let index = 0; index < quantityBox; index++) {
    const initialElementIndex = index * quantityElementsPerBox;
    const endElementIndex = initialElementIndex + quantityElementsPerBox;
    const currenElements = allElements.slice(
      initialElementIndex,
      endElementIndex
    );

    boxes.push({
      currenElements,
    });
  }

  return boxes;
}
