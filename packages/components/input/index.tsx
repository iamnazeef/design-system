import React from 'react';
import { styled } from 'styled-components';
import reference from '@tokens/reference';

const EvButton = styled('input')(() => ({
  outline: 'none',
  backgroundColor: reference.light.entriBlue.default,
}));

export function Input() {
  return <EvButton />;
}
