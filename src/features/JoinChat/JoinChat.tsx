import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/stateHooks";
import { join } from "./joinChatSlice";
import { useNavigate } from "react-router-dom";
const JoinChat = () => {
  const [username, setUserName] = useState("");
  const loggedinUserName = useAppSelector((state) => state.join.username);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (loggedinUserName) {
      navigate("/");
    }
  }, []);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(join(username));
    setUserName("");
    navigate("/");
  };
  return (
    <Container className='center-page'>
      <Form onSubmit={handleSubmit}>
        <Form.Group className='mb-3' controlId='formBasicEmail'>
          <Form.Label>NB: This will be used to identify in chat</Form.Label>
          <Form.Control
            type='text'
            value={username}
            onChange={(e) => setUserName(e.target.value)}
            placeholder='Enter name'
          />
        </Form.Group>

        <Button variant='primary' type='submit'>
          Join Chat
        </Button>
      </Form>
    </Container>
  );
};

export default JoinChat;
