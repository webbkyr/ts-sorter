import { Sorter } from './Sorter';

export class CharactersCollection extends Sorter {
  constructor(public data: string) {
    super();
  }

  get length(): number {
    return this.data.length;
  }

  compare(leftIdx: number, rightIdx: number): boolean {
    return this.data[leftIdx].toLowerCase() > this.data[rightIdx].toLowerCase();
  }

  swap(leftIdx: number, rightIdx: number): void {
    // convert the string of characters into array
    const characters = this.data.split('');
    // swap
    const leftHand = characters[leftIdx];
    characters[leftIdx] = characters[rightIdx];
    characters[rightIdx] = leftHand;
    // join array back together
    this.data = characters.join('');
  }
}