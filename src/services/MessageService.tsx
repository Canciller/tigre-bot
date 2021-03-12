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
      const res = await fetch(`${this.api}/question/`, {
        method: 'POST',
        body: JSON.stringify({
          content,
        }),
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      });

      const data = await res.json();

      return {
        text: data.answer,
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
