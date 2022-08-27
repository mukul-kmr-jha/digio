import './App.css';
import {useReducer} from "react";
import {userInitialState, userReducer} from "./store/reducers/user-reducer";
import {AppContext} from "./contexts/app.context";
import {RegistrationComponent} from "./components/registration";

function App() {
    const [state, dispatch] = useReducer(userReducer, userInitialState);

    return (
        <AppContext.Provider value={{state, dispatch}}>
            <div className="App">
                <RegistrationComponent />
            </div>
        </AppContext.Provider>
    );
}

export default App;
