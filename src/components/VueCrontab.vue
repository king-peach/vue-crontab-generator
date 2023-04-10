<template>
  <div id="crontab-generator">
    <el-tabs type="border-card">
      <el-tab-pane v-if="periods.includes('{s}')">
        <span slot="label">
          <i class="el-icon-date"></i>
          {{ text.Seconds.name }}
        </span>
        <div class="tabBody">
          <el-row>
            <el-radio v-model="second.cronEvery" label="1">
              {{ text.Seconds.every }}
            </el-radio>
          </el-row>
          <el-row>
            <el-radio v-model="second.cronEvery" label="2">
              {{ text.Seconds.interval[0] }}
              <el-input-number
                v-model="second.incrementStart"
                size="small"
                :min="0"
                :max="59"
              />
              {{ text.Seconds.interval[1] || "" }}
              <el-input-number
                v-model="second.incrementIncrement"
                size="small"
                :min="1"
                :max="60"
              />
              {{ text.Seconds.interval[2] || "" }}
            </el-radio>
          </el-row>
          <el-row>
            <el-radio v-model="second.cronEvery" class="long" label="3">
              {{ text.Seconds.specific }}
              <el-select
                v-model="second.specificSpecific"
                :placeholder="text.Placeholder.select"
                :popper-class="selectPopperClass"
                clearable
                size="small"
                class="v-select_w_180"
                multiple
              >
                <el-option v-for="val in 60" :key="val" :value="`${val - 1}`">
                  {{val - 1}}
                </el-option>
              </el-select>
            </el-radio>
          </el-row>
          <el-row>
            <el-radio v-model="second.cronEvery" label="4">
              {{ text.Seconds.cycle[0] }}
              <el-input-number
                v-model="second.rangeStart"
                size="small"
                :min="1"
                :max="60"
              />
              {{ text.Seconds.cycle[1] || "" }}
              <el-input-number
                v-model="second.rangeEnd"
                size="small"
                :min="0"
                :max="59"
              />
              {{ text.Seconds.cycle[2] || "" }}
            </el-radio>
          </el-row>
        </div>
      </el-tab-pane>
      <el-tab-pane v-if="periods.includes('{m}')">
        <span slot="label">
          <i class="el-icon-date"></i>
          {{ text.Minutes.name }}
        </span>
        <div class="tabBody">
          <el-row>
            <el-radio v-model="minute.cronEvery" label="1">
              {{ text.Minutes.every }}
            </el-radio>
          </el-row>
          <el-row>
            <el-radio v-model="minute.cronEvery" label="2">
              {{ text.Minutes.interval[0] }}
              <el-input-number
                v-model="minute.incrementStart"
                size="small"
                :min="0"
                :max="59"
              />
              {{ text.Minutes.interval[1] }}
              <el-input-number
                v-model="minute.incrementIncrement"
                size="small"
                :min="1"
                :max="60"
              />
              {{ text.Minutes.interval[2] || "" }}
            </el-radio>
          </el-row>
          <el-row>
            <el-radio v-model="minute.cronEvery" class="long" label="3">
              {{ text.Minutes.specific }}
              <el-select
                v-model="minute.specificSpecific"
                :placeholder="text.Placeholder.select"
                :popper-class="selectPopperClass"
                clearable
                size="small"
                class="v-select_w_180"
                multiple
              >
                <el-option v-for="val in 60" :key="val" :value="`${val - 1}`">
                  {{ val - 1 }}
                </el-option>
              </el-select>
            </el-radio>
          </el-row>
          <el-row>
            <el-radio v-model="minute.cronEvery" label="4">
              {{ text.Minutes.cycle[0] }}
              <el-input-number
                v-model="minute.rangeStart"
                size="small"
                :min="1"
                :max="60"
              />
              {{ text.Minutes.cycle[1] }}
              <el-input-number
                v-model="minute.rangeEnd"
                size="small"
                :min="0"
                :max="59"
              />
              {{ text.Minutes.cycle[2] }}
            </el-radio>
          </el-row>
        </div>
      </el-tab-pane>
      <el-tab-pane v-if="periods.includes('{h}')">
        <span slot="label">
          <i class="el-icon-date"></i>
          {{ text.Hours.name }}
        </span>
        <div class="tabBody">
          <el-row>
            <el-radio v-model="hour.cronEvery" label="1">
              {{ text.Hours.every }}
            </el-radio>
          </el-row>
          <el-row>
            <el-radio v-model="hour.cronEvery" label="2">
              {{ text.Hours.interval[0] }}
              <el-input-number
                v-model="hour.incrementStart"
                size="small"
                :min="0"
                :max="23"
              />
              {{ text.Hours.interval[1] }}
              <el-input-number
                v-model="hour.incrementIncrement"
                size="small"
                :min="0"
                :max="23"
              />
              {{ text.Hours.interval[2] }}
            </el-radio>
          </el-row>
          <el-row>
            <el-radio v-model="hour.cronEvery" class="long" label="3">
              {{ text.Hours.specific }}
              <el-select
                v-model="hour.specificSpecific"
                :placeholder="text.Placeholder.select"
                :popper-class="selectPopperClass"
                clearable
                class="v-select_w_180"
                size="small"
                multiple
              >
                <el-option v-for="val in 24" :key="val" :value="`${val - 1}`">
                  {{val - 1}}
                </el-option>
              </el-select>
            </el-radio>
          </el-row>
          <el-row>
            <el-radio v-model="hour.cronEvery" label="4">
              {{ text.Hours.cycle[0] }}
              <el-input-number
                v-model="hour.rangeStart"
                size="small"
                :min="0"
                :max="23"
              />
              {{ text.Hours.cycle[1] }}
              <el-input-number
                v-model="hour.rangeEnd"
                size="small"
                :min="0"
                :max="23"
              />
              {{ text.Hours.cycle[2] }}
            </el-radio>
          </el-row>
        </div>
      </el-tab-pane>
      <el-tab-pane v-if="periods.includes('{d}')">
        <span slot="label">
          <i class="el-icon-date"></i>
          {{ text.Day.name }}
        </span>
        <div class="tabBody">
          <el-row>
            <el-radio v-model="day.cronEvery" label="1">
              {{ text.Day.every }}
            </el-radio>
          </el-row>
          <el-row>
            <el-radio v-model="day.cronEvery" label="3">
              {{ text.Day.intervalDay[0] }}
              <el-input-number
                v-model="day.incrementStart"
                size="small"
                :min="1"
                :max="31"
              />
              {{ text.Day.intervalDay[1] }}
              <el-input-number
                v-model="day.incrementIncrement"
                size="small"
                :min="1"
                :max="31"
              />
              {{ text.Day.intervalDay[2] }}
            </el-radio>
          </el-row>
          <el-row>
            <el-radio v-model="day.cronEvery" class="long" label="5" @change="handleLabelChange">
              {{ text.Day.specificDay }}
              <el-select
                v-model="day.specificSpecific"
                :placeholder="text.Placeholder.select"
                :popper-class="selectPopperClass"
                clearable
                class="v-select_w_180"
                size="small"
                multiple
              >
                <el-option v-for="val in 31" :key="val" :value="`${val}`">
                  {{val}}
                </el-option>
              </el-select>
            </el-radio>
          </el-row>
          <el-row>
            <el-radio v-model="day.cronEvery" label="6">
              {{ text.Day.lastDay }}
            </el-radio>
          </el-row>
          <el-row>
            <el-radio v-model="day.cronEvery" label="7">
              {{ text.Day.lastWeekday }}
            </el-radio>
          </el-row>
          <!-- <el-row>
            <el-radio v-model="day.cronEvery" label="8">
              {{ text.Day.lastWeek[0] }}
              <el-select
                v-model="day.cronLastSpecificDomDay"
                :placeholder="text.Placeholder.select"
                :popper-class="selectPopperClass"
                clearable
                class="v-select_w_180"
                size="small"
              >
               <el-option
                  v-for="val in 7"
                  :key="val"
                  :label="text.Week.day[val - 1]"
                  :value="`${val}`"
                />
              </el-select>
            </el-radio>
          </el-row> -->
          <el-row>
            <el-radio v-model="day.cronEvery" label="9">
              {{ text.Day.beforeEndMonth[0] }}
              <el-input-number
                v-model="day.cronDaysBeforeEomMinus"
                size="small"
                :min="1"
                :max="31"
              />
              {{ text.Day.beforeEndMonth[1] }}
            </el-radio>
          </el-row>
          <el-row>
            <el-radio v-model="day.cronEvery" label="10">
              {{ text.Day.nearestWeekday[0] }}
              <el-input-number
                v-model="day.cronDaysNearestWeekday"
                size="small"
                :min="1"
                :max="31"
              />
              {{ text.Day.nearestWeekday[1] }}
            </el-radio>
          </el-row>
        </div>
      </el-tab-pane>
      <el-tab-pane v-if="periods.includes('{M}')">
        <span slot="label">
          <i class="el-icon-date"></i>
          {{ text.Month.name }}
        </span>
        <div class="tabBody">
          <el-row>
            <el-radio v-model="month.cronEvery" label="1">
              {{ text.Month.every }}
            </el-radio>
          </el-row>
          <el-row>
            <el-radio v-model="month.cronEvery" label="2">
              {{ text.Month.interval[0] }}
              <el-input-number
                v-model="month.incrementStart"
                size="small"
                :min="0"
                :max="12"
              />
              {{ text.Month.interval[1] }}
              <el-input-number
                v-model="month.incrementIncrement"
                size="small"
                :min="0"
                :max="12"
              />
              {{ text.Month.interval[2] }}
            </el-radio>
          </el-row>
          <el-row>
            <el-radio v-model="month.cronEvery" class="long" label="3">
              {{ text.Month.specific }}
              <el-select
                v-model="month.specificSpecific"
                :placeholder="text.Placeholder.select"
                :popper-class="selectPopperClass"
                clearable
                class="v-select_w_180"
                size="small"
                multiple
              >
                <el-option
                  v-for="val in 12"
                  :key="val"
                  :label="val"
                  :value="`${val}`"
                />
              </el-select>
            </el-radio>
          </el-row>
          <el-row>
            <el-radio v-model="month.cronEvery" label="4">
              {{ text.Month.cycle[0] }}
              <el-input-number
                v-model="month.rangeStart"
                size="small"
                :min="1"
                :max="12"
              />
              {{ text.Month.cycle[1] }}
              <el-input-number
                v-model="month.rangeEnd"
                size="small"
                :min="1"
                :max="12"
              />
            </el-radio>
          </el-row>
        </div>
      </el-tab-pane>
      <el-tab-pane v-if="periods.includes('{W}')">
        <span slot="label">
          <i class="el-icon-date"></i>
          {{ text.Week.name }}
        </span>
        <div class="tabBody">
          <el-row>
            <el-radio v-model="day.cronEvery" label="2">
              {{ text.Day.intervalWeek[0] }}
              <el-select
                v-model="week.incrementStart"
                :placeholder="text.Placeholder.select"
                :popper-class="selectPopperClass"
                clearable
                class="v-select_w_180"
                size="small"
              >
               <el-option
                  v-for="val in 7"
                  :key="val"
                  :label="text.Week.day[val - 1]"
                  :value="`${val}`"
                />
              </el-select>
              {{ text.Day.intervalWeek[1] }}
              <el-input-number
                v-model="week.incrementIncrement"
                size="small"
                :min="1"
                :max="7"
              />
              {{ text.Day.intervalWeek[2] }}
            </el-radio>
          </el-row>
          <el-row>
            <el-radio v-model="day.cronEvery" class="long" label="4" @change="handleLabelChange">
              {{ text.Day.specificWeek }}
              <el-select
                v-model="week.specificSpecific"
                :placeholder="text.Placeholder.select"
                :popper-class="selectPopperClass"
                clearable
                class="v-select_w_180"
                size="small"
                multiple
              >
                <el-option
                  v-for="val in 7"
                  :key="val"
                  :label="text.Week.day[val - 1]"
                  :value="`${dayOfWeek[val - 1]}`"
                />
              </el-select>
            </el-radio>
          </el-row>
          <el-row>
            <el-radio v-model="day.cronEvery" label="11">
              {{ text.Day.someWeekday[0] }}
              <el-input-number
                v-model="week.cronNthDayNth"
                size="small"
                :min="1"
                :max="5"
              />
              {{ text.Day.someWeekday[1] }}
              <el-select
                v-model="week.cronNthDayDay"
                :placeholder="text.Placeholder.select"
                :popper-class="selectPopperClass"
                clearable
                class="v-select_w_180"
                size="small"
              >
               <el-option
                  v-for="val in 7"
                  :key="val"
                  :label="text.Week.day[val - 1]"
                  :value="val"
                />
              </el-select>
            </el-radio>
          </el-row>
        </div>
      </el-tab-pane>
      <el-tab-pane v-if="periods.includes('{Y}')">
        <span slot="label">
          <i class="el-icon-date"></i>
          {{ text.Year.name }}
        </span>
        <div class="tabBody">
          <el-row>
            <el-radio v-model="year.cronEvery" label="1">
              {{ text.Year.every }}
            </el-radio>
          </el-row>
          <el-row>
            <el-radio v-model="year.cronEvery" label="2">
              {{ text.Year.interval[0] }}
              <el-input-number
                v-model="year.incrementStart"
                size="small"
                :min="2018"
                :max="2118"
              />
              {{ text.Year.interval[1] }}
              <el-input-number
                v-model="year.incrementIncrement"
                size="small"
                :min="1"
                :max="99"
              />
              {{ text.Year.interval[2] }}
            </el-radio>
          </el-row>
          <el-row>
            <el-radio v-model="year.cronEvery" class="long" label="3">
              {{ text.Year.specific }}
              <el-select
                v-model="year.specificSpecific"
                :placeholder="text.Placeholder.select"
                :popper-class="selectPopperClass"
                clearable
                size="small"
                class="v-select_w_180"
                filterable
                multiple
              >
                <el-option
                  v-for="val in 100"
                  :key="val"
                  :label="2017 + val"
                  :value="`${2017 + val}`"
                />
              </el-select>
            </el-radio>
          </el-row>
          <el-row>
            <el-radio v-model="year.cronEvery" label="4">
              {{ text.Year.cycle[0] }}
              <el-input-number
                v-model="year.rangeStart"
                size="small"
                :min="2018"
                :max="2118"
              />
              {{ text.Year.cycle[1] }}
              <el-input-number
                v-model="year.rangeEnd"
                size="small"
                :min="2018"
                :max="2118"
              />
            </el-radio>
          </el-row>
        </div>
      </el-tab-pane>
    </el-tabs>
    <div v-if="showText" class="bottom">
      <div class="value">表达式：{{ cron }}</div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch } from 'vue-property-decorator'

import { Button, InputNumber, Select, TabPane, Tabs, Option, TimePicker, Radio, Row, Col } from 'element-ui'

import Language from '../../i18n/index'

interface Kv<T = any> {
  [index: string | symbol ]: T
}

@Component({
  components: {
    ElButton: Button,
    ElTabs: Tabs,
    ElTabPane: TabPane,
    ElInputNumber: InputNumber,
    ElSelect: Select,
    ElOption: Option,
    ElTimePicker: TimePicker,
    ElRadio: Radio,
    ElRow: Row,
    ElCol: Col
  }
})
export default class VueCrontab extends Vue {
  @Prop({ default: '' })
  value!: string;

  @Prop({ default: 'cn' })
  i18n!: 'cn' | 'en'

  /**
   * el-select options className
   * Note: used to fix select options z-index to low
   */
  @Prop({ default: '' })
  selectPopperClass!: string

  /**
   * Configure the generator tabs display and expression formatting rules
   * Note: You must configure in the order of the default values
   */
  @Prop({ default: `{s} {m} {h} {d} {M} {W} {Y}` })
  periods!: string

  @Prop({ default: true })
  showText!: string

  dayOfWeek: string[] = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT']

  exps: Kv[] = [
    { type: 'second', expression: '' },
    { type: 'minute', expression: '' },
    { type: 'hour', expression: '' },
    { type: 'day', expression: '' },
    { type: 'month', expression: '' },
    { type: 'week', expression: '' },
    { type: 'year', expression: '' }
  ]

  format: Kv = {
    second: '{s}',
    minute: '{m}',
    hour: '{h}',
    day: '{d}',
    month: '{M}',
    week: '{W}',
    year: '{Y}'
  }

  second: Kv = {
    cronEvery: '',
    incrementStart: '3',
    incrementIncrement: '5',
    rangeStart: '',
    rangeEnd: '',
    specificSpecific: []
  }

  minute: Kv = {
    cronEvery: '',
    incrementStart: '3',
    incrementIncrement: '5',
    rangeStart: '',
    rangeEnd: '',
    specificSpecific: []
  }

  hour: Kv = {
    cronEvery: '',
    incrementStart: '3',
    incrementIncrement: '5',
    rangeStart: '',
    rangeEnd: '',
    specificSpecific: []
  }

  day: Kv = {
    cronEvery: '',
    incrementStart: '1',
    incrementIncrement: '1',
    rangeStart: '',
    rangeEnd: '',
    specificSpecific: [],
    cronLastSpecificDomDay: 1,
    cronDaysBeforeEomMinus: '',
    cronDaysNearestWeekday: ''
  }

  week: Kv = {
    cronEvery: '',
    incrementStart: '1',
    incrementIncrement: '1',
    specificSpecific: [],
    cronNthDayDay: 1,
    cronNthDayNth: '1'
  }

  month: Kv = {
    cronEvery: '',
    incrementStart: '3',
    incrementIncrement: '5',
    rangeStart: '',
    rangeEnd: '',
    specificSpecific: []
  }

  year: Kv = {
    cronEvery: '',
    incrementStart: '2017',
    incrementIncrement: '1',
    rangeStart: '',
    rangeEnd: '',
    specificSpecific: []
  }

  output: Kv = {
    second: '',
    minute: '',
    hour: '',
    day: '',
    month: '',
    week: '',
    year: ''
  }

  get text () {
    return Language[this.i18n]
  }

  get secondsText () {
    let seconds = ''
    const cronEvery = this.second.cronEvery.toString()

    switch (cronEvery) {
      case '1':
        seconds = '*'
        break
      case '2':
        seconds = `${this.second.incrementStart}/${this.second.incrementIncrement}`
        break
      case '3':
        this.second.specificSpecific.map((val: string) => seconds += `${val},`)
        seconds = seconds.slice(0, -1)
        break
      case '4':
        seconds = `${this.second.rangeStart}-${this.second.rangeEnd}`
        break
      default:
        break
    }

    return seconds
  }

  get minutesText () {
    let minutes = ''
    const cronEvery = this.minute.cronEvery.toString()

    switch (cronEvery) {
      case '1':
        minutes = '*'
        break
      case '2':
        minutes = `${this.minute.incrementStart}/${this.minute.incrementIncrement}`
        break
      case '3':
        this.minute.specificSpecific.map((val: string) => minutes += `${val},`)
        minutes = minutes.slice(0, -1)
        break
      case '4':
        minutes = `${this.minute.rangeStart}-${this.minute.rangeEnd}`
        break
      default:
        break
    }

    return minutes
  }

  get hoursText () {
    let hours = ''
    const cronEvery = this.hour.cronEvery.toString()
    switch (cronEvery.toString()) {
      case '1':
        hours = '*'
        break
      case '2':
        hours = `${this.hour.incrementStart}/${this.hour.incrementIncrement}`
        break
      case '3':
        this.hour.specificSpecific.map((val: string) => hours += `${val},`)
        hours = hours.slice(0, -1)
        break
      case '4':
        hours = `${this.hour.rangeStart}-${this.hour.rangeEnd}`
        break
      default:
        break
    }

    return hours
  }

  get daysText () {
    let days = ''
    const cronEvery = this.day.cronEvery.toString()

    switch (cronEvery) {
      case '1':
        break
      case '2':
      case '4':
      case '11':
        days = '?'
        break
      case '3':
        days = `${this.day.incrementStart}/${this.day.incrementIncrement}`
        break
      case '5':
        this.day.specificSpecific.map((val: string) => days += `${val},`)
        days = days.slice(0, -1)
        break
      case '6':
        days = 'L'
        break
      case '7':
        days = 'LW'
        break
      case '8':
        days = `${this.day.cronLastSpecificDomDay}L`
        break
      case '9':
        days = `L-${this.day.cronDaysBeforeEomMinus}`
        break
      case '10':
        days = `${this.day.cronDaysNearestWeekday}W`
        break
      default:
        break
    }

    return days
  }

  get weeksText () {
    let weeks = ''
    const cronEvery = this.day.cronEvery.toString()

    switch (cronEvery) {
      case '1':
      case '3':
      case '5':
        weeks = '?'
        break
      case '2':
        weeks = `${this.week.incrementStart}/${this.week.incrementIncrement}`
        break
      case '4':
        this.week.specificSpecific.map((val: string) => weeks += `${val},`)
        weeks = weeks.slice(0, -1)
        break
      case '6':
      case '7':
      case '8':
      case '9':
      case '10':
        weeks = '?'
        break
      case '11':
        weeks = `${this.week.cronNthDayDay}#${this.week.cronNthDayNth}`
        break
      default:
        break
    }

    return weeks
  }

  get monthsText () {
    let months = ''
    const cronEvery = this.month.cronEvery.toString()

    switch (cronEvery) {
      case '1':
        months = '*'
        break
      case '2':
        months = `${this.month.incrementStart}/${this.month.incrementIncrement}`
        break
      case '3':
        this.month.specificSpecific.map((val: string) => months += `${val},`)
        months = months.slice(0, -1)
        break
      case '4':
        months = `${this.month.rangeStart}-${this.month.rangeEnd}`
        break
      default:
        break
    }

    return months
  }

  get yearsText () {
    let years = ''
    const cronEvery = this.year.cronEvery.toString()

    switch (cronEvery) {
      case '1':
        years = '*'
        break
      case '2':
        years = `${this.year.incrementStart}/${this.year.incrementIncrement}`
        break
      case '3':
        this.year.specificSpecific.map((val: string) => years += `${val},`)
        years = years.slice(0, -1)
        break
      case '4':
        years = `${this.year.rangeStart}-${this.year.rangeEnd}`
        break
      default:
        break
    }

    return years
  }

  get cron () {
    const rules = new Map()
    rules.set('{s}', 'secondsText')
    rules.set('{m}', 'minutesText')
    rules.set('{h}', 'hoursText')
    rules.set('{d}', 'daysText')
    rules.set('{M}', 'monthsText')
    rules.set('{W}', 'weeksText')
    rules.set('{Y}', 'yearsText')

    const periodStrArr = this.periods.split(' ')

    let result = ``

    periodStrArr.forEach((period, idx) => {
      const spaceholder = period === 'W' ? '?' : '*'
      const split = idx === periodStrArr.length - 1 ? '' : ' '
      result += `${(this as Kv)[rules.get(period)] || spaceholder}${split}`
    })

    return result
    // return `${this.secondsText || '*'} ${this.minutesText || '*'} ${this.hoursText || '*'} ${this.daysText || '*'} ${this.monthsText || '*'} ${this.weeksText || '?'} ${this.yearsText || '*'}`
  }

  mounted () {
    this.resolveExpression()
  }

  @Watch('value')
  handleExpressionChange () {
    this.resolveExpression()
  }

  @Watch('cron')
  handleCronChange (cron: string) {
    this.$emit('change', cron)
    this.$emit('input', cron)
  }

  handleLabelChange () {
    if (this.day.specificSpecific.includes('?')) {
      this.day.specificSpecific = []
    }
  }

  // 反向解析表达式
  resolveExpression () {
    if (!this.value.length) return

    const expList = this.value.split(' ')
    const periodsList = this.periods.split(' ')

    if (expList.length !== periodsList.length) throw new Error('crontab expression is error!')

    for (let i = 0; i < expList.length; i++) {
      const formatEntry = Object.entries(this.format).filter(entry => entry[1] === periodsList[i]).map(entry => entry[0])
      if (formatEntry.length) {
        const key = formatEntry[0]
        const index = this.exps.findIndex(exp => exp.type === key)
        this.exps[index].expression = expList[i]
      }
    }

    this.exps.forEach(exp => {
      this.output[exp.type] = exp.expression
      switch (exp.type) {
        case 'year':
        case 'month':
        case 'hour':
        case 'minute':
        case 'second':
          this.commonParser((this as Kv)[exp.type], exp.expression)
          break
        case 'week':
          this.resolveWeek(exp.expression)
          break
        case 'day':
          this.resolveDay(exp.expression)
          break
        default:
          break
      }
    })
  }

  // 年，月，时，分，秒
  commonParser (expressionType: Kv, str: string) {
    if (str === '*') {
      this.resolveStar(expressionType)
    } else if (str.indexOf('-') >= 0) {
      this.resolveLine(expressionType, str)
    } else if (str.indexOf('/') >= 0) {
      this.resolveSlash(expressionType, str)
    } else {
      this.resolveComma(expressionType, str)
    }
  }

  resolveWeek (str: string) {
    if (str.indexOf('/') >= 0) {
      this.day.cronEvery = '2'
      this.resolveSlash(this.week, str)
    } else if (str.indexOf(',') >= 0 || this.dayOfWeek.includes(str)) {
      this.day.cronEvery = '4'
      this.resolveComma(this.week, str)
    } else if (str.indexOf('#') >= 0) {
      this.day.cronEvery = '11'
      const range = str.split('#')
      this.week.cronNthDayDay = +range[0]
      this.week.cronNthDayNth = +range[1]
    }
  }

  resolveDay (str: string) {
    if (str === '*') {
      this.resolveStar(this.day)
    } else if (str.indexOf('/') >= 0) {
      this.resolveSlash(this.day, str, '3')
    } else if (str === 'L') {
      this.day.cronEvery = '6'
    } else if (str === 'LW') {
      this.day.cronEvery = '7'
    } else if (/\dL/.test(str)) {
      this.day.cronEvery = '8'
      this.day.cronLastSpecificDomDay = str.match(/(\d)L/)![1]
    } else if (/L-\d+/.test(str)) {
      this.day.cronEvery = '9'
      this.day.cronDaysBeforeEomMinus = str.match(/L-(\d+)/)![1]
    } else if (/\d+W/.test(str)) {
      this.day.cronEvery = '10'
      this.day.cronDaysNearestWeekday = str.match(/(\d+)W/)![1]
    } else {
      this.resolveComma(this.day, str, '5')
    }
  }

  resolveStar (expressionObj: Kv, type = '1') {
    expressionObj.cronEvery = type
  }

  resolveSlash (expressionObj: Kv, expression: string, type = '2') {
    expressionObj.cronEvery = type
    const range = expression.split('/')
    expressionObj.incrementStart = +range[0]
    expressionObj.incrementIncrement = +range[1]
  }

  resolveLine (expressionObj: Kv, expression: string, type = '4') {
    expressionObj.cronEvery = type
    const range = expression.split('-')
    expressionObj.rangeStart = +range[0]
    expressionObj.rangeEnd = +range[1]
  }

  resolveComma (expressionObj: Kv, expression: string, type = '3') {
    expressionObj.cronEvery = type
    expressionObj.specificSpecific = expression.split(',')
  }
}
</script>

<style lang="scss" scope>
#crontab-generator {
  .v-select_w_180 {
    width: 180px;
    margin: 0 6px;
  }
  .language{
    position: absolute;
    right: 25px;
    z-index: 1;
  }
  .el-tabs{
    box-shadow: none;
  }
  .tabBody{
    .el-row{
      padding: 10px 0;
      .el-input-number{
        width: 100px;
        margin: 0 6px;
      }
    }
  }
  .bottom{
    width: 100%;
    text-align: center;
    margin-top: 5px;
    position: relative;
    .value{
      font-size: 14px;
      vertical-align: middle;
      padding: 6px 0 10px;
    }
  }
}
</style>

<style lang="scss">
#crontab-generator {
  div, span {
    font-weight: 400;
  }
}
</style>
