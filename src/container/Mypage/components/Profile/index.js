import { PROFILE_LIST } from 'constants/profile';
import { ProfileList, Item, Strong, Span } from './styled';

function Profile() {
	return (
		<ProfileList>
			{PROFILE_LIST.map((item, index) => {
				return (
					<Item key={index}>
						<Strong>{item.title}</Strong>
						<Span>{item.value}</Span>
					</Item>
				);
			})}
		</ProfileList>
	);
}

export default Profile;
