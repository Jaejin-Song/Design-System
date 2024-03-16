/* eslint-disable @typescript-eslint/no-explicit-any */
export interface Props {
  modelValue: any;
  value?: any;

  trueValue?: any;
  falseValue?: any;
  indeterminateValue?: any;

  label?: string;
  leftLabel?: boolean;

  disabled?: boolean;
  tabIndex?: number;
}

export interface Emtis {
  (e: 'update:modelValue', modelValue: any): void;
}
