function timeout(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

class MessageService {
  api: string;

  constructor() {
    this.api = '/api/v1';
  }

  async send(content: string) {
    try {
      const res = await fetch(`${this.api}/question`, {
        method: 'POST',
        body: JSON.stringify({
          content,
        }),
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      });

      if (res.status != 200) throw new Error();

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
