function timeout(ms: any) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

class MessageService {
  api: string;

  constructor() {
    this.api = 'https://tigre-bot-api.herokuapp.com/api/v1';
  }

  async send(content: string) {
    try {
      const res = await fetch(`${this.api}/question`, {
        method: 'POST',
        body: JSON.stringify({
          content,
        }),
      });

      console.log(res);

      await timeout(2000);

      return {
        text: 'RESPONSE',
        direction: 'LEFT',
      };
    } catch (err) {
      return {
        text: 'Ha ocurrido un problema, intentelo de nuevo mas tarde.',
        level: 'ERROR',
        direction: 'LEFT',
      };
    }
  }
}

export default new MessageService();
