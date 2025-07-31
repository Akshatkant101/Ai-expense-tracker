import { integer,numeric,pgTable,serial,varchar } from "drizzle-orm/pg-core";
// budget-schema
export const Budget=pgTable('budgets',{
    id:serial('id').primaryKey(),
    name:varchar('name').notNull(),
    amount:varchar('amount').notNull(),
    Icon:varchar('icon'),
    createdBy:varchar('createdBy').notNull()
})
// income budget
export const incomes=pgTable('Incomes',{
    id:serial('id').primaryKey(),
    name:varchar('name').notNull(),
    amount:varchar('amount').notNull(),
    Icon:varchar('icon'),
    createdBy:varchar('createdBy').notNull()
})
// expenses-schema
export const Expenses=pgTable('Expenses',{
    id:serial('id').primaryKey(),
    name:varchar('name').notNull(),
    amount:varchar('amount').notNull(),
    budgetId:integer('integer').references(()=>Budget.id),
    createdBy:varchar('createdBy').notNull()
})


