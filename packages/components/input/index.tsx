import { styled, useTheme } from 'styled-components';
import reference from '@tokens/reference';

function getColor() {
  const { theme, themeMode } = useTheme();
  if (themeMode === 'DARK') {
    return theme?.dark?.entriBlue?.default || reference.dark.entriBlue.default;
  } else {
    return (
      theme?.light?.entriBlue?.default || reference.light.entriBlue.default
    );
  }
}

const EvButton = styled('input')(() => ({
  outline: 'none',
  backgroundColor: getColor(),
}));

export default function Input() {
  return <EvButton />;
}
