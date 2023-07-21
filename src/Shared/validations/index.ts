// formValidation.ts

import * as z from "zod";

export const formSchema = z.object({
  startdate: z
    .string()
    .refine((value) => {
      const dateRegex = /^\d{4}\/\d{2}$/;
      return dateRegex.test(value);
    }, "Invalid date format. Use the format 'YYYY/MM'.")
    .refine((value) => {
      const [year, month] = value.split("/").map(Number);
      const currentDate = new Date();
      const currentYear = currentDate.getFullYear();
      return year <= currentYear;
    }, "The date cannot be in the future.")
    .refine((value) => {
      const [, month] = value.split("/").map(Number);
      return month && month <= 12;
    }, "Month cannot be greater than 12."),
  enddate: z
    .string()
    .refine((value) => {
      const dateRegex = /^\d{4}\/\d{2}$/;
      return dateRegex.test(value);
    }, "Invalid date format. Use the format 'YYYY/MM'.")
    .refine((value) => {
      const [year, month] = value.split("/").map(Number);
      const currentDate = new Date();
      const currentYear = currentDate.getFullYear();
      return year <= currentYear;
    }, "The date cannot be in the future.")
    .refine((value) => {
      const [, month] = value.split("/").map(Number);
      return month && month <= 12;
    }, "Month cannot be greater than 12."),
  destination: z.string().max(31, "maximum 31 characters allowed"),
  length: z.string().max(6, "maximum 6 characters allowed."),
  business: z.string().max(31, "maximum 31 characters allowed"),
});
