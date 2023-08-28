import { Dimensions } from 'react-native';

const screenHeight = Dimensions.get('screen').height;
const BASIC_HEIGHT = 920;
const coff = (screenHeight / BASIC_HEIGHT) * 100;

const maxSize = (size: number) => size + (size / 100) * 20;
const prepareRes = (res: number, size: number) => Math.min(res, maxSize(size));

export const $size = (size: number, min?: number) => {
  const res = size * (coff / 100);

  if (min) return Math.max(prepareRes(res, size), min);
  else return prepareRes(res, size);
};

export const cls = <T extends Record<string, any>>(
  styles: T,
  _cls: any,
  isActive: boolean | Boolean,
): any[] => {
  if (!isActive) return { ...styles[_cls] };
  else return { ...styles[_cls], ...styles[`${_cls}Active`] };
};
