import { useContext} from "react";

import { AppContext } from "./context";


const useAppContext = () => {
    const [state, dispatch] = useContext(AppContext);


    function updateFeed(feed) {
        dispatch((draft) => {
            draft.feed = feed;
        })
    }

    return {
        ...state,
        updateFeed
    };
};

export { useAppContext };