import { styled } from 'styled-components';
import reference from '@tokens/reference';

const EvButton = styled('input')(() => ({
  outline: 'none',
  backgroundColor: reference.light.entriBlue.default,
}));

export default function Input() {
  return <EvButton />;
}
