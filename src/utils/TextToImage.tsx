import React, { useEffect } from 'react';
import TextToImageInterface from '../interfaces/TextToImageInterface';

const TextToImage = (props: TextToImageInterface) => {
  useEffect(() => {
    let canvas = document.createElement('canvas');
    canvas.width = 940;
    canvas.height = 788;
    let ctx = canvas.getContext('2d');
  }, []);
  return <div id="cover-photo"></div>;
};

export { TextToImage };
