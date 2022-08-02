import { fireEvent, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import AvatarUpload from '../../components/AvatarUpload';

const mockFileValid = new File(['file'], 'Avatar.png', { type: 'image/png' });
const mockFileInvalid = new File(['file'], 'Avatar.txt', { type: 'text/txt' });
const handleScreenDropOrBrowse = () => {
  const spanInpuFile = screen.getByLabelText('Input File');
  expect(spanInpuFile).toBeInTheDocument();  
};
const handleChangeInput = (file: File) => {
  const inputFile = screen.getByTestId('input-file');
  fireEvent.change(inputFile, { target: { files: [file] } });
  fireEvent.input(inputFile);
};

describe('<AvatarUpload />', () => {
  beforeEach(() => {
    window.URL.createObjectURL = jest.fn();

    render(
      <AvatarUpload
        description='Drop the image here or click to browse' 
        errorDescription='Sorry, the upload failed.'
        fileType={"image/jpeg', 'image/jpg', 'image/png'"}
        label='Organization Logo' 
      />);
  });

  describe('Behaviour', () => {
    it('Render Avatar Component', () => {
      const {container} = render(
      <AvatarUpload
        description='Drop the image here or click to browse'
        errorDescription='Sorry, the upload failed.'
        fileType={"image/jpeg', 'image/jpg', 'image/png'"}
        label='Organization Logo'
      />);
      expect(container).toBeInTheDocument();
    });

    const user = userEvent.setup()
    it('Input Valid File)', async () => {
      handleScreenDropOrBrowse();
      handleChangeInput(mockFileValid);
      await user.click(screen.getByRole('button'));
      handleScreenDropOrBrowse();
    });

    it('Input Invalid File)', async() => {
      handleScreenDropOrBrowse();
      handleChangeInput(mockFileInvalid);
      await user.click(screen.getByLabelText('Try Again'));
      handleScreenDropOrBrowse();
    });
  });
});