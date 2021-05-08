import { createSlice } from '@reduxjs/toolkit';

const imageSlice = createSlice({
    name: 'image',
    initialState: {
        profileImage: {
            image: null,
            croppedAreaPixels: null,
            croppedImage: null,
        },
        avatarImage: {
            image: null,
            croppedAreaPixels: null,
            croppedImage: null,
        },
        isAvatar: false,
        uploadFileCompleted: false,
    },
    reducers: {
        // Image actions
        setImage (state, action) {
            state.profileImage.image = action.payload;
        },
        clearImage (state) {
            state.profileImage.image = null;
        },
        setCroppedAreaPixels(state, action) {
            state.profileImage.croppedAreaPixels = action.payload;
        },
        clearCroppedAreaPixels(state) {
            state.profileImage.croppedAreaPixels = null;
        },
        setCroppedImage(state, action) {
            state.profileImage.croppedImage = action.payload;
        },
        clearCroppedImage(state) {
            URL.revokeObjectURL(state.profileImage.croppedImage);
            state.profileImage.croppedImage = null;
            
        },
        clearAll_profileImage(state) {
            state.profileImage.image = null;
            state.profileImage.croppedAreaPixels = null;
            URL.revokeObjectURL(state.profileImage.croppedImage);
            state.profileImage.croppedImage = null;
        },
        // Avatar actions
        setAvatar (state, action) {
            state.avatarImage.image = action.payload;
        },
        clearAvatar (state) {
            state.avatarImage.image = null;
        },
        setCroppedAreaPixels_avatar(state, action) {
            state.avatarImage.croppedAreaPixels = action.payload;
        },
        clearCroppedAreaPixels_avatar(state) {
            state.avatarImage.croppedAreaPixels = null;
        },
        setCroppedAvatar(state, action) {
            state.avatarImage.croppedImage = action.payload;
        },
        clearCroppedAvatar(state) {
            URL.revokeObjectURL(state.avatarImage.croppedImage);
            state.avatarImage.croppedImage = null;
            
        },
        clearAll_avatarImage(state) {
            state.avatarImage.image = null;
            state.avatarImage.croppedAreaPixels = null;
            URL.revokeObjectURL(state.avatarImage.croppedImage);
            state.avatarImage.croppedImage = null;
        },
        setIsAvatar(state) {
            state.isAvatar = true;
        },
        clearIsAvatar(state) {
            state.isAvatar = false;
        },
        setUploadFileCompleted(state) {
            console.log('image_slice_true')
            state.uploadFileCompleted = true;
        },
        clearUploadFileCompleted(state) {
            console.log('image_slice_false')
            state.uploadFileCompleted = false;
        }
    }
});

export const imageActions = imageSlice.actions;

export default imageSlice;