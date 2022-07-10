import { EditWorkExperiences } from "../../components/EditWorkExperiences";
import { Container } from "./workExperiencesEdit";
import { workExperiencesData } from "../../data";

export const WorkExperiencesEdit = () => {
  const workExperience = workExperiencesData.workExperiences[0];

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
