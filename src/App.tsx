import "./App.css"
import Topbar from "./components/Topbar/Topbar"
import Home from "./components/Home/Home"
import { useState } from "react"
import User from "./types/User"
import UserProfile from "./components/UserProfile/UserProfile"

function App() {
	const [selectedUser, setSelectedUser] = useState<User | null>(null)

	return (
		<div>
			<Topbar showBack={!!selectedUser} setSelected={setSelectedUser} />
			{selectedUser ? <UserProfile user={selectedUser} /> : <Home setSelectedUser={setSelectedUser} />}
		</div>
	)
}

export default App
