import styled from 'styled-components';

export const Container = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  z-index: 90;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-items: center;
  justify-content: center;
`;
export const ModalArea = styled.div`
  background-color: rgba(0, 0, 0, 0.5);
  padding: 10px;
  display: flex;
  justify-items: center;
  justify-content: center;
  min-width: 50%;
`;
export const Loading = styled.img`
  width: 100%;
  height: 100%;
`;
export const Card = styled.div`
  display: flex;
  align-items: center;
  li {
    display: flex;
    flex-direction: column;
    background-color: #e7f6ff;
    border-radius: 4px;
    padding: 20px;
    min-width: 300px;
    strong {
      font-size: 18px;
      margin-top: 8px;
      line-height: 20px;
      margin-bottom: 6px;
    }
  }
  img {
    align-self: center;
    max-width: 300px;
  }
`;
