import { NumbersCollection } from './NumbersCollection'
import { CharCollection } from './CharsCollection'
import { LindedList } from './LinkedList'

const numbersCollection = new NumbersCollection([10, 3, -5, 0])
numbersCollection.sort()
console.log(numbersCollection.data)

const charCollection = new CharCollection('dkdklkGF')
charCollection.sort()
console.log(charCollection)

const linkedList = new LindedList()
linkedList.add(500)
linkedList.add(60)
linkedList.add(5)
linkedList.add(-77)

linkedList.sort()
linkedList.print()
