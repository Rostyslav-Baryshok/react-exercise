import styled from 'styled-components';

export const PrimaryButton = styled.button`
  outline: none;
  border: none;
  border-radius: 5px;
  padding: 0;
  margin: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.colors.primary};
  background-color: ${({ theme }) => theme.colors.acc};
  text-transform: capitalize;
  cursor: pointer;
`;
