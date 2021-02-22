import React, { useState, useEffect } from 'react';
import './sidebar.css';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import CreateIcon from '@material-ui/icons/Create';
import SideBarOption from './SideBarOption';
import InsertCommentIcon from '@material-ui/icons/InsertComment';
import InboxIcon from '@material-ui/icons/Inbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import FileCopyIcon from '@material-ui/icons/FileCopy';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import AppsIcon from '@material-ui/icons/Apps';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import AddIcon from '@material-ui/icons/Add';
import db from '../firebase';
import { useStateValue } from '../StateProvider';
const SideBar = () => {
	const [channels, setChannels] = useState([]);
	const [{ user }] = useStateValue();

	useEffect(() => {
		db.collection('rooms').onSnapshot((snapshot) =>
			setChannels(
				snapshot.docs.map((doc) => ({
					id: doc.id,
					name: doc.data().name,
				}))
			)
		);
	}, []);
	return (
		<div className='sidebar'>
			<div className='sidebar_header'>
				<div className='sidebar_info'>
					<h2>Raghav kumar</h2>
					<h3>
						<FiberManualRecordIcon />
						{user?.displayName}
					</h3>
				</div>
				<CreateIcon />
			</div>
			<SideBarOption Icon={InsertCommentIcon} title={'Threads'} />
			<SideBarOption Icon={InboxIcon} title={'Mentions & reactions'} />
			<SideBarOption Icon={DraftsIcon} title={'Saved items'} />
			<SideBarOption Icon={BookmarkBorderIcon} title={'Channel browser'} />
			<SideBarOption Icon={PeopleAltIcon} title={'People & user group'} />
			<SideBarOption Icon={AppsIcon} title={'Apps'} />
			<SideBarOption Icon={FileCopyIcon} title={'File browser'} />
			<SideBarOption Icon={ExpandLessIcon} title={'Show less'} />
			<hr />
			<SideBarOption Icon={ExpandMoreIcon} title={'Channels'} />
			<hr />
			<SideBarOption
				Icon={AddIcon}
				addChannelOption={'add'}
				title={'Add Channel'}
			/>
			{channels.map((channel) => (
				<SideBarOption title={channel.name} id={channel.id} />
			))}
		</div>
	);
};

export default SideBar;
