import React from "react"
import User from "../../../../types/User"
import { Button } from "./styles"

interface IUserButtonProps {
	user: User
	onClick: React.MouseEventHandler<HTMLButtonElement> | undefined
}

const UserButton = ({ user, onClick }: IUserButtonProps) => {
	return <Button onClick={onClick}>{user.login}</Button>
}

export default UserButton
