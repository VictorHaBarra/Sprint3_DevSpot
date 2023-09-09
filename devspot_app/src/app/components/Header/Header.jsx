import Logo from "./logo";
import NavIcon from "./nav-icon";
import PageBar from "./page-bar";

export default function(){
    return(
        <>
            <div className="w-96 h-28 relative flex-col justify-start items-start inline-flex">
                <div className="w-96 h-7 justify-between items-center gap-60 inline-flex">
                    <Logo/><NavIcon/>
                </div>
                <PageBar/>
            </div>
        </>
    )
}