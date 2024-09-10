'use client'
import { Button, Form, Input, Spin } from "antd";
import axios from "axios";
import ClipboardJS from "clipboard";
import { useState } from "react";
import { useQuery } from "react-query";


export default function Page({ params }: { params: { id: string } }) {
  const cp=new ClipboardJS("#copybtn")
  const [template, setTemplate] = useState('')
  const querySingleData = useQuery({
    queryFn: async () => {
      const res = await axios.get(`/api/texts/${params.id}`)
      setTemplate(res.data.template)
      return res.data as { id: string, uuid: string, variable: string[], template: string }
    }
  })

  function parseTemplate(key, value) {
    const escapedKey = key.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

    // Create the regex pattern
    const regex = new RegExp(`\\$\\{${escapedKey}\\}`, 'g');

    setTemplate(template.replace(regex, value))
  }
  function onFinish(values) {
    let counter=0
    for (const key in values) {
      if (Object.prototype.hasOwnProperty.call(values, key)) {
        const element = values[key];
        if (element) {
          counter++
          parseTemplate(key, element)
        }
      }
    }


  }
  return <div className="mt-4">
    <Spin spinning={querySingleData.isLoading || querySingleData.isFetching || querySingleData.isRefetching}>
      <Input.TextArea value={template} rows={20} id={`textarea${params.id}`}></Input.TextArea>
      <div className="mt-2 flex flex-col gap-3">
        <Form onFinish={onFinish}>
          {
            querySingleData.data?.variable.map((x, i) => {
              return (
                <Form.Item
                  key={i}
                  name={x}
                >
                  <Input key={i} required addonBefore={x} addonAfter={<Button htmlType="submit" size="small" type="text">Change</Button>}></Input>
                </Form.Item>
              )
            })
          }
        </Form>
          <Button size="large" type="primary" className="mb-2" id="copybtn"  data-clipboard-target={`#textarea${params.id}`} >Copy</Button>
      </div>

    </Spin>
  </div>
}