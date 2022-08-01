import { Close } from '@mui/icons-material';
import styled from 'styled-components';

const Wrapper = styled.div`
  margin-left: 60px;
  display: flex;
  flex-shrink: 0;

  div {
    height: 15px;
  }

  svg {
    cursor: pointer;
  }
`;

type Props = {
  onClick: () => void;
}

//component Close
export default function index({onClick}: Props) {
  return (
    <Wrapper>
      <Close aria-label='Close' onClick={onClick}/>
    </Wrapper>
  )
}