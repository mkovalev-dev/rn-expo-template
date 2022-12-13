/**
 * Initial Color Palette
 * - Light palette export to hook
 * - Dark palette export to hook
 */

export type TypePalette = {
  red: string;
  orange: string;
  yellow: string;
  green: string;
  lightAccent: string;
  accent: string;
  gray1: string;
  gray2: string;
  gray3: string;
  gray4: string;
  gray5: string;
  gray6: string;
  background: string;
  block: string;
  text: string;
};

export const LightPalette:TypePalette = {
  red: '#FF3B30',
  orange: '#FF9500',
  yellow: '#FFCC00',
  green: '#34C759',
  lightAccent: '#5AC8FA',
  accent: '#007AFF',
  gray1: '#8E8E93',
  gray2: '#AEAEB2',
  gray3: '#C7C7CC',
  gray4: '#D1D1D6',
  gray5: '#E5E5EA',
  gray6: '#F2F2F7',
  background: '#F8F8F8',
  block: '#FFFFFF',
  text: '#000000',
};

export const DarkPalette:TypePalette = {
  red: '#FF453A',
  orange: '#FF9F0A',
  yellow: '#FFD60A',
  green: '#32D74B',
  lightAccent: '#5AC8FA',
  accent: '#007AFF',
  gray1: '#8E8E93',
  gray2: '#636366',
  gray3: '#48484A',
  gray4: '#3A3A3C',
  gray5: '#2C2C2E',
  gray6: '#1C1C1E',
  background: '#000000',
  block: '#1C1C1E',
  text: '#ffffff',
};
