import Service from '@ember/service';
import dayjs from 'dayjs';

export default class DayJsService extends Service {
  today = new Date().toDateString()
  yesterday = dayjs().subtract(1, 'day').toString()
  tomorrow = dayjs().add(1, 'day').toString()
  lastWeek = dayjs().subtract(1, 'week').toString()
  nextWeek = dayjs().add(1, 'week').toString()
  lastMonth = dayjs().subtract(1, 'month').toString()
  nextMonth = dayjs().add(1, 'month').toString()
  lastYear = dayjs().subtract(1, 'year').toString()
  nextYear = dayjs().add(1, 'year').toString()
}
