import { InferInsertModel, InferModelFromColumns, InferSelectModel } from "drizzle-orm";
import { text, integer, sqliteTable } from "drizzle-orm/sqlite-core";
import { v4 } from "uuid";

const texts = sqliteTable("Texts", {
    id: integer("id").primaryKey(),
    template: text("template"),
    uuid: text("uuid").default(v4()),
    variable: text("variable", { mode: "json" }).$type<string[]>(),
    title: text("title"),
  });

export type Texts=InferSelectModel<typeof texts>
export type InsertTexts=InferInsertModel<typeof texts>
  