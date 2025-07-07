import { SENDGRID_API_KEY } from "$env/static/private";
import sgMail from "@sendgrid/mail";
import { json } from "@sveltejs/kit";

sgMail.setApiKey(SENDGRID_API_KEY);

export async function POST({ request }) {
  const { contactName, contactMail, informationAboutProject } =
    await request.json();

  if (!contactMail || !contactName || !informationAboutProject) {
    json({ message: "Could not send email. Missing data." }, { status: 400 });
  }

  const message = {
    to: "m.khalili7310@gmail.com",
    from: "m.khalili7310@gmail.com",
    subject: "Contact From on your portfolio",
    html: `Somebody used the contact form on your site. <br/>
    Name:${contactName},
    Email:${contactMail},
    Information about the project: ${informationAboutProject}`,
  };

  try {
    await sgMail.send(message);
    return json({ emailSentSuccessfully: true });
  } catch (err) {
    return json({ err }, { status: 500 });
  }
}
