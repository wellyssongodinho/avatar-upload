import { DragEvent, useRef, useState } from 'react';
import styled, { css } from 'styled-components';

import CropAndSave from './CropAndSave';
import DropOrBrowse from './DropOrBrowse';
import SavedImage from './SavedImage';
import UploadFailed from './UploadFailed';

interface Props {
  description?: string;
  errorDescription?: string;
  fileType: string;
  image?: File | null;
  isFailed?: boolean;
  isSaved?: boolean;
  label?: string;
  onFileTypeError?: (arg0: string) => void;
}

const WrapperAvatarUpload = styled.div<Props>`
  width: 553px;
  height: 177px;
  background: #f2f5f8;
  ${({ image, isFailed, isSaved }) => `
    ${
      (!image && !isFailed) || (isSaved && !isFailed)
        ? css`
            border: 2px dashed #c7cdd3;
          `
        : ''
    }
    ${
      (!image && !isFailed) || (isSaved && !isFailed)
        ? css`
            cursor: pointer;
          `
        : ''
    }
  `}
  border-radius: 8px;
  margin: 50px auto;
  padding: 32px;
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;  
  
  input {
    display: none;
  }

  .content-wrapper {
    width: 100%;
    display: flex;
  }
`;

//component Avatar Upload
export default function index (props: Props) {
  const [file, setFile] = useState<File | null>(null);
  const imgRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const [isFailed, setIsFailed] = useState(false);
  const [isSaved, setIsSaved] = useState(false);
  const [zoomImg, setZoomImg] = useState(4);

  //call HTMLInputElement
  const handleClick = () => {
    inputRef.current?.click();
  };

  //verify if file and type are valid 
  const isValidFile = (file?: File | null) => {
    if (!file) return false;
    return props.fileType.includes(file.type);
  };

  //update main variables
  const onChangeUpdates = (file?: File | null) => {
    if (file && isValidFile(file)) {
      setFile(file);
      setIsSaved(false);
    }
    setIsFailed(!isValidFile(file));
  };

  //reset main variables
  const reset = () => {
    setFile(null);
    setIsFailed(false);
    setIsSaved(false);
  };

  //handle drag and drop events file
  const handleDragOver = (event: DragEvent<HTMLDivElement>) => {
    event.preventDefault();
  };

  const handleDragEnter = (event: DragEvent<HTMLDivElement>) => {
    event.preventDefault();
  };

  const handleDragLeave = (event: DragEvent<HTMLDivElement>) => {
    event.preventDefault();
  };

  const handleDrop = (event: DragEvent<HTMLDivElement>) => {
    event.preventDefault();
   const file = event.dataTransfer?.files[0];
   onChangeUpdates(file);
  };

  return (
    <WrapperAvatarUpload
      image={file}
      fileType={props.fileType}
      isFailed={isFailed}
      isSaved={isSaved}
      onClick={handleClick}
      onDragOver={handleDragOver}
      onDragEnter={handleDragEnter}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
    > 
    {!isFailed && !file && (
        <DropOrBrowse 
          description={props.description} 
          fileType={props.fileType} 
          inputRef={inputRef} 
          label={props.label} 
          onChangeUpdates={onChangeUpdates}
        />
      )} 
      {isFailed && ( 
        <UploadFailed 
          errorDescription={props.errorDescription}
          isFailed={isFailed}
          reset={reset} 
        />
      )}
      {!isFailed && file && !isSaved && (
        <CropAndSave
          file={file}
          imgRef={imgRef}
          isFailed={isFailed}
          onChangeUpdates={onChangeUpdates}
          reset={reset}
          setIsSaved={setIsSaved}
          setZoomImg={setZoomImg}
        />
      )} 
      {!isFailed && file && isSaved && (
        <SavedImage
          description={props.description} 
          file={file}
          fileType={props.fileType}
          inputRef={inputRef}
          label={props.label} 
          onChangeUpdates={onChangeUpdates}
          zoomImg={zoomImg}
        />
      )}
    </WrapperAvatarUpload>
  );
}