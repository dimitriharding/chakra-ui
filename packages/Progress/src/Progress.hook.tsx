import { valueToPercent } from "@chakra-ui/utils";

export interface ProgressOptions {
  value: number;
  min: number;
  max: number;
  valueText?: string;
  getValueText?: (value: number, percent?: number) => string;
}

export function useProgress(props: ProgressOptions) {
  const percent = valueToPercent(props.value, props.min, props.max);
  const isIndeterminate = typeof props.value === "undefined";
  return {
    "data-indeterminate": isIndeterminate ? "" : undefined,
    "aria-valuemax": props.max,
    "aria-valuemin": props.min,
    "aria-valuenow": isIndeterminate ? undefined : props.value,
    "aria-valuetext":
      typeof props.getValueText === "function"
        ? props.getValueText(props.value, percent)
        : props.valueText,
    role: "progressbar",
    percent,
  };
}

export default useProgress;