import styled from "styled-components";

export const HomeTitle = styled.h2`
  /* Top 5 GitHub Users */

  width: 313px;
  height: 42px;

  font-style: normal;
  font-weight: 700;
  font-size: 36px;
  line-height: 42px;
  display: flex;
  align-items: center;

  color: #252525;
`

export const HomeSubtitle = styled.h2`
  /* Tap the username to */

  width: 341px;
  height: 21px;

  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 21px;
  /* identical to box height */

  display: flex;
  align-items: center;

  color: #252525;

`

export const UsersButtonContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  gap: 0.5rem;
`