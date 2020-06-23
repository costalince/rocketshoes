import styled from 'styled-components';
import { darken } from 'polished';

export const Button = styled.button`
  background: #7159c1;
  color: #fff;
  border: 0;
  border-radius: 4px;
  overflow: hidden;
  margin-top: auto;

  display: flex;
  align-items: center;
  transition: background 0.2s;

  &:hover {
    background: ${darken(0.03, '#7150c1')};
  }

  span {
    flex: 1;
    text-align: center;
    font-weight: bold;
    padding: 12px 20px;
    text-transform: uppercase;
  }
`;
