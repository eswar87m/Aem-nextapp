import React from 'react';

export interface TextProps {
  richText?: boolean;
  text: string;
}

const Text: React.FC<TextProps> = ({ richText, text }) => {
  const textCss = "text-gray-800 py-4 sm:py-2 lg:py-6";
  const richTextContent = () => (
    <div className={textCss} dangerouslySetInnerHTML={{__html: text}} />
  );
  const normalTextContent = () => (
    <div className={textCss}>{text}</div>
  );
  return richText ? richTextContent() : normalTextContent();
};

export default Text;