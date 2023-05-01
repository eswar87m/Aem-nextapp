import React from 'react';
import { EditableComponent } from '@adobe/aem-react-editable-components';

const { NEXT_PUBLIC_AEM_SITE } = process.env;

export type TitleProps = {
    text?: string;
    level?: string;
    [key: string]: any;
};

  
const Title: React.FC<TitleProps> = ({ text, level }) => {
  const Tag = `h${level}` as keyof JSX.IntrinsicElements;
  return <Tag className="title">{text}</Tag>;
};

const TitleEditConfig = {
  emptyLabel: 'Title',
  isEmpty: function(props: TitleProps) {
    return !props || !props.text || props.text.trim().length < 1;
  },
  resourceType: `${NEXT_PUBLIC_AEM_SITE}/components/title`,

};

export const AemTitle: React.FC<TitleProps> = props => (
  <EditableComponent config={TitleEditConfig} {...props}>
    <Title {...props} />
  </EditableComponent>
);
