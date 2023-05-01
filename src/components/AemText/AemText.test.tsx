import React from 'react';
import { EditableComponent, EditableComponentProps, Config , MappedComponentProperties} from '@adobe/aem-react-editable-components';
import Text, { TextProps } from './Text';

export interface AEMTextProps extends MappedComponentProperties, TextProps {
    emptyLabel?: string;
  }

const { NEXT_PUBLIC_AEM_SITE } = process.env;

const TextEditConfig: Config<AEMTextProps> = {
  emptyLabel: 'Text',
  isEmpty: (props:any) => !props || !props.text || props.text.trim().length < 1,
  resourceType: `${NEXT_PUBLIC_AEM_SITE}/components/text`,
};

const AEMText: React.FC<AEMTextProps> = (props) => (
  <EditableComponent config={TextEditConfig} {...props}>
    <Text {...props} />
  </EditableComponent>
);

export default AEMText;
