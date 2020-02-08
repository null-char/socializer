import styled from 'styled-components';

type WrapperProps = {
  size?: number;
  opacity?: number;
  weight?: number;
};

export const Wrapper = styled.span<WrapperProps>`
  color: ${props => props.theme.colors.textColor};
  font-size: ${props => (props.size ? props.size : 1.4)}rem;
  opacity: ${props => (props.opacity ? props.opacity : 'inherit')};
  font-weight: ${props => (props.weight ? props.weight : 400)};

  transition: all 0.15s ease-in-out;
`;
