import dayjs from 'dayjs'
import jalali from '../src'

dayjs.extend(jalali)

it('Should set currect date', () => {
  const d1 = dayjs('1398-08-09', { jalali: true })
  const d2 = dayjs('1398-08-10', { jalali: true }).calendar('jalali').date(9)

  expect(d1.isSame(d2)).toBeTruthy()
})

it('day of week 0..7', () => {
  const d = dayjs('1398-10-16', { jalali: true }).calendar('jalali')
  // console.log('------>', d.day(0))
  // console.log('------>', d.day(6))
  // console.log('------>', d.day(1))
  const d0 = dayjs('1398-10-15', { jalali: true }).calendar('jalali')
  expect(d.day(0).isSame(d0)).toBeTruthy()
})
