import { Image } from '@mui/icons-material';
import React, { RefObject } from 'react';
import styled from 'styled-components';

const WrapperDropAndBrowse = styled.div`
  flex-direction: column;
  display: flex;
  text-align: center;
  justify-content: center;
  align-items: center;
`;

const WrapperLabel = styled.div`
flex-direction: row;
display: flex;
text-align: center;
justify-content: center;
align-items: center;
`;

interface Props {
    description?: string;
    fileType: string;
    inputRef?: RefObject<HTMLInputElement>;
    label?: string;
    onChangeUpdates: (file?: File | null) => void;
}

//component DropOrBrowse
export default function index ({description, fileType, inputRef, label, onChangeUpdates }: Props) {
    //input file by using HTMInputElement
    const handleChangeInput = (event: React.FormEvent<HTMLInputElement>) => {
        const selectedFile = (event.target as HTMLInputElement).files![0];
        onChangeUpdates(selectedFile);
    };
    
    return (
        <WrapperDropAndBrowse>
            <WrapperLabel>
                <Image />
                <b>{label}</b>
            </WrapperLabel>
            <span aria-label='Insert Image'>{description}</span>
            <input
                accept={fileType}
                data-testid='input-file'
                onChange={handleChangeInput}
                ref={inputRef}
                type='file'
            />
        </WrapperDropAndBrowse>
    );
}

