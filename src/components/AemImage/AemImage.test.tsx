import { render } from '@testing-library/react';
import { AEMImage, ImageProps, ImageEditConfig } from './AemImage';

describe('AEMImage component', () => {
  const imageProps: ImageProps = {
    src: '/test/image.jpg',
    alt: 'Test image',
    title: 'Test title',
  };

  it('renders an <img> element with the correct attributes', () => {
    const { getByAltText } = render(<AEMImage {...imageProps} />);
    const imgElement = getByAltText(imageProps.alt) as HTMLImageElement;

    expect(imgElement).toBeInTheDocument();
    expect(imgElement.src).toBe(`${process.env.NEXT_PUBLIC_AEM_HOST}${imageProps.src}`);
    expect(imgElement.title).toBe(imageProps.title);
  });

  it('renders an <EditableComponent> with the correct configuration', () => {
    const { getByText } = render(<AEMImage {...imageProps} />);
    const editableComponent = getByText(imageProps.alt).parentElement as HTMLElement;

    expect(editableComponent).toBeInTheDocument();
    expect(editableComponent.getAttribute('data-emptytext')).toBe(ImageEditConfig.emptyLabel);
    expect(editableComponent.getAttribute('data-path')).toBe(ImageEditConfig.resourceType);
  });
});
