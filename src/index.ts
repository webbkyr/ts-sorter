import { NumbersCollection } from './NumbersCollection';
import { CharactersCollection } from './CharactersCollection';
import { LinkedList } from './LinkedList';

const numbers = new NumbersCollection([400, 1231, 12, 0, -1, -19, -400, 2, 5, 6, 34, 59, 70, 92, 54, 23, 45, 234])

numbers.sort()
console.log(numbers.data);

const characters = new CharactersCollection('XasZdfwkt');

characters.sort();
console.log(characters.data);

const linkedList = new LinkedList();
linkedList.add(399);
linkedList.add(-3);
linkedList.add(10);
linkedList.add(25);

linkedList.sort()
linkedList.print();
