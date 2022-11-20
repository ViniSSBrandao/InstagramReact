import Usuario from "./Usuario"
import Sugestoes from "./Sugestoes"

export default function Sidebar(){
    return (
        <div class="sidebar">
            <Usuario />
            <Sugestoes />
        </div>
    );
}