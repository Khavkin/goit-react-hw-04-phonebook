import styled from '@emotion/styled';
import { ErrorMessage, Field, Form } from 'formik';

export const FormContact = styled(Form)`
  width: 400px;
  padding: 30px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  border: 2px solid black;
`;

export const FormField = styled.label`
  display: flex;
  gap: 10px;
  flex-direction: column;
  font-size: 16px;
  font-weight: 700;
`;

export const FormInput = styled(Field)`
  width: 250px;
  outline: none;

  :focus {
    box-shadow: 0px 0px 3px 1px #0d70ff;
    border: none;
  }
`;

export const FormButton = styled.button`
  width: fit-content;
  cursor: pointer;
  border-radius: 5px;
  border: none;
  padding: 5px 10px;
  box-shadow: 2px 2px 2px 2px rgba(0, 0, 0, 0.5);

  :active {
    box-shadow: 1px 1px 1px 1px rgba(0, 0, 0, 0.8);
  }
`;

export const StyledErrorMessage = styled(ErrorMessage)`
  font-weight: 400;
  color: red;
  font-size: 10px;
`;
