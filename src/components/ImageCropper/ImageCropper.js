import React, { useState, useCallback } from 'react'
import { useDispatch } from 'react-redux';
import Slider from '@material-ui/core/Slider'
import Cropper from 'react-easy-crop'

import { imageActions } from '../../store/image_slice'
import './ImageCropper.css'

const ImageCropper = (props) => {
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const dispatch = useDispatch();

  const onCropComplete = useCallback((_, croppedAreaPixels) => {
    if (props.cropShape === 'rect') {
      dispatch(imageActions.setCroppedAreaPixels(croppedAreaPixels))
    } else {
      dispatch(imageActions.setCroppedAreaPixels_avatar(croppedAreaPixels))
    }
  }, [dispatch, props.cropShape])

  return (
    <div className="container">
      <div className="crop-container">
        <Cropper
            image={props.image}
            crop={crop}
            zoom={zoom}
            aspect={3 / 1}
            cropSize={{width: props.cropWidth, height: props.cropHeight}}
            cropShape={props.cropShape}
            restrictPosition={false}
            onCropChange={setCrop}
            onCropComplete={onCropComplete}
            onZoomChange={setZoom}
        />
      </div>    
      <div className="controls">
        <Slider
            value={zoom}
            min={1}
            max={3}
            step={0.1}
            aria-labelledby="Zoom"
            onChange={(e, zoom) => setZoom(zoom)}
            classes={{ root: 'slider' }}
        />
      </div>
    </div>
  )
}

export default ImageCropper;