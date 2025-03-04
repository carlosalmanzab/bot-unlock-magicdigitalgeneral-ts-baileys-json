import { addKeyword, EVENTS } from "@builderbot/bot";
import { binancepayFlow, pagoargentinaFlow, pagoBoliviaFlow, pagoBrasilFlow, pagoChileFlow, pagoEcuadorFlow, pagomexicoFlow, pagoNequiFlow, pagoPeruFlow, pagoQRFlow, pagoVenezuelaFlow } from "../../medios de pago/metodo-pago.flow";

const menuFlow = {
   "1": pagoNequiFlow,
   "2": pagoPeruFlow,
   "3": pagoBrasilFlow,
   "4": pagoVenezuelaFlow,
   "5": pagomexicoFlow,
   "6": pagoEcuadorFlow,
   "7": pagoChileFlow,
   "8": pagoargentinaFlow,
   "9": pagoBoliviaFlow,
   "b": binancepayFlow,
   "qr": pagoQRFlow
}


export const opcion2medioDePagoFlow = addKeyword(EVENTS.ACTION)
.addAnswer(['*escribe tu medio de pago*'])
.addAnswer([
'*MEDIOS DE PAGO*',
'1️⃣ 🇨🇴 NEQUI BAMCOLOMBIA DAVIPLATA',
'2️⃣ 🇵🇪-YAPE BCP',
'3️⃣ 🇧🇷-PIX',
'4️⃣ 🇻🇪-bs pago movil',
'5️⃣ 🇲🇽-BANCOMER OXXO',
'6️⃣ 🇪🇨-PICHINCHA',
'7️⃣ 🇨🇱-falabella',
'8️⃣ 🇦🇷-UALA',
'9️⃣ 🇧🇴-BNB tigo money',
'🅱️ binance pay',
'QR para obtener el pago por qr',
'Zelle',
'Skrill',
'Paypal solo verificado',
'Y personales',
'USDT',
'BTC', 
'Y MUCHO MAS',
'CONTACTO',
'WhatsApp',
'https://wa.me/573208127538',
],
{capture: true}, 
async (ctx, { fallBack, gotoFlow, provider, endFlow }) => {
    await provider.vendor.readMessages([ctx.key]);

    const flow = menuFlow[ctx.body.toLowerCase()];

    if (flow) return gotoFlow(flow);

    if (ctx.body.toLowerCase() === 'c') return endFlow();

    return fallBack('Escoge una de las opciones anteriores o escribe *c* para cancelar');
});