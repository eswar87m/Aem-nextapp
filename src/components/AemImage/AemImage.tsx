import React from 'react';
import { Config, EditableComponent, MappedComponentProperties } from '@adobe/aem-react-editable-components';


const { NEXT_PUBLIC_AEM_SITE, NEXT_PUBLIC_AEM_HOST } = process.env;
export type ImageProps = {
    src: string;
    alt: string;
    title?: string;
  };
  
  const Image: React.FC<ImageProps> = ({ src, alt, title }) => {
    return (
      <img
        className="object-fill"
        src={NEXT_PUBLIC_AEM_HOST + src}
        alt={alt}
        title={title ? title : alt}
      />
    );
  };

export const ImageEditConfig: Config<MappedComponentProperties & ImageProps> = {
    emptyLabel: 'Image',
    isEmpty: function (props: ImageProps) {
        return !props || !props.src || props.src.trim().length < 1;
    },
    resourceType: `${NEXT_PUBLIC_AEM_SITE}/components/image`,
};

export const AEMImage: React.FC<ImageProps> = (props) => (
    <EditableComponent config={ImageEditConfig} {...props}>
        <Image {...props} />
    </EditableComponent>
);

