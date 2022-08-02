import { createTheme, Slider } from '@mui/material';
import { RefObject, useEffect, useState } from 'react';
import styled from 'styled-components';

import Avatar from '../Avatar';
import Close from '../Close';

const WrapperCropArea = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const CropTitle = styled.span`
  color: #677489;
`;

const SaveButton = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row-reverse;
  margin-top: 32px;
`;

const StyledButton = styled.button`
  background-color: #3d485f;
  color: #fff;
  padding: 10px 38px;
  border-radius: 16px;
  border: none;
  font-weight: 500;
  transition: 0.25s ease;
  cursor: pointer;

  &:hover {
    background-color: #333c4f;
  }
`;

// Not working
const StyledSlider = styled(Slider)`
  height: 2px;
`;

// Working
const theme = createTheme({
  components: {
    // Name of the component
    MuiSlider: {
      styleOverrides: {
        // Name of the slot
        root: {
          // Some CSS
          height: '2px',
        },
      },
    },
  },
});

interface Props {
  file?: File | null;
  imgRef: RefObject<HTMLDivElement>;
  isFailed?: boolean;
  onChangeUpdates: (file?: File | null) => void;
  reset: () => void;
  setIsSaved: (value: boolean) => void;
  setZoomImg: (value: number) => void;
}

//component CropAndSave
export default function index (props: Props) {
  const [zoomLevel, setZoomlevel] = useState(4);
    //defines a scale transformation of the div Avatar by using HTMLDivElement for the imgRef
    useEffect(() => {
    const setZoom = (zoom: number) => {
      props.imgRef.current?.style.setProperty(
        'transform',
        `scale(${zoom > 1 ? 1 + zoom / 10 : 1})`
      );
    };
  
    setZoom(zoomLevel);
  }, [zoomLevel]);

  //update main variables
  const handleSaveButtonClick = () => {
    props.setZoomImg(zoomLevel)
    props.setIsSaved(true);
  }

  //update zoom Avatar onChangeSlider
  const handleChangeSlider = (event: Event, value: number | number[]) => {
    setZoomlevel(value as number);
  };

  return (
    //div content-wrapper syled for the component Avatar Upload
    <div className='content-wrapper'>
      <Avatar isFailed={props.isFailed} file={props.file} imgRef={props.imgRef} />
      <WrapperCropArea>
        <CropTitle>Crop</CropTitle>
        <StyledSlider theme={theme}
          aria-label='Slider'
          min={1}
          max={10}
          onChange={handleChangeSlider}
          value={zoomLevel}
        />
        <SaveButton>
          <StyledButton onClick={handleSaveButtonClick}>Save</StyledButton>
        </SaveButton>
      </WrapperCropArea>
      <Close onClick={props.reset}/>
    </div>
  );
};