import { EditWorkExperiences } from "../../components/EditWorkExperiences";
import { Container } from "./workExperiencesEdit";
import { useSelector } from "react-redux";

export const WorkExperiencesEdit = () => {
  const workExperience = useSelector((state) => state.workExperiences[0]);

  return (
    <Container>
      <EditWorkExperiences
        jobTitle={workExperience.jobTitle}
        companyName={workExperience.companyName}
        jobDescription={workExperience.jobDescription}
      />
    </Container>
  );
};
