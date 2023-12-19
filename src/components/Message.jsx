import PropTypes from 'prop-types';
import moment from 'moment';
import Image from './Image';
import Markdown from './Markdown';
import { SiSendinblue } from "react-icons/si";
import { PiCodesandboxLogo } from "react-icons/pi";

/**
 * A chat message component that displays a message with a timestamp and an icon.
 *
 * @param {Object} props - The properties for the component.
 */
const Message = (props) => {
  const { id, createdAt, text, ai = false, selected } = props.message;

  return (
    <div
      key={id}
      className={`flex items-end my-2 gap-2 ${
        ai ? 'flex-row-reverse justify-end' : 'flex-row justify-end'
      }`}>
      {selected === 'DALL·E' && ai ? (
        <Image url={text} />
      ) : (
        <div
          className={` w-screen overflow-hidden chat ${
            ai ? 'chat-start' : 'chat-end'
          }`}>
          <div className='chat-bubble text-neutral-content'>
            <Markdown markdownText={text} />
            <div className={`${ai ? 'text-left' : 'text-right'} text-xs`}>
              {moment(createdAt).calendar()}
            </div>
          </div>
        </div>
      )}

      <div className='avatar'>
        <div className='w-8 border rounded-full border-slate-400'>
          {ai ? (
            <SiSendinblue className='w-6 h-full m-auto'/>
            ) : (
            <PiCodesandboxLogo  className='w-6 h-full m-auto'/>
          )}
        </div>
      </div>
    </div>
  );
};

export default Message;

Message.propTypes = {
  message: PropTypes.shape({
    id: PropTypes.number.isRequired,
    createdAt: PropTypes.number.isRequired,
    text: PropTypes.string,
    ai: PropTypes.bool,
    selected: PropTypes.string,
  }).isRequired,
};
