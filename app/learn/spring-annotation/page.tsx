import SpringBootAnnotations from "../../components/learn/concepts/SpringBootAnnotations";
import {Metadata} from "next";

// app/page.js
export const metadata  : Metadata= {
    title: 'sinthujan | learning hub | Spring Boot Annotations',
    description: 'learn about spring boot annotations with me.',
};


const Page = () => {
    return (
        <div>
            <SpringBootAnnotations/>
        </div>
    )
}
export default Page
