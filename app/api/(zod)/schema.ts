import { z } from "zod";


export const InsertRow=z.object({
    title:z.string().min(2),
    template:z.string(),
    variable:z.string().array()
})