import styled from 'styled-components';

export const TheForm = styled.form`
  width: 300px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  border: 1px solid #333;
  border-radius: 3px;
`;

export const Label = styled.label`
  font-weight: 500;
`;

export const Input = styled.input`
  font-size: 18px;
  margin-top: 5px;
  margin-bottom: 15px;
  padding: 5px;
  border: 1px solid #888;
  border-radius: 5px;

  &:focus-visible {
    outline: 1px solid #4b98f5;
  }
`;

export const SubmitBtn = styled.button`
  width: 120px;
  padding: 5px 10px;
  font-size: 15px;
  font-weight: 600;
  border-radius: 5px;
  border: none;
  background-color: #ddd;
  color: #333;
  cursor: pointer;
  transition: background-color 300ms linear, color 300ms linear;

  &:hover {
    background-color: #4b98f5;
    color: #eee;
  }
`;
