import { MapTo } from '@adobe/aem-react-editable-components'
import { AEMText, AEMTextProps } from './AEMText'
import { AEMTitle, AEMTitleProps } from './AEMTitle'
import { AEMImage, AEMImageProps } from './AEMImage'

const { NEXT_PUBLIC_AEM_SITE } = process.env;

MapTo<AEMTitleProps>(`${NEXT_PUBLIC_AEM_SITE}/components/title`)(AEMTitle)
MapTo<AEMTextProps>(`${NEXT_PUBLIC_AEM_SITE}/components/text`)(AEMText)
MapTo<AEMImageProps>(`${NEXT_PUBLIC_AEM_SITE}/components/image`)(AEMImage)