import Clock from "../../components/Clock";

 const MyPage = ()=>{
    return (
        <div class="m-auto flex justify-center items-center h-screen bg-[#141414]">
            <div class=" m-auto flex justify-center text-center w-[90%] h-[100%] overflow-x-hidden overflow-y-hidden">
                <Clock/>
            </div>
        </div>
    )
}
export default MyPage;