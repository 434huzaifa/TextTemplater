'use client'
import { Button, Form, Input, Tag } from "antd"
import {useState } from "react";
import { FaPlus } from "react-icons/fa";
export default function Page() {
  const [tags, setTags] = useState<string[]>()
  const [tagsInput, setTagsInput] = useState<string>()
  function addClick() {
    console.log(tags?.length);
    if (tagsInput) {
      if (!tags || tags?.length == 0) {
        console.log("First");
        setTags([tagsInput])
      } else {
        console.log("2nd");
        setTags([...tags, tagsInput])
      }
      setTagsInput("")
    }
  }
  function TagsOnClocse(v: number) {
    tags?.splice(v, 1)
    setTags(tags)
  }
  function onFinish(v: any) {
    console.log(v);
    console.log(tags);
  }
  return (
    <>
      <Form onFinish={onFinish} className="border p-2 mt-5 rounded-lg flex gap-2">
        <div className="flex-1 flex gap-2 flex-col">
          <Form.Item name="title"><Input placeholder="Title" size="large" ></Input></Form.Item>
        <Form.Item
        name="template"
        >
        <Input.TextArea placeholder="$[variable name]"  size="large" autoSize={{minRows:14}}>
        </Input.TextArea>
        </Form.Item>
        </div>
        <div className="flex flex-col gap-2 min-w-[25%] max-w-[25%]">
        <div className="border p-1 min-h-[30vh]  rounded-lg">
          {
            tags?.map((x, index) => (
              <Tag key={index} className="mb-1 ml-1" closeIcon onClose={() => { TagsOnClocse(index) }}>{x}</Tag>
            ))
          }
        </div>
        <Input value={tagsInput} onChange={v => setTagsInput(v.currentTarget.value)} placeholder="Variable Name" size="large" suffix={<Button onClick={addClick}><FaPlus /></Button>}></Input>
        <Button size="large" className="px-5 bg-red-300 font-semibold text-red-800" type="primary">Clear</Button>
        <Button size="large" className="px-5 bg-green-300 font-semibold text-green-800" type="primary" htmlType="submit">Add</Button>
        </div>
      </Form>
    </>
  )
}