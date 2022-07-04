import styled from 'styled-components';

export const PrimaryButton = styled.button`
  outline: none;
  border: none;
  border-radius: 5px;
  padding: 5px;
  margin: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.colors.primary};
  background-color: ${({ theme }) => theme.colors.accent};
  text-transform: capitalize;
  cursor: pointer;
  width: 100px;
`;
