import dayjs from 'dayjs'
import jalali from '../src'

dayjs.extend(jalali)

it('Should set currect date', () => {
  const d1 = dayjs('1398-08-09', { jalali: true })
  const d2 = dayjs('1398-08-10', { jalali: true }).calendar('jalali').date(9)

  expect(d1.isSame(d2)).toBeTruthy()
})

// it('day of week 0..7', () => {
//   const d = dayjs('1398-10-16', { jalali: true }).calendar('jalali')

//   const d0 = dayjs('1398-10-20', { jalali: true })
//   expect(d.day(0).isSame(d0)).toBeTruthy()

//   const d1 = dayjs('1398-10-15', { jalali: true })
//   expect(d.day(1).isSame(d1)).toBeTruthy()

//   const d6 = dayjs('1398-10-14', { jalali: true })
//   expect(d.day(6).isSame(d6)).toBeTruthy()
// })
