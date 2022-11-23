import { useEffect } from "react"

const useTitle = title => {

    useEffect(() => {
        document.title = `${title} - Mommy's Cloud Kitchen`;
    }, [title])
};

export default useTitle;