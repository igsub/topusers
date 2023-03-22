import React from "react"
import User from "../../types/User"
import { BackButton, Title, TopbarContainer } from "./styles"

interface ITopbarProps {
	showBack: boolean
	setSelected: (user: User | null) => void
}

const Topbar = ({ showBack, setSelected }: ITopbarProps) => {
	return (
		<TopbarContainer>
			{showBack ? <BackButton onClick={() => setSelected(null)}>{`< Back`}</BackButton> : null}
			<Title>Home</Title>
		</TopbarContainer>
	)
}

export default Topbar
