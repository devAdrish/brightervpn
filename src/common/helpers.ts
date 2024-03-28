import { DATE_FORMATS } from "constants/constants";
import { isEqual } from "lodash";
import moment from "moment";
import toast from "react-hot-toast";

type ToastOptions = {
  duration?: number;
  display?: "centered" | "subtle" | "default";
};

export const makeToast = (
  text: string,
  type: "success" | "error" | "info",
  options: ToastOptions = { duration: 2000, display: "default" },
) => {
  const t = type === "success" ? toast.success : type === "error" ? toast.error : toast;
  t(text, {
    duration: options.duration,
    position:
      options.display === "centered" ? "top-center" : options.display === "subtle" ? "bottom-right" : "top-right",
  });
};

export const reponseHandler = async (response: Response) => {
  if (!response.ok) {
    const result: JObj = await response.json();
    makeToast(result.error, "error", { duration: 4000, display: "centered" });
    return result;
  }
  const result = await response.json();
  return result.data;
};

export const deepCopy = <T>(input: T): T => {
  if (Array.isArray(input)) {
    return input.map(deepCopy) as any as T;
  } else if (typeof input === "object" && input !== null) {
    const copy: any = {};
    for (const key in input) {
      if (input.hasOwnProperty(key)) {
        copy[key] = deepCopy(input[key]);
      }
    }
    return copy as T;
  } else {
    return input;
  }
};

export const formatDate = (date: string | Date, format?: string) => {
  if (format) return moment(date).format(format);
  return moment(date).format(DATE_FORMATS.DISPLAY_DATE);
};

export const formatTime = (date: string | Date, format?: string) => {
  if (format) return moment(date).format(format);
  return moment(date).format(DATE_FORMATS.DISPLAY_TIME);
};

export const formatDateTime = (date: string | Date, format?: string) => {
  if (format) return moment(date).format(format);
  return moment(date).format(DATE_FORMATS.DISPLAY_DATE + " " + DATE_FORMATS.DISPLAY_TIME);
};

export const formatSecondsToTime = (seconds: number) => {
  const secondsSinceMidnight = moment.duration(seconds, "seconds");
  const currentTime = moment().startOf("day").add(secondsSinceMidnight);
  const formattedTime = currentTime.format(DATE_FORMATS.DISPLAY_TIME);
  return formattedTime;
};

export const convertDateToDBFormat = (date: string | Date) => {
  return moment(date).format(DATE_FORMATS.DB_DATE);
};

export const convertTimeToSeconds = (timeStr?: string) => {
  const now = timeStr ? moment(timeStr, DATE_FORMATS.DISPLAY_TIME) : moment();
  const midnight = moment().startOf("day");
  const diff = now.diff(midnight, "seconds");
  return diff;
};

export const getTimesList = () => {
  const list = [];
  const dummyDate = moment("1970-01-01 00:00");
  for (let i = 60 * 6; i <= 60 * 22; i += 15) {
    list.push(dummyDate.clone().add(i, "minutes").format(DATE_FORMATS.DISPLAY_TIME));
  }
  return list;
};

export const isObjectSubset = (obj1: JObj, obj2: JObj) => {
  const keys1 = Object.keys(obj1);
  for (const key of keys1) {
    if (Array.isArray(obj1[key]) && Array.isArray(obj2[key])) {
      if (!isEqual(obj1[key], obj2[key])) return false;
    } else if (obj1[key] && typeof obj1[key] === "object" && obj2[key] && typeof obj2[key] === "object") {
      if (!isObjectSubset(obj1[key], obj2[key])) return false;
    } else if (obj1[key] !== obj2[key]) {
      return false;
    }
  }

  return true;
};
