import { CALCULATORS, LABELS, PLACEHOLDERS, INPUT_TYPE } from './../Common/shared'
import { CircleAreaI } from './../Types'

export const circleAreaCalculator = {
  title: CALCULATORS.circleArea,
  calculatorObject: 'circleArea',
  method: "circleArea",
  initialValues: {
    radius: '',
    radius_unit: ''
  },
  result: {
    area: 0,
    unit: ''
  },
  hasCustomSelect: true,
  fields: [
    {
      label: LABELS.radius,
      type: INPUT_TYPE.number,
      id: 'radius',
      placeholder: PLACEHOLDERS.number,
      select: {
        measurement: 'length',
        id: 'radius_unit'
      }
    }
  ]
}