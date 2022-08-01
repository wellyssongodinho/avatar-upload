import { PriorityHigh } from '@mui/icons-material';
import { HTMLAttributes, RefObject, useEffect, useState } from 'react';
import styled, { css } from 'styled-components';

const Wrapper = styled.div`
  width: 113px;
  height: 113px;
  overflow: hidden;
  border-radius: 50%;
  display: flex;
  flex-shrink: 0;
  align-items: center;
  justify-content: center;
  margin-right: 32px;
`;

interface StyleProps {
  url?: string;
  error?: boolean;
}

const Avatar = styled.div<StyleProps>`
  width: 114px;
  height: 114px;
  background-color: #c3cbd5;
  border-radius: 50%;
  ${({ url }) =>
    url
      ? css`
          background: ${`url(${url})`};
        `
      : ''}
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const WrapperIco = styled.svg`
  width: 20px;
  height: 20px;
  background-color: #FFFFFF;
  border-radius: 50%;
  color: gray;
`;

interface Props extends HTMLAttributes<HTMLDivElement> {
  isFailed?: boolean;
  file?: File | null;
  imgRef?: RefObject<HTMLDivElement>;
}

//component Avatar
export default function index ({ isFailed, file, imgRef, ...props }: Props) {
  const [memoizedUrl, setmemoizedUrl] = useState<string>('');

  useEffect(() => {
    if (file) {
      setmemoizedUrl(URL.createObjectURL(file));
    }
  }, []);

  return (
    <Wrapper>
      <Avatar aria-label='Avatar' error={isFailed} ref={imgRef} url={memoizedUrl} >
        {isFailed && <WrapperIco><PriorityHigh /></WrapperIco>}
      </Avatar>
    </Wrapper>
  );
};
