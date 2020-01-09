import MockDate from 'mockdate'
import dayjs from 'dayjs'
import localeData from 'dayjs/plugin/localeData'
import badMutable from 'dayjs/plugin/badMutable'
import jalali from '../src'

dayjs.extend(jalali)
dayjs.calendar('jalali')
// dayjs.locale('fa')
dayjs.extend(localeData)
dayjs.extend(badMutable)

beforeEach(() => {
  MockDate.set(new Date())
})

afterEach(() => {
  MockDate.reset()
})

it('Should set currect date', () => {
  const d1 = dayjs('1398-08-09', { jalali: true })
  const d2 = dayjs('1398-08-10', { jalali: true }).calendar('jalali').date(9)

  expect(d1.isSame(d2)).toBeTruthy()
})

it('day of week 0..7', () => {
  const d = dayjs('1398-10-15', { jalali: true })
  // 6,0,1,2,...

  d.day(6)
  const d0 = dayjs('1398-10-20', { jalali: true })
  expect(d.isSame(d0)).toBeTruthy()

  d.day(1)
  const d1 = dayjs('1398-10-15', { jalali: true })
  expect(d.isSame(d1)).toBeTruthy()

  d.day(0)
  const d6 = dayjs('1398-10-14', { jalali: true })
  expect(d.isSame(d6)).toBeTruthy()
})

// it('days of month panel', () => {
//   const value = dayjs()
//   console.log('today--->', value.format('YYYY-MM-DD dddd'))

//   const dateTable = []

//   const month1 = value.clone()
//   month1.date(1)
//   const day = month1.day()
//   const lastMonthDiffDay = (day + 7 - value.localeData().firstDayOfWeek()) % 7
//   // calculate last month
//   const lastMonth1 = month1.clone()
//   lastMonth1.add(0 - lastMonthDiffDay, 'days')
//   let passed = 0
//   let current = false

//   for (let iIndex = 0; iIndex < 6; iIndex += 1) {
//     for (let jIndex = 0; jIndex < 7; jIndex += 1) {
//       current = lastMonth1
//       if (passed) {
//         current = current.clone()
//         current.add(passed, 'days')
//       }
//       dateTable.push(current)
//       passed += 1
//     }
//   }

//   dateTable.forEach((x) => {
//     console.log('date--->', x.format('YYYY-MM-DD dddd'))
//   })
// })
