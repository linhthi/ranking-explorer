import { useContext} from "react";

import { AppContext } from "./context";


const useAppContext = () => {
    const [state, dispatch] = useContext(AppContext);


    function updateFeed(feed) {
        dispatch((draft) => {
            draft.feed = feed;
        })
    }

    function updateListFeed(listFeed) {
        dispatch((draft)  => {
            draft.listFeed = listFeed;
        })
    }

    return {
        ...state,
        updateFeed,
        updateListFeed,
    };
};

export { useAppContext };