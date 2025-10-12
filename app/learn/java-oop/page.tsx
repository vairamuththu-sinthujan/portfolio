import {Metadata} from "next";
import JavaOops from "../../components/learn/concepts/JavaOops";

export const metadata  : Metadata= {
    title: 'sinthujan | learning hub | Java OOP Concepts',
    description: 'learn about Java OOP concepts with me.',
};

const Page = () => {
    return (
        <div>
            <JavaOops/>
        </div>
    )
}
export default Page
