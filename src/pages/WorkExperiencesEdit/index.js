import { EditWorkExperiences } from "../../components/EditWorkExperiences";
import { Container } from "./workExperiencesEdit";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

export const WorkExperiencesEdit = () => {
  // const params = useParams();
  // const { workExperienceId } = params;

  // const workExperience = useSelector((state) =>
  //   state.workExperiences.find(
  //     (experience) => experience.id == workExperienceId
  //   )
  // );

  return (
    <Container>
      <EditWorkExperiences />
    </Container>
  );
};
