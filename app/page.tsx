'use client'
import { Card, Spin } from "antd";
import axios from "axios";
import Link from "next/link";
import { useQuery } from "react-query";

export default function Home() {
  const queryData = useQuery({
    queryFn: async () => {
      const res = await axios.get("/api/texts")
      return res.data as { id: string, title: string }[]
    },
    queryKey: ['data']
  })
  return (
    <main className="mt-4">
      <Spin spinning={queryData.isLoading || queryData.isFetching || queryData.isRefetching}>
        <div className="flex flex-col">
          {
            queryData.data?.map((x, i) => (
              <Link key={x.id} href={`/${x.id}`}>
                <Card className="hover:scale-105 hover:cursor-pointer transition-all">
                  <p className="font-semibold text-xl" >{x.title}</p>
                </Card>
              </Link>
            ))
          }
        </div>
      </Spin>
    </main>
  );
}
