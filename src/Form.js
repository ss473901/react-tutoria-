import styled from "styled-components";
import { Button } from "./components/button";

const Container = styled.div`
  padding: 12px 64px;
`;

const Label = styled.label`
  display: flex;
  color: #757575;
  font-size: 14px;
  font-wwigh: tbold;
`;

const Input = styled.input`
  border-radius: 3px;
  padding: 4px 8px;
  border: 1px solid black;
`;

const ButtonContainer = styled.div`
  margin-top: 25px;
`;

const FormButton = styled(Button)`
  width: 120px;
`;

export const Form = () => {
  return (
    <Container>
      <h4>新しい言語の追加</h4>
      <form>
        <div>
          <Label>言語</Label>
          <Input type="text" />
        </div>
        <ButtonContainer>
          <FormButton>追加</FormButton>
        </ButtonContainer>
      </form>
    </Container>
  );
};
