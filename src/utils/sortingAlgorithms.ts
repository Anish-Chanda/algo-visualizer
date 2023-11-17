import { $bars, type Bar } from "../stores/BarsStore";
import { $arraySize } from "../stores/SliderValStore";
import { $speed } from "../stores/SpeedStore";

export const BubbleSort = async () => {
  const arraySize: number = $arraySize.get();
  const bars: Bar[] = $bars.get();
  const speed: number = $speed.get();

  for (let i = 0; i < arraySize; i++) {
    for (let j = 0; j < arraySize - 1 - i; j++) {
      if (bars[j].value > bars[j + 1].value) {
        const temp: Bar = bars[j + 1];
        const swapped: Bar = bars[j];
        // swapped.color = "#FF8080";
        bars[j + 1] = swapped;
        bars[j] = temp;

        // Delay for visualization
        await new Promise((resolve) => setTimeout(resolve, speed));

        // Update state after each swap
        $bars.set([...bars]);
      }
    }
  }
};

export const MergeSort = async (
  arr: Bar[],
  startIndex: number = 0,
  endIndex: number = arr.length - 1
) => {
  const speed: number = $speed.get();

  if (startIndex < endIndex) {
    const mid = Math.floor((startIndex + endIndex) / 2);

    await MergeSort(arr, startIndex, mid);
    await MergeSort(arr, mid + 1, endIndex);

    await merge(arr, startIndex, mid, endIndex);
    $bars.set([...arr]);
    await new Promise((resolve) => setTimeout(resolve, speed));
  }
};

export const QuickSort = async (
  arr: Bar[],
  lowIndex: number,
  highIndex: number
) => {
  // choose a pivot, move all elements smaller to the left and larger to the right, do this recursively until sorted
  if (lowIndex >= highIndex) return;

  const pivot: Bar = arr[highIndex];
  let leftPointer = lowIndex;
  let rightPointer = highIndex;
  const speed: number = $speed.get();

  const swap = async (arr: Bar[], a: number, b: number) => {
    const temp: Bar = arr[a];
    arr[a] = arr[b];
    arr[b] = temp;
  };

  while (leftPointer < rightPointer) {
    while (
      arr[leftPointer].value <= pivot.value &&
      leftPointer < rightPointer
    ) {
      leftPointer++;
    }

    while (
      arr[rightPointer].value >= pivot.value &&
      leftPointer < rightPointer
    ) {
      rightPointer--;
    }

    await swap(arr, leftPointer, rightPointer);
    $bars.set([...arr]);

    await new Promise((resolve) => setTimeout(resolve, speed));
  }

  await swap(arr, leftPointer, highIndex);
  $bars.set([...arr]);

  // Delay for visualization
  await new Promise((resolve) => setTimeout(resolve, speed));

  await QuickSort(arr, lowIndex, leftPointer - 1);
  await QuickSort(arr, leftPointer + 1, highIndex);

  await new Promise((resolve) => setTimeout(resolve, speed));
};

const merge = async (
  arr: Bar[],
  startIndex: number,
  mid: number,
  endIndex: number
) => {
  const leftSize = mid - startIndex + 1;
  const rightSize = endIndex - mid;

  const left: Bar[] = arr.slice(startIndex, startIndex + leftSize);
  const right: Bar[] = arr.slice(mid + 1, mid + 1 + rightSize);

  let i = 0;
  let j = 0;
  let k = startIndex;

  while (i < leftSize && j < rightSize) {
    if (left[i].value <= right[j].value) {
      arr[k++] = left[i++];
    } else {
      arr[k++] = right[j++];
    }
  }

  while (i < leftSize) {
    arr[k++] = left[i++];
  }

  while (j < rightSize) {
    arr[k++] = right[j++];
  }
};
