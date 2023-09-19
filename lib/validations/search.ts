"use client";

import * as z from "zod";

export const formSchema = z.object({
  search: z.string().min(2),
});
