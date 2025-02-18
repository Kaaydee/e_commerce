import Airtable from "airtable";

const base = new Airtable({
  apiKey: process.env.NEXT_PUBLIC_AIRTABLE_ACCESS_TOKEN, // Lấy từ biến môi trường
}).base(process.env.NEXT_PUBLIC_AIRTABLE_BASE_ID || "");

export default base;
