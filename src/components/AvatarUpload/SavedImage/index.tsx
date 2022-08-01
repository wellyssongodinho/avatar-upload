import { RefObject, useEffect, useRef } from 'react';

import Avatar from '../Avatar';
import DropOrBrowse from '../DropOrBrowse';

interface Props {
  description?: string;
  file?: File | null;
  fileType: string;
  inputRef?: RefObject<HTMLInputElement>;
  label?: string;
  onChangeUpdates: (file?: File | null, imgRef?: RefObject<HTMLDivElement>) => void;
  zoomImg: number;
}

//component SavedImage
export default function index ({description, file, fileType, inputRef, label, onChangeUpdates, zoomImg}: Props) {
  const imgRef = useRef<HTMLDivElement>(null);
    //defines a scale transformation of the div Avatar by using HTMLDivElement for the imgRef
    useEffect(() => {
    imgRef.current?.style.setProperty(
      'transform',
      `scale(${1 + zoomImg / 10})`
    );
  }, []);

  return (
    //div content-wrapper syled for the component Avatar Upload
    <div className='content-wrapper'>
      <Avatar file={file} imgRef={imgRef}/>
      <DropOrBrowse 
        description={description} 
        fileType={fileType} 
        inputRef={inputRef}
        label={label}
        onChangeUpdates={onChangeUpdates}/>
    </div>
  );
};