import Clock from "../../components/Clock";

export default function clock(){
    return (
        <div class="m-auto flex justify-center items-center h-screen bg-[#141414]">
            <div class=" m-auto flex justify-center text-center w-[90%] h-[100%] overflow-x-hidden overflow-y-hidden">
                <h1>opa</h1>
                <Clock/>
            </div>
        </div>
    )
}