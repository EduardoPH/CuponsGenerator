import { notification } from "@/components/notification";

process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";

export async function getBearerToken() {
  try {
    console.log('Gerando token')
    const res = await fetch("https://mcdonalds-api.vercel.app/");
    const data = await res.json();
    return data.token;
  } catch (e) {
    notification('Erro ao gerar token', 'error');
  }
}