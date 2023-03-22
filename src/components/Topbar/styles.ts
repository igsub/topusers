import styled from "styled-components"

export const TopbarContainer = styled.div`
  position: absolute;
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 70px;
  left: 0px;
  top: 0px;

  background: #282828;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.5);
`

export const Title = styled.h1`
  width: 49px;
  height: 21px;
  margin-left: 2rem;
  
  font-family: inherit;
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 21px;
  /* identical to box height */

  display: flex;
  align-items: center;

  color: #FFFFFF;
`

export const BackButton = styled.button`
  display: flex;
  justify-self: flex-start;
`