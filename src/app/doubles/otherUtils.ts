import { v4 } from "uuid";

export type StringInfo = {
  lowerCase: string;
  upperCase: string;
  characters: string[];
  length: number;
  extraInfo: Object | undefined;
};

export function calculateComplexity(stringInfo: StringInfo) {
  return Object.keys(stringInfo.extraInfo).length * stringInfo.length;
}

type LoggerServiceCallBack = (arg: string) => void;

export function toUpperCase(str: string) {
  return str.toUpperCase();
}

export function toLowerCaseWithId(str: string) {
  return str.toLowerCase() + v4();
}

export function toUpperCaseWithCallback(
  arg: string,
  callback: LoggerServiceCallBack
) {
  if (!arg) {
    callback("Invalid argument");
    return;
  }
  callback(`called function with ${arg}`);

  return arg.toUpperCase();
}

export class OtherStringUtils {
  public callExternalService() {
    console.log("calling external service!!!");
  }
  public toUpperCase(arg: string) {
    return arg.toUpperCase();
  }

  public logString(arg: string) {
    console.log(arg);
  }
}
