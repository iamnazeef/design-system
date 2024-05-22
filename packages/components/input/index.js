import { jsx as _jsx } from "react/jsx-runtime";
import { styled } from 'styled-components';
const EvButton = styled('input')(() => ({
    outline: 'none',
    backgroundColor: 'red',
}));
const Input = (props) => {
    return _jsx(EvButton, { ...props });
};
export default Input;
