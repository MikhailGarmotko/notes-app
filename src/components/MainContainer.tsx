import { Notes } from "./Notes/Notes"
import { Summary } from "./Summary/Summary"

export const MainContainer:React.FC = ():JSX.Element => {
    return (
        <div >
            <Notes />
            <Summary />
        </div>
    )
 }