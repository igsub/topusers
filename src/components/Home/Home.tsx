import React, { useEffect, useState } from "react"
import User from "../../types/User"
import UserButton from "./components/UserButton/UserButton"
import { HomeSubtitle, HomeTitle, UsersButtonContainer } from "./styles"

interface IHomeProps {
	setSelectedUser: (user: User) => void
}

const Home = ({ setSelectedUser }: IHomeProps) => {
	const [users, setUsers] = useState([])

	useEffect(() => {
		fetch("https://api.github.com/users")
			.then((response) => response.json())
			.then((res) => setUsers(res))
			.catch((error) => console.log(error))
	}, [])

	return (
		<div>
			<HomeTitle>Top 5 GitHub Users</HomeTitle>
			<HomeSubtitle>Tap the username to see more information</HomeSubtitle>
			<UsersButtonContainer>
				{users.slice(0, 5).map((user) => (
					<UserButton user={user} onClick={() => setSelectedUser(user)} />
				))}
			</UsersButtonContainer>
		</div>
	)
}

export default Home
