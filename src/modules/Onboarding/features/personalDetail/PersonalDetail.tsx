import { PersonalDetailForm } from "@modules/Onboarding/components/PersonalDetailForm";

interface IProps {
  setPage: (state: boolean) => void;
}

export const PersonalDetail = ({ setPage }: IProps) => {
  return (
    <>
      <PersonalDetailForm setPage={setPage} />
    </>
  );
};
