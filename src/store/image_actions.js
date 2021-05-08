import { storage } from '../firebase/index';
import { imageActions } from './image_slice';
import { authActions } from './auth_slice';

// create the image element with a src of the base64 string
const createImage = (url) =>
    new Promise((resolve, reject) => {
        const image = new Image();
        image.addEventListener('load', () => resolve(image));
        image.addEventListener('error', error => reject(error));
        image.setAttribute('crossOrigin', 'anonymous');
        image.src = url;
    });

export const getResizedImage = (imageSrc, crop, resize) => {
    return async (dispatch) => {
        const image = await createImage(imageSrc);
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
        canvas.height = resize.height;
        canvas.width = resize.width;
        ctx.drawImage(
            image,
            crop.x,
            crop.y,
            crop.width,
            crop.height,
            0,
            0,
            canvas.width,
            canvas.height
        )
        const url = await new Promise((resolve, reject) => {
            canvas.toBlob(blob => {
              resolve(URL.createObjectURL(blob))
            }, 'image/jpeg')
        });
        console.log('url', url)
        dispatch(imageActions.setCroppedImage(url));
    }
}

export const getResizedAvatar = (imageSrc, crop, resize) => {
    return async (dispatch) => {
        const image = await createImage(imageSrc);
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
        canvas.height = resize.height;
        canvas.width = resize.width;
        ctx.drawImage(
            image,
            crop.x,
            crop.y,
            crop.width,
            crop.height,
            0,
            0,
            canvas.width,
            canvas.height
        )
        const url = await new Promise((resolve, reject) => {
            canvas.toBlob(blob => {
              resolve(URL.createObjectURL(blob))
            }, 'image/jpeg')
        });
        console.log('url', url)
        dispatch(imageActions.setCroppedAvatar(url));
    };
};



export const uploadImage = (url, filename) => {
    return async (dispatch) => {
        const response = await fetch(url);
        const blob = await response.blob();
        const file = new File([blob], filename, { type: 'image/png'} );
        console.log(file)
        const uploadTask = storage.ref(`images/${filename}`).put(file);
        return new Promise((resolve) => {
            uploadTask.on(
                "state_changed",
                snapshot => {},
                error => {
                    console.log(error);
                },
                () => {
                    storage
                        .ref("images")
                        .child(filename)
                        .getDownloadURL()
                        .then(url => {
                            console.log(url);
                            dispatch(authActions.addUserInfo({profileImage: url}));
                            dispatch(imageActions.clearAll_profileImage());
                            resolve(url);
                        });
                }
            );
        })
    }
}

export const uploadAvatar = (url, filename) => {
    return async (dispatch) => {
        const response = await fetch(url);
        const blob = await response.blob();
        const file = new File([blob], filename, { type: 'image/png'} );
        console.log(file)
        const uploadTask = storage.ref(`avatars/${filename}`).put(file);
        return new Promise((resolve) => {
            uploadTask.on(
                "state_changed",
                snapshot => {},
                error => {
                    console.log(error);
                },
                () => {
                    storage
                        .ref("avatars")
                        .child(filename)
                        .getDownloadURL()
                        .then(url => {
                            console.log(url)
                            dispatch(authActions.addUserInfo({avatar: url}))
                            dispatch(imageActions.clearAll_avatarImage())
                            resolve(url);
                        });
                }
            );
        })
        
    }
};

export const updateUserInfoToServer = (imageUrl, avatarUrl, imageFilename, avatarFilename) => {
    return async (dispatch) => {
        try {
            if (imageUrl && avatarUrl) {
                await Promise.all([
                    dispatch(uploadImage(imageUrl, imageFilename)),
                    dispatch(uploadAvatar(avatarUrl, avatarFilename))
                ]);
            } else {
                if (imageUrl) {
                    await dispatch(uploadImage(imageUrl, imageFilename));
                };
                if (avatarUrl) {
                    await dispatch(uploadAvatar(avatarUrl, avatarFilename))
                };
            };
            dispatch(imageActions.setUploadFileCompleted());
        } catch (error) {
            throw new Error(error.message)
        }
    };
};