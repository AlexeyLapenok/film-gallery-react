import { useState } from "react";
import App from "./App"

export function AppContainer() {
    const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem('isLoggedIn') === 'true');
    const [userName, setUserName] = useState(localStorage.getItem('userName'));
    return (
        <div>
            <App
                userName={userName}
                isLoggedIn={isLoggedIn}
                setIsLoggedIn={setIsLoggedIn}
                setUserName={setUserName}
            />
        </div>

    );
}
