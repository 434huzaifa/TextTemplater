import { z } from "zod";


export const InsertRow=z.object({
    title:z.string(),
    template:z.string(),
    variable:z.string()
})