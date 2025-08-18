import { json, type RequestHandler } from "@sveltejs/kit";
import OpenAI from "openai";
import { OPENAI_API_KEY } from "$env/static/private";

const openai = new OpenAI({
  apiKey: OPENAI_API_KEY,
});

export const POST: RequestHandler = async ({ request }) => {
  const { base64 } = await request.json();

  const response = await openai.chat.completions.create({
    model: "gpt-4o-mini",
    messages: [
      {
        role: "user",
        content: [
          {
            type: "text",
            text: `In the given image there will be...:
            {
              "bookTitle": "Harry Potter and the Deathly Hallows",
              "author": "J.K. Rowling"
              }
              Please also make sure that you return an array, even if there is only one book visible on the image.`,
          },
          {
            type: "image_url",
            image_url: {
              url: `data:image/jpeg;base64,${base64}`,
              detail: "low",
            },
          },
        ],
      },
    ],
  });

  const bookArrayString = response.choices[0].message.content
    ?.replace(/```json|```/g, "")
    .trim();
  const bookArray = JSON.parse(bookArrayString || "");

  return json({ bookArray });
};
