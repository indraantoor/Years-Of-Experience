import { EditBasicDetailsContainer, Container } from "./basicDetailsEdit.style";
import { EditProfilePic } from "../../components/EditProfilePic";
import { EditBasicDetails } from "../../components/EditBasicDetails";
import { useNavigate } from "react-router-dom";

export const BasicDetailsEdit = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <div className="wrapper">
        <button className="cancel" onClick={() => navigate(-1)}>
          Cancel
        </button>
        <EditBasicDetailsContainer>
          <EditProfilePic />
          <EditBasicDetails />
        </EditBasicDetailsContainer>
      </div>
    </Container>
  );
};
