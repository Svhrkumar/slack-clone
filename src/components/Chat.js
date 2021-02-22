import React, { useState, useEffect } from 'react';
import './chat.css';
import { useParams } from 'react-router-dom';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import db from '../firebase';
import Message from './Message';
import ChatInput from './ChatInput';
const Chat = () => {
	const { roomId } = useParams();
	const [roomDetails, setRoomDetails] = useState(null);
	const [roomMessages, setRoomMessages] = useState([]);
	useEffect(() => {
		if (roomId) {
			db.collection('rooms')
				.doc(roomId)
				.onSnapshot((snapshot) => setRoomDetails(snapshot.data()));
		}
	}, [roomId]);
	db.collection('rooms')
		.doc(roomId)
		.collection('messages')
		.orderBy('timestamp', 'asc')
		.onSnapshot((snapshot) =>
			setRoomMessages(snapshot.docs.map((doc) => doc.data()))
		);

	console.log(roomDetails);
	console.log('messages------------->', roomMessages);
	return (
		<div className='chat'>
			<div className='chat_header'>
				<div className='chatheader_left'>
					<h4 className='chat_channelname'>
						<strong>#{roomDetails?.name}</strong>
						<StarBorderIcon />
					</h4>
				</div>
				<div className='chatheader_right'>
					<p>
						<InfoOutlinedIcon />
						Details
					</p>
				</div>
			</div>
			<div className='chat_messages'>
				{roomMessages.map(({ message, timestamp, user, userImage }) => (
					<Message
						message={message}
						timestamp={timestamp}
						user={user}
						userImage={userImage}
					/>
				))}
			</div>
			{roomDetails ? console.log(roomDetails) : null}
			<ChatInput channelName={roomDetails?.name} channelId={roomId} />
		</div>
	);
};
{
	/*continue at 2:33:48 */
}
export default Chat;
