import styled from "styled-components";

export const StyledSelect = styled.select`
    width: 100%;
    height: 63px;
    background-color: var(--color-gray);
    outline: none;
    border: transparent;
    border-radius: 4px;
    padding: 15px;
    font-size: 20px;
    padding-right: 0;

    :focus {
        outline: none;
        color: var(--color-black);
        ::placeholder {
        color: var(--color-gray);
        opacity: 1; /* Firefox */
        }
        :-ms-input-placeholder { /* Internet Explorer 10-11 */
            color: var(--color-gray);
        }
        ::-ms-input-placeholder { /* Microsoft Edge */
            color: var(--color-gray);
        }
        :focus::placeholder {
            color: var(--color-gray);
            opacity: 1; /* Firefox */
        }
        :focus:-ms-input-placeholder { /* Internet Explorer 10-11 */
            color: var(--color-gray);
        }
        :focus::-ms-input-placeholder { /* Microsoft Edge */
            color: var(--color-gray);
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