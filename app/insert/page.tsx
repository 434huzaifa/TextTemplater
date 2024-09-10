'use client'
import { Button, Form, Input, Spin } from "antd"
import { useForm } from "antd/es/form/Form";
import axios, { AxiosError } from "axios";
import { useMutation } from "react-query";
export default function Page() {
  const [form] = useForm()

  function extractVariableNames(template: string) {
    const regex = /\${([^}]*)}/g;
    let match;
    const uniqueVariables = new Set();

    while ((match = regex.exec(template)) !== null) {
      uniqueVariables.add(match[1].trim());
    }

    return Array.from(uniqueVariables);
  }
  const mutationPostData = useMutation({
    mutationFn: async (data) => {
      const result = await axios.post("/api/texts/", data)
      return result.data
    },
    onError:(axiosError:AxiosError)=>{
      console.log(axiosError.response?.data?.msg);
    }
  })
  async function onFinish(v: any) {
    v.variable = extractVariableNames(v.template)
    await mutationPostData.mutateAsync(v)
    
  }
  return (
    <>
      <Spin spinning={mutationPostData.isLoading}>
        <Form form={form} onFinish={onFinish} className="border p-2 mt-5 rounded-lg flex gap-2">
          <div className="flex-1 flex gap-2 flex-col">
            <Form.Item name="title" rules={[{min:2},{required:true}]}><Input placeholder="Title" size="large" ></Input></Form.Item>
            <Form.Item
              name="template"
              required
              rules={[{min:4},{required:true}]}
            >
              <Input.TextArea  placeholder="$[variable name]" size="large" autoSize={{ minRows: 14 }}>
              </Input.TextArea>
            </Form.Item>
          </div>
          <div className="flex flex-col gap-2 min-w-[25%] max-w-[25%]">
            <Button size="large" className="px-5 bg-red-300 font-semibold text-red-800" type="primary" onClick={() => {
              form.resetFields()
            }}>Clear</Button>
            <Button size="large" className="px-5 bg-green-300 font-semibold text-green-800" type="primary" htmlType="submit">Add</Button>
          </div>
        </Form>
      </Spin>
    </>
  )
}
