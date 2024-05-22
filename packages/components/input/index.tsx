import { styled } from 'styled-components';

const EvButton = styled('input')(() => ({
  outline: 'none',
  backgroundColor: 'red',
}));

interface IInput extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = (props: IInput) => {
  return <EvButton {...props} />;
}

export default Input