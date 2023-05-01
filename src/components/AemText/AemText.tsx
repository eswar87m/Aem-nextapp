import React from 'react';
import { EditableComponent, EditableComponentProps, Config } from '@adobe/aem-react-editable-components';
import Text, { TextProps } from './Text';

export interface AEMTextProps extends TextProps {
  emptyLabel?: string;
}

const { NEXT_PUBLIC_AEM_SITE } = process.env;

const TextEditConfig = {
  emptyLabel: 'Text',
  isEmpty: (props:any) => !props || !props.text || props.text.trim().length < 1,
  resourceType: `${NEXT_PUBLIC_AEM_SITE}/components/text`,
};

const AemText: React.FC<AEMTextProps> = (props) => (
  <EditableComponent config={TextEditConfig} {...props}>
    <Text {...props} />
  </EditableComponent>
);

export default AemText;
