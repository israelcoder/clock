import Clock from "@/components/Clock";

export default function clock() {
  return (
    <div class="m-auto h-screen p-0 bg-[#141414]" >
      <div class="m-auto flex text-center w-[95%] h-[100%] overflow-x-hidden overflow-y-hidden ">
        <div class="w-[90%] h-[90%] flex m-auto  ">
          <Clock/>
        </div>
      </div>
    </div>
    
  )
}

