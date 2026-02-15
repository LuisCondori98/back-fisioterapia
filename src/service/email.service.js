import { Resend } from "resend"

const resend = new Resend("re_jGH48hvZ_QEYBANtYaBDzPoXxBQ2dnm8z")

export const sendEmail = async (to, subject, html) => {

    return await resend.emails.send({
        from: "Centro Fisioterapia Vivir en movimiento <vivirenmovimiento@resend.dev>",
        to: to,
        subject,
        html
    })
}