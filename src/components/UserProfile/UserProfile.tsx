import React from "react"
import User from "../../types/User"
import { Image } from "./styles"

interface IUserProfileProps {
	user: User
}

const UserProfile = ({ user }: IUserProfileProps) => {
	return (
		<div>
			<Image src={user.avatar_url} alt={user.login} />
		</div>
	)
}

export default UserProfile
