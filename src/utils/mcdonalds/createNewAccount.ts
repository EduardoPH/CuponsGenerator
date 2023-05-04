import { notification } from "@/components/notification";
import { generateCpf } from "../generateCpf";
import { findEmails } from "../mailService/findEmails";
import { findVerificationCode } from "../mailService/findVerificationCode";
import { getEmail } from "../mailService/getEmail";
import { fetchAPI } from "./fetchApi";

export async function createNewAccount() {
  try {
    const { user, domain } = await getEmail();
    let email = user + '@' + domain
    await fetchAPI(email, 'Account1@', generateCpf())
    notification('Verificando email', 'info')
    for (let c = 0; c < 30; c++) {
      const response = await findEmails(user, domain)
      if (response.length > 0) {
        findVerificationCode(user, domain, response[0].id)
        break
      }
      await new Promise(resolve => setTimeout(resolve, 1000));
    }

    return {
      user,
      password: 'Account1@',
      domain
    }
  } catch(e) {
    return {
      error: 'Não foi possível gerar uma conta'
    }
  }
  
}