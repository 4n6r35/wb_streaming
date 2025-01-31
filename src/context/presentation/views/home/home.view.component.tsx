import { useCaseCurrentStreaming } from "../../../application/usecases/current-streaming/current-streaming.usecase";
import { CarrouselComponent } from "./components/carrousel.component";

export const HomeViewComponent = () => {
    const { synopsis } = useCaseCurrentStreaming();

    return (
        <>
            {/* <section className="w-full h-[65vh] grid place-content-center">
                <SynopsisComponent />
            </section> */}
            <section>
                <CarrouselComponent data={synopsis?.results} />
            </section>
        </>
    )
}