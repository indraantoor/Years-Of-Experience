import { ref, uploadBytesResumable, getDownloadURL } from "@firebase/storage";
import { storage } from "../../firebase-config";
import { userDetailsSlice } from "../../store/userDetailsSlice";
import { updateUserDetailsToApi } from "../../store/helpers/userDetailsSliceHelpers";

export function uploadPic(file, dispatch, userId, profileId, redirectFn) {
  const fileName = new Date().getTime() + file.name;
  const storageRef = ref(storage, fileName);
  const uploadTask = uploadBytesResumable(storageRef, file);

  uploadTask.on(
    "state_changed",
    (snapshot) => {
      // Observe state change events such as progress, pause, and resume
      // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
      const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      console.log("Upload is " + progress + "% done");
      switch (snapshot.state) {
        case "paused":
          console.log("Upload is paused");
          break;
        case "running":
          console.log("Upload is running");
          break;
        default:
      }
    },
    (error) => {
      // Handle unsuccessful uploads
    },
    () => {
      // Handle successful uploads on complete
      // For instance, get the download URL: https://firebasestorage.googleapis.com/...
      getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
        const updatedDetails = { profilePic: downloadURL };
        dispatch(userDetailsSlice.actions.update(updatedDetails));
        const details = {
          ...updatedDetails,
          userId: userId,
        };
        dispatch(updateUserDetailsToApi(details));
        console.log("Download URL", updatedDetails);
        redirectFn(`/profile/${profileId}`);
      });
    }
  );
}
