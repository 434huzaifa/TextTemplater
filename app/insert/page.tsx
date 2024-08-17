'use client'
import { Button, Input, Tag } from "antd"
import { IoIosAddCircle } from "react-icons/io";
export default function Page() {
  return (
    <>
      <div className="mt-5 p-1 flex gap-2 justify-center items-top ">
        <Input.TextArea placeholder="$[variable name]">
        </Input.TextArea>
        <div className="w-[50%] flex flex-col gap-3">
          <Input placeholder="Title" size="large"></Input>
          <div className="border p-1 rounded">
            <Tag closeIcon onClose={()=>{console.log("Huzaifa")}}>Huzaifa</Tag>
            <Tag closeIcon onClose={()=>{console.log("Huzaifa")}}>Huzaifa</Tag>
            <Tag closeIcon onClose={()=>{console.log("Huzaifa")}}>Huzaifa</Tag>
          </div>
          <Input placeholder="Variable Name" size="large" suffix={<IoIosAddCircle className="text-3xl" />}></Input>
        </div>
      </div>
      <div className="flex justify-end gap-5 mt-3">
        <Button size="large" className="px-5 bg-red-300 font-semibold text-red-800" type="primary">Clear</Button>
        <Button size="large" className="px-5 bg-green-300 font-semibold text-green-800" type="primary">Add</Button>
      </div>
    </>
  )
}