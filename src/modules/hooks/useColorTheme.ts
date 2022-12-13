/**
 * Custom hook Color Palette
 * - Light theme
 * - Dark theme
 */

import { useColorScheme } from 'react-native';
import { useEffect, useState } from 'react';

import { DarkPalette, LightPalette, TypePalette } from '@Modules/theme/colorPalette';

export default function useColorTheme():TypePalette {
  const colorScheme = useColorScheme();
  const [palette, setPalette] = useState<TypePalette>(LightPalette);

  useEffect(() => {
    if (colorScheme === 'light') setPalette(LightPalette);
    else setPalette(DarkPalette);
  }, [colorScheme]);

  return palette;
}
