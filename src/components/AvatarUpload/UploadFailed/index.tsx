import styled from 'styled-components';

import Avatar from '../Avatar';
import Close from '../Close';

const WrapperFailedArea = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 100%;
`;

const UploadFailedTitle = styled.span`
  font-weight: 400;
  color: #c64d32;
`;

const TryAgain = styled.a`
  color: #3d485f;
  margin-top: 10px;
  font-weight: 500;
  text-decoration-line: underline;
  cursor: pointer;
`;
interface Props {
  errorDescription?: string;
  isFailed?: boolean;
  reset: () => void;
}

//component UploadFailed
export default function index ({errorDescription, isFailed, reset}: Props) {
  return ( 
    //div content-wrapper used for the component Avatar Upload
    <div className='content-wrapper'>
      <Avatar isFailed={isFailed} />
      <WrapperFailedArea>
        <UploadFailedTitle>{errorDescription}</UploadFailedTitle>
        <TryAgain aria-label='Try Again' onClick={reset}>
          Try again
        </TryAgain>
      </WrapperFailedArea>
      <Close onClick={reset}/>
    </div>
  );
}