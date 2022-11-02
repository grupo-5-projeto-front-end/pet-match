import styled from "styled-components";

export const StyledInput = styled.input`
    width: 100%;
    height: 35px;
    background-color: var(--color-gray);
    outline: none;
    border: transparent;
    border-radius: 4px;
    padding: 15px;
    font-size: 20px;
    padding-right: 0;

    :focus {
        outline: none;
        border: 1px solid var(--color-placeholder);
        color: var(--color-placeholder);
        ::placeholder {
        color: var(--color-placeholder);
        opacity: 1; /* Firefox */
        }
        :-ms-input-placeholder { /* Internet Explorer 10-11 */
            color: var(--color-placeholder);
        }
        ::-ms-input-placeholder { /* Microsoft Edge */
            color: var(--color-placeholder);
        }
        :focus::placeholder {
            color: var(--color-placeholder);
            opacity: 1; /* Firefox */
        }
        :focus:-ms-input-placeholder { /* Internet Explorer 10-11 */
            color: var(--color-placeholder);
        }
        :focus::-ms-input-placeholder { /* Microsoft Edge */
            color: var(--color-placeholder);
        }
    }
    ::placeholder {
        color: var(--color-placeholder);
        opacity: 1; /* Firefox */
    }
    :-ms-input-placeholder { /* Internet Explorer 10-11 */
        color: var(--color-placeholder);
    }
    ::-ms-input-placeholder { /* Microsoft Edge */
        color: var(--color-placeholder);
    }
    :focus::placeholder {
        color: var(--color-placeholder);
        opacity: 1; /* Firefox */
    }
    :focus:-ms-input-placeholder { /* Internet Explorer 10-11 */
        color: var(--color-placeholder);
    }
    :focus::-ms-input-placeholder { /* Microsoft Edge */
        color: var(--color-placeholder);
    }
`