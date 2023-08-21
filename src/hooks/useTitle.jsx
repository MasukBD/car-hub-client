import { useEffect } from "react"

const useTitle = title => {
    useEffect(() => {
        document.title = `${title} - Car - Hub - Mechanic`;
    }, [title])
}

export default useTitle;