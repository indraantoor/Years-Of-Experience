import { EditBasicDetailsContainer } from "./basicDetailsEdit.style";
import { EditProfilePic } from "../../components/EditProfilePic";
import { EditBasicDetails } from "../../components/EditBasicDetails";

export const BasicDetailsEdit = () => {
  return (
    <EditBasicDetailsContainer>
      <EditProfilePic />
      <EditBasicDetails />
    </EditBasicDetailsContainer>
  );
};
