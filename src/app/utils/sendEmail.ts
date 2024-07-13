import nodemailer from 'nodemailer';
import config from '../config';
interface IEmailPayload {
  message: string;
  email: string;
  name: string;
}

const sendEmail = async (payload: IEmailPayload) => {
  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com.',
    port: 587,
    secure: false, // Use `true` for port 465, `false` for all other ports
    auth: {
      user: 'mashuq0068@gmail.com',
      pass: config.node_mailer_pass,
    },
  });
  await transporter.sendMail({
    from: `${payload?.email}`, // sender address
    to: 'mashuq0068@gmail.com', // list of receivers
    subject: `Message from your client ${payload?.name}`, // Subject line
    text: '', // plain text body
    html: `${payload?.message}`, // html body
  });
};

export default sendEmail;
