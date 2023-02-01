import styled from 'styled-components';

export const FilterBox = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Label = styled.label`
  font-size: 18px;
  font-weight: 500;
  align-self: center;
`;

export const Input = styled.input`
  font-size: 15px;
  margin: 5px 20px 15px;
  padding: 7px;
  border: 1px solid #888;
  border-radius: 5px;

  &:focus-visible {
    outline: 1px solid #ff6c00;
    border: 1px solid #fff;
  }
`;
