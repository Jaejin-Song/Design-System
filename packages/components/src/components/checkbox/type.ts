/* eslint-disable @typescript-eslint/no-explicit-any */
export interface Props {
  modelValue: any;
  trueValue?: any;
  falseValue?: any;
  indeterminateValue?: any;

  label?: string;
  leftLabel?: boolean;

  disable?: boolean;
}
