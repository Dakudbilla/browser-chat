import "./chatform.css";
const ChatForm = () => {
  return (
    <div className='message-form-container'>
      <form className='message-form'>
        <input type='text' className='message-text' />
        <button type='submit' className='message-submit'>
          Send
        </button>
      </form>
    </div>
  );
};

export default ChatForm;
