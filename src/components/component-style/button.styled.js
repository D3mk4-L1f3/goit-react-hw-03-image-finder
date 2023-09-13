import styled from '@emotion/styled';

export const LoadMoreButton = styled.button`
  display: flex;
  align-items: center;
  gap: 5px;
  padding: 8px 16px;
  border-radius: 2px;
  background-color: #3f51b5;
  color: #fff;
  border: 0;
  text-decoration: none;
  cursor: pointer;
  font-family: inherit;
  font-size: 18px;
  line-height: 24px;
  font-style: normal;
  font-weight: 500;
  max-width: 180px;
  margin: 0 auto;
  &:hover,
  focus {
    background-color: #303f9f;
    cursor: pointer;
      transform: scale(1.03);
    box-shadow: 1px 6px 8px 2px rgba(173, 173, 173, 0.8);
    -webkit-box-shadow: 1px 6px 8px 2px rgba(173, 173, 173, 0.8);
    -moz-box-shadow: 1px 6px 8px 2px rgba(173, 173, 173, 0.8);
  }
`;