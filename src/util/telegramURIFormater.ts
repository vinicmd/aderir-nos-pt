
export const telegramURIFormater = ({
  name,
  telephone,
}: {name: string, telephone: string}): string => {
  const chatID = process.env.NEXT_PUBLIC_CHAT_ID;
  const telegramToken = process.env.NEXT_PUBLIC_TELEGRAM_BOT_TOKEN;

  const url = 'asdjaslj'
  const message = encodeURIComponent(
    `<b>Novo Cliente</b>\nOrigen: ${url}\n\n<b>Nome:</b> ${name}\n<b>Telemóvel:</b> ${telephone}`
  );
  const uri = `https://api.telegram.org/bot${telegramToken}/sendMessage?chat_id=${chatID}&text=${message}&parse_mode=html`;

  return uri;
};
