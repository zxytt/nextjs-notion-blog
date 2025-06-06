import { Client } from '@notionhq/client';

const notion = new Client({
  auth: process.env.NOTION_API_KEY,
});

export const getNotionData = async () => {
  try {
    const response = await notion.databases.query({
      database_id: process.env.NOTION_DATABASE_ID!,
    });
    return response.results;
  } catch (error) {
    console.error('Failed to fetch data from Notion:', error);
    return [];
  }
};
