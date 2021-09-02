import usePageTitle from "../../core/hooks/usePageTitle"
import { DefaultLayout } from "../../layouts/Default";

export default function Home() {
    usePageTitle('Home')
    return (
        <DefaultLayout>
            <h1>Home</h1>
            <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore iure laborum voluptatibus, minus amet possimus doloribus obcaecati qui tempora ducimus dolorum, sunt, sequi nihil voluptatum? Necessitatibus iste debitis vel exercitationem!</div>
        </DefaultLayout>
    );
}