import React from 'react'

import cls from './styles.module.scss'

import { generateArrayOfLen, isYearDisabled } from './utils'


export type DateYearListViewProps = {
  handleYearSelect: (yearNumber: number) => void,
  minDate?: Date,
  maxDate?: Date,
  visibleDate: Date,
}


export const DateYearListView = (props: DateYearListViewProps) => {
  const { visibleDate, handleYearSelect, minDate, maxDate } = props
  const currentYear = visibleDate.getFullYear()
  const startYear = currentYear - currentYear % 12
  return (
    <div className={cls['datepicker-year-list']}>
      {generateArrayOfLen(12, startYear).map(yearNumber => {

        const onClickMonth = () => { handleYearSelect(yearNumber) }
        return (
          <button
            key={yearNumber}
            onClick={onClickMonth}
            className={cls['datepicker-year-list-item']}
            disabled={isYearDisabled(new Date(yearNumber, 1, 1), minDate, maxDate)}
          >
            {yearNumber}
          </button>
        )
      })}
    </div>
  )
}

DateYearListView.displayName = "DateYearListView"