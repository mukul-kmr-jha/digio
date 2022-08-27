import {createContext} from "react";
import {IAppContextType} from "../interfaces/user-reducer.interface";

export const AppContext = createContext<IAppContextType>(null);
