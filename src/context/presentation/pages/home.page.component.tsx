import { NavbarComponent } from "../../shared/components/navbar.component"
import { HomeViewComponent } from "../views/home/home.view.component"

export const HomePageComponent = () => {
    return (
        <>
            <NavbarComponent />
            <section>
                <HomeViewComponent />
            </section>
        </>
    )
}